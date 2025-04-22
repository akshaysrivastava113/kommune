import { Request, Response, Router } from "express";
import { createNewArticle, getAllArticles, getArticle, getArticlesFiltered, likeArticle } from "../../controllers/article.controller";
import { verifyToken } from "../../middlewares/verifyToken.middleware";

const router = Router();

router.post("/dummy", (req: Request, res: Response) => {
    const bodyRec = req.body;
    console.log(bodyRec);
    res.status(200).json(bodyRec);
})
router.get("/all", getAllArticles);
router.use(verifyToken);
router.get("/:id", getArticle);
router.get("/", getArticlesFiltered);
router.post("/", createNewArticle);
router.put("/:articleId/like", likeArticle);


export default router;