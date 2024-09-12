import type { NextFunction, Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import colors from "colors"; // Import the 'colors' module
import { auxiliarAsset, getJobs } from "../entity/job";

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

      
      res.json(await getJobs(jobId))
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  
  };


  static obtainEmail = async (req: MulterRequest, res: Response, next:NextFunction) => {
    try {
      const { email, firstName, lastName, applicantsList } = req.body;

      // console.log(req.body);

      if (!req.file) {
        return res.status(400).json({ error: "File is required" });
      }

      const file = req.file;
      console.log("File uploaded:", file);
      if(email || firstName || lastName || applicantsList || file) {
        res.status(200).json({ message: "Datos recibidos" });
      }
      auxiliarAsset(email, firstName, lastName, applicantsList, file)
      next()


    } catch (error) {
      console.error("Error during the process:", error);
      res.status(500).json({ error: error.message });
    }
  };
}



