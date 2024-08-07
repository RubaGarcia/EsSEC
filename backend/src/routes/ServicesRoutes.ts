import { Router } from "express";

import { ServicesController } from "../Controllers/ServicesController"



const router = Router()


router.get('/', ServicesController.index);

router.get('/auditories', ServicesController.auditories);

router.get('/products', ServicesController.products);

router.get('/manteinance', ServicesController.manteinance);

router.get('/improvement-plans', ServicesController.improvementPlans);



export default router