import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import type {Album} from "../../types";

export const fetchAllAlbums = createAsyncThunk<Album[], void>(
    'albums/fetchAllAlbums',
    async () => {
        const response = await axiosApi.get<Album[]>('/albums');
        return response.data;
    }
);

export const fetchAlbumById = createAsyncThunk<Album[], string>(
    'albums/fetchAlbumById',
    async (albumId) => {
        const response = await axiosApi.get<Album[]>('/albums/' + albumId);
        return response.data || null;
    }
);
