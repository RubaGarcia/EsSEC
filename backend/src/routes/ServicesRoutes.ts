import { Router } from "express";
import { ServicesController } from "../Controllers/ServicesController";

const router = Router();

router.get("/", ServicesController.index);

router.get("/auditories", ServicesController.auditories);

router.get("/products", ServicesController.products);

router.get("/manteinance", ServicesController.manteinance);

router.get("/improvement-plans", ServicesController.improvementPlans);

router.get("/digital-kit", ServicesController.getDigitalKit);

router.post(
  "/digital-kit",
  ServicesController.postDigitalKit,
);

export default router;
