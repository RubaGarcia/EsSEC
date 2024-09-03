import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createPersonEntry } from "../config/contentfulClient";

export class LayoutController {
  static getGeneral = async (req: Request, res: Response) => {
    try {
      const header = await getEntries("header");
      const footer = await getEntries("footer");
      const layout = {
        header: Array.isArray(header) ? header.map((entry) => entry.fields) : [],
        footer: Array.isArray(footer) ? footer.map((entry) => entry.fields) : [],
      };

      res.json(layout);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static postLayout = async (req: Request, res: Response) => {
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
