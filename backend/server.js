import express from "express";
import cors from "cors";
import dotnev from "dotenv";
import connectDB from "./config/database.js";
import messageRouter from "./routes/messageRoute.js";
import commentRouter from "./routes/commentRoute.js";

dotnev.config();

const app = express();
const port = 4000;
connectDB();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/message", messageRouter);
app.use("/api/comment", commentRouter);

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
