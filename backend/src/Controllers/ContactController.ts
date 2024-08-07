import type { Request, Response } from "express";




export class ContactController {
    static index =  async(req: Request, res: Response)=> {
        res.send('Contact General');
    }
}




