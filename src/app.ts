import express from "express";
import routes from "./routes";
import authRoutes from "./auth";
import cors from "cors";
const frontendUrl = process.env.FRONTEND_URL;

const app = express();

app.use(cors({
    origin: frontendUrl,
    credentials: true
  }));
  
app.use(express.json());

app.use('/api', routes);
app.use('/api/auth', authRoutes);

export default app;
