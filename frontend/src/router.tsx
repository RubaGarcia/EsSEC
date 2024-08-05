
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import MainView from './views/MainView'
import ServicesView from './views/Services/ServicesView'
import AuditoryServiceView from './views/Services/AuditoryServiceView'
import ResourcesView from './views/Resources/ResourcesView'
import ProyectsGeneralView from './views/Proyects/ProjectsGeneralView'
import ContactView from './views/ContactView'
import ProductServiceView from './views/Services/ProductServiceView'
import ManteinanceServiceView from './views/Services/ManteinanceServiceView'
import JobsView from './views/JobsView'
import ProjectDetailView from './views/Proyects/ProjectDetailView'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
            <Route path="/" element={<MainView/>} />
            <Route path="/resources" element={<ResourcesView/>} />
            <Route path="/projects" element={<ProyectsGeneralView/>} />
            {/* TODO:Hacer una pag por cada proyecto */}
            {/* TODO:Hacer una pagina de proyecto con todo como componentes, habrá que hacerla sin reutilizar nada*/}
            <Route path="/projects/project" element={<ProjectDetailView/>} />

            
            <Route path="/services" element={<ServicesView/>} />
            <Route path="/services/auditories" element={<AuditoryServiceView/>} />
            <Route path="/services/product" element={<ProductServiceView/>} />
            <Route path="/services/manteinance" element={<ManteinanceServiceView/>} />
            <Route path="/services/improvement-plans" element={<div>improvement-plans</div>} />

            <Route path="/contact" element={<ContactView/>} />
            <Route path="/digital-kit" element={<div>digital-kit</div>} />
            {/* TODO:Hacer custom también, debería de ser rapido */}

            <Route path="/jobs" element={<JobsView/>} />
            {/* TODO:hacer pagina de cada job en detalle */}

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
