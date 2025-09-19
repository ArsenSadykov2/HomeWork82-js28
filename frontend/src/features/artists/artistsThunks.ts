import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import type {Artist} from "../../types";

export const fetchAllArtists = createAsyncThunk<Artist[], void>(
    'artists/fetchAllAlbums',
    async () => {
        const response = await axiosApi.get<Artist[]>('/artists');
        return response.data;
    }
);

export const fetchArtistById = createAsyncThunk<Artist[], string>(
    'artists/fetchAlbumById',
    async (artistId) => {
        const response = await axiosApi.get<Artist[]>('/artists/' + artistId);
        return response.data || null;
    }
);
