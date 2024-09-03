/**
 * Represents the ServicesRoutes module.
 * @module ServicesRoutes
 */

import { Router } from "express";
import { ServicesController } from "../Controllers/ServicesController";
import { emailValidation } from "../middleware/email";

const router = Router();

/**
 * @swagger
 * /api/services:
 *      get:
 *          summary: Get the elements of the services page
 *          tags:
 *              - Services
 *          description: Return a JSON with the layout elements from contentful
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
router.get("/", ServicesController.index);

/**
 * @swagger
 * /api/services/auditories:
 *      get:
 *          summary: Get the elements of the auditories page
 *          tags:
 *              - Services
 *          description: Return a JSON with contentful elements
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
router.get("/auditories", ServicesController.auditories);

/**
 * @swagger
 * /api/services/products:
 *      get:
 *          summary: Get the elements of the products page
 *          tags:
 *              - Services
 *          description: Return a JSON with contentful elements related to products
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
router.get("/products", ServicesController.products);

/**
 * @swagger
 * /api/services/manteinance:
 *      get:
 *          summary: Get the elements of the maintenance page
 *          tags:
 *              - Services
 *          description: Return a JSON with contentful elements related to maintenance
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
router.get("/manteinance", ServicesController.manteinance);

/**
 * @swagger
 * /api/services/improvement-plans:
 *      get:
 *          summary: Get the elements of the improvement plans page
 *          tags:
 *              - Services
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
router.get("/improvement-plans", ServicesController.improvementPlans);

/**
 * @swagger
 * /api/services/digital-kit:
 *      get:
 *          summary: Get the digital kit details
 *          tags:
 *              - Services
 *          description: Return a JSON with contentful elements related to the digital kit
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
router.get("/digital-kit", ServicesController.getDigitalKit);

/**
 * @swagger
 * /api/services/digital-kit:
 *      post:
 *          summary: Submit an email to the digital kit
 *          tags:
 *              - Services
 *          description: Takes a JSON body with an email to submit to the digital kit
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  format: email
 *                                  description: Email address to submit to the digital kit
 *          responses:
 *              200:
 *                  description: Email successfully submitted
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                  example:
 *                      message: "Email submitted successfully"
 *              400:
 *                  description: Bad request due to invalid email format
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  error:
 *                                      type: string
 *                  example:
 *                      error: "Invalid email format"
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
router.post(
  "/digital-kit",
  emailValidation,
  ServicesController.postDigitalKit,
);

export default router;
