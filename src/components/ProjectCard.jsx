import React from 'react'
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function ProjectCard({img,title,text,github,url}) {
  return (
      <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
          <img src={img} alt={title} className='w-full object-cover rounded-t-lg h-64' />
          <div className='capitalize p-6'>
              <h2 className='text-xl tracking-wide font-medium'>{ title}</h2>
              <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
              
              
          </div>
          <div className='mt-4 flex gap-x-4 border py-2 px-2'>
              <a href={url}>
                  <TbWorldWww className='h-8 w-8 text-slate-400 hover:text-black duration:300'/>
                  
              </a>
               <a href={github}>
                  <FaGithub className='h-8 w-8 text-slate-400 hover:text-black duration:300'/>
                  
              </a>
              
          </div>
          
    </article>
  )
}

export default ProjectCard