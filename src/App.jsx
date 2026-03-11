import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PlanPhase from './pages/PlanPhase';
import DoPhase from './pages/DoPhase';
import CheckPhase from './pages/CheckPhase';
import ActPhase from './pages/ActPhase';
import Dashboards from './pages/Dashboards';
import Manual from './pages/Manual';

export default function App() {
    return (
        <>
            <Sidebar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/plan" element={<PlanPhase />} />
                    <Route path="/do" element={<DoPhase />} />
                    <Route path="/check" element={<CheckPhase />} />
                    <Route path="/act" element={<ActPhase />} />
                    <Route path="/dashboards" element={<Dashboards />} />
                    <Route path="/manual" element={<Manual />} />
                </Routes>
            </main>
        </>
    );
}
