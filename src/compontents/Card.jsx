import React from 'react'
import { Link } from 'react-router-dom'

function Card({movie}) {

  const {id, original_title, overview, poster_path} = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: "https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwd29ybGR8ZW58MHx8MHx8fDA%3D" ;
  return (
    <div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3 ">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={image} alt="" />
            </Link>
            <div className="p-5">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
