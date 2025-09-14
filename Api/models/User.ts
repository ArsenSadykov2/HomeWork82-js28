import mongoose from "mongoose";
import {UserFields} from "../types";

const Schema = mongoose.Schema;

const UserSchema = new Schema<UserFields>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);
export default User;