import React from 'react'
import { skills } from '@/constants'

const Skills = () => {
  return (
    <div id="skills" className='w-full wrapper flex flex-col items-center justify-start gap-12'>
      <h1 className='text-white text-center text-3xl font-regulat'>
        T E C H S T A C K S
      </h1>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8'>
        {skills.map((skill) => {
          return (
            <li
              key={skill.name}
              className='text-white flex items-center justify-center   bg-slate-100/10 w-full h-full p-2 md:p-4 rounded-full'
            >
              <span className='text-[12px] text-center md:text-[14px] lg:text-[16px]'>
                {skill.name}
              </span>
            </li>  
          )
        })}
      </ul>
    </div>
  )
}

export default Skills