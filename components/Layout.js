import React from 'react'
import Footer from './Footer'
import LocationMap from './LocationMap'
import Navbar from './Navbar'

const Layout = ( { children } ) => {
  return (
    <div>
      <Navbar/>
      { children }
      <LocationMap/>
      <Footer/>
    </div>
  )
}

export default Layout