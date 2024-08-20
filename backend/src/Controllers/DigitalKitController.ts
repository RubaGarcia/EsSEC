import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class DigitalKitController {

    static getGeneral=async(req: Request, res: Response) => {
        try {
            res.json(await getEntries("landingPage", "DigitalKit"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static postDigitalKit=async(req: Request, res: Response) => {
        res.send('Digital Kit Post');
    }


}

