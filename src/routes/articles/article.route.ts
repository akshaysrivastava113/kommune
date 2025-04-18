import { Router } from "express";
import { createNewArticle, getAllArticles } from "../../controllers/article.controller";
import { verifyToken } from "../../middlewares/verifyToken.middleware";

const router = Router();

router.use(verifyToken);
router.get("/all", getAllArticles);
router.post("/create", createNewArticle);


export default router;