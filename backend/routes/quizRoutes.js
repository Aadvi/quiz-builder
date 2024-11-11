import express from "express";
import {
  createQuiz,
  publishQuiz,
  deleteQuiz,
} from "../controllers/quizController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const quizRouter = express.Router();

quizRouter.post("/", authMiddleware, createQuiz);
quizRouter.put("/:id/publish", authMiddleware, publishQuiz);
quizRouter.delete("/:id", authMiddleware, deleteQuiz);

export default quizRouter;
