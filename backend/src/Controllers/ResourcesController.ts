import type { Request, Response } from "express";

export class ResourcesController {

    static getGeneral = async (req: Request, res: Response)=> {
        res.send('Resources General');
    }

}