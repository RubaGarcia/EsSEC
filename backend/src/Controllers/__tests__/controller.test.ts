import request from "supertest";
import { getEntries } from "../../contentful/contentfulAPI";
import app from "../../server";
import { createPersonEntry } from "../../config/contentfulClient";
import { LayoutController } from "../LayoutController";
import { NextFunction, Request, Response } from "express";
import { ServicesController } from "../ServicesController";

// Mock de las funciones para el test
jest.mock("../../contentful/contentfulAPI", () => ({
  getEntries: jest.fn(),
}));

jest.mock("../../config/contentfulClient", () => ({
  createPersonEntry: jest.fn(),
  createAsset: jest.fn(),
}));

// Helper functions
const testGetEndpoint = (endpoint: string) => {
  it(`debería retornar una respuesta JSON cuando getEntries devuelve datos para ${endpoint}`, async () => {
    (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

    const response = await request(app).get(endpoint);

    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });

  it(`debería retornar un error 500 cuando getEntries lanza un error para ${endpoint}`, async () => {
    (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

    const response = await request(app).get(endpoint);

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error");
  });
};

// Helper para configurar req y res en tests POST
const setupMockReqRes = () => {
  const jsonMock = jest.fn();
  const statusMock = jest.fn().mockReturnValue({ json: jsonMock });
  const sendMock = jest.fn();
  const req: Partial<Request> = { body: {} };
  const res: Partial<Response> = {
    json: jsonMock,
    status: statusMock,
    send: sendMock,
  };

  return { req, res, jsonMock, statusMock, sendMock };
};

// Tests para diferentes controladores
describe("Controllers", () => {
  describe("HomeController", () => {
    describe("GET /general", () => {
      testGetEndpoint("/api/home/");
    });
  });

  describe("ResourcesController", () => {
    describe("GET /", () => {
      testGetEndpoint("/api/resources/");
    });
  });

  describe("LayoutController", () => {
    describe("GET /", () => {
      testGetEndpoint("/api/");
    });

    describe("POST /", () => {
      let req: Partial<Request>;
      let res: Partial<Response>;
      let next: NextFunction;
      let jsonMock: jest.Mock;
      let statusMock: jest.Mock;
      let sendMock: jest.Mock;

      beforeEach(() => {
        ({ req, res } = setupMockReqRes());
      });

      it("debería responder con un mensaje de éxito cuando createPersonEntry es exitoso", async () => {
        req.body = { email: "test@example.com" };
        const mockId = "mocked id";
        (createPersonEntry as jest.Mock).mockResolvedValueOnce(mockId);

        await LayoutController.postLayout(req as Request, res as Response, next as NextFunction);

        expect(createPersonEntry).toHaveBeenCalledWith({ email: "test@example.com" });
        expect(res.send).toHaveBeenCalledWith("Persona creada: mocked id");
      });

      it("debería responder con un error 500 cuando createPersonEntry lanza un error", async () => {
        const error = new Error("Test error");
        (createPersonEntry as jest.Mock).mockRejectedValueOnce(error);

        await LayoutController.postLayout(req as Request, res as Response, next as NextFunction);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status(500).json).toHaveBeenCalledWith({ error: "Test error" });
      });
    });
  });

  describe("ContactController", () => {
    describe("GET /", () => {
      testGetEndpoint("/api/contact/");
    });
  });

  describe("ProjectsController", () => {
    describe("GET /", () => {
      testGetEndpoint("/api/projects/");
    });

    describe("GET /:projectId", () => {
      it("debería retornar una respuesta JSON cuando getProjectById devuelve datos", async () => {
        (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

        const response = await request(app).get("/api/projects/36WofBGtBeHWBw1l50uQb6");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
      });

      it("debería retornar 500 cuando getEntries devuelve un array", async () => {
        (getEntries as jest.Mock).mockResolvedValueOnce([{}]);

        const response = await request(app).get("/api/projects/36WofBGtBeHWBw1l50uQb6");
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty("error");
      });

      it("debería retornar un error 500 cuando getProjectById lanza un error", async () => {
        (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

        const response = await request(app).get("/api/projects/5rm3yLWoLb0WVlZFuU6QFz/");
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty("error");
      });
    });
  });

  describe("ServicesController", () => {
    const serviceEndpoints = [
      "/api/services/",
      "/api/services/auditories",
      "/api/services/products",
      "/api/services/maintenance",
      "/api/services/improvement-plans",
      "/api/services/digital-kit",
    ];

    serviceEndpoints.forEach((endpoint) => {
      describe(`GET ${endpoint}`, () => {
        testGetEndpoint(endpoint);
      });
    });

    describe("postDigital", () => {
      let req: Partial<Request>;
      let res: Partial<Response>;
      let next: NextFunction;
      let jsonMock: jest.Mock;
      let statusMock: jest.Mock;
      let sendMock: jest.Mock;

      beforeEach(() => {
        ({ req, res } = setupMockReqRes());
      });

      it("debería responder con un mensaje de éxito cuando createPersonEntry es exitoso", async () => {
        req.body = { email: "test@example.com" };
        const mockId = "mocked id";
        (createPersonEntry as jest.Mock).mockResolvedValueOnce(mockId);

        await ServicesController.postDigitalKit(req as Request, res as Response, next as NextFunction);

        expect(createPersonEntry).toHaveBeenCalledWith({ email: "test@example.com" });
        expect(res.send).toHaveBeenCalledWith("Persona creada: mocked id");
      });

      it("debería responder con un error 500 cuando createPersonEntry lanza un error", async () => {
        const error = new Error("Test error");
        (createPersonEntry as jest.Mock).mockRejectedValueOnce(error);

        await ServicesController.postDigitalKit(req as Request, res as Response, next as NextFunction);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.status(500).json).toHaveBeenCalledWith({ error: "Test error" });
      });
    });
  });

  describe("JobsController", () => {
    describe("GET /", () => {
      testGetEndpoint("/api/jobs/");
    });

    describe("GET /:jobId", () => {
      it("should return a JSON response when getJobById returns data", async () => {
        (getEntries as jest.Mock).mockResolvedValueOnce({
          items: [
            {
              sys: { id: "7GIZhtO66wEOZqxfDvOz0N" },
              fields: {
                name: "Software Developer",
                description: "Ubicación: Remoto / Presencial...",
                internal: true,
                salary: 200,
              },
            },
          ],
        });

        const response = await request(app).get("/api/jobs/7GIZhtO66wEOZqxfDvOz0N");
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
      });

      it("should return a 404 error when getJobById returns an empty array", async () => {
        (getEntries as jest.Mock).mockResolvedValueOnce([]);

        const response = await request(app).get("/api/jobs/7GIZhtO66wEOZqxfDvOz0N");
        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty("error", "Job not found");
      });

      it("should return a 400 error when jobId is not provided", async () => {
        const response = await request(app).get("/api/jobs/");
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("error", "Job ID is required");
      });

      it("should return a 500 error when getJobById throws an error", async () => {
        (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

        const response = await request(app).get("/api/jobs/7GIZhtO66wEOZqxfDvOz0N");
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty("error");
      });
    });
  });
});
