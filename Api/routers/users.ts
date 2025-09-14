import express from "express";
import User from "../models/User";
import {UserFields} from "../types";
import mongoose from "mongoose";

const usersRouter = express.Router();

usersRouter.post("/", async (req, res, next) => {
    const userData: UserFields = {
        username: req.body.username,
        password: req.body.password,
    };


    try {
        const user = new User(userData);
        await user.save();
        res.send(user);
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            return res.status(400).send({error: error.message});
        }
        next(error);
    }
});

export default usersRouter;