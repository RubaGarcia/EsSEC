import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createPersonEntry } from "../config/contentfulClient";
import colors from "colors";

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

  static postLayout = async (req: Request, res: Response) => {
    console.log(colors.bgBlue(req.body.email));
    try {
      const id = await createPersonEntry({
        //   internalName: "John Doe 5",,
        email: req.body.email,
        // cvAssetId: "cvAssetId123", // Opcional
        // jobEntryId: "jobEntryId123", // Opcional
        // imageEntryId: "imageEntryId123", // Opcional
        // reviewEntryId: "reviewEntryId123", // Opcional
      });
      res.send("Persona creada: " + id);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
