import { Router } from "express";
import { createNewArticle, getAllArticles, getArticle, getArticlesFiltered, likeArticle } from "../../controllers/article.controller";
import { verifyToken } from "../../middlewares/verifyToken.middleware";

const router = Router();

router.use(verifyToken);
router.get("/:id", getArticle);
router.post("/filter", getArticlesFiltered);
router.get("/all", getAllArticles);
router.post("/", createNewArticle);
router.put("/:articleId/like", likeArticle);


export default router;