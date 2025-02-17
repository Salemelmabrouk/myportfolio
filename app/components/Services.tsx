import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({}) => {
  return (
    <div id="services" className='w-ful px-[12%] py-10 scroll-mt-20 '>   
         <h4 className='text-center mb-2 text-lg font-Ovo '>What I offre</h4>

        <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
        
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> As a skilled junior developer, I am seeking a
challenging position in a stable company that
values creativity and innovation. With expertise
in HTML, CSS, JavaScript, and modern front-end
frameworks such as React.js, Next.js, TypeScript,
Angular, Tailwind CSS, I am confident in my ability
to develop responsive and user-friendly interfaces for websites and web applications. I am
eager to utilize my skills to drive business growth
and contribute to the success of the company </p>


<div className='grid grid-cols-auto gap-6 my-10 ' >
{serviceData.map(({icon,title,description,link},index) =>  (
    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black  cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
        <Image src={icon} alt="" className='w-10'/>
        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>

        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
            {description}
        </p> 
        <a href={link} className='flex items-center gap-2 text-sm mt-5'>Read more <Image src={assets.right_arrow} alt="" className='w-4'/> </a>

    </div>
    
)) }
</div>

        
        
        </div>
  )
}

export default Services