'use client'

import Navbar from "@/components/Navbar";
import { HeroUIProvider } from "@heroui/react";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroUIProvider>
      <div className='min-h-screen flex flex-col '>
          <nav className='flex-none'>
            <Navbar />
          </nav>
          <main className='flex-1'>
            {children}
          </main>
      </div>
    </HeroUIProvider>
  );
}