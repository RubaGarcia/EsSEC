
import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";


export class JobsController{
    static getGeneral = async (req: Request, res: Response) => {
        try {
            res.json(await getEntries("landingPage","jobs"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    };

    static getJob = async (req: Request, res: Response) => {
        // res.send('Job with id ' + req.params.JobId);
        try {
            const entries = await getEntries("job");
            // const fields = entries.map((entry) => entry.fields)
            //TODO:filter by the id element of the job, if the id is true return the job
            const job = entries.find((entry) => entry.sys.id === req.params.JobId);
            res.json(job.fields);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    };

    static obtainEmail = async (req: Request, res: Response) => {
        //toma de parmetros por body el email y el CV
        res.send('Job with id ' + req.params.jobId + ' updated');
    };
}

