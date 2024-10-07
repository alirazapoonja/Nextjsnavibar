import React from 'react'
import About from './about/page'
import Contact from './contact/page'
import Services from './services/page'
import Link from 'next/link'



const Homepage = () => {
  return (
   <div>
    
    <ul>
      <li> <a href="/">Home</a></li>
      <li> <a href="/about">About</a></li>
      <li> <a href="/contact">Contact</a></li>
      <li> <a href="/services">Services</a></li>
      </ul>
      <h1> This is Home page</h1>
     
      
   </div>
      
  )}

export default Homepage

