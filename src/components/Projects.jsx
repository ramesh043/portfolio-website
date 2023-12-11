import React from 'react'
import Sectiontitle from './Sectiontitle';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
      <section className='py-20 align-content' id='projects'>
          <Sectiontitle title="Web Projects!" />
          <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
              {projects.map((project) => {
                return <ProjectCard key={ project.id}{...project} />
              })}
              
          </div>
          
    </section>
  )
}

export default Projects;
