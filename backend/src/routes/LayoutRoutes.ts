import { Router } from "express";

const router = Router();

router.get(
  "/",
  //TODO:Return data
  (req, res) => {
    res.send("get Layout(Header+Footer)");
  },
);

router.post("/",
    //TODO:Add middleware  (Body:email)
    (req, res) => {
  res.send("Add notifications");
});

export default router;
