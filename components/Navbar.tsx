import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='flex justify-between items-center bg-white shadow-lg py-2 px-4 md:px-12'>
      <Link href="https://care.thinkroman.com/" target="_blank">
        <Image src="/tr-care-logo.webp" alt="trCare Logo" width={300} height={100} className='w-48 md:w-80' />
      </Link>
      <div className="">
        <Link href="https://think-roman-a-iv1.vercel.app/index" target="_blank" rel="noopener noreferrer" className='font-semibold text-black text-sm md:text-base'>
          ThinkRoman Ai
        </Link>
      </div>
    </header>
  )
}

export default Navbar
