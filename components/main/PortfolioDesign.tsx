"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { designPortfolio } from '@/constants'
import { Button } from '../ui/button'

const PortfolioDesign = () => {
  const [positionIndexes, setPositionIndexes] = useState<any>([0, 1, 2, 3, 4, 5])

  const handleNext = () => {
    setPositionIndexes((prev: any) => {
      const updatedIndexes = prev.map((prevIndex: any) => (prevIndex + 1) % 5 )

      return updatedIndexes
    })
  }

  const positions = [
    'center',
    'left1',
    'left',
    'right',
    'right1'
  ]

  const imageVariants = {
    center: {x: '0%', scale: 1, zIndex: 5},
    left1: {x: '-50%', scale: 0.7, zIndex: 2},
    left: {x: '-90%', scale: 0.5, zIndex: 1},
    right: {x: '90%', scale: 0.5, zIndex: 1},
    right1: {x: '50%', scale: 0.7, zIndex: 2},
  }

  return (
    <div className='w-full h-full py-[125px] wrapper flex flex-col items-center justify-center gap-2 overflow-x-hidden'>
      <h1  className='text-white text-center text-3xl font-regular mb-[100px] md:mb-[-50px]'>D E S I G N <br className='md:hidden block' /> P O R T F O L I O</h1>
      {designPortfolio.map((item, index) => {
        return (
          <>
            <motion.img
              key={index}
              src={item.image}
              alt={item.name}
              className="rounded-[12px] w-[75vw] md:w-[50vw] lg:w-[35vw]"
              initial="center"
              animate={positions[positionIndexes[index]] }
              variants={imageVariants}
              transition={{ duration: 0.5}}
              style={{ 
                position: 'absolute',
              }}
            />        
          </>
        )
      })}

      <Button
        className='text-white mt-[350px] md:mt-[450px] lg:mt-[550px] cursor-pointer z-20'
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  )
}

export default PortfolioDesign