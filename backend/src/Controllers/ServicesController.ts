import type { NextFunction, Request, Response } from "express";
import { getEntries } from "../contentful/contentfulAPI";
import { createPersonEntry } from "../config/contentfulClient";
import { addPerson, getView } from "../entity/services";
import { get } from "http";

export class ServicesController {
  static index = async (req: Request, res: Response) => {
    try {
      // console.log(req.query); // Imprimir los parámetros de consulta (query params)
      const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
      console.log(locale);
      res.json(await getEntries("landingPage", "ServicesPage", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static auditories = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      res.json(await getEntries("landingPage", "auditories", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static products = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      const page = await getEntries("landingPage", "productWebPage", locale)
      console.log(page)
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static manteinance = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      res.json(await getEntries("landingPage", "manteinance", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static improvementPlans = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      res.json(await getEntries("landingPage", "improvementPlans", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static getDigitalKit = async (req: Request, res: Response) => {
    console.log(req.query); // Imprimir los parámetros de consulta (query params)
    const locale = (req.query.locale as string) || "en-US"; // Obtener el parámetro 'locale' desde req.query
    console.log(locale);
    try {
      res.json(await getEntries("landingPage", "DigitalKit", locale));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  static postDigitalKit = async (req: Request, res: Response, next:NextFunction) => {
    try {
      // console.log(req.body)
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ error: "Email is required" });
      }
      res.status(200).json({ message: "Digital Kit email logged" });
      await addPerson(email);
      next()
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}
