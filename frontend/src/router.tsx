import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import MainView from "./views/MainView";
import ServicesView from "./views/Services/ServicesView";
import AuditoryServiceView from "./views/Services/AuditoryServiceView";
import ResourcesView from "./views/Resources/ResourcesView";
import ProyectsGeneralView from "./views/Proyects/ProjectsGeneralView";
import ContactView from "./views/ContactView";
import ProductServiceView from "./views/Services/ProductServiceView";
import ManteinanceServiceView from "./views/Services/ManteinanceServiceView";
import JobsView from "./views/Jobs/JobsView";
import ProjectDetailView from "./views/Proyects/ProjectDetailView";
import JobDetailView from "./views/Jobs/JobDetailView";
import DKServiceView from "./views/Services/DKServiceView";
import ImprovementPlansView from "./views/Services/ImprovementPlansView";
import { translations } from "./helpers/localeDic";

export default function Router() {

  var esp="es"
  var en="en-US"

  return (

    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MainView locale={en}/>} />
        <Route path="/resources" element={<ResourcesView locale={en}/>} />
        <Route path="/projects" element={<ProyectsGeneralView locale={en}/>} />
        <Route path="/projects/:projectId" element={<ProjectDetailView locale={en}/>} />
        <Route path="/services" element={<ServicesView locale={en}/>} />
        <Route path="/services/auditories" element={<AuditoryServiceView locale={en}/>} />
        <Route path="/services/product" element={<ProductServiceView />} locale={en}/>
        <Route path="/services/manteinance" element={<ManteinanceServiceView locale={en}/>} />
        <Route path="/services/improvement-plans" element={<ImprovementPlansView locale={en}/>} />
        <Route path="/services/digital-kit" element={<DKServiceView locale={en}/>} />
        <Route path="/contact" element={<ContactView locale={en}/>} />
        <Route path="/jobs" element={<JobsView locale={en}/>} />
        <Route path="/jobs/:jobId" element={<JobDetailView locale={en}/>} />

        <Route path="/inicio" element={<MainView locale={esp}/>} />
        <Route path="/recursos" element={<ResourcesView locale={esp}/>} />
        <Route path="/proyectos" element={<ProyectsGeneralView locale={esp}/>} />
        <Route path="/proyectos/:projectId" element={<ProjectDetailView locale={esp}/>} />
        <Route path="/servicios" element={<ServicesView locale={esp}/>} />
        <Route path="/servicios/auditorias" element={<AuditoryServiceView locale={esp}/>} />
        <Route path="/servicios/producto" element={<ProductServiceView />} locale={esp}/>
        <Route path="/servicios/mantenimiento" element={<ManteinanceServiceView locale={esp}/>} />
        <Route path="/servicios/planes-de-mejora" element={<ImprovementPlansView locale={esp}/>} />
        <Route path="/servicios/kit-digital" element={<DKServiceView locale={esp}/>} />
        <Route path="/contacto" element={<ContactView locale={esp}/>} />
        <Route path="/empleos" element={<JobsView />} locale={esp}/>
        <Route path="/empleos/:jobId" element={<JobDetailView locale={esp}/>} />
      </Route>
    </Routes>
  </BrowserRouter>


   

  );
}

{/* <BrowserRouter>
<Routes>
  <Route element={<AppLayout />}>
    <Route path={translations["/"][locale]} element={<Navigate to={translations["/home"][locale]} />} />
    <Route path={translations["/home"][locale]} element={<MainView />} />
    <Route path={translations["/resources"][locale]} element={<ResourcesView />} />
    <Route path={translations["/projects"][locale]} element={<ProyectsGeneralView />} />
    <Route path={translations["/projects/:projectId"][locale]} element={<ProjectDetailView />} />
    <Route path={translations["/services"][locale]} element={<ServicesView />} />
    <Route path={translations["/services/auditories"][locale]} element={<AuditoryServiceView />} />
    <Route path={translations["/services/product"][locale]} element={<ProductServiceView />} />
    <Route path={translations["/services/manteinance"][locale]} element={<ManteinanceServiceView />} />
    <Route path={translations["/services/improvement-plans"][locale]} element={<ImprovementPlansView />} />
    <Route path={translations["/services/digital-kit"][locale]} element={<DKServiceView />} />
    <Route path={translations["/contact"][locale]} element={<ContactView />} />
    <Route path={translations["/jobs"][locale]} element={<JobsView />} />
    <Route path={translations["/jobs/:jobId"][locale]} element={<JobDetailView />} />
  </Route>
</Routes>
</BrowserRouter>  */}
