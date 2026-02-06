'use client'
import React from 'react'
import ProjectCard from './framerMotion/ProjectCard'
import { motion } from "motion/react"

const ProjectSection = () => {

    const datas = [
        {
            title: 'PT Rajawali Chakti Utama',
            image: '/rajawali-english.png',
            tech: ['Laravel', 'TailwindCSS', 'JQuery'],
            type: 'FREELANCE',
            role: 'Fullstack Developer',
            desc: 'Built a clean company profile website where the main highlight is a smooth multi-language feature for global users.',
            github: 'https://github.com/Abadan03/Company_Profile_Rajawali_Chakti_Utama',
            linkWebsite: 'https://www.rajawalichaktiutama.com/',
            figma: 'https://www.figma.com/design/mW53bCtOuXZyl3h0nVHpSN/Natural-Gas?node-id=0-1&t=iljBOBQwQyNFFdR7-1'
        },
        {
            title: 'CV Sejahtera Mandiri Solusindo',
            image: '/nusantara.png',
            tech: ['Laravel', 'Bootstrap'],
            type: 'INTERNSHIP',
            role: 'Fullstack Developer',
            desc: 'During my internship, I built a custom CMS for company profiles using Laravel 12 and Bootstrap 5 to keep things modern and easy to manage.',
            github: 'https://github.com/IT-CORNER-ERP/compro_magang',
            linkWebsite: '',
            figma: ''
        },
        {
            title: 'Kementerian Keuangan',
            image: '',
            tech: ['Nextjs', 'TailwindCSS', 'ShadCN', 'TypeScript', 'AMCharts 5'],
            type: 'INTERNSHIP (MSIB Batch 6)',
            role: 'Front End Developer',
            desc: 'Worked on a Room Management System (RMS) for gov staff and the public. I handled the front-end and made data look good with AMCharts 5.',
            github: '',
            linkWebsite: '',
            figma: ''
        },
        {
            title: 'Sthira Official',
            image: '/Sthira.png',
            tech: ['Laravel', 'TailwindCSS', 'MYSQL'],
            type: 'FREELANCE',
            role: 'Fullstack Developer',
            desc: 'Developed a solid company platform integrated with MySQL to handle data and content management efficiently.',
            github: 'https://github.com/Abadan03/Company-Profile_Sthira-Official',
            linkWebsite: '',
            figma: ''
        },
        {
            title: 'PT Telco One Point',
            image: '/Telco.png',
            tech: ['Symfony', 'PHP', 'CSS', 'SCSS', 'Bootstrap', 'CMS Craft'],
            type: 'FREELANCE',
            role: 'Front End Developer',
            desc: 'Crafted a bespoke company profile using Symfony and Craft CMS to deliver a unique look and snappy performance.',
            github: 'https://github.com/Fakhri17/telcopoints',
            linkWebsite: 'https://www.telcoonepoint.com/',
            figma: 'https://www.figma.com/design/hdjXgptB8ORAs6Oahq8E44/Telco?node-id=0-1&p=f&t=cpouatLzfTOFIkHY-0'
        },
    ]
  return (
      <section className='min-h-screen w-full relative overflow-hidden py-20 px-4 sm:px-10 lg:px-20' id="listProject">
          {/* Background Decor - Biar gak polos banget */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-100 rounded-full blur-[120px] opacity-30 -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-30 -z-10" />

          <div className='max-w-7xl mx-auto'>
              {/* Header Section dengan Animasi */}
              <div className='mb-16 relative'>
                  <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                  >
                      <span className="text-sm font-bold tracking-[0.3em] text-zinc-400 uppercase">My Portfolio</span>
                      <h1 className="text-6xl md:text-8xl font-black mt-2 text-zinc-900 leading-none">
                          PROJECT <br />
                          <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px black' }}>LIST .</span>
                      </h1>
                  </motion.div>

                  {/* Decorative Line */}
                  <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-1 bg-black mt-6"
                  />
              </div>

              {/* Grid Container yang Lebih Rapih */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {datas.map((item, index) => (
                      <div key={index} className="flex justify-center">
                          <ProjectCard index={index} data={item} />
                      </div>
                  ))}
              </div>
          </div>

          {/* Footer List Decor */}
          <div className="mt-20 flex justify-center opacity-10">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              >
                  {[...Array(4)].map((_, i) => (
                      <span key={i} className="flex-shrink-0 text-9xl whitespace-nowrap">
                        LARAVEL NEXTJS REACT TAILWIND BOOTSTRAP &nbsp;
                      </span>
                  ))}
              </motion.div>
          </div>
      </section>
  )
}

export default ProjectSection
