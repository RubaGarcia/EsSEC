import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ProjectsController{
    static getProjects = async (req: Request, res: Response)=>{
        // res.send('Projects General');
        try {
            const entries = await getEntries("landingPage");
            // const fields = entries.map((entry) => entry.fields)
            const aux = entries.find((entry) => entry.fields.internalTitle === "ProjectsPage")
            res.json(aux);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }


    }

    static getProjectById = async (req: Request, res: Response) => {
        res.send('Project with id ' + req.params.projectId);
    }
}