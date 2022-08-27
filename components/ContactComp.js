import React from 'react'
import Form from './Form'

const ContactComp = () => {
  return (
    <div className='relative md:m-20 m-4'>
     <img className='absolute  top-0 -z-10 min-w-full h-[100%] rounded-3xl' src="https://img.freepik.com/free-vector/purple-abstract-background_1393-340.jpg?w=2000" alt="" />
      <div className='md:text-6xl font-bold bg-black/20 md:p-8 p-4'>
         <h1 className='md:text-3xl'>Contact Us</h1>
         <h1 className='font-medium' >Tell Us About Your Project</h1>
      </div>
      <div className='md:p-14 p-6'>
          <Form/>
      </div>
    </div>
  )
}

export default ContactComp