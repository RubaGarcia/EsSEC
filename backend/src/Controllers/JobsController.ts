import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createAsset, createPersonEntry } from "../config/contentfulClient";

interface MulterRequest extends Request {
  file: Express.Multer.File; // Multer agrega la propiedad `file` aquí
}


export class JobsController{
    static getGeneral = async (req: Request, res: Response) => {
        try {
            res.json(await getEntries("landingPage","jobs"));
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    };

    static getJob = async (req: Request, res: Response) => {
      try {
        const entries = await getEntries("job");
    
        // Verifica si 'entries' es un array
        if (Array.isArray(entries)) {
          // Encuentra el trabajo que coincide con JobId
          const jobId = req.params.JobId;
          if (!jobId) {
            return res.status(400).json({ error: "JobId is required" });
          }
    
          const job = entries.find((entry) => entry.sys.id === jobId);
    
          if (!job) {
            return res.status(404).json({ error: "Job not found" });
          }
    
          return res.json(job.fields);
        } else {
          // Manejo del caso en el que 'entries' no es un array
          return res.status(500).json({ error: "Unexpected response format" });
        }
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
