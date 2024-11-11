import Quiz from "../models/Quiz.js";
import Question from "../models/Question.js";

function genPermalink() {
  return Math.random().toString(36).substring(2, 8);
}

export const createQuiz = async (req, res) => {
  const { title } = req.body;

  try {
    const quiz = await Quiz.create({ title, createdBy: req.userId });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ error: "Failed to create Quiz" });
  }
};

export const publishQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (quiz.createdBy.toString() !== req.userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    quiz.published = true;
    quiz.permalink = genPermalink();
    await quiz.save();
    res.json({ message: "Quiz Published", permalink: quiz.permalink });
  } catch (error) {
    res.status(400).json({ error: "Failed to publish quiz" });
  }
};

export const deleteQuiz = async (req, res) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);
    res.json({ message: "Quiz deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete quiz" });
  }
};
