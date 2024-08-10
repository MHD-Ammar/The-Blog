"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navbar() {
  const pathName = usePathname();
   const linkStyle ='min-w-20 p-1 text-center rounded-3xl'
  return (
    <div className='h-24 flex justify-between items-center'>
      <div className='text-2xl font-bold'>THE-BLOG</div>
      <div className='flex items-center gap-5 min-w'>
        <Link href='/' className={pathName==="/"?`bg-[--text] text-[--bg] ${linkStyle}`:''}>Home</Link>
        <Link href='/about' className={pathName==="/about"?`bg-[--text] text-[--bg] ${linkStyle}`:''}>about</Link>
        <Link href='/contact' className={pathName==="/contact"?`bg-[--text] text-[--bg] ${linkStyle}`:''}>Contact</Link>
        <Link href='/blog' className={pathName==="/blog"?`bg-[--text] text-[--bg] ${linkStyle}`:''}>Blog</Link>


      </div>
    </div>
  )
}
