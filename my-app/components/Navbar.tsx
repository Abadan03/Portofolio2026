"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const menuItems = [
        { name: 'Home', href: '#' },
        { name: 'List Project', href: '#listProject' },
        // { name: 'About', href: '#about' },
        // { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className='sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-md border-b border-zinc-200'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-20 items-center justify-between'>

                    {/* LOGO AREA */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className='flex flex-col'
                    >
                        <p className='text-base sm:text-xl font-black tracking-tighter text-black uppercase leading-tight'>
                            Nyala Dinar
                        </p>
                        <span className='text-[10px] font-bold text-lime-600 uppercase tracking-widest'>Web Developer</span>
                    </motion.div>

                    {/* DESKTOP MENU */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-x-8'>
                            {menuItems.map((item) => (
                                <li key={item.name} className='relative group'>
                                    <a href={item.href} className='text-sm font-bold text-zinc-600 hover:text-black transition-colors uppercase tracking-widest'>
                                        {item.name}
                                    </a>
                                    {/* Underline Animation */}
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HAMBURGER BUTTON */}
                    <div className='md:hidden'>
                        <button
                            onClick={() => setIsToggled(!isToggled)}
                            className='relative z-[110] p-2 text-black focus:outline-none'
                        >
                            <div className='w-6 flex flex-col items-end gap-1.5'>
                                <motion.span
                                    animate={isToggled ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                                    className='h-0.5 bg-black block transition-all origin-center'
                                />
                                <motion.span
                                    animate={isToggled ? { opacity: 0 } : { opacity: 1 }}
                                    className='h-0.5 w-2/3 bg-black block transition-all'
                                />
                                <motion.span
                                    animate={isToggled ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                                    className='h-0.5 bg-black block transition-all origin-center'
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isToggled && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center md:hidden'
                    >
                        <ul className='flex flex-col items-center gap-y-8'>
                            {menuItems.map((item, idx) => (
                                <motion.li
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setIsToggled(false)}
                                        className='text-4xl font-black text-black hover:text-lime-500 transition-colors uppercase italic'
                                    >
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Background Decor in Menu */}
                        <div className="absolute bottom-10 opacity-5 select-none font-black text-6xl text-center leading-none">
                            ADAN <br/> PORTFOLIO
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar