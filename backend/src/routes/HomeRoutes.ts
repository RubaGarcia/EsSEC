import { Router } from "express";
import { HomeController } from "../Controllers/HomeController";
import { getEntries } from "../contentful/contentfulAPI";
import { client } from "../config/contentfulClient";


const router = Router();

router.get(
  "/",
  //TODO:Return data
//   HomeController.getGeneral,
async (req, res) => {
    const contentTypes = await client.getContentTypes();
    let string  =  "Available Content Types: "+ contentTypes.items.map((type) => type.sys.id);
    res.send(string);
}



);

router.get("/spaces", async (req, res) => {
  try {
    const entries = await getEntries("job");
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
