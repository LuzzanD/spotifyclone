import { useState, useEffect, useRef } from 'react'
import { useGetTopChartsByGenreQuery, useLazyGetSongsBySearchQuery} from '../redux/shazamCore/shazamCore'
import { Error, Loader, SongCard } from '../components'
import { Song } from '../typescript/SongType'
import { genres } from '../assets/constants'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { HitType } from './ArtistDetails'
import { SlMagnifier } from 'react-icons/sl'

interface Genre {
  title: string,
  value: string
}

const Discover: React.FC = (): JSX.Element => {
  const [genre, setGenre] = useState<string>('POP')
  const [inputTerm, setInputTerm] = useState<string>('')
  const [songsData, setSongsData] = useState<Song[]>([])
  const inputRef = useRef(null)
  
  const {data, error, isFetching, isLoading} = useGetTopChartsByGenreQuery(genre)
  const [trigger, result] = useLazyGetSongsBySearchQuery()
  
  const {activeSong} = useSelector((state: RootState) => state.playerSlice)
  
  useEffect(() => {
    data && setSongsData(data)
  }, [data])
  
  if(isFetching) return <Loader />
  if(error) return <Error />

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(inputTerm)
      if(e.key === 'Enter') {
        const searchData = await trigger(inputTerm)
        const resultArray = searchData.data.tracks.hits.map((hit: HitType) => {
            return hit.track
        })
        setSongsData(resultArray)
      }
  }

  const handleMagnifierClick = async () => {
    if(inputTerm){
        const searchData = await trigger(inputTerm)
        const resultArray = searchData.data.tracks.hits.map((hit: HitType) => {
            return hit.track
        })
        setSongsData(resultArray)
    }
  }

  const handleFocus = () => {
    if(inputRef.current) setInputTerm('')
  }
  
  return (
    <div>
      <div className='flex flex-col w-full xs:flex-row justify-around gap-2 sm:gap-4 2xl:gap-8'>
        <div className='flex gap-1 w-full h-[26px] sm:h-[30px] lg:h-[36px]'>
          <SlMagnifier onClick={handleMagnifierClick} className="bg-white cursor-pointer w-[7%] sm:w-[8%] 2xl:w-[5%] h-full py-[0.5em] sm:py-[0.6em] hover:opacity-50"/>
          <input
            type='text'
            name='genre'
            placeholder='Search for songs or artists'
            className='text-sm px-4 lg:px-6 outline-none w-[93%] rounded-sm hover:opacity-50 focus:opacity-50'
            value={inputTerm}
            onChange={e => setInputTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            ref={inputRef}
          />
        </div>
        <div>
          <select
            value={genre}
            className='h-[26px] sm:h-[30px] lg:h-[36px] w-full text-zinc-600 text-xs lg:text-sm px-3 rounded-sm outline-none cursor-pointer hover:opacity-50'
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
        {songsData?.map((song: Song, i: number) => {
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