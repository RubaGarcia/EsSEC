/**
 * Express router for handling layout routes.
 *
 * @remarks
 * This router handles the following routes:
 * - GET /api/ - Get the elements of the layout (Header, Footer)
 * - POST /api/ - Store an email in the contentful database
 *
 * @packageDocumentation
 */
import { Router } from "express";
import { LayoutController } from "../Controllers/LayoutController";
import validator from 'validator';
import { emailValidation } from "../middleware/email";

const router = Router();

/**
 * @swagger
 * /api/:
 *      get:
 *          summary: Get the elements of the layout(Header, Footer)
 *          tags:
 *              - Layout
 *          description: Return a JSON with the layout elements from contentful
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                  example:
 *                      - header: "Header content"
 *                        footer: "Footer content"
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
router.get("/", LayoutController.getGeneral);

/**
 * @swagger
 * /api/:
 *      post:
 *          summary: Store an email in the contentful database
 *          tags:
 *              - Layout
 *          description: Store the provided email in the contentful database
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              email:
 *                                  type: string
 *          responses:
 *              200:
 *                  description: Successful response
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                  example:
 *                      message: "Email stored successfully"
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
 *              400:
 *                  description: Bad Request
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  errors:
 *                                      type: array
 *                                      items:
 *                                          type: object
 *                                          properties:
 *                                              type:
 *                                                  type: string
 *                                              msg:
 *                                                  type: string
 *                                              path:
 *                                                  type: string
 *                                              location:
 *                                                  type: string
 *                  example:
 *                      errors: [
 *                          {
 *                              type: "field",
 *                              msg: "Email is not valid",
 *                              path: "email",
 *                              location: "body"
 *                          }
 *                      ]
 */
router.post("/", 
    emailValidation,
    LayoutController.postLayout);
// router.post("/", LayoutController.postLayout);

export default router;
