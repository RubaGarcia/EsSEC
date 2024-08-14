import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class DigitalKitController {

    static getGeneral=async(req: Request, res: Response) => {
        try {
            const entries = await getEntries("landingPage");
            // const fields = entries.map((entry) => entry.fields)
            const aux = entries.find((entry) => entry.fields.internalTitle === "DigitalKit")
            res.json(aux);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static postDigitalKit=async(req: Request, res: Response) => {
        res.send('Digital Kit Post');
    }


}

