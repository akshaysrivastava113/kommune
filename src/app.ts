import express from "express";
import routes from "./routes";
import authRoutes from "./auth";
import session from "express-session";

const app = express();

app.use(session({
        secret: "1234",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60*60*60
        }
    }));

app.use(express.json());
app.use('/api', routes);
app.use('/api/auth', authRoutes);

export default app;
