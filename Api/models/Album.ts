import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: null,
    }
});

const Album = mongoose.model('Album', AlbumSchema);
export default Album;