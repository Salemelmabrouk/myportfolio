import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
 const Header = () => {
  return (
    <div  className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'> 
        <div><Image src={assets.profile_img} className="rounded-full w-32 " alt=''/></div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '> Hi! I&apos;m Salem El Mabrouk  <Image src={assets.hand_icon} className="  w-6 " alt=''/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'   >
            Full Stack web developer based in Tunisia.
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo' >
            I am a full-stack developer from Tunisia, with 2 years of experience in multiple domaine  and techonologie like springboot angular, MERN-STACK, Next Js  
        </p>
         
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border rounded-full border-white  text-white flex items-center bg-black gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} className="  w-4 " alt=''/></a>

            <a href="/sample-resume.pdf" download  className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white  dark:text-black '>My resume<Image src={assets.download_icon} className="  w-4 " alt=''/></a>
        </div>
       
    </div>
  )
}
export default Header 