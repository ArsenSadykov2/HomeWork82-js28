import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import type {Album} from "../../types";
import {fetchAlbumById, fetchAllAlbums} from "./albumsThunks.ts";

interface AlbumsState {
    items: Album[];
    item: Album | null;
    fetchLoading: boolean;
}

const initialState: AlbumsState = {
    items: [],
    item: null,
    fetchLoading: false,
}

export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllAlbums.pending, (state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchAllAlbums.fulfilled, (state, {payload: albums}) => {
                state.items = albums;
                state.fetchLoading = false;
            })
            .addCase(fetchAllAlbums.rejected, (state) => {
                state.fetchLoading = false;
            })
            .addCase(fetchAlbumById.pending,(state) => {
                state.fetchLoading = true;
            })
            .addCase(fetchAlbumById.fulfilled,(state, {payload: albums}) => {
                state.items = albums;
                state.fetchLoading = false;
            })
            .addCase(fetchAlbumById.rejected,(state) => {
                state.fetchLoading = false;
            })
    }
});

export const albumsReducer = albumsSlice.reducer;

export const selectAlbums = (state: RootState) => state.albums.items;
export const selectOneAlbum = (state: RootState) => state.albums.item;
export const selectAlbumsLoading = (state: RootState) => state.albums.fetchLoading;