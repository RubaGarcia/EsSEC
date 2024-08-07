import { Router } from "express";
import { DigitalKitController } from "../Controllers/DigitalKitController";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";



const router = Router()

router.get('/',
    DigitalKitController.getGeneral
)

router.post('/', 
    body('email').isEmail().withMessage('Email is not valid'),
    handleInputErrors,
    DigitalKitController.postDigitalKit
)


export default router