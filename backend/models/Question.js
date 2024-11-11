import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz" },
  text: String,
  type: { type: String, enum: [single, multiple] },
  options: [{ text: String, isCorrect: Boolean }],
});

export default mongoose.model("Question", questionSchema);
