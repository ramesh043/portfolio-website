import React from 'react'
 import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa";
import maleImg from "../images/undrawmale.svg";
function Hero() {
  return (
      <div className='bg-emerald-100 py-24'>
          <div className='mx-auto max-w-7xl px-8  grid md:grid-cols-2 items-center gap-8'>
              <article>
                  <h1 className='text-7xl font-bold tracking-wide'>
                      I am Ramesh
                  </h1>
                  <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Frontend Developer</p>
                   <div className='flex gap-3 py-4'>
                      <a href='#'><FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-800" /></a>
                      <a href='#'><FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-800" /></a>
                      <a href='#'><FaInstagram className="h-8 w-8 text-slate-500 hover:text-black duration-800"/></a>
              </div>
              </article>
              <article className='hidden md:block'>
                  <img src={maleImg} alt='male-avatar' className='h-80 lg:h-96'/>
              </article>
             
              
          </div>
          
     </div>
  )
}

export default Hero