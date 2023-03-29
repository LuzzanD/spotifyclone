import { Song } from "../../typescript/SongType"
import { NavLink } from "react-router-dom"

interface SongType {
  activeSong: Song
}

const SongInfo: React.FC<SongType> = ({activeSong}): JSX.Element => {

  return (
    <div className="flex justify-between items-center w-[20%] md:w-[15%]">
        <NavLink className="hidden sm:block w-[30%] hover:opacity-50" to={`/song-details/${activeSong?.key}`}>
          <img src={activeSong.images?.coverart}/>
        </NavLink>
        <div className="flex flex-col w-full sm:w-[60%]">
          <NavLink to={`/song-details/${activeSong?.key}`}>
            <h2 className="mb-[2px] sm:mb-0 text-[10px] xs:text-xs lg:text-base xl:text-lg text-zinc-900 hover:opacity-50 truncate max-w-fit">{activeSong.title}</h2>
          </NavLink>
          <NavLink to={`/artist-details/${activeSong?.subtitle?.split(',')[0].split('&')[0]}`}>
            <h3 className="text-[8px] xs:text-[10px] lg:text-xs xl:text-sm text-zinc-900 hover:opacity-50 truncate max-w-fit">{activeSong.subtitle}</h3>
          </NavLink>
        </div>
    </div>
  )
}

export default SongInfo