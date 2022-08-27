import React from 'react'

const WebComp = () => {
  return (
    <div className='relative'>
          <img className='blur-2xl min-w-full h-48 md:h-96 border-2 mb-10' src="https://blog.liquid.com/hubfs/What%20is%20Metaverse_211018-01.png" alt="" />
          <div className='absolute md:top-8 top-12 md:left-44 left-4 space-x-16 flex'>
          <div  className='md:pt-24 space-y-5 md:min-w-full'>
               <h1 className='md:text-7xl font-bold'>Web Development</h1>
               <h1 className='md:text-4xl'>Make Your Visual Experience More Unique</h1>
          </div>
          <img className='h-28 w-28 pr-4 md:pr-0 md:w-full md:h-80' src="https://www.techarion.com/images/webdevelopment/Saly-23.png" alt="" />
          </div>
    </div>
  )
}

export default WebComp