const Error: React.FC = (): JSX.Element => {
  return (
    <div className="h-screen w-full">
      <h2 className='text-zinc-500 w-full text-lg md:text-xl lg:text-2xl text-center absolute left-0 top-[40%]'>
        Sorry, something went wrong.
      </h2>
    </div>
  )
}

export default Error