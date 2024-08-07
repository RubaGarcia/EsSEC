import type { Request, Response } from "express";


export class LayoutController {


    static getGeneral = async (req: Request, res: Response) => {
        res.send('Layout General');
    };

    static postLayout = async (req: Request, res: Response) => {
        res.send('Layout Post');
    };
    
}