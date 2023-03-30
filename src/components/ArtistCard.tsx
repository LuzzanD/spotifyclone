import { Song } from "../typescript/SongType"
import { NavLink } from "react-router-dom"

interface ArtistData {
    song: Song,
    i: number
}

const ArtistCard: React.FC<ArtistData> = ({song}): JSX.Element => {

    return (
      <NavLink to={`/artist-details/${song?.subtitle?.split(',')[0].split('&')[0]}`}>
        <div className='flex items-center h-[50px] lg:h-[50px] 2xl:h-[60px] p-1 bg-zinc-100 hover:bg-opacity-60'>
          <img className='h-[100%] mr-3 aspect-square bg-zinc-500' src={`${song?.images?.background ? song?.images?.background : song?.images?.coverart}`}/>
          <h2 className='text-xs 2xl:text-sm truncate max-w-fit'>{song?.subtitle?.split(',')[0].split('&')[0]}</h2>
        </div>
      </NavLink>
    )
} 

export default ArtistCard