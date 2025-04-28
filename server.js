import express from "express";
import { config } from "dotenv";
import mainRouter from "./router/index.routes.js"
import mongoose from "mongoose";
config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api", mainRouter)
function start() {
  app.listen(PORT, async () => {
    try {
      await mongoose.connect(process.env.DB_URI)
      console.log("mongoose connected success");
      console.log("server started at http://localhost:" + PORT);
    } catch (err) {
      console.log("mongoose connection error:", err);
    }
  })
}

start()