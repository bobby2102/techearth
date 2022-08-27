import React from 'react'
import { SiCodeproject } from 'react-icons/si'

const UiCard3 = () => {
  return (
    <div className='md:space-y-24 space-y-6 md:mt-0 mt-28 md:p-0 p-6'>
      <div className='flex justify-center'>
        <img className='h-6 md:h-14' src="https://www.techarion.com/svg/ourservices/UXDESIGNPROCESS.svg" alt="" />
      </div>
      <div className='text-center md:text-5xl text-xl md:space-y-6'>
          <h1>UX DESIGN PROCESS</h1>
          <h1 className='md:text-4xl text-sm font-light'>Design Process Based On Best Practices And Methodologies That Deliver</h1>
      </div>


      <div className='relative md:p-0'>
          <div className='flex justify-center'>
            <div>
               <img className='md:mt-10  ml-4 md:ml-10 bg-red-500 p-1 md:p-4 rounded-full' src="https://www.techarion.com/images/ourservices/Saly-26.png" alt="" />
               <h1 className='md:text-3xl md:ml-0 ml-2 text-xs text-center'>Research</h1>
            </div>
               <img className='md:w-[23%] md:h-[20%] h-8' src="https://www.techarion.com/svg/ourservices/Vector8.svg" alt="" />
               <img className='md:w-[23%] md:h-[20%] h-8' src="https://www.techarion.com/svg/ourservices/Vector7.svg" alt="" />
            <div>
               <img className='md:mt-10 md:ml-14  bg-green-500 md:p-4 rounded-full' src="https://www.techarion.com/images/ourservices/Saly-31.png" alt="" />
               <h1 className='md:text-3xl text-xs text-center'>Interactions</h1>
            </div>
          </div>


          <div className='md:text-7xl md:w-28 md:h-36 md:pt-7 md:pl-4 rounded-3xl md:ml-[45%] ml-[42%] md:top-16 top-4 absolute z-30'>
               <SiCodeproject className='bg-red-400 rounded-full md:p-4  md:h-36 md:w-32 h-12 w-12 p-1'  />
               <h1 className='md:text-4xl text-lg font-bold md:mt-10'>Design</h1>
          </div>


          <div className='flex justify-center md:mb-32 relative'>
           <div>
             <img className='md:mr-96 mr-72 md:mt-36 mt-10 bg-yellow-500 md:p-4 rounded-full' src="https://www.techarion.com/images/ourservices/Saly-24.png" alt="" />
             <h1 className='md:text-3xl'>Visual Hierarchy</h1>
            </div>
             <img className='-rotate-6 absolute z-10 md:-top-12 -top-6 mr-32 md:mr-96 md:w-[23%] md:h-40 h-16 ' src="https://www.techarion.com/svg/ourservices/Vector9.svg" alt="" />
             <img className='rotate-6 absolute z-20 md:-top-12 -top-6 ml-32 md:ml-96 md:w-[23%] md:h-40 h-16' src="https://www.techarion.com/svg/ourservices/Vector10.svg" alt="" />
            <div>
             <img className='md:ml-96 md:mt-36 mt-10 bg-sky-500 md:p-4 rounded-full' src="https://www.techarion.com/images/ourservices/Saly-1.png" alt="" />
             <h1 className='md:text-4xl md:ml-96'>Test</h1>
            </div>
          </div>


          <div className='flex justify-center mb-32 relative'>
            <div>
               <img className='md:mr-80 mr-36 mt-4 md:mt-8 bg-yellow-500 md:p-4 p-1 rounded-full' src="https://www.techarion.com/images/ourservices/Saly-25.png" alt="" />
               <h1 className='md:text-3xl'>Analysis</h1>
            </div>
               <img className= '-rotate-6 absolute z-10 md:h-96 md:-top-96 -top-36  md:mr-96 mr-[25%] md:w-[23%] h-40' src="https://www.techarion.com/svg/ourservices/Vector11.svg" alt="" />
               <img className='rotate-6 absolute z-20 md:h-96 md:-top-96 -top-36 md:ml-80 ml-[25%] md:w-[23%] h-40' src="https://www.techarion.com/svg/ourservices/Vector12.svg" alt="" />
            <div>
               <img className='md:ml-64 md:mt-6 mt-4  bg-yellow-500 md:p-4 p-1 rounded-full' src="https://www.techarion.com/images/ourservices/saly-28.png" alt="" />
               <h1 className='md:text-3xl md:ml-64'>Tools</h1>
            </div>
          </div>

          
      </div>
    </div>
  )
}

export default UiCard3