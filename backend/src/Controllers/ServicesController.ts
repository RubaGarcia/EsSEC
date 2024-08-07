import type { Request, Response } from "express";

export class ServicesController {
    static index= async (req: Request, res: Response)=> {
        res.send('Services General');
    }

    static auditories= async (req: Request, res: Response)=> {
        res.send('Auditories');
    }

    static products= async (req: Request, res: Response)=> {
        res.send('Products');
    }

    static manteinance= async (req: Request, res: Response)=> {
        res.send('Manteinance');
    }

    static improvementPlans= async (req: Request, res: Response)=> {
        res.send('Improvement Plans');
    }
}
