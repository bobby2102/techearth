import React from 'react'

const MobileCard = () => {
  return (
    <div  className='md:pt-28 md:flex md:justify-between md:space-x-9 md:p-32 p-10 bg-gradient-to-tr from-violet-700 via-violet-500 to-sky-500 md:m-28 m-6 rounded-3xl'>
          <div className='md:space-y-10 space-y-4'>
               <h1 className='md:text-5xl font-semibold'>Our Services</h1>
               <p className='md:text-3xl font-light text-sm'>
                Mobile traffic surpassed desktop traffic a while ago and
                hasn’t looked back. Providing a great mobile experience is<br/>
                key because while delightful ones can earn you followers, it
                only takes a single bad one to shift loyalties. Our team of<br/>
                experts can help you reach your customers on the platform
                of their choice and develop long-term relationships with<br/>
                them.
               </p>
          </div>
          <div>
               <img className='md:min-w-full md:h-72 rounded-3xl md:mt-0 mt-4' src="https://www.androidauthority.com/wp-content/uploads/2019/09/Mobile-app-development-vector-iso.jpg" alt="" />
          </div>
    </div>
  )
}

export default MobileCard