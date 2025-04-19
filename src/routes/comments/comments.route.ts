import { Router } from "express";
import { createNewComment } from "../../controllers/comments.controller";
import { verifyToken } from "../../middlewares/verifyToken.middleware";
const router = Router();

router.use(verifyToken);
router.post("/:articleId/comment", createNewComment);

export default router;