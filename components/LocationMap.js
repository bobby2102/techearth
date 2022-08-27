import React from 'react'

const LocationMap = () => {
  return (
    <div>
      <h1 className='text-3xl md:text-7xl text-center font-bold'>Our Locations</h1>
      <div className='relative'>
          <div>
            <img className='absolute md:top-48 md:left-72 md:w-7 z-10 top-12 left-20' src="https://www.techarion.com/svg/footer/location.svg" alt="" />
            <h1 className='absolute md:top-60 md:left-72 md:text-2xl font-bold top-[40%] left-20' >USA</h1>
         </div>
         <div className='flex-none place-content-end'>
            <img className='absolute md:left-[65%] md:top-72 md:w-7 left-[64%] top-16 z-10' src="https://www.techarion.com/svg/footer/location.svg" alt="" />
            <h1 className='absolute md:left-[64%] md:top-80 md:text-2xl left-[60%] top-20 font-bold' >INDIA</h1>
         </div>
       <img className='absolute md:top-0 md:left-72 md:w-[51%] w-[45%] left-20 top-6' src="https://www.techarion.com/images/mapping.png" alt="" />
       <img  className='md:w-[90%] w-[80%] md:h-[70vh] md:m-24 m-12 md:p-4 bg-black/30 rounded-xl' src="https://www.techarion.com/images/image34.png" alt="" />
       </div>
    </div>
  )
}

export default LocationMap