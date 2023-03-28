import { Song } from '../typescript/SongType'
import { NavLink } from 'react-router-dom'
import PlayPause from './PlayPause'
import { useDispatch } from 'react-redux'
import { setActiveSong, playPause, setSongsList, setSongIndex } from '../redux/features/playerSlice'

interface SongData {
  song: Song,
  songsData: Song[],
  activeSong: Song,
  index: number
}

const SongCard: React.FC<SongData> = ({activeSong, song, songsData, index}): JSX.Element => { 

  const dispatch = useDispatch()
  
  const handleClick = () => {
    if(song.key !== activeSong.key) dispatch(setActiveSong(song))
    dispatch(setSongsList(songsData))
    dispatch(playPause())
    dispatch(setSongIndex(index))
  }

  return (
      <div className='relative flex flex-col w-[45%] xs:w-[30%] lg:w-[30%] xl:w-[23%] p-2 bg-zinc-300'>
        <div onClick={handleClick} className="flex justify-center items-center group hover:cursor-pointer">
          <img  
            className={`mb-2 ${activeSong.key === song.key ? 'opacity-30' : 'opacity-100'} bg-zinc-500 w-full aspect-square group-hover:opacity-30`} 
            src={song?.images?.coverart ? song.images.coverart : song?.images?.background}
          />
          <div className={`text-4xl xs:text-5xl md:text-6xl text-zinc-900 ${activeSong.key === song.key ? 'block' : 'hidden'} w-fit group-hover:block hover:opacity-80 absolute`}>
            <PlayPause song={song}/>
          </div>
        </div>
        <NavLink to={`/song-details/${song?.key}`}>
          <p className='text-xs md:text-sm truncate max-w-fit hover:opacity-50 lg:mb-1'>{song?.title}</p>
        </NavLink>
        <NavLink to={`/artist-details/${song?.subtitle?.split(',')[0].split('&')[0]}`}>
          <p className='text-[10px] md:text-xs truncate max-w-fit hover:opacity-50'>{song?.subtitle}</p>
        </NavLink>
    </div>
  )
}

export default SongCard