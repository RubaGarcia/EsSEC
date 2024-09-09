import type { Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import {
  createAsset,
  createPersonEntry,
  linkPersonJob,
  managementClient,
} from "../config/contentfulClient";
import colors from "colors"; // Import the 'colors' module

interface MulterRequest extends Request {
  file: Express.Multer.File; // Multer agrega la propiedad `file` aquí
}

export class JobsController {
  static getGeneral = async (req: Request, res: Response) => {
    try {
      console.log(req.query); // Imprimir los parámetros de consulta (query params)
      const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
      console.log(locale);
      res.json(await getEntries("landingPage", "jobs", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getJob = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log("El local en el controller es:" +locale);
    try {
      const entries = await getEntries("job", /* FIXME: locale */);
      console.log(entries);
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
      const { email, firstName, lastName, applicantsList } = req.body;

      console.log(req.body);

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
        fullName: `${firstName} ${lastName}`,
        email: email,
        cvAssetId: cvAssetId,
      });

      console.log(colors.bgWhite.black("Person entry created with ID:"), personEntryId);
      linkPersonJob(applicantsList, personEntryId);

      res.status(200).json({ personEntryId });
    } catch (error) {
      console.error("Error during the process:", error);
      res.status(500).json({ error: error.message });
    }
  };
}
