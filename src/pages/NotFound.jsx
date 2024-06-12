import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdArrowForward} from 'react-icons/io'
const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-2'>
      <h1 className='text-4xl text-text-base sm:text-5xl'>oops!...</h1>
      <p className='text-lg'>it seems this page was not found</p>
      <Link to='/' className='flex items-center gap-1 underline transition-all transition-300 hover:gap-2 text-accent'>Return home <IoMdArrowForward/> </Link>
    </div>
  )
}

export default NotFound
