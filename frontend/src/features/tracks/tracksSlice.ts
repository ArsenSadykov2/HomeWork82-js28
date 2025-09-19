import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Track} from "../../types";
import {fetchAllTracks, fetchTrackById} from "./tracksThunks.ts";


interface TracksState {
    items: Track[];
    item: Track | null;
    fetchLoading: boolean;
}

const initialState: TracksState = {
    items: [],
    item: null,
    fetchLoading: false,
}

export const tracksSlice = createSlice({
    name: "tracks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTracks.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchAllTracks.fulfilled, (state, {payload: tracks}) => {
                state.items = tracks;
                state.fetchLoading = false;
            })
            .addCase(fetchAllTracks.rejected, (state) => {
                state.fetchLoading = false;
            })
            .addCase(fetchTrackById.pending,(state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchTrackById.fulfilled,(state, {payload: tracks}) => {
                state.items = tracks;
                state.fetchLoading = false;
            })
            .addCase(fetchTrackById.rejected,(state) => {
                state.fetchLoading = false;
            })
    }
});

export const tracksReducer = tracksSlice.reducer;

export const selectTracks = (state: RootState) => state.tracks.items;
export const selectOneTrack = (state: RootState) => state.tracks.item;
export const selectTracksLoading = (state: RootState) => state.tracks.fetchLoading;