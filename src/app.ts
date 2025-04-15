import express from "express";
import routes from "./routes";
import session from "express-session";;
import authRoutes from "./auth";

const app = express();

app.use(express.json());

app.use('/api', routes);
app.use('/api/auth', authRoutes);

export default app;
