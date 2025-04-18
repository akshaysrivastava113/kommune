import express from "express";
import articleRoutes from "./routes/articles/article.route";
import routes from "./routes";
import authRoutes from "./auth";
import cors from "cors";
const cookieParser = require('cookie-parser');

const frontendUrl = process.env.FRONTEND_URL;

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: frontendUrl,
    credentials: true
  }));
  
app.use(express.json());

app.use('/api', routes);
app.use('/api/article', articleRoutes);
app.use('/api/auth', authRoutes);

export default app;
