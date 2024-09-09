import type { NextFunction, Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import colors from "colors";
import { postLayout } from "../entity/layout";

export class LayoutController {
  static getGeneral = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      const header = await getEntries("header", locale);
      const footer = await getEntries("footer", locale);
      const layout = {
        header: Array.isArray(header)
          ? header.map((entry) => entry.fields)
          : [],
        footer: Array.isArray(footer)
          ? footer.map((entry) => entry.fields)
          : [],
      };

      res.json(layout);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static postLayout = async (req: Request, res: Response, next:NextFunction) => {
    console.log(colors.bgBlue(req.body.email));
    const email = req.body.email;
    try {
      res.status(200).json({ message: "Layout created" });
      await postLayout(email);
      next()
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
