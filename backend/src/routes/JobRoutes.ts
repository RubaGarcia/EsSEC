import { Router } from "express";
import { JobsController } from "../Controllers/JobsController";
import { body, param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.get("/", JobsController.getGeneral);

router.get(
  "/:JobId",
  param("JobId").notEmpty().withMessage("JobId is required"),
  handleInputErrors,
  JobsController.getJob,
);

router.post(
  "/:JobId",
  param("JobId").notEmpty().withMessage("JobId is required"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("pdf").isURL().withMessage("PDF is not valid"),//FIXME: Check if this is the correct validation
  handleInputErrors,
  JobsController.obtainEmail,
);

export default router;
