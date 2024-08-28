import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { createPersonEntry } from "../config/contentfulClient";

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



router.post("/create",

 async (req, res) => {
  try {
      const id = await createPersonEntry({
        internalName: "John Doe 5",
        fullName: "John Doe",
        email: "johndoe@example.com",
        // cvAssetId: "cvAssetId123", // Opcional
        // jobEntryId: "jobEntryId123", // Opcional
        // imageEntryId: "imageEntryId123", // Opcional
        // reviewEntryId: "reviewEntryId123", // Opcional
      })
      res.send("Persona creada: "+id)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
