import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";



export class HomeController{
    static getGeneral = async (req: Request, res: Response) => {
     
        try {
            res.json(await getEntries("landingPage","landingPage1"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }


    };
}