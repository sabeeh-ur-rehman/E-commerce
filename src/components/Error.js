import React from 'react'
import Button from './button/Button'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='p-8 h-[50vh] w-full flex flex-col items-center justify-center'>
        <h1 className='font-poppins font-medium text-8xl'>404 NOT FOUND</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/"><Button className='bg-Secondary2 text-Text'>Go To Home</Button></Link> 
    </div>
  )
}

export default Error