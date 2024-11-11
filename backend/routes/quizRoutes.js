import express from "express";
import {
  createQuiz,
  publishQuiz,
  deleteQuiz,
} from "../controllers/quizController.js";

const quizRouter = express.Router();

quizRouter.post("/", createQuiz);
quizRouter.put("/:id/publish", publishQuiz);
quizRouter.delete("/:id", deleteQuiz);

export default quizRouter;
