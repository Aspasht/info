import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div  >
      <div>
        <Navbar />
      </div>
      <main className=''>
        {children}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout