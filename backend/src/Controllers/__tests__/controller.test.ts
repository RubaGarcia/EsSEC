import request from "supertest";
import { getEntries } from "../../contentful/contentfulAPI"; // Reemplaza con la ruta correcta a tu API de Contentful
import app from "../../server";
import { createAsset, createPersonEntry } from "../../config/contentfulClient";
import { LayoutController } from "../LayoutController";
import { Request, Response } from "express";
import { JobsController } from "../JobsController";
import { ServicesController } from "../ServicesController";

// Mock de la función getEntries para el test
jest.mock("../../contentful/contentfulAPI", () => ({
  getEntries: jest.fn(),
}));

jest.mock("../../config/contentfulClient", () => ({
  createPersonEntry: jest.fn(),
  createAsset: jest.fn(),
}));

// Crear una instancia de la app de Express
// const app = express();
// app.get("/general", HomeController.getGeneral);

describe("HomeController", () => {
  describe("GET /general", () => {
    it("debería retornar una respuesta JSON cuando getEntries devuelve datos", async () => {
      // Mock de la respuesta esperada de getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/home/");

      expect(response.status).toBe(200); // Verificar que el status es 200 OK
      expect(response.body).toBeDefined(); // Verificar que se retornó algo en el cuerpo de la respuesta
    });

    it("debería retornar un error 500 cuando getEntries lanza un error", async () => {
      // Mock para simular un error en getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/home/");

      expect(response.status).toBe(500); // Verificar que el status es 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verificar que la respuesta contiene una propiedad 'error'
    });
  });
});

describe("LayoutController", () => {
  describe("GET /", () => {
    it("debería retornar una respuesta JSON cuando getEntries devuelve datos", async () => {
      // Mock de la respuesta esperada de getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/");

      expect(response.status).toBe(200); // Verificar que el status es 200 OK
      expect(response.body).toBeDefined(); // Verificar que se retornó algo en el cuerpo de la respuesta
    });

    it("debería retornar un error 500 cuando getEntries lanza un error", async () => {
      // Mock para simular un error en getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/");

      expect(response.status).toBe(500); // Verificar que el status es 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verificar que la respuesta contiene una propiedad 'error'
    });
  });
});

describe("ContactController", () => {
  describe("GET /", () => {
    it("debería retornar una respuesta JSON cuando getEntries devuelve datos", async () => {
      // Mock de la respuesta esperada de getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/contact/");

      expect(response.status).toBe(200); // Verificar que el status es 200 OK
      expect(response.body).toBeDefined(); // Verificar que se retornó algo en el cuerpo de la respuesta
    });

    it("debería retornar un error 500 cuando getEntries lanza un error", async () => {
      // Mock para simular un error en getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/contact/");

      expect(response.status).toBe(500); // Verificar que el status es 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verificar que la respuesta contiene una propiedad 'error'
    });
  });
});

describe("ProjectsController", () => {
  describe("GET /", () => {
    it("debería retornar una respuesta JSON cuando getProjects devuelve datos", async () => {
      // Mock de la respuesta esperada de getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/projects/");

      expect(response.status).toBe(200); // Verificar que el status es 200 OK
      expect(response.body).toBeDefined(); // Verificar que se retornó algo en el cuerpo de la respuesta
    });

    it("debería retornar un error 500 cuando getEntries lanza un error", async () => {
      // Mock para simular un error en getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/projects/");

      expect(response.status).toBe(500); // Verificar que el status es 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verificar que la respuesta contiene una propiedad 'error'
    });
  });
  describe("GET /:projectId", () => {
    it("debería retornar una respuesta JSON cuando getProjectById devuelve datos", async () => {
      // Asegúrate de que el mock esté configurado correctamente antes de la solicitud
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      // Realiza la solicitud
      const response = await request(app).get(
        "/api/projects/36WofBGtBeHWBw1l50uQb6",
      );
      // console.log(response);
      // Log para debugging
      console.log(response.body);

      // Valida que la respuesta sea la esperada
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      // expect(response.body).toBeDefined();
      // expect(response.body.data).toBe("mocked data");  // Asegúrate de que el cuerpo tenga los datos correctos
    });

    // it("deberia de retornar 404 cuando getEntries es vacio", async () => {
    //   (getEntries as jest.Mock).mockResolvedValueOnce({});

    //   // Realiza la solicitud
    //   const response = await request(app).get(
    //     "/api/projects/36WofBGtBeHWBw1l50uQb6",
    //   );
    //   console.log(response);
    //   // console.log(response);
    //   // Log para debugging
    //   console.log(response.body);

    //   // Valida que la respuesta sea la esperada
    //   expect(response.status).toBe(404);
    //   expect(response.body).toHaveProperty("error", "ProjectsPage not found");
    // })

    it("deberia de retornar 500 cuando getEntries devuelve un array", async () => {
      (getEntries as jest.Mock).mockResolvedValueOnce([{}]);

      // Realiza la solicitud
      const response = await request(app).get(
        "/api/projects/36WofBGtBeHWBw1l50uQb6",
      );

      // console.log(response);
      // Log para debugging
      // console.log(response.body);

      // Valida que la respuesta sea la esperada
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("error");
    });

    it("debería retornar un error 500 cuando getProjectById lanza un error", async () => {
      // Simula un error en el mock
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      // Realiza la solicitud
      const response = await request(app).get(
        "/api/projects/5rm3yLWoLb0WVlZFuU6QFz/",
      );

      // Valida que la respuesta sea la esperada
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("error");
    });
    it("should return the project with the given ID", async () => {
      // Configura el mock para `getEntries`
      (getEntries as jest.Mock).mockResolvedValue({
        fields: {
          sections: [
            {
              fields: {
                items: [
                  {
                    sys: { id: "123" },
                    fields: {
                      name: "Test Project",
                      description: "This is a test project",
                    },
                  },
                  {
                    sys: { id: "456" },
                    fields: {
                      name: "Another Project",
                      description: "This is another test project",
                    },
                  },
                ],
              },
            },
          ],
        },
      });

      const response = await request(app).get("/api/projects/123");

      // Imprime la respuesta para depuración
      console.log(response.body);

      expect(response.status).toBe(200);
    });
    // expect(response.body).toEqual({
    //   name: 'Test Project',
    //   description: 'This is a test project'
    // });

    it("should return 404 if project with given ID is not found", async () => {
      // Configura el mock para `getEntries`
      (getEntries as jest.Mock).mockResolvedValue({
        fields: {
          sections: [
            {
              fields: {
                items: [
                  {
                    sys: { id: "123" },
                    fields: {
                      name: "Test Project",
                      description: "This is a test project",
                    },
                  },
                ],
              },
            },
          ],
        },
      });

      const response = await request(app).get("/projects/999");

      // Imprime la respuesta para depuración
      console.log(response.body);

      expect(response.status).toBe(404);
      // expect(response.body).toEqual({ error: 'Project not found' });
    });
  });
});

describe("LayoutController", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let sendMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    sendMock = jest.fn();

    req = {
      body: {},
    };
    res = {
      json: jsonMock,
      status: statusMock,
      send: sendMock,
    };
  });

  describe("getGeneral", () => {
    it("debería responder con un layout general cuando getEntries devuelve datos", async () => {
      const mockHeader = [{ fields: { title: "Header Title" } }];
      const mockFooter = [{ fields: { title: "Footer Title" } }];

      (getEntries as jest.Mock).mockResolvedValueOnce(mockHeader);
      (getEntries as jest.Mock).mockResolvedValueOnce(mockFooter);

      await LayoutController.getGeneral(req as Request, res as Response);

      expect(getEntries).toHaveBeenCalledWith("header");
      expect(getEntries).toHaveBeenCalledWith("footer");
      expect(res.json).toHaveBeenCalledWith({
        header: [{ title: "Header Title" }],
        footer: [{ title: "Footer Title" }],
      });
    });

    it("debería responder con un error 500 cuando getEntries lanza un error", async () => {
      const error = new Error("Test error");
      (getEntries as jest.Mock).mockRejectedValueOnce(error);

      await LayoutController.getGeneral(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status(500).json).toHaveBeenCalledWith({
        error: "Test error",
      });
    });
  });

  describe("postLayout", () => {
    it("debería responder con un mensaje de éxito cuando createPersonEntry es exitoso", async () => {
      req.body = { email: "test@example.com" };
      const mockId = "mocked id";
      (createPersonEntry as jest.Mock).mockResolvedValueOnce(mockId);

      await LayoutController.postLayout(req as Request, res as Response);

      expect(createPersonEntry).toHaveBeenCalledWith({
        email: "test@example.com",
      });
      expect(res.send).toHaveBeenCalledWith("Persona creada: mocked id");
    });

    it("debería responder con un error 500 cuando createPersonEntry lanza un error", async () => {
      const error = new Error("Test error");
      (createPersonEntry as jest.Mock).mockRejectedValueOnce(error);

      await LayoutController.postLayout(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status(500).json).toHaveBeenCalledWith({
        error: "Test error",
      });
    });
  });
});

// Mock the getEntries function for the test
jest.mock("../../contentful/contentfulAPI", () => ({
  getEntries: jest.fn(),
}));

jest.mock("../../config/contentfulClient", () => ({
  createPersonEntry: jest.fn(),
}));

describe("ServicesController", () => {
  describe("GET /", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/services/");

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });

    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });
  describe("GET /services/auditories", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/services/auditories");

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });
    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/auditories");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });

  describe("GET /services/products", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/services/products");

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });
    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/products");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });

  describe("GET /services/maintenance", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/services/maintenance");

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });
    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/manteinance");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });

  describe("GET /services/improvement-plans", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get(
        "/api/services/improvement-plans",
      );

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });
    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/improvement-plans");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });

  describe("GET /services/digital-kit", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      // Mock the expected response from getEntries
      (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

      const response = await request(app).get("/api/services/digital-kit");

      expect(response.status).toBe(200); // Verify that the status is 200 OK
      expect(response.body).toBeDefined(); // Verify that something is returned in the response body
    });
    it("should return a 500 error when getEntries throws an error", async () => {
      // Mock to simulate an error in getEntries
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));

      const response = await request(app).get("/api/services/digital-kit");

      expect(response.status).toBe(500); // Verify that the status is 500 Internal Server Error
      expect(response.body).toHaveProperty("error"); // Verify that the response contains an 'error' property
    });
  });
  
    
  
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let sendMock: jest.Mock;

  beforeEach(() => {
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnValue({ json: jsonMock });
    sendMock = jest.fn();

    req = {
      body: {},
    };
    res = {
      json: jsonMock,
      status: statusMock,
      send: sendMock,
    };
  });


  

  describe("postDigital", () => {
    it("debería responder con un mensaje de éxito cuando createPersonEntry es exitoso", async () => {
      req.body = { email: "test@example.com" };
      const mockId = "mocked id";
      (createPersonEntry as jest.Mock).mockResolvedValueOnce(mockId);

      await ServicesController.postDigitalKit( req as Request, res as Response);

      expect(createPersonEntry).toHaveBeenCalledWith({
        email: "test@example.com",
      });
      expect(res.send).toHaveBeenCalledWith("Persona creada: mocked id");
    });

    it("debería responder con un error 500 cuando createPersonEntry lanza un error", async () => {
      const error = new Error("Test error");
      (createPersonEntry as jest.Mock).mockRejectedValueOnce(error);

      await ServicesController.postDigitalKit(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.status(500).json).toHaveBeenCalledWith({
        error: "Test error",
      });
    });
  });
});




describe("JobsController", () => {
  describe("GET /", () => {
    it("should return a JSON response when getEntries returns data", async () => {
      (getEntries as jest.Mock).mockResolvedValueOnce({
        data: "mocked data",
      });
      
      const response = await request(app).get("/api/jobs/");
      
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
    
    it("should return a 500 error when getEntries throws an error", async () => {
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));
      
      const response = await request(app).get("/api/jobs/");
      
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("error");
    });
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
      
      const response = await request(app).get(
        "/api/jobs/7GIZhtO66wEOZqxfDvOz0N"
      );
      
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
    });
    
    it("should return a 500 error when getJobById throws an error", async () => {
      (getEntries as jest.Mock).mockRejectedValueOnce(new Error("Test error"));
      
      const response = await request(app).get(
        "/api/jobs/7GIZhtO66wEOZqxfDvOz0N/"
      );
      
      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty("error");
    });
  });
  // describe("POST /", () => {
  //   describe("POST /obtainEmail", () => {
  //     let req: Partial<Request>;
  //     let res: Partial<Response>;
  //     let jsonMock: jest.Mock;
  //     let statusMock: jest.Mock;
  
  //     beforeEach(() => {
  //       jsonMock = jest.fn();
  //       statusMock = jest.fn().mockReturnValue({ json: jsonMock });
  
  //       req = {
  //         body: {
  //           email: "test@example.com",
  //         },
  //         file: {
  //           originalname: "1f53c05662ab47a7ff150276d28ca6bf",
  //           // Remove the duplicate property "mimetype"
  //           path: "backend/uploads/1f53c05662ab47a7ff150276d28ca6bf",
  //           fieldname: "file",
  //           encoding: "7bit",
  //           size: 1234,
  //           stream: {} as any, // Simular el stream como cualquier objeto, si es necesario
  //           buffer: Buffer.from(""),
  //           destination: "",
  //           filename: "1f53c05662ab47a7ff150276d28ca6bf",
  //           mimetype: "application/pdf",
  //         } as any,
  //       };
  //       res = {
  //         json: jsonMock,
  //         status: statusMock,
  //       };
  //     });
  
  //     it("debería responder con el ID de la entrada de persona cuando todo está correcto", async () => {
  //       const mockAssetId = "1ROwC5yZM705s0gX1SWxnb";
  //       const mockPersonEntryId = "HzMBpU33KHmvOxoD4zGsa";
  
  //       // Configura los mocks
  //       (createAsset as jest.Mock).mockResolvedValueOnce(mockAssetId);
  //       (createPersonEntry as jest.Mock).mockResolvedValueOnce(
  //         mockPersonEntryId,
  //       );
  
  //       // Realiza la solicitud
  //       const response = await request(app)
  //         .post("/api/jobs/job")
  //         .attach("file", "backend/uploads/1f53c05662ab47a7ff150276d28ca6bf")
  //         .send({ email: "test@example.com" });
  
  //       // Verifica los resultados
  //       expect(response.status).toBe(200);
  //       expect(response.body).toHaveProperty(
  //         "personEntryId",
  //         mockPersonEntryId,
  //       );
  //       expect(createAsset).toHaveBeenCalledWith({
  //         fileName: "resume.pdf",
  //         fileContentType: "application/pdf",
  //         filePath: "backend/uploads/1f53c05662ab47a7ff150276d28ca6bf",
  //       });
  //       expect(createPersonEntry).toHaveBeenCalledWith({
  //         fullName: "John Doe",
  //         email: "test@example.com",
  //         cvAssetId: mockAssetId,
  //       });
  //     });
  
  //     it("debería responder con un error 400 si no se proporciona un archivo", async () => {
  //       req.file = undefined; // Simula la ausencia de archivo
  
  //       const response = await request(app)
  //         .post("/api/jobs/job")
  //         .send({ email: "test@example.com" });
  
  //       expect(response.status).toBe(400);
  //       expect(response.body).toHaveProperty("error", "File is required");
  //     });
  
  //     it("debería responder con un error 500 si ocurre un error en createAsset", async () => {
  //       (createAsset as jest.Mock).mockRejectedValueOnce(
  //         new Error("Create Asset Error"),
  //       );
  
  //       const response = await request(app)
  //         .post("/api/jobs/obtainEmail")
  //         .attach("file", "backend/uploads/1f53c05662ab47a7ff150276d28ca6bf")
  //         .send({ email: "test@example.com" });
  
  //       expect(response.status).toBe(500);
  //       expect(response.body).toHaveProperty("error", "Something went wrong");
  //     });
  
  //     it("debería responder con un error 500 si ocurre un error en createPersonEntry", async () => {
  //       const mockAssetId = "mocked-asset-id";
  //       (createAsset as jest.Mock).mockResolvedValueOnce(mockAssetId);
  //       (createPersonEntry as jest.Mock).mockRejectedValueOnce(
  //         new Error("Create Person Entry Error"),
  //       );
  
  //       const response = await request(app)
  //         .post("/api/jobs/obtainEmail")
  //         .attach("file", "backend/uploads/1f53c05662ab47a7ff150276d28ca6bf")
  //         .send({ email: "test@example.com" });
  
  //       expect(response.status).toBe(500);
  //       expect(response.body).toHaveProperty("error", "Something went wrong");
  //     });
  //   });
  // });
});
describe("ResourcesController", () => {
  beforeEach(() => {
    // Esto asegura que los mocks se restablezcan antes de cada test
    jest.clearAllMocks();
  });
  it("should return a 500 error when getEntries throws an error", async () => {
    // Mock to simulate an error in getEntries
    (getEntries as jest.Mock).mockRejectedValueOnce(new Error("hola"));

    const response = await request(app).get("/api/resources");

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("error");
  });
  


  it("should return a JSON response when getEntries returns data", async () => {
    (getEntries as jest.Mock).mockResolvedValueOnce({ data: "mocked data" });

    const response = await request(app).get("/api/resources");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
