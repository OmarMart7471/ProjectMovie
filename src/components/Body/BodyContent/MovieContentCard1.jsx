import React from 'react'
import { comparativeGenreList } from '../API/genresList'

const  MovieContentCard1 = (props) =>{
    let image = "https://www.themoviedb.org/t/p/w220_and_h330_face/"+props.img
    let actualGen = []
    actualGen = props.genres

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl  md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 rounded-md ring ring-sky-300">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row ">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="uppercase font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6 text-center">
             {props.title}
            </h2>
            <p className="text-white text-base md:text-lg text-justify">
              {props.desc}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            {
                comparativeGenreList.filter((d) => {
                    actualGen.filter((s) => {
                        if (d.id === s) {
                            
                        }
                    })
                })
            }

          </div>
        </div>
        <img alt="logo" wclassth="450" height="450" src={image} />
      </div>
    </div>
  )
}
export {MovieContentCard1}