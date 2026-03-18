-- =======================================================
-- NexIA_PDCA — Migración Supabase
-- Schema: pdca  (independiente, multi-app)
-- RLS habilitado: cada usuario ve solo SUS datos
-- Tablas: profiles + projects (con fases en JSONB)
-- =======================================================

-- 1. Crear schema
CREATE SCHEMA IF NOT EXISTS pdca;

-- 2. Extensiones
CREATE EXTENSION IF NOT EXISTS "pgcrypto" SCHEMA extensions;

-- -------------------------------------------------------
-- FUNCIÓN: updated_at automático
-- -------------------------------------------------------
CREATE OR REPLACE FUNCTION pdca.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- -------------------------------------------------------
-- TABLA: profiles (perfil extendido — SaaS-ready)
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS pdca.profiles (
  id           UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name    TEXT,
  company      TEXT,
  role         TEXT NOT NULL DEFAULT 'analyst',
  -- role values: 'admin' | 'analyst' | 'viewer'
  avatar_url   TEXT,
  plan         TEXT NOT NULL DEFAULT 'free',
  -- plan values: 'free' | 'pro' | 'enterprise'
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE pdca.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profile_owner_all" ON pdca.profiles
  FOR ALL USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profile_read_by_authenticated" ON pdca.profiles
  FOR SELECT USING (auth.role() = 'authenticated');

-- Trigger: crear perfil vacío automáticamente al registrarse
CREATE OR REPLACE FUNCTION pdca.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO pdca.profiles (id, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created_pdca ON auth.users;
CREATE TRIGGER on_auth_user_created_pdca
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION pdca.handle_new_user();

-- Backfill: crear perfil para usuarios ya existentes
INSERT INTO pdca.profiles (id, full_name)
SELECT
  id,
  split_part(email, '@', 1)
FROM auth.users
ON CONFLICT (id) DO NOTHING;

-- -------------------------------------------------------
-- TABLA: projects
-- Cada proyecto contiene las 4 fases PDCA en columnas JSONB.
-- Esto permite persistir el estado complejo de la app
-- sin necesidad de tablas relacionales por sub-entidad.
-- -------------------------------------------------------
CREATE TABLE IF NOT EXISTS pdca.projects (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  description  TEXT DEFAULT '',
  status       TEXT NOT NULL DEFAULT 'plan',
  -- status values: 'plan' | 'do' | 'check' | 'act'

  -- PDCA phase data stored as JSONB
  plan_data    JSONB NOT NULL DEFAULT '{
    "problem": "",
    "whys": ["", "", "", "", ""],
    "ishikawa": {
      "manoDeObra": [], "maquinaria": [], "metodo": [],
      "material": [], "medioAmbiente": [], "medicion": []
    },
    "smartObjectives": [],
    "actionPlan": [],
    "completed": false
  }'::jsonb,

  do_data      JSONB NOT NULL DEFAULT '{
    "actionStatus": {},
    "metrics": [],
    "observations": [],
    "completed": false
  }'::jsonb,

  check_data   JSONB NOT NULL DEFAULT '{
    "analysis": "",
    "objectivesMet": [],
    "lessonsLearned": [],
    "completed": false
  }'::jsonb,

  act_data     JSONB NOT NULL DEFAULT '{
    "decision": "",
    "standardProcedures": [],
    "adjustments": [],
    "cycleHistory": [],
    "completed": false
  }'::jsonb,

  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE pdca.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_own_projects" ON pdca.projects
  FOR ALL USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- -------------------------------------------------------
-- Triggers: updated_at automático
-- -------------------------------------------------------
DO $$
DECLARE
  t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['profiles','projects'] LOOP
    EXECUTE format(
      'DROP TRIGGER IF EXISTS trg_updated_at ON pdca.%I;
       CREATE TRIGGER trg_updated_at
       BEFORE UPDATE ON pdca.%I
       FOR EACH ROW EXECUTE FUNCTION pdca.set_updated_at();',
      t, t
    );
  END LOOP;
END;
$$;

-- -------------------------------------------------------
-- Permisos: exponer schema pdca en la API REST de Supabase
-- (Agregar también "pdca" en API > Extra Search Path)
-- -------------------------------------------------------
GRANT USAGE ON SCHEMA pdca TO anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA pdca TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA pdca TO authenticated;
GRANT SELECT ON ALL TABLES IN SCHEMA pdca TO anon;
GRANT EXECUTE ON FUNCTION pdca.handle_new_user() TO service_role;
