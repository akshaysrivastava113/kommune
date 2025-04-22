import {Request, Response, Router} from "express";
const router = Router();

router.get("/", (req: Request,res: Response) => {
    console.log("Home call made");
    res.send("Home");
})

export default router;

