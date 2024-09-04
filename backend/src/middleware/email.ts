import {Request, Response, NextFunction } from "express";
import validator from "validator";

export const emailValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      errors: [
        {
          type: "field",
          msg: "Email is not valid",
          path: "email",
          location: "body",
        },
      ],
    });
  }
  next();
};
