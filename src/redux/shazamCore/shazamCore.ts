import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Song } from '../../typescript/SongType'

export const shazamCore = createApi({
  reducerPath: 'shazamCore',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://shazam-core.p.rapidapi.com' ,
    prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', '1341fe008fmshf3dc7916190e27ap1f4e7bjsn037e44f05c4f')
      return headers
    }}),
  endpoints: (builder) => ({
    getTopChartsByGenre: builder.query<Song[], string>({ query: (genre) =>`/v1/charts/genre-world?genre_code=${genre}`}),
    getRelatedSongs: builder.query<Song[], string>({ query: (songId) =>`/v1/tracks/related?track_id=${songId}`}),
    getSongsByCountry: builder.query<Song[], string>({ query: (songId) =>`/v1/charts/country?country_code=${songId}`}),
    getTopWorldCharts: builder.query<Song[], void>({ query: () => `/v1/charts/world`}),
    getSongDetails: builder.query({ query: (songId: string) =>`/v1/tracks/details?track_id=${songId}`}),
    getSongsBySearch: builder.query({ query: (artistName: string) =>`/v1/search/multi?query=${artistName}&search_type=SONGS_ARTISTS`}),
  }),
})


export const {
  useGetTopChartsByGenreQuery, 
  useGetSongDetailsQuery, 
  useGetRelatedSongsQuery, 
  useGetSongsByCountryQuery,
  useGetSongsBySearchQuery,
  useLazyGetSongsBySearchQuery,
  useGetTopWorldChartsQuery
} = shazamCore