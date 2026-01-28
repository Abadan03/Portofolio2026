"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {

  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className='fixed top-0 right-0 left-0  bg-gray-200  dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between text-zinc-700'>
                <div>
                    <p className='text-sm sm:text-lg font-medium'>  
                        Nyala Dinar Abadan | Web Dev
                    </p>
                </div>

                <button  type="button" className="block md:hidden" onClick={() => setIsToggled(prev => !prev)}>
                    <Image src="/hamburger.png" alt="" 
                        width={24}
                        height={24}
                    />
                </button>
                
                <div className={`${isToggled ? "block" : "hidden"} absolute w-50 top-full right-0 border-2 border-black md:border-0 md:flex md:w-auto md:top-auto`}>
                    <ul className="font-medium text-black text-end grid md:flex md:gap-x-6 gap-y-3.5 px-4 py-2">
                        <li className='border-b border-black'>
                            <a href="#" className="text-sm md:text-base">Home</a>
                        </li>
                        <li className='border-b border-black'>
                            <a href="#" className="text-sm md:text-base">About</a>
                        </li>
                        <li className='border-b border-black'>
                            <a href="#" className="text-sm md:text-base">Services</a>
                        </li>
                        <li className='border-b border-black'>
                            <a href="#" className="text-sm md:text-base">Pricing</a>
                        </li>
                        <li className='border-b border-black'>
                            <a href="#" className="text-sm md:text-base">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
