import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ContactController {
  static index = async (req: Request, res: Response) => {
    try {
      console.log(req.query); // Imprimir los parámetros de consulta (query params)
      const locale = req.query.locale as string || 'en-US'; // Obtener el parámetro 'locale' desde req.query
      console.log(locale)
      const response = await getEntries("landingPage", "contactPage", locale);
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
