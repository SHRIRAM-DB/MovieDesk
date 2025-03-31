import React from 'react'
import Card from '../compontents/Card';
import useFetch from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

function Search({apiPath}) {

  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")

  const {data: movies} = useFetch(apiPath, queryTerm)


  return (
    <main className='min-h-185'>
      <section className='py-7 mx-30 text-center'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length === 0 ? `No result found for '${queryTerm}'`: `Result for '${queryTerm}'`}</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap max-xl:justify-center'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}          
        </div>
      </section>
    </main>
  )
}

export default Search
