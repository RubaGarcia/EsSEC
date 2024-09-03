import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";

const router = Router();

/**
 * @swagger
 * /api/home:
 *      get:
 *          summary: Get the elements of the home view
 *          tags:
 *              - Home
 *          description: Return a JSON with the home elements from contentful
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
router.get(
  "/",
  HomeController.getGeneral,
);


export default router;
