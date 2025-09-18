import express from "express";
import Album from "../models/Album";
import Track from "../models/Tracks";
import {Error} from "mongoose";

const tracksRouter = express.Router();

tracksRouter.get("/", async (req, res, next) => {
    try{
        const filter = req.query.albums ? {albums: req.query.albums} : {};
        if(filter){
            const tracks = await Track.find(filter).populate('album', 'name');
            res.json(tracks);
        } else {
            const tracks = await Track.find();
            res.json(tracks);
        }
    } catch (e) {
        next(e);
    }
});

tracksRouter.post("/", async (req, res, next) => {
    try {
        const album = req.body.album;
        const name = req.body.name;
        const duration = req.body.duration;
        const number = req.body.number;

        const albumId = await Album.findById(album);
        if (!albumId) {
            res.status(404).send("Not Found");
            return;
        }
        const newTrack = new Track({
            album, name, duration, number
        })
        await newTrack.save();
        res.status(200).send(newTrack);

    } catch (error) {
        if(error instanceof Error.ValidationError || error instanceof Error.CastError) {
            res.status(400).send(error);
            return;
        }
        next (error);
    }
});



export default tracksRouter;
