import { Router } from "express";
import multer from "multer";
import { JobsController } from "../Controllers/JobsController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

// Configuramos multer para almacenar los archivos subidos temporalmente en la carpeta 'uploads'
const upload = multer({ dest: "uploads" });

router.get("/", JobsController.getGeneral);

router.get(
  "/:JobId",
  param("JobId").notEmpty().withMessage("JobId is required"),
  handleInputErrors,
  JobsController.getJob,
);

router.post(
  "/:JobId",
  // Multer para manejar la subida de un único archivo bajo el campo "file"
  upload.single("files"),
  param("JobId").notEmpty().withMessage("JobId is required"),
  body("email").isEmail().withMessage("Email is not valid"),
  handleInputErrors,
  // Controlador que maneja la creación del asset y la persona
  JobsController.obtainEmail
);

export default router;
