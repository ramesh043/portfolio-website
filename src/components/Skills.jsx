import React from 'react'
import Sectiontitle from '../components/Sectiontitle'
import SkillsCard from '../components/SkillsCard'
import { skills } from "../data"
function Skills() {
  return (
    <div className='bg-gray-100'>
      <section className='py-20 align-content ' id="skills">
          <Sectiontitle title="tech stack" />
          <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {skills.map((skill) => {
                  return <SkillsCard key={skill.id} {...skill} />
                  
              })}
              
          </div>
      </section>
      </div>
  )
}

export default Skills;