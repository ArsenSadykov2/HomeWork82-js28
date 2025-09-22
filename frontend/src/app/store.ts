import {configureStore} from "@reduxjs/toolkit";
import {albumsReducer} from "../features/albums/albumsSlice.ts";
import {artistsReducer} from "../features/artists/artistsSlice.ts";
import {tracksReducer} from "../features/tracks/tracksSlice.ts";
import {usersReducer} from "../features/users/usersSlice.ts";
// import storage from 'redux-persist/lib/storage';
//
// const userPersistConfig = {
//     key: 'music:users',
//     storage,
//     whitelist: ['user'],
// };
//
// const rootReducer = combineReducers({
//     albums: albumsReducer,
//     artists: artistsReducer,
//     tracks: tracksReducer,
//     users: persistReducer(userPersistConfig, usersReducer),
// });

export const store = configureStore({
    reducer: {
        albums: albumsReducer,
        artists: artistsReducer,
        tracks: tracksReducer,
        users: usersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;