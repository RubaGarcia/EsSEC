import express from "express";
import { corsConfig } from "./config/cors";
import cors from "cors";
import morgan from "morgan";
import LayoutRoutes from "./routes/LayoutRoutes";
import HomeRoutes from "./routes/HomeRoutes";
import ServicesRoutes from "./routes/ServicesRoutes";
import ResourcesRoutes from "./routes/ResourcesRoutes";
import JobRoutes from "./routes/JobRoutes";
import ContactRoutes from "./routes/ContactRoutes";
import ProjectRoutes from "./routes/ProjectRoutes";
import helmet from "helmet";
import swaggerSpec, { swaggerUiOptions } from "./config/swagger.config";
import swaggerUi from "swagger-ui-express"; // Import the 'swaggerUi' module
import bodyParser from "body-parser";

const app = express();

app.use(helmet());
app.use(cors(corsConfig));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :remote-addr'));

app.use(express.json());

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use("/api", LayoutRoutes);
app.use("/api/home", HomeRoutes);
app.use("/api/services", ServicesRoutes);
app.use("/api/resources", ResourcesRoutes);
app.use("/api/jobs", JobRoutes);
app.use("/api/contact", ContactRoutes);
// app.use('/api/digital-kit',DigitalKitRoutes)
app.use("/api/projects", ProjectRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions) )

export default app;
