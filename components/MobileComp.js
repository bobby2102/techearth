import React from 'react'

const MobileComp = () => {
  return (
    <div  className='relative'>
          <img className='blur-2xl min-w-full h-48 md:h-96 border-2 mb-10' src="https://static.wixstatic.com/media/219621_5062a6e12e3b4f678745d076be23e6c4~mv2.png/v1/fill/w_1000,h_572,al_c,usm_0.66_1.00_0.01/219621_5062a6e12e3b4f678745d076be23e6c4~mv2.png" alt="" />
          <div className='absolute md:top-8 top-12 md:left-44 left-4 space-x-16 flex'>
          <div  className='md:pt-24 space-y-5  md:min-w-full'>
               <h1 className='md:text-7xl font-bold'>Mobile Development</h1>
               <h1 className='md:text-4xl'>Make Your Visual Experience More Unique</h1>
          </div>
          <img className='h-20 w-28 md:w-full md:h-80' src="https://www.techarion.com/images/mobiledevelopment/image13.png" alt="" />
          </div>
    </div>
  )
}

export default MobileComp