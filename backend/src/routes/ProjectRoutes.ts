import { Router } from "express";
import { ProjectsController } from "../Controllers/ProjectsController";
import { param } from "express-validator";
import { handleInputErrors } from "../middleware/validation";

const router = Router();

/**
 * @swagger
 * /api/projects:
 *      get:
 *          summary: Get all projects
 *          tags:
 *              - Projects
 *          description: Return a JSON with all projects
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                  
 *              500:
 *                  description: Internal Server Error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                  example:
 *                      error: "An error occurred"
 */
router.get("/", ProjectsController.getProjects);


/**
 * @swagger
 * /api/projects/{projectId}:
 *      get:
 *          summary: Get a project by its id
 *          tags:
 *              - Projects
 *          description: Return a JSON with the project that has the given id
 *          parameters:
 *              - in: path
 *                name: projectId
 *                required: true
 *                description: The id of the project
 *                schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                  
 *              500:
 *                  description: Internal Server Error
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                  example:
 *                      error: "An error occurred"
 */
router.get(
  "/:projectId",
  param("projectId").notEmpty().withMessage("ProjectId is required"),
  handleInputErrors,
  ProjectsController.getProjectById,
);

export default router;
