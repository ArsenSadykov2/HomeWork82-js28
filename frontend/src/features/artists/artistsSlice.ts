import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Artist} from "../../types";
import {fetchAllArtists} from "./artistsThunks.ts";

interface ArtistsState {
    items: Artist[];
    item: Artist | null;
    fetchLoading: boolean;
}

const initialState: ArtistsState = {
    items: [],
    item: null,
    fetchLoading: false,
}

export const artistsSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllArtists.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchAllArtists.fulfilled, (state, {payload: artists}) => {
                state.items = artists;
                state.fetchLoading = false;
            })
            .addCase(fetchAllArtists.rejected, (state) => {
                state.fetchLoading = false;
            })
    }
});

export const artistsReducer = artistsSlice.reducer;

export const selectArtists = (state: RootState) => state.artists.items;
export const selectOneArtist = (state: RootState) => state.artists.item;
export const selectArtistsLoading = (state: RootState) => state.artists.fetchLoading;