import { configureStore } from "@reduxjs/toolkit";
import player from "./features/playerSlice";
import { shazamCore } from "./shazamCore/shazamCore";

export const store = configureStore({
    reducer:{
        [shazamCore.reducerPath]: shazamCore.reducer,
        playerSlice: player
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamCore.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

