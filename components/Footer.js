import React from 'react'
import Link from 'next/link'
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {ImGoogle3} from 'react-icons/im'

const Footer = () => {
  

  return (
    <div className='pt-8 text-center text-xl '>
     <div className='md:flex md:justify-center space-y-4 md:space-y-8 md:space-x-80'>
      <div>
      <Link href="/" ><a><h1 className='pl-32 md:pl-0 text-xl font-semibold md:text-5xl w-36 md:w-full  md:border-2 p-1'>TECHEARTH</h1></a></Link>
        <div className='flex justify-center space-x-4 md:flex md:justify-between mt-2 md:mt-6 text-sm md:text-4xl text-slate-400 md:text-white'>
          <AiFillFacebook />
          <AiOutlineInstagram />
          <ImGoogle3 />
        </div>
      </div>
      <div className='md:space-y-4 '>
          <h1 className='text-xl md:text-4xl font-bold'>Contact Us</h1>
          <h1 className='text-slate-400 md:text-white'>Info@techearth.com</h1>
          
      </div>
      <div>
          <h1 className='text-xl md:text-4xl font-bold'>MENU</h1>
          <div className='grid md:space-y-4 mt-4 text-slate-400 md:text-white'>
          <Link href="/"><a className='hover:cursor-pointer'>Home</a></Link>
          <Link href="/ui"><a className='hover:cursor-pointer'>UI/UX</a></Link>
          <Link href="/mobile"><a className='hover:cursor-pointer'>Mobile Dev</a></Link>
          <Link href="/web" ><a className='hover:cursor-pointer'>Web Dev</a></Link>
          <Link href="/contact"><a className='hover:cursor-pointer'>Contact Us</a></Link>
          </div>
      </div>
      </div>
      <hr className='mt-8' />
      <div className='mt-4 md:mt-16 md:text-2xl mb-14'>
          Copyrights@2022.TECHEARTH Technologies inc.
      </div>
    </div>
  )
}

export default Footer