import { useState, useEffect } from 'react'
import { useGetTopChartsByGenreQuery, useGetSongsBySearchQuery, useLazyGetSongsBySearchQuery} from '../redux/shazamCore/shazamCore'
import { Error, Loader, SongCard } from '../components'
import { Song } from '../typescript/SongType'
import { genres } from '../assets/constants'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { HitType } from './ArtistDetails'

interface Genre {
  title: string,
  value: string
}

const Discover: React.FC = (): JSX.Element => {
  const [genre, setGenre] = useState<string>('POP')
  const [inputTerm, setInputTerm] = useState<string>('')
  const [songsData, setSongsData] = useState<Song[]>([])
  
  const {data, error, isFetching} = useGetTopChartsByGenreQuery(genre)
  const [trigger, result] = useLazyGetSongsBySearchQuery()
  
  const {activeSong} = useSelector((state: RootState) => state.playerSlice)
  
  useEffect(() => {
    data && setSongsData(data)
  }, [data])

  if(isFetching) return <Loader />
  if(error) return <Error />

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      const searchData = await trigger(inputTerm)
      const resultArray = searchData.data.tracks.hits.map((hit: HitType) => {
          return hit.track
      })
      setSongsData(resultArray)
      setInputTerm('')
    }
  }

  return (
    <div className=''>
      <div className='flex flex-col xs:flex-row justify-around gap-4'>
        <input
          type='text'
          name='genre'
          placeholder='Search for songs or artists'
          className='h-[26px] sm:h-[30px] lg:h-[36px] text-sm px-4 lg:px-8 outline-none w-full xs:w-[80%] rounded-sm'
          value={inputTerm}
          onChange={e => setInputTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div>
          <select
            value={genre}
            className='h-[26px] sm:h-[30px] lg:h-[36px] text-xs lg:text-sm px-3 w-full rounded-sm outline-none cursor-pointer'
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGenre(e.target.value)}
          >
            {genres.map((genre: Genre) => {
              return (
                <option 
                  key={genre.value} 
                  value={genre.value}
                >
                  {genre.title}
                </option>
              )
            })}
          </select>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 mt-8 items-center justify-center'>
        {(songsData)?.map((song: Song, i: number) => {
          return (
            <SongCard 
              activeSong={activeSong} 
              key={song.key} 
              song={song} 
              songsData={songsData}
              index={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Discover