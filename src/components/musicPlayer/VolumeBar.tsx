import { RxSpeakerOff, RxSpeakerModerate, RxSpeakerLoud } from 'react-icons/rx'
import {useEffect, useRef} from 'react'

interface PropsType {
  handleVolumeIconClick: () => void,
  handleVolumeBarChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  volume: number
}

const VolumeBar: React.FC<PropsType> = ({handleVolumeIconClick, handleVolumeBarChange, volume}): JSX.Element => {

  const volumeRef = useRef<null | HTMLInputElement>(null)
  
  useEffect(() => {
    if (volumeRef.current) volumeRef.current.style.backgroundSize = `${volume * 100}% 100%`
  }, [volume])

  return (
    <div className="flex gap-2 lg:gap-3 items-center w-[20%] md:w-[15%] justify-end">
      <div className="text-xs md:text-sm lg:text-base cursor-pointer hover:scale-110" onClick={handleVolumeIconClick}>
        {
          volume === 0 ? <RxSpeakerOff /> : 
          volume > 0 && volume < 0.5 ? <RxSpeakerModerate /> : <RxSpeakerLoud />
        }
      </div>
      <input
          ref={volumeRef}
          type="range" 
          min="0" 
          max="1" 
          step="any"
          onChange={handleVolumeBarChange}
          value={volume}
          className="hover:cursor-pointer w-[90%] volume-range"
      />
    </div>
  )
}

export default VolumeBar