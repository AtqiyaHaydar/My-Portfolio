import React from 'react'
import Blackhole from '../video/Blackhole'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="about" className='w-full h-[100vh] wrapper flex flex-col items-center justify-center gap-8'>
      <Blackhole />
      <h1 className='text-2xl md:text-4xl lg:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500'>
        Bridging Vision to Virtual: <br /> Your Full Stack Developer and UI/UX Designer.
      </h1>
      <p className='text-slate-100 font-extralight text-center max-w-5xl text-[14px] md:text-[16px]'>
        Hello! I'm Atqiya Haydar, currently a second-year student majoring in Informatics Engineering at the Bandung Institute of Technology. My academic journey has fueled a strong interest in the field of Software Engineering, with a particular focus on Mobile Development and UI/UX Design. 
      </p>
      <Button 
        size="lg"
        className='hover:bg-gradient-to-r hover:from-purple-700 hover:to-cyan-700 transition-all'  
      >
        <Link 
          href="https://github.com/AtqiyaHaydar"
          className='flex flex-row items-center justify-center gap-4 cursor-pointer z-20'
        >
          <Image 
            src="/github-mark-white.svg"
            alt="github"
            width={24}
            height={24}
          />
          GitHub Profile
        </Link>
      </Button>
    </div>
  )
}

export default Hero