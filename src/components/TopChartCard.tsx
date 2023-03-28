import { NavLink } from "react-router-dom"
import { Song } from "../typescript/SongType"
import { PlayPause } from "./"
import { useDispatch } from "react-redux"
import { setSongsList, setActiveSong, playPause, setSongIndex } from "../redux/features/playerSlice"

interface SongData {
  song: Song,
  songsData: Song[],
  index: number,
  activeSong: Song
}

const TopChartCard: React.FC<SongData> = ({song, songsData, index, activeSong}): JSX.Element => {

  const dispath = useDispatch()
  const handleClick = () => {
    if(song.key !== activeSong.key) dispath(setActiveSong(song))
    dispath(setSongsList(songsData))
    dispath(playPause())
    dispath(setSongIndex(index))
  }

  return (
    <div className='flex w-full items-center h-[50px] lg:h-[50px] 2xl:h-[60px] p-1 bg-zinc-100 hover:bg-opacity-60 hover:cursor-pointer'>
        <img className='h-[100%] aspect-square mr-3 bg-zinc-500' src={song?.images?.coverart ? song?.images?.coverart : song?.images?.background}/>
        <div className='flex flex-col h-[100%] w-[50%] justify-center'>
            <NavLink to={`/song-details/${song?.key}`}>
                <p className='text-sm sm:text-xs 2xl:text-sm truncate max-w-fit hover:opacity-50 xs:mb-1'>{song.title}</p>
            </NavLink>
            <NavLink to={`/artist-details/${song?.subtitle?.split(',')[0].split('&')[0]}}`}>
                <p className='text-xs sm:text-[10px] 2xl:text-xs truncate max-w-fit hover:opacity-50'>{song?.subtitle}</p>
            </NavLink>
        </div>
        <div onClick={handleClick} className='text-2xl sm:text-xl md:text-2xl text-zinc-600 w-fit my-auto ml-auto mr-1 md:mr-2 hover:opacity-70'>
          <PlayPause song={song} />
        </div>
    </div>
  )
}

export default TopChartCard