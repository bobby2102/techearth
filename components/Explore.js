import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'

const Explore = () => {
  return (
    <div className='mb-36'>
      <div  className='flex justify-between'>
      <div className='glass relative  md:pl-24 sm:pl-10 md:w-[60vw] 3xl:w-[50vh] pl-5 pr-36'> 
        <img className='blur-3xl' src="https://www.techarion.com/svg/home/herogroup.svg" alt="" />
        <div className='space-y-4 md:space-y-10 tracking-wider absolute md:top-24 top-6'>
        <h1 className='text-xl md:text-7xl font-bold'>A Digital Product<br/> Agency</h1>
        <h1 className='md:text-2xl text-sm font-semibold'>We Make It Easier To Built Your Dreams</h1>
        <p className='md:text-2xl text-sm font-normal text-gray-400'>We design and develop apps,<br/> websites, and so much more.</p>
        <button className='flex text-sm md:text-2xl bg-gradient-to-r from-pink-600 via-pink-600 to-violet-900 pl-5 md:pl-16 md:py-3 py-1 pr-6 rounded-r-full font-semibold'>Explore Now <IoIosArrowForward className='mt-1 ml-3'/></button>
        </div>
      </div>
      <div className='glass1 mr-28 relative'>
          <img className='blur-2xl' src="https://www.techarion.com/svg/home/herogroup.svg" alt="" />
          <img className='w-full  h-[100%]  absolute top-0 left-28' src="https://www.techarion.com/svg/home/herogroup.svg" alt=""/>
      </div>
      </div>
    </div>
  )
}

export default Explore