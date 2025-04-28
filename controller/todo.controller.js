import errorHandler from "../helpers/errorHandler.js"
import Todo from "../schema/Todo.js";
import User from "../schema/User.js";

export const addTask = async (req, res) => {
    try {
        const user_id = req.headers['authorization'];

        const newTask = await Todo.create({ ...req.body, user_id })

        return res.status(201).send({ newTask })
    
    } catch (error) {
        errorHandler(error, req)
    }
}

export const removeTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Todo.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).send({ message: "Task not found" });
        }
        return res.status(200).send({ message: "Task deleted" });
    } catch (error) {
        errorHandler(error, req)
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Todo.findByIdAndUpdate(id, {...req.body }, { new: true });
        if (!updatedTask) {
            return res.status(404).send({ message: "Task not found" });
        }
        return res.status(200).send({ updatedTask });
    } catch (error) {
        errorHandler(error, req)
    }
}
export const complateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
        if (!updatedTask) {
            return res.status(404).send({ message: "Task not found" });
        }
        return res.status(200).send({ updatedTask });
    } catch (error) {
        errorHandler(error, req)
    }
}

export const getTasks = async (req, res) => {
    try {
        const user_id = req.headers['authorization'];
        let user = await User.findById(user_id)
        if (!user) {
            user = await User.create()
        }
        const tasks = await Todo.find({ user_id: user._id });
        return res.status(200).send({ tasks });
    } catch (error) {
        errorHandler(error, req);

    }
}
