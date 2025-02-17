"use client"; 
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from './../../assets/assets';

const Navbar = ({isDarkMode,setIsDarkMode}) => {
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
const [isScroll,setIsScroll]=useState( false )
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })
  },[])

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} className="w-full" alt="Header background" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${isScroll ? "bg-white  bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : "" }`}>
        <a href="#top">
          <Image src={isDarkMode ?assets.logo_dark : assets.logo} className="w-28 cursor-pointer mr-14" alt="Logo" />
        </a>
        <ul className= {`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50  dark:bg-transparent" }`} >
          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about" className="font-Ovo">About me</a></li>
          <li><a href="#services" className="font-Ovo">Services</a></li>
          <li><a href="#work" className="font-Ovo">My Work</a></li>
          <li><a href="#contact" className="font-Ovo">Contact me</a></li>
        </ul>
        <button className="flex items-center gap-4" onClick={()=>setIsDarkMode(prev => !prev)}>
          <Image src={ isDarkMode ?assets.sun_icon : assets.moon_icon} className="w-6" alt="Dark mode icon" />
        </button>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 rounded-full px-10 py-2.5 border ml-4 border-gray-500 font-Ovo dark:border-white/50"
          >
            Contact <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} className="w-3" alt="Arrow icon" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={isDarkMode? assets.menu_white:assets.menu_black} className="w-6" alt="Menu icon" />
          </button>
        </div>
      </nav>

      {/*-------- Mobile Menu ----------*/}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        style={{ transform: 'translateX(16rem)' }}
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image src={isDarkMode?assets.close_white:assets.close_black} className="w-6 cursor-pointer" alt="Close icon" />
        </div>
        <li><a href="#top" className="font-Ovo" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className="font-Ovo" onClick={closeMenu}>About me</a></li>
        <li><a href="#services" className="font-Ovo" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" className="font-Ovo" onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" className="font-Ovo" onClick={closeMenu}>Contact me</a></li>
      </ul>
    </>
  );
};

export default Navbar;
