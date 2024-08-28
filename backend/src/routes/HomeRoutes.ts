import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { createPersonEntry } from "../config/contentfulClient";

const router = Router();

router.get(
  "/",
  
  HomeController.getGeneral,
);

// router.get("/spaces", async (req, res) => {
//   try {
//     const entries = await getEntries("valueProposition");
//     res.json(entries.map((entry) => entry.fields));
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

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
