import React from 'react'

const UiCard = () => {
  return (
    <div className='md:pt-28 md:flex md:justify-between md:p-32 p-10 bg-gradient-to-b from-yellow-800 via-orange-700 to-violet-500 md:m-28 m-6 rounded-3xl'>
      <div className='md:space-y-10 space-y-4'>
          <h1 className='md:text-5xl font-semibold'>UI/UX Development</h1>
          <p className='md:text-2xl font-light'>We Take Your Carefully
             Created Idea And Build It
             Into A Functional, Scalable
             Product.
          </p>
      </div>
      <div className='relative mt-8 mt:mt-0'>
          <img className='min-w-fit md:h-60 h-32 rounded-tl-3xl' src="https://cdn2.photostockeditor.com/t/0401/electronics-person-typing-on-turned-on-macbook-keyboard-keyboard-image.jpg" alt="" />
          <img className='min-w-fit md:h-60 h-32 absolute md:top-24 top-10 md:left-16 left-10 rounded-tl-3xl rounded-br-3xl' src="https://cdn3.photostockeditor.com/t/2311/work-person-using-macbok-businessman-businessman-image.jpg" alt="" />
      </div>
    </div>
  )
}

export default UiCard