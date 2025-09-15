import mongoose from "mongoose";

export interface TrackHistory {
    user: mongoose.Schema.Types.ObjectId;
    track: mongoose.Schema.Types.ObjectId;
    dateTime: Date;
}

const TrackHistorySchema = new mongoose.Schema<TrackHistory>({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    track: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Track",
        required: true
    },
    dateTime: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);
export default TrackHistory;