import express from "express";
import { getComment, postComment } from "../controllers/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/post-comment", postComment);
commentRouter.get("/get-comment", getComment);

export default commentRouter;
