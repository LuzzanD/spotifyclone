import { Route, Routes } from 'react-router-dom'
import { Sidebar, TopPlays } from './components/index'
import AroundYou from './pages/AroundYou'
import Discover from './pages/Discover'
import TopCharts from './pages/TopCharts'
import TopArtists from './pages/TopArtists'
import ArtistDetails from './pages/ArtistDetails'
import SongDetails from './pages/SongDetails'
import Player from './components/musicPlayer/Player'
import { useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { useState } from 'react'
import Hamburger from './components/Hamburger'

function App() {

  const {isActive} = useSelector((state: RootState) => state.playerSlice)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(prevValue => !prevValue)
  }

  return (
    <div className='flex flex-col sm:flex-row w-[100%] h-full relative'>
      <div className={`w-[150px] h-full lg:h-auto absolute top-0 duration-300 z-10 ${menuOpen ? 'left-0 shadow-[0_30px_50px_5px_rgba(0,0,0,0.3)]' : '-left-[150px]'} lg:shadow-none lg:static lg:w-[15%] bg-zinc-100/40 backdrop-blur-xl lg:bg-zinc-300 px-4 3xl:p-6`}>
        <Sidebar />
      </div>
      <div className='w-full relative sm:w-[68%] lg:w-[65%] bg-zinc-200 px-4 md:px-8 pt-4 md:pt-8 pb-8 sm:pb-36'>
        <Hamburger menuOpen={menuOpen} handleMenuClick={handleMenuClick}/>
        <Routes>
          <Route index path={'/'} element={<Discover />}/>
          <Route path={'/around-you'} element={<AroundYou />}/>
          <Route path={'/top-charts'} element={<TopCharts />}/>
          <Route path={'/top-artists'} element={<TopArtists />}/>
          <Route path={'/artist-details/:artistName'} element={<ArtistDetails />}/>
          <Route path={'/song-details/:songId'} element={<SongDetails />}/>
        </Routes>
      </div>
      <div className='w-full pb-28 sm:pb-0 sm:w-[32%] lg:w-[25%] 2xl:w-[20%] bg-zinc-300 px-4 sm:p-3'>
        <TopPlays />
      </div>
      <div className={`${isActive ? 'block' : 'hidden'} fixed bottom-0 left-0 right-0 z-20`}>
        <Player />
      </div>
    </div>
  )
}

export default App
