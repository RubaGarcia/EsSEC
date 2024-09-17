import { Dictionary, URLtranslation } from "../types";

export const translations: Dictionary<URLtranslation> = {
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
