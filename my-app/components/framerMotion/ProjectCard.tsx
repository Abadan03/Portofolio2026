'use client'
import { motion } from "framer-motion";
import Image from "next/image";

import {Card, CardFooter, Button, Divider} from "@heroui/react";
import { ExternalLink, Github, Earth, Figma  } from "lucide-react";

type TDataPCard = {
    title: string;
    image: string;
    tech: string[],
    type: string;
    role: string;
    desc: string;
    linkWebsite: string;
    github: string;
    figma: string;
}

// 2. Karena komponen menerima props "data", kita bungkus tipenya
interface ProjectCardProps {
  data: TDataPCard;
  index: number;
}

const techColors: { [key: string]: string } = {
  Laravel: "bg-red-50 text-red-600 border-red-200",
  TailwindCSS: "bg-sky-50 text-sky-600 border-sky-200",
  Nextjs: "bg-black text-white border-black",
  Bootstrap: "bg-purple-50 text-purple-700 border-purple-200",
  TypeScript: "bg-blue-600 text-white border-blue-700",
  JQuery: "bg-blue-50 text-blue-700 border-blue-200",
  PHP: "bg-indigo-50 text-indigo-700 border-indigo-200",
  MySQL: "bg-orange-50 text-orange-700 border-orange-200",
  MYSQL: "bg-orange-50 text-orange-700 border-orange-200",
  Symfony: "bg-zinc-700 text-white border-zinc-900",
  SCSS: "bg-pink-50 text-pink-600 border-pink-200",
  CSS: "bg-blue-50 text-blue-600 border-blue-200",
  "AMCharts 5": "bg-yellow-50 text-yellow-800 border-yellow-200",
  ShadCN: "bg-slate-100 text-slate-900 border-slate-300",
  "CMS Craft": "bg-red-50 text-red-700 border-red-200",
};


const ProjectCard = ({data, index}: ProjectCardProps) => {
  return (
    <motion.div
      // whileHover={{ y: -20 }}
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: true }} 
      className="border w-full shadow-lg shadow--600 border-gray-200 p-4 rounded-lg bg-white text-black"
    >
      
      <div className="relative w-full h-45 bg-gray-100 mb-4 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
        {data.image ? (
          <Image
            src={data.image}
            alt={data.title}
            fill={true}
            className="object-fill w-full h-45 relative z- hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          ) : 
            (
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🔒</span>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Data not available
              </p>
            </div>
            )
          }
      </div>

      <div className="grid gap-y-2">
        <h3 className="font-bold text-lg">{data.title}</h3>
        <h4 className="font-light text-md text-red-700 italic">{data.type}</h4>
        <h4 className="font-medium text-sm">{data.role}</h4>
        <p className="text-sm text-gray-600">{data.desc}</p>
      </div>

      <div className="flex gap-2 mt-3 flex-wrap">
        {data.tech.map((item, index) => {
            const colorClass =  techColors[item] || "bg-gray-100 text-gray-600 border-gray-200";
            return (

                <span
                key={index} 
                className={`text-[10px] font-medium px-2 py-1 rounded-full border ${colorClass}`}
                >
                    {item}
                </span>
            )   
        })}
      </div>
      
      <Card>
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col gap-y-4" >
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            {...(data.github === '' && { href: '#', onClick: (e) => e.preventDefault(), className: "w-full flex items-center justify-center gap-2 bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg cursor-not-allowed" })}
          >
            <Github size={18} />
            View Github
            <ExternalLink size={16} />
          </a>
          <a
              href={data.linkWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center cursor-pointer justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              {...(data.linkWebsite === '' && { href: '#', onClick: (e) => e.preventDefault(), className: "w-full flex items-center justify-center gap-2 bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg cursor-not-allowed" })}
          >
            <Earth size={18} />
            View Website
            <ExternalLink size={16} />
          </a>
        </div>
        <hr className="my-4 border-gray-300" />
      </Card>

      <a href={data.figma} target="_blank" rel="noopener noreferrer" className="max-w-1/2 flex items-center hover:underline text-sm gap-2 hover:text-fuchsia-800 text-fuchsia-600 font-medium px-4 rounded-lg transition-colors duration-300" {...(data.figma === '' && {href: '#', onClick: (e) => e.preventDefault(), className: "max-w-1/3 flex items-center gap-2 opacity-50 font-semibold text-sm rounded-lg cursor-not-allowed"})}>

        <Figma size={18} />
        Figma

      </a>
    </motion.div>
  )
}

export default ProjectCard
