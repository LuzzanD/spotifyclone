import { useGetTopWorldChartsQuery } from "../redux/shazamCore/shazamCore"
import { Error, Loader, ArtistCard } from '../components'
import { Song } from "../typescript/SongType"

const TopArtists: React.FC = (): JSX.Element => {

  const {data, error, isFetching} = useGetTopWorldChartsQuery()

  if(isFetching) return <Loader />
  if(error) return <Error />

  return (
    <div>
      <h1 className='text-xl sm:text-2xl lg:text-3xl text-zinc-700'>
        World Top Artists:
      </h1>
      <div className='flex flex-col gap-2 mt-4 lg:mt-8'>
        {data?.map((song: Song, i: number) => {
          return (
            <ArtistCard 
              key={song.key} 
              i={i} 
              song={song}
            />
          )
        })}
      </div>
    </div>
  )
}

export default TopArtists