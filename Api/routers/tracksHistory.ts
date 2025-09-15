import express from "express";
import Track from "../models/Tracks";
import TrackHistory from "../models/TrackHistory";

const trackHistoryRouter = express.Router();

trackHistoryRouter.post('/', async (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            res.status(401).send({ error: 'Authorization token required' });
            return;
        }

        const trackId = req.body.track;
        if (!trackId) {
            res.status(400).send({ error: 'Track ID is required' });
            return;
        }

        const track = await Track.findById({_id: trackId});
        if (!track) {
            res.status(404).send({ error: 'Track not found' });
            return;
        }

        const trackHistory = new TrackHistory({
            user: trackId,
            track: track._id,
            dateTime: new Date()
        });

        await trackHistory.save();

        res.status(201).send({
            message: 'Track history saved successfully',
            trackHistory
        });
        return;
    } catch (error) {
        next(error);
    }
});

export default trackHistoryRouter;