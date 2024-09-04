import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createPersonEntry } from "../config/contentfulClient";

export class ServicesController {
    static index= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage","ServicesPage"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static auditories= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "auditories"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static products= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "productWebPage"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }

    }

    static manteinance= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "manteinance"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

    static improvementPlans= async (req: Request, res: Response)=> {
        try {
            res.json(await getEntries("landingPage", "improvementPlans"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }


    static getDigitalKit=async(req: Request, res: Response) => {
      try {
          res.json(await getEntries("landingPage", "DigitalKit"));
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
  }

  static postDigitalKit=async(req: Request, res: Response) => {
    try {
      // console.log(req.body)
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
