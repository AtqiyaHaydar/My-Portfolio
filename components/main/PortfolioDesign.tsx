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
    <div className='w-full h-screen wrapper flex flex-col items-center justify-center gap-8'>
      {designPortfolio.map((item, index) => {
        return (
          <>
            <motion.img
              key={index}
              src={item.image}
              alt={item.name}
              className="rounded-[12px]"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5}}
              style={{ width: '35%', position: 'absolute' }}
            />        
          </>
        )
      })}

      <Button
        className='text-white mt-[250px] md:mt-[350px] lg:mt-[450px] cursor-pointer z-20'
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  )
}

export default PortfolioDesign