import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ServicesController {
    static index= async (req: Request, res: Response)=> {
        try {
            const entries = await getEntries("landingPage");
            // const fields = entries.map((entry) => entry.fields)
            const aux = entries.find((entry) => entry.fields.internalTitle === "ServicesPage")
            res.json(aux);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static auditories= async (req: Request, res: Response)=> {
        res.send('Auditories');
    }

    static products= async (req: Request, res: Response)=> {
        res.send('Products');
    }

    static manteinance= async (req: Request, res: Response)=> {
        res.send('Manteinance');
    }

    static improvementPlans= async (req: Request, res: Response)=> {
        res.send('Improvement Plans');
    }
}
