import { useGetSongsBySearchQuery } from "../redux/shazamCore/shazamCore"
import { useParams } from "react-router-dom"
import { Song } from "../typescript/SongType"
import { Loader, Error, TopChartCard } from "../components"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export interface HitType {
  track: Song
}

const ArtistDetails: React.FC = (): JSX.Element => {
  const {artistName} = useParams() as {artistName: string}
  const {data, error, isFetching} = useGetSongsBySearchQuery(artistName)
  const { activeSong } = useSelector((state: RootState) => state.playerSlice) 

 if(isFetching) return <Loader />
 if(error) return <Error />

  const songsData = data?.tracks?.hits.map((hit: HitType) => {
    return hit.track
  })

  return (
    <div>
      <div className='flex mb-8 lg:mb-16'>
          <img className='w-[120px] xs:w-[150px] bg-zinc-500 aspect-square' src={`${data?.tracks?.hits[0]?.track?.images?.background ? data?.tracks?.hits[0]?.track?.images?.background : data?.tracks?.hits[0]?.track?.images?.coverart}`}/>
          <h1 className="text-2xl xs:text-4xl lg:text-5xl text-zinc-700 ml-6 xs:ml-8 2xl:ml-16">{data?.tracks?.hits[0]?.track?.subtitle?.split(',')[0].split('&')[0]}</h1>
      </div>
      <div className='flex flex-col gap-3'>
        {data?.tracks?.hits.map((hit: HitType, i: number): JSX.Element => (
            <TopChartCard 
              key={hit?.track?.key} 
              song={hit?.track} 
              songsData={songsData} 
              index={i}
              activeSong={activeSong}
            />
          ))
        }
        </div>
    </div>
  )
}

export default ArtistDetails