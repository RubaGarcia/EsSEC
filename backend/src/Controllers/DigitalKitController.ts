import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createPersonEntry } from "../config/contentfulClient";

export class DigitalKitController {

    static getGeneral=async(req: Request, res: Response) => {
        try {
            res.json(await getEntries("landingPage", "DigitalKit"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static postDigitalKit=async(req: Request, res: Response) => {
      try {
        const id = await createPersonEntry({
        //   internalName: "John Doe 5",
          //fullName: "John Doe",
          email: req.body.email,
          // cvAssetId: "cvAssetId123", // Opcional
          // jobEntryId: "jobEntryId123", // Opcional
          // imageEntryId: "imageEntryId123", // Opcional
          // reviewEntryId: "reviewEntryId123", // Opcional
        })
        res.send("Persona creada: "+id)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    }


}

