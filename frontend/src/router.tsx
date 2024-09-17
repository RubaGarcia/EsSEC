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
import { Dictionary, URLtranslation } from "./types";

export default function Router() {

  let locale: "es" | "enUS"= "enUS"

  const translations: Dictionary<URLtranslation> = {
    "/": { enUS: "/", es: "/" },
    "/home": { enUS: "/home", es: "/inicio" },
    "/resources": { enUS: "/resources", es: "/recursos" },
    "/projects": { enUS: "/projects", es: "/proyectos" },
    "/projects/:projectId": {
      enUS: "/projects/:projectId",
      es: "/proyectos/:projectId",
    },
    "/services": { enUS: "/services", es: "/servicios" },
    "/services/auditories": {
      enUS: "/services/auditories",
      es: "/servicios/auditorias",
    },
    "/services/product": {
      enUS: "/services/product",
      es: "/servicios/producto",
    },
    "/services/manteinance": {
      enUS: "/services/manteinance",
      es: "/servicios/mantenimiento",
    },
    "/services/improvement-plans": {
      enUS: "/services/improvement-plans",
      es: "/servicios/planes-de-mejora",
    },
    "/services/digital-kit": {
      enUS: "/services/digital-kit",
      es: "/servicios/kit-digital",
    },
    "/contact": { enUS: "/contact", es: "/contacto" },
    "/jobs": { enUS: "/jobs", es: "/empleos" },
    "/jobs/:jobId": { enUS: "/jobs/:jobId", es: "/empleos/:jobId" },
  };


  console.log(translations["/"][locale]);
  console.log(translations["/home"][locale]);  

 

  return (
    <BrowserRouter>
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
    </BrowserRouter> 


  );
}

/* 
<BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/"  element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainView />} />
          <Route path="/resources" element={<ResourcesView />} />
          <Route path="/projects" element={<ProyectsGeneralView />} />
          <Route path="/projects/:projectId" element={<ProjectDetailView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route
            path="/services/auditories"
            element={<AuditoryServiceView />}
          />
          <Route path="/services/product" element={<ProductServiceView />} />
          <Route
            path="/services/manteinance"
            element={<ManteinanceServiceView />}
          />
          <Route
            path="/services/improvement-plans"
            element={<ImprovementPlansView />}
          />
          <Route path="/services/digital-kit" element={<DKServiceView />} />
          <Route path="/contact" element={<ContactView />} />
          <Route path="/jobs" element={<JobsView />} />
          <Route path="/jobs/:jobId" element={<JobDetailView />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    */
