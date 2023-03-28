import { HiPlay, HiPause } from 'react-icons/hi2'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Song } from '../typescript/SongType'

interface SongType {
  song: Song
}
const PlayPause: React.FC<SongType>= ({song}): JSX.Element => {

  const {isPlaying, activeSong} = useSelector((state: RootState) => state.playerSlice)

  return (
    <div>
        {(isPlaying && activeSong.key === song.key) ? <HiPause className="mr-[2px]"/> : <HiPlay className="ml-[2px]"/>}
    </div>
  )
}

export default PlayPause