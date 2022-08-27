import React from 'react'

const WebCard = () => {
  return (
    <div  className='md:pt-28 md:flex md:justify-between md:p-32 p-10 bg-gradient-to-r from-violet-700 via-violet-500 to-sky-500 md:m-28 m-6 rounded-3xl'>
          <div className='md:space-y-10 space-y-4'>
               <h1 className='md:text-5xl font-semibold'>Our Services</h1>
               <p className='md:text-2xl text-sm font-light'>From CMS to front-end website development, e-commerce<br/> stores to blockchain apps, our pixel-perfect web app<br/> development will leave you with a responsive, optimised<br/> and scalable solution that works flawlessly and inspires<br/> action amongst your users.
               </p>
          </div>
          <div>
               <img className='md:min-w-fit md:h-80 rounded-3xl md:mt-0 mt-4' src="http://webdesignerdrops.com/wp-content/uploads/2019/11/What-is-a-Web-Application.jpg" alt="" />
          </div>
    </div>
  )
}

export default WebCard