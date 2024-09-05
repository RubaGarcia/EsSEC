import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ResourcesController {

    static getGeneral = async (req: Request, res: Response)=> {
      console.log(req.query); // Imprimir los parámetros de consulta (query params)
      const locale = req.query.locale as string || 'en-US'; // Obtener el parámetro 'locale' desde req.query
      console.log(locale)
        try {
          const data = await getEntries("landingPage","ResourcesPage", locale);
            res.status(200).json(data);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

}