import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { handleInputErrors } from "../validation";
import { emailValidation } from "../email";
import validator from "validator";

// Mock de validationResult para simplificar el test
jest.mock("express-validator", () => ({
  validationResult: jest.fn()
}));

describe("handleInputErrors middleware", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};  // No necesitamos propiedades específicas del request
    res = {
      status: jest.fn().mockReturnThis(),  // Mock de status
      json: jest.fn(),  // Mock de json
    };
    next = jest.fn();  // Mock de next
  });

  it("debería devolver un error 400 si hay errores de validación", () => {
    (validationResult as unknown as jest.Mock).mockReturnValueOnce({
      isEmpty: () => false,
      array: () => [{ msg: "Error de prueba" }],
    });

    handleInputErrors(req as Request, res as Response, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ errors: [{ msg: "Error de prueba" }] });
    expect(next).not.toHaveBeenCalled();
  });

  it("debería llamar a next() si no hay errores de validación", () => {
    (validationResult as unknown as jest.Mock).mockReturnValueOnce({
      isEmpty: () => true,
    });

    handleInputErrors(req as Request, res as Response, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});


jest.mock("validator");

describe("emailValidation middleware", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {
      body: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  it("debería devolver un error 400 si el email no es válido", () => {
    req.body = { email: "invalid-email" }; // Correo no válido
    (validator.isEmail as jest.Mock).mockReturnValueOnce(false); // Mock isEmail para que devuelva false

    emailValidation(req as Request, res as Response, next);

    expect(validator.isEmail).toHaveBeenCalledWith("invalid-email"); // Verifica que isEmail fue llamado con el email correcto
    expect(res.status).toHaveBeenCalledWith(400); // Verifica que status fue llamado con 400
    expect(res.json).toHaveBeenCalledWith({
      errors: [
        {
          type: "field",
          msg: "Email is not valid",
          path: "email",
          location: "body",
        },
      ],
    });
    expect(next).not.toHaveBeenCalled(); // Verifica que next no fue llamado
  });

  it("debería llamar a next() si el email es válido", () => {
    req.body = { email: "valid@example.com" }; // Correo válido
    (validator.isEmail as jest.Mock).mockReturnValueOnce(true); // Mock isEmail para que devuelva true

    emailValidation(req as Request, res as Response, next);

    expect(validator.isEmail).toHaveBeenCalledWith("valid@example.com"); // Verifica que isEmail fue llamado con el email correcto
    expect(next).toHaveBeenCalled(); // Verifica que next fue llamado
    expect(res.status).not.toHaveBeenCalled(); // Verifica que status no fue llamado
    expect(res.json).not.toHaveBeenCalled(); // Verifica que json no fue llamado
  });
});
