import { SongCard, Error, Loader } from "../components"
import { Song } from "../typescript/SongType"
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'
import { useGetTopWorldChartsQuery } from "../redux/shazamCore/shazamCore"

const TopCharts: React.FC = (): JSX.Element => {

  const {data, error, isFetching} = useGetTopWorldChartsQuery()
  const {activeSong} = useSelector((state: RootState) => state.playerSlice)

  if(error) return <Error />
  if(isFetching) return <Loader />

  return (
    <div>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-zinc-700'>
        World Top Charts:
      </h1>
      <div className='flex flex-wrap gap-4 mt-4 lg:mt-8 items-center justify-center'>
        {data?.map((song: Song, i: number) => {
            return (
              <SongCard 
                index={i} 
                activeSong={activeSong} 
                key={song.key} 
                song={song} 
                songsData={data}
              />
            )
          }
        )}
      </div>
    </div>
  )
}

export default TopCharts