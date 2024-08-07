import express from 'express';
import { corsConfig } from './config/cors';
import cors from 'cors';
import morgan from 'morgan';
import LayoutRoutes from './routes/LayoutRoutes';
import HomeRoutes from './routes/HomeRoutes';
import ServicesRoutes from './routes/ServicesRoutes';
import ResourcesRoutes from './routes/ResourcesRoutes';
import JobRoutes from './routes/JobRoutes';
import ContactRoutes from './routes/ContactRoutes';
import DigitalKitRoutes from './routes/DigitalKitRoutes';
import ProjectRoutes from './routes/ProjectRoutes';


const app = express();

app.use(cors(corsConfig))
app.use(morgan('dev'))

app.use(express.json())

//routes
app.use('/api', LayoutRoutes)
app.use('/api/home',HomeRoutes)
app.use('/api/services', ServicesRoutes)
app.use('/api/resources', ResourcesRoutes)
app.use('/api/jobs', JobRoutes)
app.use('/api/contact',ContactRoutes) 
app.use('/api/digital-kit',DigitalKitRoutes)
app.use('/api/projects', ProjectRoutes)




export default app