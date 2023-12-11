import React from 'react'

function SkillsCard({icon,title,text}) {
  return (
      <article>
          <span className='text-green-300 '>{icon}</span>
          <h4 className='mt-6 font-bold'>{title}</h4>
          <p className='mt-2 text-scale-500'>{ text}</p>
    </article>
  )
}

export default SkillsCard