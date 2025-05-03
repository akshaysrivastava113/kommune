import express from "express";
import authRoutes from "./auth";
import routes from "./routes";
import articleRoutes from "./routes/articles/article.route";
import commentRoutes from "./routes/comments/comments.route";
import cors from "cors";
require('dotenv').config()

const cookieParser = require('cookie-parser');

const frontendUrl = process.env.FRONTEND_URL;
const app = express();
app.use(cookieParser());
app.use(cors({
  origin: frontendUrl,
  credentials: true
}));
console.log(frontendUrl);
  
app.use(express.json());

app.use('/api', routes);
app.use('/api/article', articleRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);

export default app;
