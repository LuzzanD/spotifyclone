import {AiOutlineForward, AiOutlineBackward, AiOutlineStepBackward, AiOutlineStepForward} from 'react-icons/ai'
import {HiPlay, HiPause} from 'react-icons/hi2'
import {useEffect, useRef} from 'react'

interface ControlsType {
  isPlaying: boolean,
  songDuration: number,
  currentSongTime: number,
  handleBackwardClick: () => void,
  handleForwardClick: () => void,
  handlePreviousClick: () => void,
  handleNextClick: () => void,
  handlePlayPause: () => void,
  handleSongBarChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Controls: React.FC<ControlsType>= ({isPlaying, songDuration, currentSongTime, handleBackwardClick, handleForwardClick, handlePreviousClick, handleNextClick, handlePlayPause, handleSongBarChange}): JSX.Element => {

    const songBarRef = useRef<null | HTMLInputElement>(null)
    const currentMinutes = currentSongTime / 60
    const currentSeconds = currentSongTime % 60
    
    useEffect(() => {
      if (songBarRef.current) songBarRef.current.style.backgroundSize = `${currentSongTime/songDuration * 100}% 100%`
    }, [currentSongTime])

  return (
    <div className='flex flex-col items-center w-[50%] md:w-[45%]'>
      <div className="flex items-center text-zinc-900 gap-[8px] md:gap-3 xl:gap-5 mb-2">
          <AiOutlineStepBackward 
            onClick={handlePreviousClick} 
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] cursor-pointer hover:opacity-70"
          />
          <AiOutlineBackward 
            onClick={handleBackwardClick} 
            className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[44px] cursor-pointer hover:opacity-70"
          />
          <div 
            onClick={handlePlayPause} 
            className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px] xl:text-[50px] cursor-pointer hover:opacity-70"
          >
            {isPlaying ? <HiPause /> : <HiPlay />}
          </div>
          <AiOutlineForward 
            onClick={handleForwardClick} 
            className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[44px] cursor-pointer hover:opacity-70"
          />
          <AiOutlineStepForward 
            onClick={handleNextClick} 
            className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] cursor-pointer hover:opacity-70"
          />
      </div>

      <div className="w-full flex items-center justify-between">
        <div 
          className="text-zinc-800 text-center text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium w-[40px]"
        >
          {Math.floor(currentMinutes)}:{currentSongTime % 60 < 10 ? '0' + (currentSeconds).toFixed(0) : (currentSeconds).toFixed(0)}
        </div>
        <input 
          ref={songBarRef} 
          type="range" 
          step='any' 
          value={currentSongTime} 
          min={0} 
          max={songDuration} 
          className="range mx-0 sm:mx-2 md:mx-4"
          onChange={handleSongBarChange}
        />
        <div 
          className="text-zinc-800 text-center text-[10px] sm:text-xs lg:text-sm xl:text-base font-medium w-[40px]"
        >
          {Math.floor(songDuration / 60)}:{songDuration % 60 < 10 ? '0' + (songDuration % 60).toFixed(0) : (songDuration % 60).toFixed(0)}
        </div>
      </div>
    </div>
  )
}

export default Controls