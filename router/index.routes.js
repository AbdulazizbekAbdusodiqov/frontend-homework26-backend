import express from "express"
import todoRoter from "./todo.routes.js"

const router = express.Router()


router.use("/todo", todoRoter )

export default router