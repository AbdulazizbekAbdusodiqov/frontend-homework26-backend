import express from "express"
import { addTask, complateTask, getTasks, removeTask, updateTask } from "../controller/todo.controller.js"
const router = express.Router()

router.get("/", getTasks)
router.post("/", addTask)
router.put("/:id", updateTask)
router.patch("/:id", complateTask)
router.delete("/:id", removeTask)

export default router
