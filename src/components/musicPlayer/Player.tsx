import Controls from "./Controls"
import VolumeBar from "./VolumeBar"
import SongInfo from "./SongInfo"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { useState, useEffect, useRef} from "react"
import { nextSong, playPause, previousSong } from "../../redux/features/playerSlice"
import { useDispatch } from "react-redux"

const Player: React.FC = (): JSX.Element => {
  const [volume, setVolume] = useState<number>(0.3)
  const [savedVolume, setSavedVolume] = useState<number>(0.3)
  const [songDuration, setSongDuration] = useState<number>(0)
  const [currentSongTime, setCurrentSongTime] = useState<number>(0)
  const {isPlaying, activeSong} = useSelector((state: RootState) => state.playerSlice)

  const dispatch = useDispatch()
 
  const audioSrc = activeSong?.hub?.actions[1]?.uri ? activeSong?.hub?.actions[1]?.uri : ''
  
  const audioRef = useRef<HTMLAudioElement>(new Audio())
  const intervalRef = useRef<number>()
  const isReady = useRef<boolean>()

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, [])


  const startTimer = () => {
	  clearInterval(intervalRef.current)
	  intervalRef.current = setInterval(() => {
	    if (audioRef.current.ended) {
	      dispatch(nextSong())
	    } else {
	      setCurrentSongTime(Math.ceil(audioRef.current.currentTime))
	    }
	  }, 1000)
	}


  useEffect(() => {
    if (isPlaying) {
      startTimer()
      audioRef.current.play()
    } else {
      audioRef.current.pause()
      clearInterval(intervalRef.current)
    }
  }, [isPlaying])
  

  // useEffect(() => {
  //   audioRef.current.pause()
  //   audioRef.current = new Audio(audioSrc)
    
  //   if (isReady.current) {
  //     dispatch(playPause())
  //     audioRef.current.volume = volume
  //     audioRef.current.onloadedmetadata = () => setSongDuration(audioRef.current.duration)
  //   } else {
  //     isReady.current = true
  //   }
  // }, [activeSong])

  useEffect(() => {
    audioRef.current.pause()
    setCurrentSongTime(0)
    audioRef.current = new Audio(audioSrc)
    audioRef.current.volume = volume
    audioRef.current.onloadedmetadata = () => setSongDuration(audioRef.current.duration)
    audioRef.current.play()
    if(!isPlaying) {
      audioRef.current.play()
      dispatch(playPause())
    }
  }, [activeSong])



  const handleBackwardClick = (): void => {
    if(audioRef.current.currentTime < 10) setCurrentSongTime(0)
    audioRef.current.currentTime = audioRef.current.currentTime - 10
    setCurrentSongTime(audioRef.current.currentTime)
  }

  const handleForwardClick = () => {
    if((audioRef.current.currentTime + 10) > audioRef.current.duration) setCurrentSongTime(audioRef.current.duration)
    audioRef.current.currentTime = audioRef.current.currentTime + 10
    setCurrentSongTime(audioRef.current.currentTime)
  }

  const handlePreviousClick = () => {
    dispatch(previousSong())
  }

  const handleNextClick = () => {
    dispatch(nextSong())
  }

  const handlePlayPause = () => {
    dispatch(playPause())
  }

  const handleSongBarChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    audioRef.current.currentTime = Number(e.target.value)
    setCurrentSongTime(audioRef.current.currentTime)
  }


  useEffect(() => {
    if(audioRef.current) audioRef.current.volume = volume
  }, [volume])

  const handleVolumeBarChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVolume(Number(e.target.value))
  }

  const handleVolumeIconClick = (): void => {
    if(volume !== 0) {
      setSavedVolume(volume)
      setVolume(0)
    } else setVolume(savedVolume)
  }


  return (
    <div className="flex items-center py-4 px-4 md:px-6 lg:px-8 xl:px-12 w-full justify-between bg-white/20 backdrop-blur-xl shadow-[0_-20px_70px_5px_rgba(0,0,0,0.3)]">
        <SongInfo 
          activeSong={activeSong}
        />
        <Controls 
          handleBackwardClick={handleBackwardClick} 
          handleForwardClick={handleForwardClick}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
          handlePlayPause={handlePlayPause}
          handleSongBarChange={handleSongBarChange}
          isPlaying={isPlaying} 
          songDuration={songDuration} 
          currentSongTime={currentSongTime}
        />
        <VolumeBar 
          handleVolumeIconClick={handleVolumeIconClick}
          handleVolumeBarChange={handleVolumeBarChange}
          volume={volume}
        />
    </div>
  )
}

export default Player