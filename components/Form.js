import React, { useState } from 'react'

const Form = () => {

     const [data, setData] = useState({
          username : "",
          phonenumber : "",
          email : "",
          findus : "",
          project : "",
     })
     const {username,phonenumber,email,findus,project} = data;
     const changeHandler = e =>{
          setData({...data, [e.target.name]:e.target.value})
     }
     const submitHandler = e =>{
          e.preventDefault();
          console.log(data);
     }

  return (
    <div className='bg-black/20 md:p-14 p-8 rounded-3xl'>
     <h1 className='md:text-5xl text-xl tracking-widest md:mb-10 mb-6'>What Are You Looking For?</h1>
      <form className='md:text-3xl md:space-y-16 space-y-8 m-8' onSubmit={submitHandler}>
          <input
           className='appearance-none bg-transparent outline-none border-b min-w-full' 
           type="text" name="username" 
           placeholder='Full Name *' 
           value={username} 
           onChange={changeHandler} 
           /><br/>


          <input 
          className='appearance-none bg-transparent outline-none border-b min-w-full' 
          type="number" 
          name="phonenumber" 
          placeholder='Phone Number *' 
          value={phonenumber} 
          onChange={changeHandler} 
          /><br/>


          <input 
          className='appearance-none bg-transparent outline-none border-b min-w-full' 
          type="email" 
          name="email" 
          placeholder='Email Address *' 
          value={email} 
          onChange={changeHandler} 
          />
          <br/>


          <input 
          className='appearance-none bg-transparent outline-none border-b min-w-full' 
          type="text" 
          name="findus" 
          placeholder='Where Did You Find Us *' 
          value={findus} 
          onChange={changeHandler} 
          />
          <br/>


          <input 
          className='appearance-none bg-transparent outline-none border-b min-w-full' 
          type="text" 
          name="project" 
          placeholder='Describe Your Project *' 
          value={project} 
          onChange={changeHandler} 
          />
          <br />


          <input 
          className='border pl-28 pr-28 py-4 text-2xl' 
          type="submit" 
          name='submit'
          />
          <br/>


      </form>
    </div>
  )
}

export default Form