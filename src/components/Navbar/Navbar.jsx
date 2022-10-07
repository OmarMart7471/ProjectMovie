import React from 'react'

const Navbar = () => {
  return (

  <section className="relative">
    <nav className="flex justify-between bg-gradient-to-r from-teal-900 to-sky-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <img className="h-9" src="src\images\movie-city-logo.svg" alt="logo"/>
        </a>
        <ul className="hidden md:flex px-4 mx-auto text-xl font-extrabold font-heading space-x-12">
          <li><a className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-red-300 to-rose-400 hover:text-sky-400/75" href="#">Popular movies</a></li>
          <li><a className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-amber-100 hover:text-sky-400/75" href="#">Movies by genders</a></li>
          <li><a className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-lime-200 hover:text-sky-400/75" href="#">Upcoming movies</a></li>
          <li><a className="uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-violet-300 hover:text-sky-400/75" href="#">Top rated movies</a></li>
        </ul>
      </div>
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          </svg>
      </a>
    </nav>
    
  </section>

  )
}

export {Navbar}