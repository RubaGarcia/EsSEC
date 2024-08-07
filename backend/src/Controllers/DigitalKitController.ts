import type { Request, Response } from "express";

export class DigitalKitController {

    static getGeneral=async(req: Request, res: Response) => {
        res.send('Digital Kit General');
    }

    static postDigitalKit=async(req: Request, res: Response) => {
        res.send('Digital Kit Post');
    }


}

