import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
   const [nav, setNav] = useState(false);

   const handleNav = () => {
      setNav(!nav);
   }

  return (

   <div>
     <nav className='flex justify-between px-4 md:px-28 pt-8 pb-8 md:bg-gradient-to-r from-blue-800 via-purple-700 to-pink-500 bg-black'>
       <div>
         <Link href="/" ><a><h1 className='text-3xl border-2 p-1 md:text-5xl'>TECHEARTH</h1></a></Link>
       </div>
       <div className='text-2xl space-x-24 hidden md:flex'>
         <Link href="/" ><a className='hover:underline hover:cursor-pointer'>Home</a></Link>
         <Link href="/ui" ><a className='hover:underline hover:cursor-pointer'>UI/UX</a></Link>
         <Link href="/mobile" ><a className='hover:underline hover:cursor-pointer'>Mobile Dev</a></Link>
         <Link href="/web" ><a className='hover:underline hover:cursor-pointer'>Web Dev</a></Link>
         <Link href="/contact"><a className='border-2 rounded-r-full rounded-l-full pt-2 pb-1 pl-6 pr-6 cursor-pointer'>Contact Us</a></Link>
        </div>

        <div onClick={handleNav} className='block lg:hidden bg-black/40 rounded-xl p-1 '>
           {!nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40}/>}
        </div>

         <div  className={!nav ? 'fixed z-20 left-0 top-0 w-[60%] h-screen bg-black p-10 ease-in-out duration-500 md:hidden' : 'fixed left-[-190%]'}>
            <div className='text-xl grid space-x-4 space-y-10'>
            <Link href="/" ><a><h1 className='text-3xl border-2 p-1 md:text-5xl'>TECHEARTH</h1></a></Link>
            <Link href="/" ><a className='hover:underline hover:cursor-pointer'>Home</a></Link>
            <Link href="/ui" ><a className='hover:underline hover:cursor-pointer'>UI/UX</a></Link>
            <Link href="/mobile" ><a className='hover:underline hover:cursor-pointer'>Mobile Dev</a></Link>
            <Link href="/web" ><a className='hover:underline hover:cursor-pointer'>Web Dev</a></Link>
            <Link href="/contact"><a className='border-2 rounded-r-full rounded-l-full pt-1 pb-1 pl-6 pr-6 cursor-pointer hover:bg-white hover:text-black hover:duration-500'>Contact Us</a></Link>
         </div>
         </div>

     </nav>


   </div>
  )
}

export default Navbar