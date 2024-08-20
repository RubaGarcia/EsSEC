import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createAsset, createPersonEntry } from "../config/contentfulClient";
import { Multer } from "multer";

interface MulterRequest extends Request {
  file: Express.Multer.File; // Multer agrega la propiedad `file` aquí
}

export class JobsController {
  static getGeneral = async (req: Request, res: Response) => {
    try {
      const entries = await getEntries("landingPage");
      // const fields = entries.map((entry) => entry.fields)
      const aux = entries.find(
        (entry) => entry.fields.internalTitle === "jobs",
      );
      res.json(aux);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getJob = async (req: Request, res: Response) => {
    // res.send('Job with id ' + req.params.JobId);
    try {
      const entries = await getEntries("job");
      // const fields = entries.map((entry) => entry.fields)
      //TODO:filter by the id element of the job, if the id is true return the job
      const job = entries.find((entry) => entry.sys.id === req.params.JobId);
      res.json(job.fields);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static obtainEmail = async (req: MulterRequest, res: Response) => {
    try {
      const { email } = req.body;

      if (!req.file) {
        return res.status(400).json({ error: "File is required" });
      }

      const file = req.file;
      console.log("File uploaded:", file);

      const cvAssetId = await createAsset({
        fileName: file.originalname,
        fileContentType: file.mimetype,
        filePath: file.path,
      });

      console.log("CV Asset created with ID:", cvAssetId);

      const personEntryId = await createPersonEntry({
        fullName: "John Doe",
        email: email,
        cvAssetId: cvAssetId,
      });

      console.log("Person entry created with ID:", personEntryId);

      res.status(200).json({ personEntryId });
    } catch (error) {
      console.error("Error during the process:", error);
      res.status(500).json({ error: "Something went wrong" });
    }
  };
}
