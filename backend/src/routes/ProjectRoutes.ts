import { Router } from "express";
import { ProjectsController } from "../Controllers/ProjectsController";
import { param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

router.get("/", ProjectsController.getProjects);

router.get(
  "/:projectId",
  param("projectId").notEmpty().withMessage("ProjectId is required"),
  handleInputErrors,
  ProjectsController.getProjectById,
);

export default router;
