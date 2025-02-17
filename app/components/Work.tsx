import { assets, workData } from '@/assets/assets'
import React from 'react'
import   Image   from 'next/image';

const Work = () => {
  return (
    <div id='work' className='w-ful px-[12%] py-10 scroll-mt-20 '>
<h4 className='text-center mb-2 text-lg font-Ovo '>My potfolio</h4>

<h2 className='text-center text-5xl font-Ovo'>My last work</h2>

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
{workData.map((project,index) =>  (
    <div key={index}   style={{backgroundImage:`url(${project.bgImage} )`}} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group '>
        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
             <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>

         <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px-#000]  group-hover:bg-lime-300 transition'>
            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
         </div>
        </div>
       
    </div>
    
)) }
</div>

<a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 '> show more <Image src={assets.right_arrow_bold} alt='Right arrow bold' className='w-4'/></a>
    </div>
  )
}

export default Work