import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { getEntries } from "../contentful/contentfulAPI";
import { createEntry, createPersonEntry } from "../config/contentfulClient";

const router = Router();

router.get(
  "/",
  //TODO:Return data
  //   async (req, res) => {
  //     const contentTypes = await client.getContentTypes();
  //     let string =
  //       "Available Content Types: " +
  //       contentTypes.items.map((type) => type.sys.id);
  //     res.send(string);
  //   },
  HomeController.getGeneral,
);

router.get("/spaces", async (req, res) => {
  try {
    const entries = await getEntries("person");
    res.json(entries.map((entry) => entry.fields));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/create",

 async (req, res) => {
  try {
      const id = await createPersonEntry({
        internalName: "John Doe 4",
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
