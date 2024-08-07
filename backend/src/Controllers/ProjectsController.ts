import type { Request, Response } from "express";

export class ProjectsController{
    static getProjects = async (req: Request, res: Response)=>{
        res.send('Projects General');
    }

    static getProjectById = async (req: Request, res: Response) => {
        res.send('Project with id ' + req.params.projectId);
    }
}