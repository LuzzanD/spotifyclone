interface HamburgerProps {
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger: React.FC<HamburgerProps> = ({menuOpen, setMenuOpen}): JSX.Element => {

  const handleClick = () => {
    setMenuOpen(prevValue => !prevValue)
  }

  return (
      <div className='block relative z-30 lg:hidden md:-top-[15px] md:-left-[15px] mb-6 md:mb-2 hover:opacity-70' onClick={handleClick}>
        <div className={`w-[15px] h-[1px] bg-zinc-800 duration-300 mb-[3px] ${menuOpen ? 'rotate-45 translate-y-[4px]': 'rotate-0'}`}></div>
        <div className={`w-[15px] h-[1px] bg-zinc-800 duration-300 ${menuOpen ? '-translate-x-[40px]' : 'translate-x-0'}`}></div>
        <div className={`w-[15px] h-[1px] bg-zinc-800 duration-300 mt-[3px] ${menuOpen ? '-rotate-45 -translate-y-[4px]': 'rotate-0'}`}></div>
      </div>
  )
}

export default Hamburger