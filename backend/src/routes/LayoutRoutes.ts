import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/validation";
import { LayoutController } from "../Controllers/LayoutController";

const router = Router();

router.get(
  "/",
  //TODO:Return data
  LayoutController.getGeneral,
);

router.post(
  "/",
  //TODO:Add middleware  (Body:email)
  // body('email').isEmail().withMessage('Email is not valid'),
  // handleInputErrors,

  LayoutController.postLayout,
);

export default router;
