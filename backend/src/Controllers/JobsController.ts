
import type { Request, Response } from "express";


export class JobsController{
    static getGeneral = async (req: Request, res: Response) => {
        res.send('Job General');
    };

    static getJob = async (req: Request, res: Response) => {
        res.send('Job with id ' + req.params.JobId);
    };

    static obtainEmail = async (req: Request, res: Response) => {
        //toma de parmetros por body el email y el CV
        res.send('Job with id ' + req.params.jobId + ' updated');
    };
}

