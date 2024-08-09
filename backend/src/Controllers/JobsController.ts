
import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";


export class JobsController{
    static getGeneral = async (req: Request, res: Response) => {
        res.send('Job General');
    };

    static getJob = async (req: Request, res: Response) => {
        // res.send('Job with id ' + req.params.JobId);
        try {
            const entries = await getEntries("job");
            // const fields = entries.map((entry) => entry.fields)
            const aux = entries.find((entry) => entry.fields.internalTitle === "landingPage1")
            res.json(entries);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    };

    static obtainEmail = async (req: Request, res: Response) => {
        //toma de parmetros por body el email y el CV
        res.send('Job with id ' + req.params.jobId + ' updated');
    };
}

