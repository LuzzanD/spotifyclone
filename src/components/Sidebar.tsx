import { NavLink } from 'react-router-dom'
import { links } from '../assets/constants'

const Sidebar = () => {

  return (
    <div className='flex flex-col mt-16 mx-0 xl:mx-2 gap-4'>
      {links.map(link => {
        return (
          <NavLink className='' key={link.name} to={link.to}>
            <div className='flex items-center hover:opacity-50 lg:text-base 2xl:text-lg gap-2 xl:gap-4'>
              <link.icon className='lg:text-xl 2xl:text-3xl text-zinc-700' />
              <h2 className="text-zinc-700">{link.name}</h2>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Sidebar