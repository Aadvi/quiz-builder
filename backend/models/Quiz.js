import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  permalink: { type: String, unique: True },
  published: { type: Boolean, default: false },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Quiz", quizSchema);
