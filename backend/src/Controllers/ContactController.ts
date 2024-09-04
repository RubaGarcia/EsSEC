import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ContactController {
  static index = async (req: Request, res: Response) => {
    try {
      const response = await getEntries("landingPage", "contactPage");
      res.json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
