import { Request, Response, Router } from "express";
import { signup } from "../controllers/auth.controller";


const router = Router();

// router.post("/login", login);
router.post("/signup", signup);
// router.post("/logout", logout);

router.get("/", (req:Request, res: Response) => {
    console.log(req.session);
})
export default router;