import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ServicesController {
    static index= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage","ServicesPage"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static auditories= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "auditories"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static products= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "productWebPage"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static manteinance= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "manteinance"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static improvementPlans= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "improvementPlans"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}
