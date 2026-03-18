import { supabase } from './supabase';

// -------------------------------------------------------
// PROFILE
// -------------------------------------------------------
export async function getProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();
  if (error) throw error;
  return data;
}

export async function upsertProfile(updates) {
  const { data: { user } } = await supabase.auth.getUser();
  const { error } = await supabase
    .from('profiles')
    .upsert({ id: user.id, ...updates }, { onConflict: 'id' });
  if (error) throw error;
}

// -------------------------------------------------------
// PROJECTS
// -------------------------------------------------------
export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return data || [];
}

export async function createProject(project) {
  const { data: { user } } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from('projects')
    .insert({
      user_id: user.id,
      name: project.name,
      description: project.description || '',
      status: 'plan',
      plan_data: {
        problem: '',
        whys: ['', '', '', '', ''],
        ishikawa: { manoDeObra: [], maquinaria: [], metodo: [], material: [], medioAmbiente: [], medicion: [] },
        smartObjectives: [],
        actionPlan: [],
        completed: false,
      },
      do_data: { actionStatus: {}, metrics: [], observations: [], completed: false },
      check_data: { analysis: '', objectivesMet: [], lessonsLearned: [], completed: false },
      act_data: { decision: '', standardProcedures: [], adjustments: [], cycleHistory: [], completed: false },
    })
    .select()
    .single();
  if (error) throw error;
  return dbRowToProject(data);
}

export async function updateProject(id, updates) {
  const { error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', id);
  if (error) throw error;
}

export async function deleteProject(id) {
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) throw error;
}

// -------------------------------------------------------
// MAPPERS: DB row → App shape
// -------------------------------------------------------
export function dbRowToProject(row) {
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    status: row.status,
    createdAt: row.created_at,
    plan: row.plan_data,
    doPhase: row.do_data,
    checkPhase: row.check_data,
    actPhase: row.act_data,
  };
}

export function projectToDbRow(project) {
  return {
    name: project.name,
    description: project.description,
    status: project.status,
    plan_data: project.plan,
    do_data: project.doPhase,
    check_data: project.checkPhase,
    act_data: project.actPhase,
  };
}
