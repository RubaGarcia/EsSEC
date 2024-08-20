import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ContactController {
  static index = async (req: Request, res: Response) => {
    try {
      res.json(await getEntries("landingPage", "contactPage"));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
