import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Song } from '../../typescript/SongType'

export interface StateType {
    songsList: Song[],
    isActive: boolean,
    isPlaying: boolean,
    activeSong: Song,
    songIndex: number
}

const initialState: StateType = {
    songsList: [],
    isActive: false,
    isPlaying: false,
    activeSong: {} as Song,
    songIndex: 0
}

const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        setActiveSong: (state: StateType, action: PayloadAction<Song>): void => {
            state.activeSong = action.payload
            state.isActive = true
        },
        playPause: (state: StateType): void => {
            state.isPlaying = !state.isPlaying
        },
        setSongsList: (state: StateType, action: PayloadAction<Song[]>): void => {
            state.songsList = action.payload
        },
        setSongIndex: (state: StateType, action: PayloadAction<number>): void => {
            state.songIndex = action.payload
        },
        nextSong: (state: StateType): void => {
            if (state.songIndex + 1 > state.songsList.length - 1) state.songIndex = 0
            else state.songIndex = state.songIndex + 1
            state.activeSong = state.songsList[state.songIndex]
        },
        previousSong: (state: StateType): void => {
            if (state.songIndex - 1 < 0 ) state.songIndex = state.songsList.length - 1
            else state.songIndex = state.songIndex - 1
            state.activeSong = state.songsList[state.songIndex]
        }
    }
})

export default playerSlice.reducer
export const { setActiveSong, playPause, setSongsList, setSongIndex, previousSong, nextSong } = playerSlice.actions