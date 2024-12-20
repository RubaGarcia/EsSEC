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
import { emailValidation } from "../middleware/email";
import colors from "colors";
import bodyParser from "body-parser";


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
  bodyParser.urlencoded({ extended: true }),
  (req, res, next) => {
      console.log(req.body);
      if (!req.body.email) {
          console.log(colors.red("Email is required"));
          return res.status(400).json({ message: "Email is required" });
      }
      next();
  },
  emailValidation,
  LayoutController.postLayout // Asegúrate de pasar el controlador aquí
);

export default router;
