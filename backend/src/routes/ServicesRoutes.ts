import { Router } from "express";

import { ServicesController } from "../Controllers/ServicesController"
import { handleInputErrors } from "../middleware/validation";
import { body } from "express-validator";



const router = Router()


router.get('/', ServicesController.index);

router.get('/auditories', ServicesController.auditories);

router.get('/products', ServicesController.products);

router.get('/manteinance', ServicesController.manteinance);

router.get('/improvement-plans', ServicesController.improvementPlans);

router.get('/digital-kit',ServicesController.getDigitalKit)

router.post('/digital-kit', 
    // body('email').isEmail().withMessage('Email is not valid'),
    // handleInputErrors,
    ServicesController.postDigitalKit
)

export default router