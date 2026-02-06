"use client"

import React from 'react'

import { motion } from "motion/react"
import { Canvas } from "@react-three/fiber";

import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import Image from 'next/image';
import { Github, Linkedin, ArrowRight } from 'lucide-react';



function HeroSection() {
  gsap.registerPlugin(SplitText);


  return (
    <div className='flex flex-wrap p-4 md:flex justify-center md:justify-center gap-x-45 gap-y-45 min-h-screen text-center md:text-start items-center gap-y-  md:px-6 overflow-hidden'>
        <div className='w md:max-w-1/2 grid gap-y-4 justify-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h1 className=" w-full text-4xl md:text-8xl font-black bg-black text-white p-4 inline-block transform transition-transform duration-500 hover:rotate-2 hover:scale-105 cursor-none select-none">WELCOME</h1>
          </motion.div>
          {/* <h1 className='font-light text-9xl text-center border-b border-2 border-black p-2'>WELCOME .</h1> */}
         <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className='text-medium md:text-2xl text-zinc-800 font-medium leading-relaxed'
         >
            HI, My name is <span className="text-lime-600 underline decoration-2">Adan</span> and I&apos;m a Web Developer, Specializing in Building Scalable Web Apps with <span className="italic">Laravel, React, and Tailwind CSS.</span>
         </motion.h2>

          {/*<div>*/}
          {/*  <img src="" alt="test" />*/}
          {/*</div>*/}
          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-wrap top-0 mt-0 pt-0 md:justify-start gap-y-4 w-full ">
              <div className='bg-zinc-900 hover:bg-zinc-950 flex group py-3 px-2 w-full rounded-2xl shadow-lg shadow-lime-200 hover:shadow-lime-500 transition-[200px] duration-400 hover:scale-3d hover:translate-x-2'>
                <a href='https://github.com/Abadan03' target='_blank' className='flex w-full gap-x-4 justify-between items-center text-white'>
                    <div className='flex items-center justify-between gap-x-4'>
                      <Github size={20} className='group-hover:rotate-12 transition-transform'/>
                      GitHub
                    </div>

                  <ArrowRight className="opacity-0 hidden md:block group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition" />
                </a>
              </div>

              <div className='bg-[#0A66C2] hover:bg-[#005a9e] py-3 px-2 rounded-2xl transition w-full group shadow-lg shadow-cyan-200 hover:shadow-cyan-600 duration-400 hover:scale-3d hover:translate-x-3'>
                <a href='https://www.linkedin.com/in/nyala-abadan-78284a228/' target='_blank' className='flex justify-between w-full gap-x-4 items-center text-white  '>
                    <div className='flex items-center justify-between gap-x-4 text-base'>
                      <Linkedin size={20} className='group-hover:-rotate-12 transition-transform'/>
                      <span className='text-white'>
                        Linkedin
                      </span>
                    </div>
                  <ArrowRight className='opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition' />
                </a>
              </div>
          </motion.div>
        </div>
        <motion.div
            initial={{
                y: "100px"
            }}
          animate={{
            x: [0],
            y: [-100, 20, -100],
            // rotate: [-40, 40, -40]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className='relative flex flex-wrap justify-center mb-20 items-center whitespace-nowrap gap-2 h-64 w-[200px]'
        >
        {/* Efek Glow di belakang gambar */}
         <div className="absolute inset-0 bg-linear-to-r from-[#5A9CB5] to-[#FACE68]  blur-[100px] flex justify-center w-full opacity-50 rounded-full"></div>
         {/*<Image*/}
         {/*   src="/next.svg"*/}
         {/*   width={500}*/}
         {/*   height={300}*/}
         {/*   alt="Hero Laptop"*/}
         {/*   className="relative drop-shadow-2xl flex grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"*/}
         {/*/>*/}
            <div className="flex flex-col items-center gap-2 group">
                <Image src="/icons8-javascript.svg" width={96} height={96} alt="bootstrap" className="grayscale-0 md:grayscale hover:grayscale-0 p-1 bg-white shadow-sm rounded-xl group-hover:shadow-md transition-shadow" />
                <span className="text-xs font-bold text-zinc-400 group-hover:text-black transition-colors">Javascript</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
                <Image src="/icons8-laravel-96.png" width={96} height={96} alt="bootstrap" className="grayscale-0 md:grayscale hover:grayscale-0 p-1 bg-white shadow-sm rounded-xl group-hover:shadow-md transition-shadow" />
                <span className="text-xs font-bold text-zinc-400 group-hover:text-black transition-colors">Laravel</span>
            </div>
            <div className="flex flex-col items-center gap-2 group" >
                <Image src="/icons8-nextjs-color-96.png" width={96} height={96} alt="bootstrap" className="grayscale-0 md:grayscale hover:grayscale-0 p-1 bg-white shadow-sm rounded-xl group-hover:shadow-md transition-shadow" />
                <span className="text-xs font-bold text-zinc-400 group-hover:text-black transition-colors">Next JS</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
                <Image src="/icons8-bootstrap-color-glass-96.png" width={96} height={96} alt="bootstrap" className="grayscale-0 md:grayscale hover:grayscale-0 p-1 bg-white shadow-sm rounded-xl group-hover:shadow-md transition-shadow" />
                <span className="text-xs font-bold text-zinc-400 group-hover:text-black transition-colors">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
                <Image src="/icons8-tailwindcss.svg" width={96} height={96} alt="bootstrap" className="grayscale-0 md:grayscale hover:grayscale-0 p-1 bg-white shadow-sm rounded-xl group-hover:shadow-md transition-shadow" />
                <span className="text-xs font-bold text-zinc-400 group-hover:text-black transition-colors">Tailwind CSS</span>
            </div>

        </motion.div>
    </div>
  )
}

export default HeroSection

