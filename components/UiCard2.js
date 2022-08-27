import React from 'react'

const UiCard2 = () => {
  return (
    <div className='md:m-28 m-6 md:p-32 p-10 md:pt-28 md:flex md:justify-between bg-gradient-to-b from-violet-600 via-sky-400 to-sky-200 rounded-3xl'>
      <div className='md:space-y-16 space-y-4'>
        <h1 className='md:text-5xl font-semibold'>Contact Us </h1>
        <h1 className='md:text-2xl font-light'>Don’t Hesitate to Email Us. We’ll Get back to you.</h1>
        <div className='flex md:space-x-32 md:p-8 p-2 bg-gradient-to-r from-black/70 via-black/50 to-black/30 rounded-md'>
          <input type="email" name="email" placeholder='  Enter Your Email' className='w-[65%] md:min-w-full md:h-10 md:p-3' />
          <input type="submit" name='Submit' className='md:pl-9 pl-4 md:pr-9 pr-5 bg-black/40'  />
        </div>
      </div>
      <img src="https://www.techarion.com/images/ourservices/sittinginchair.png" alt="" />
    </div>
  )
}

export default UiCard2