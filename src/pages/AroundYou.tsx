import { useGetSongsByCountryQuery } from "../redux/shazamCore/shazamCore"
import { Song } from "../typescript/SongType"
import { SongCard, Error, Loader } from "../components"
import { useEffect, useState } from "react"
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import axios from 'axios'

const AroundYou: React.FC = (): JSX.Element => {
  const [country, setCountry] = useState('')
  const {data, error, isFetching, isLoading} = useGetSongsByCountryQuery(country)

  const {activeSong} = useSelector((state: RootState) => state.playerSlice)

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_JLlnxGyXgckMDBjhHzpxIGZnshqhJ')
        .then(response => {
          if (response.data.location.country === 'RS') setCountry('HR') 
          else setCountry(response.data.location.country)
        })
        .catch(error => console.error(error))
  }, [])

  if(isFetching) return <Loader />
  if(error) return <Error />

  return (
    <div>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-zinc-700'>
        Around You:
      </h1>
      <div className='flex flex-wrap gap-4 mt-4 lg:mt-8 items-center justify-center'>
        {data?.map((song: Song, i: number) => {
            return (
              <SongCard 
                index={i} 
                activeSong={activeSong} 
                key={song.key} 
                songsData={data} 
                song={song}
              />
            )
          }
        )}
      </div>
    </div>
  )
}

export default AroundYou