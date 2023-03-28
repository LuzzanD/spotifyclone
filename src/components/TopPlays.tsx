import { Song } from '../typescript/SongType'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Loader, Error, TopChartCard, ArtistCard } from './'
import { useGetTopWorldChartsQuery } from '../redux/shazamCore/shazamCore'
import { NavLink } from 'react-router-dom'

const TopPlays = (): JSX.Element => {
    const {data, error, isFetching} = useGetTopWorldChartsQuery()
    const {activeSong} = useSelector((state: RootState) => state.playerSlice)
  
    if(isFetching) return <Loader />
    if(error) return <Error />
 
  return (
    <div className='flex flex-col'>
        <div className="mt-4 sm:mt-6 mb-4 sm:mb-6">
            <div className='flex justify-between items-baseline'>
                <p className="text-zinc-700 text-base 2xl:text-lg mb-3 2xl:mb-4">Top Hits:</p>
                <NavLink to={'/top-charts'}>
                    <span className='text-zinc-700 text-xs 2xl:text-sm hover:opacity-60'>View more</span>
                </NavLink>
            </div>
            <div className='flex flex-col gap-2'>
                {data?.slice(0, 5).map((song: Song, i: number) => {
                    return (
                        <TopChartCard 
                            key={song.key} 
                            song={song} 
                            songsData={data} 
                            index={i}
                            activeSong={activeSong}
                        />
                    )
                })}
            </div>
        </div>
        <div>
            <div className='flex justify-between items-baseline'>
                <p className="text-zinc-700 text-base 2xl:text-lg mb-3 2xl:mb-4">Top Artists:</p>
                <NavLink to={`/top-artists`}>
                    <span className='text-zinc-700 text-xs 2xl:text-sm hover:opacity-60'>View more</span>
                </NavLink>
            </div>
            <div className='flex flex-col gap-2'>
                {data?.slice(0, 5).map((song: Song, i: number) => {
                    return (
                        <ArtistCard 
                            key={song.key} 
                            song={song}
                            i={i}
                        />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default TopPlays