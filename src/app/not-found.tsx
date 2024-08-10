import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='text-center'>
        <h2 className='text-5xl'>Not found</h2>
        <p className='text-lg text-slate-900 '>Sorry, the page you are looking for does not exist.</p>
        <Link href='/'className='text-blue-400'>Retrun Home</Link>
        </div>
    </div>
  )
}
