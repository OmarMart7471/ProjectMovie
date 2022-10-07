import React from 'react'
import { useState } from 'react'
import { popularList } from './API/getPopularList'
import { MovieContentCard1 } from './BodyContent/MovieContentCard1'
const Body = () => {


    return (
        <div className=" w-full sticky top-0 px-6 bg-zinc-900 relative py-6">
            {
            popularList.map(mv=>{
                return <MovieContentCard1 key={mv.id} title={mv.original_title} desc={mv.overview} img={mv.poster_path} genres={mv.genre_ids} />
            })
            }
        </div>
        )
}
      
export {Body}