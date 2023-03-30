import { useParams } from "react-router-dom"
import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from "../redux/shazamCore/shazamCore"
import { TopChartCard, Loader, Error } from "../components"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const SongDetails: React.FC = (): JSX.Element => {

  const { songId } = useParams() as {songId: string}
  const {activeSong} = useSelector((state: RootState) => state.playerSlice)

  const {data: songData, error, isFetching: isFetchingSongData} = useGetSongDetailsQuery(songId)
  const {data: relatedSongsData, isFetching} = useGetRelatedSongsQuery(songId)

  if(isFetchingSongData || isFetching) return <Loader />
  if(error) return <Error />

  return (
    <div>
        <div className='flex mb-8'>
            <NavLink className="w-[30%]" to={`/artist-details/${activeSong?.subtitle?.split(',')[0].split('&')[0]}`}>
                <img className='hover:opacity-70 aspect-square bg-zinc-600' src={`${songData?.images?.background ? songData?.images?.background : songData?.images?.coverart}`}/>
            </NavLink>
            <div className='flex w-[70%] flex-col ml-6 xs:ml-8'>
                <h1 className="text-base xs:text-xl sm:text-2xl lg:text-4xl mb-1 xs:mb-3">{songData?.title}</h1>
                <NavLink to={`/artist-details/${activeSong?.subtitle?.split(',')[0].split('&')[0]}`}>
                    <h2 className="text-xs xs:text-base sm:text-lg lg:text-2xl hover:opacity-50">{songData?.subtitle}</h2>
                </NavLink>
            </div>
        </div>
        <div className="mb-4 sm:mb-8 lg:mb-12">
            <h1 className='text-base sm:text-lg lg:text-2xl mb-2 md:mb-4'>Lyrics:</h1>
            {songData?.sections[1]?.text ?
            songData?.sections[1]?.text?.map((line: string, i: number) =>{
                return line ? <p className='text-sm' key={i}>{line}</p> : <br key={i}/>
            }) : 
            <p className="text-lg sm:text-xl lg:text-2xl">Sorry, no lyrics provided for this track.</p>
            }
        </div>
        <div className='flex flex-col gap-3'>
            {relatedSongsData?.map((song, i) => {
                return (
                    <TopChartCard 
                        key={song.key} 
                        song={song} 
                        songsData={relatedSongsData} 
                        index={i}
                        activeSong={activeSong}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default SongDetails