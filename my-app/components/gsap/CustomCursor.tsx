"use client"

import gsap from "gsap"
import { useEffect } from "react"

export default function CustomCursor() {

    useEffect(() => {
        const cursorCustom = document.querySelector('.cursorCustom') as HTMLDivElement | null;
        const cursorFollower = document.querySelector('.follower') as HTMLDivElement | null;

        const moveCursor = (e: MouseEvent): void => {
            gsap.to(cursorFollower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
                ease: "power2.out"
            });

            gsap.to(cursorCustom, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        gsap.set(cursorFollower, {
            xPercent: -50,
            yPercent: -50
        });

        gsap.set(cursorCustom, {
            xPercent: -100,
            yPercent: -100,
        });

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);
  return (
    <div className="relative max-lg:hidden z-10 top-auto">
        {/* <div className="follower w-[50px] h-[50px] rounded-full bg-[transparent] border-black border-2 border-solid fixed z-50 mix-blend-difference pointer-events-none"></div> */}
        <div className="cursorCustom w-[25px] h-[25px] opacity-55 rounded-full bg-zinc-800 border-black fixed z-50 pointer-events-none"></div>
        
    </div>
  )
}
