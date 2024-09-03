import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ProjectsController {
  static getProjects = async (req: Request, res: Response) => {
    try {
      res.json(await getEntries("landingPage", "ProjectsPage"));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getProjectById = async (req: Request, res: Response) => {
    try {
      const aux = await getEntries("landingPage", "ProjectsPage");
  
      console.log(aux);
  
      // Verifica si `aux` es un array o un objeto
      let sections: any[] = [];
      if (Array.isArray(aux)) {
        
        return res.status(500).json({ error: "Unexpected array response from getEntries" });
      } else {
        // Si `aux` es un objeto `Entry`
        sections = aux.fields.sections[0].fields.items;
      }
      
      /*********** */
      console.log(req.params);


      const project = sections.find(
        (section) => section.sys.id === req.params.projectId,
      );
  
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
    /************* */
      res.json(project.fields);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
