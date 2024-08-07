import { Router } from "express";
import { ContactController } from "../Controllers/ContactController";



const router = Router()

router.get('/',ContactController.index)


export default router