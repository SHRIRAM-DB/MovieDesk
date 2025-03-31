import Card from '../compontents/Card';
import useFetch from '../hooks/useFetch';

function Movie({apiPath}) {

  const {data: movies} = useFetch(apiPath)

  return (
    <main>
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

export default Movie
