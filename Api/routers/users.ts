import express from "express";
import User from "../models/User";
import {UserFields} from "../types";
import mongoose from "mongoose";
import auth, {RequestWithUser} from "../middleware/auth";

const usersRouter = express.Router();

usersRouter.get("/", async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (e) {
        next (e);
    }
})

usersRouter.post("/", async (req, res, next) => {
    const userData: Omit<UserFields, 'token'> = {
        username: req.body.username,
        password: req.body.password
    };


    try {
        const user = new User(userData);
        user.generateToken();

        await user.save();
        res.send(user);
    } catch (e) {
        if(e instanceof mongoose.Error.ValidationError) {
            return res.status(400).send(e);
        }
        next(e);
    }
});

usersRouter.post("/sessions", async (req, res) => {
    const user = await User.findOne({username: req.body.username});

    if (!user) {
        return res.status(404).send({error: "User not found"});
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch) {
        return res.status(400).send({error: "Password does not match"});
    }

    user.generateToken();
    await user.save();

    res.send({message: 'Username and Password is correct', user});
});

usersRouter.post('/secret',auth, async (req, res) => {
    const user = (req as RequestWithUser).user;
    return res.send({message: "Secret message", user});
})

export default usersRouter;