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

const allowedOrigins = [
  "http://localhost:5173",
  "https://portfolio-gamma-liart-64.vercel.app/",
];

app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use("/message", messageRouter);
app.use("/comment", commentRouter);

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
);
