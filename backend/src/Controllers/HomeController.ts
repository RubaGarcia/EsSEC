import type { Request, Response } from "express";



export class HomeController{
    static getGeneral = async (req: Request, res: Response) => {
        res.send('Home General');
    };
}