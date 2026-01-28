"use client"

import React from 'react'

import { motion } from "motion/react"
import { Canvas } from "@react-three/fiber";

import { gsap } from "gsap";
    
import { SplitText } from "gsap/SplitText";
import Image from 'next/image';



function HeroSection() {
  gsap.registerPlugin(SplitText);

  return (
    <div className='min-h-screen w-full justify-center mt-16 pt-10 px-2 sm:px-6 lg:px-8'>
      <div className='grid md:flex md:justify-between items-center w-full px-0 md:px-6'>
        <div className='grid gap-y-4 md:space-x-4'>
          <h1 className='font-light text-9xl text-center border-b border-2 border-black p-2'>WELCOME .</h1>
          <h2 className='text-lg max-w-87.5 text-black font-semibold' >HI, My name is Adan and I'm a Front-End Developer</h2>
        </div>
        <div className=''>
          <Image src="/hero.png" width={400} height={100} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection

