import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import type {Track} from "../../types";

export const fetchAllTracks = createAsyncThunk<Track[], void>(
    'tracks/fetchAllTracks',
    async () => {
        const response = await axiosApi.get<Track[]>('/tracks');
        return response.data;
    }
);

export const fetchTrackById = createAsyncThunk<Track[], string>(
    'tracks/fetchTrackById',
    async (trackId) => {
        const response = await axiosApi.get<Track[]>('/tracks/' + trackId);
        return response.data || null;
    }
);
