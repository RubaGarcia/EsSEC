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

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/home" />} />
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

          <Route path="/contact" element={<ContactView />} />
          <Route path="/digital-kit" element={<DKServiceView />} />

          <Route path="/jobs" element={<JobsView />} />

          <Route path="/jobs/job" element={<JobDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
