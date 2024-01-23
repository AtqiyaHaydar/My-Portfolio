import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PortfolioDev = () => {
  const [positionIndexes, setPositionIndexes] = useState<any>([0, 1, 2, 3, 4, 5])

  const handleNext = () => {
    setPositionIndexes((prev: any) => {
      const updatedIndexes = prev.map((prevIndex: any) => (prevIndex + 1) % 5 )

      return updatedIndexes
    })
  }


  return (
    <div id="portfolio" className='w-full h-[100vh] wrapper flex flex-col items-center justify-center gap-8'>
      PortfolioDev
    </div>
  )
}

export default PortfolioDev