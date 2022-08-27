import React from 'react'

const MobileTools = () => {
  return (
    <div>
       <h1 className='text-center md:text-6xl  font-bold bg-gradient-to-r from-blue-800 via-purple-700 to-pink-500 md:ml-96 mx-16 md:mr-96 md:p-4 p-2 border-2 md:rounded-xl  md:mb-24 md:mt-44 mt-16'>MOBILE DEVELOPMENT TOOLS</h1>
       <div className='md:flex md:justify-around md:mb-32 mb-14 md:mt-40 mt-16'>
          <div className='mb-16'>
               <img className='bg-gradient-to-b from-green-100 via-green-200 to-green-300 p-8 rounded-full md:mx-0 mx-44' src="https://www.techarion.com/svg/mobiledevelopment/android.svg" alt="" />
               <h1 className='text-center text-4xl md:font-bold mt-4'>Android</h1>
          </div>
          <div  className='mb-16'>
               <img className='bg-white p-8 rounded-full md:mx-0 mx-44' src="https://www.techarion.com/svg/mobiledevelopment/apple.svg" alt="" />
               <h1 className='text-center text-4xl md:font-bold mt-4'>Ios</h1>
          </div>
          <div  className='mb-16'>
               <img className='bg-gradient-to-b from-sky-100 via-sky-200 to-sky-200 p-8 rounded-full md:mx-0 mx-44' src="https://www.techarion.com/svg/mobiledevelopment/react.svg" alt="" />
               <h1 className='text-center text-4xl md:font-bold mt-4'>React Native</h1>
          </div>
          <div  className='mb-16'>
               <img className='bg-white p-8 rounded-full md:mx-0 mx-44' src="https://www.techarion.com/svg/mobiledevelopment/flutter.svg" alt="" />
               <h1 className='text-center text-4xl md:font-bold mt-4'>Flutter</h1>
          </div>
       </div>
    </div>
  )
}

export default MobileTools