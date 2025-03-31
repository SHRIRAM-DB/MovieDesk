import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
  <main className='text-center'>
    <section className='flex flex-col justify-center px-2'>
      <div className='flex items-center flex-col my-4'>
        <p className='text-7xl text-gray-700 font-bold my-9 dark:text-white'>404 Oops!</p>
        <div className='max-w-md'>
          <img className='rounded' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="404-image" />
        </div>
        <Link to="/">
          <button className='text-white text-xl cursor-pointer m-5 border-2 border-solid px-4 py-0.5 bg-red-500 '>Back to Home</button>
        </Link>
      </div>
    </section>
  </main>
  )
}

export default PageNotFound;
