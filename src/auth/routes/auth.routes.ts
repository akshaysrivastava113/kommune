import { Request, Response, Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller";
import { authenticateToken } from "../middlewares/authenticate.middleware";


const router = Router();

router.get('/health' , authenticateToken,  (req: Request,res: Response) => {
    res.send(200);
});

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

export default router;