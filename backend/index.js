import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import quizRouter from "./routes/quizRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
connectDB();



app.use("/api/quizzes", quizRouter)
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
