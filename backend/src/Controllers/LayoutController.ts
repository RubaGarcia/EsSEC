import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";


export class LayoutController {


    static getGeneral = async (req: Request, res: Response) => {
        try {
            const header = await getEntries("header");
            const footer = await getEntries("footer");
            const layout = {
                header: header.map((entry) => entry.fields),
                footer: footer.map((entry) => entry.fields),
            
            }

            res.json(layout);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
        res.send('Layout General');
    };

    static postLayout = async (req: Request, res: Response) => {
        res.send('Layout Post');
    };
    
}