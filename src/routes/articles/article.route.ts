import { Request, Response, Router } from "express";
import { addComment, createNewArticle, getAllArticles, getArticle, getArticlesFiltered, getComments, likeArticle } from "../../controllers/article.controller";
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
router.get("/:articleId/comments", getComments);
router.post("/:articleId/comments", addComment);
router.post("/", createNewArticle);
router.post("/:articleId/like", likeArticle);


export default router;