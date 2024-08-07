import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";



const router = Router()


router.get('/', 
    //TODO:Return data
    HomeController.getGeneral)


export default router