import express from "express";
import Album from "../models/Album";
import {Error} from "mongoose";
import Artist from "../models/Artist";
import {imagesUpload} from "../multer";

const albumsRouter = express.Router();

albumsRouter.get("/", async (req, res, next) => {
    try{
        const filter = req.query ? {artist: req.query.artist} : {};
        if(filter){
            const albums = await Album.find(filter).populate("artist");
            res.json(albums);
        } else {
            const albums = await Album.find();
            res.json(albums);
        }
    } catch (e) {
        next(e);
    }
});

albumsRouter.post("/",imagesUpload.single('image'), async (req, res, next) => {
    try {
        const artist = req.body.artist;
        const name = req.body.name;
        const releaseDate = req.body.releaseDate;

        const artistId = await Artist.findById(artist);
        if (!artistId) {
            res.status(404).send("Not Found");
            return;
        }
        const newAlbum = new Album({
            artist, name, releaseDate,
            image: req.file ? 'image/' + req.file.filename : null,
        })
        await newAlbum.save();
        res.status(200).send(newAlbum);

    } catch (error) {
        if(error instanceof Error.ValidationError || error instanceof Error.CastError) {
            res.status(400).send(error);
            return;
        }
        next (error);
    }
});

albumsRouter.get("/:id", async (req, res, next) => {
    try{
        if(!req.params.id){
            res.status(404).send("Not Found");
            return;
        }
        const {id} = req.params;

        const album = await Album.findById(id).populate("artist", "name");
        if(!album){
            res.status(404).send("Not Found");
            return;
        }
        res.status(200).send(album);
    } catch (e){
        next(e);
    }

})



export default albumsRouter;
