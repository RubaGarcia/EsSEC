import { Router } from "express";
import { ResourcesController } from "../Controllers/ResourcesController";



const router = Router()

/**
 * @swagger
 * /api/resources:
 *      get:
 *          summary: Get the elements of the resources page
 *          tags:
 *              - Resources
 *          description: Return a JSON with contentful elements related to the resources of the page
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
router.get('/',ResourcesController.getGeneral)

export default router