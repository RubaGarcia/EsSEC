import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ProjectsController {
  static getProjects = async (req: Request, res: Response) => {
    try {
      res.json(await getEntries("landingPage","ProjectsPage"));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getProjectById = async (req: Request, res: Response) => {

    try {
      const aux = await getEntries("landingPage", "ProjectsPage");
      // const fields = entries.map((entry) => entry.fields)
      // const aux = entries.find((entry) => entry.fields.internalTitle === "ProjectsPage")
      // const project = entries.find((entry) => entry.fields.sections.fields.Items.id === req.params.ProjectId);
      // res.json(project.fields);

      // console.log(aux);


      if (!aux) {
        return res.status(404).json({ error: "ProjectsPage not found" });
      }

      // Aseguramos que aux.fields.sections es un array
      const sections = aux.fields.sections[0].fields.items

      // console.log(req.params.projectId);

      // console.log(sections);
    // Iteramos sobre las secciones para encontrar el ID del proyecto
    const project = sections.find((section) => section.sys.id === req.params.projectId)
    
      // console.log(project);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json(project.fields);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
