import { Router } from "express";
import { ContactController } from "../Controllers/ContactController";



const router = Router()

/**
 * @swagger
 * /api/contact:
 *      get:
 *          summary: Get the elements of the improvement plans page
 *          tags:
 *              - Contact
 *          description: Return a JSON with contentful elements related to improvement plans
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
router.get('/',ContactController.index)


export default router