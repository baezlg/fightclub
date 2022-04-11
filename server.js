import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/DB.js";
import userRouter from "./routes/userRoutes.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(cors());

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
