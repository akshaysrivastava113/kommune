import { Router } from "express";
import { createNewArticle, getAllArticles, getArticle } from "../../controllers/article.controller";
import { verifyToken } from "../../middlewares/verifyToken.middleware";

const router = Router();

router.get("/:id", getArticle);
router.use(verifyToken);
router.get("/all", getAllArticles);
router.post("/", createNewArticle);


export default router;