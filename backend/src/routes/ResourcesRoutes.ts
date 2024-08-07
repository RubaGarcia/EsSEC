import { Router } from "express";
import { ResourcesController } from "../Controllers/ResourcesController";



const router = Router()


router.get('/',ResourcesController.getGeneral)

export default router