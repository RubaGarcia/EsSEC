import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";

export class ContactController {
  static index = async (req: Request, res: Response) => {
    try {
      const entries = await getEntries("landingPage");
      // const fields = entries.map((entry) => entry.fields)
      const aux = entries.find(
        (entry) => entry.fields.internalTitle === "contactPage",
      );
      console.log(aux);
      res.json(aux);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
