import React, { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import TrustedBy from './component/TrustedBy'
import Services from './component/Services'
import OurWork from './component/OurWork'
import Teams from './component/Teams'
import ContactUs from './component/ContactUs'
import {Toaster} from 'react-hot-toast'
import Footer from './component/Footer'
const App = () => {
  // now we have to provide the prop
  const[theme,setTheme] = useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'light')
  // so by default the theme will be the light
  return (
    <div className='dark:bg-black relative'>
      {/* here we mounted the Navbar */}
      {/* now we have to provide these theme and setTheme to this navbar component */}
      <Toaster/>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
      <Footer theme={theme}/>  
    </div>
  )
}

export default App
