import { Schema, model } from "mongoose";

const userSchema = new Schema({},{timestamps: true});

const User = model("User", userSchema);

export default User;
userSchema