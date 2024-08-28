import { Router } from "express";
import { LayoutController } from "../Controllers/LayoutController";

const router = Router();

router.get("/", LayoutController.getGeneral);

router.post("/", LayoutController.postLayout);

export default router;
