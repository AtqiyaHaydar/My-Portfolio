"use client"

import React from 'react'
import { navMenu } from '@/constants'
import { Button } from '../ui/button'
import { Layers } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@radix-ui/react-separator'

const Navbar = () => {
  return (
    <header className='h-[65px] fixed top-0 w-full  flex justify-center items-center shadow-lg shadow-[#2A0E61]/25 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='wrapper w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>

        <h1 className='text-white font-extrabold text-xl'>
          <span className='bg-clip-text text-transparent  bg-gradient-to-r from-purple-500 to-cyan-500'>
            Atqiya Haydar
          </span>
        </h1>
        
        {/* DEKTOP NAV */}
        <nav className='hidden lg:flex w-full flex-1 flex-row justify-center items-center gap-8'>
          {navMenu.map((item) => {
            return (
              <a href={item.href} key={item.label}>
                <p className='text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-purple-500 hover:to-cyan-500 hover:font-semibold'>
                  {item.label}
                </p>
              </a>
            )
          })}
        </nav>  

        {/* MOBILE NAV */}
        <div className='flex lg:hidden'>
          <Sheet>
            <SheetTrigger asChild>
              <Layers 
                className='text-white transition-all cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent className='bg-[#03001417]'>
              <SheetHeader>
                <SheetTitle>
                <h1 className='text-white'>Atqiya's Portfolio</h1>
                </SheetTitle>
                <SheetDescription>
                  Welcome to my Portfolio Website!
                </SheetDescription>
              </SheetHeader>
              <div className='flex flex-col w-full h-auto text-white gap-8'>
                <Separator/>
                {navMenu.map((item) => {
                  return (
                    <a href={item.href} key={item.label}>
                      <p className='text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-purple-500 hover:to-cyan-500 hover:font-semibold'>
                        {item.label}
                      </p>
                    </a>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      

        <Button className='hidden lg:flex'>
          <span className='hover:bg-clip-text hover:bg-gradient-to-r hover:text-transparent hover:from-purple-500 hover:to-cyan-500 cursor-pointer hover:font-bold'>
            Admin Mode
          </span>
        </Button>

      </div>
    </header>
  )
}

export default Navbar