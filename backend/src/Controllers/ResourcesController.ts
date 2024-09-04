import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ResourcesController {

    static getGeneral = async (req: Request, res: Response)=> {
        try {
          const data = await getEntries("landingPage","ResourcesPage");
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

}