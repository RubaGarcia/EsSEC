import { Router } from "express";
import { JobsController } from "../Controllers/JobsController";
import { param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import upload from "../config/multer";

const router = Router();



router.get("/", JobsController.getGeneral);

router.get(
  "/:JobId",
  param("JobId").notEmpty().withMessage("JobId is required"),
  handleInputErrors,
  (req, res,next) =>{
    console.log("req.params", req.params);
    console.log("req.query", req.query);
    next();     
  },
  JobsController.getJob,
);

router.post(
  "/:JobId",
  // Multer para manejar la subida de un único archivo bajo el campo "file"
  upload.single("files"),
  // param("JobId").notEmpty().withMessage("JobId is required"),
  // body("email").isEmail().withMessage("Email is not valid"),
  // emailValidation,
  // handleInputErrors,
  // Controlador que maneja la creación del asset y la persona
  JobsController.obtainEmail
);

export default router;
