
"use client"; 
import Image from 'next/image';
import React, { useState } from 'react';
import { assets } from '@/assets/assets';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");
    
        const formData = new FormData(event.currentTarget); // Use event.currentTarget instead of event.target
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
    
        if (!accessKey) {
            setResult("Error: Access key is missing.");
            return;
        }
    
        formData.append("access_key", accessKey);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset(); // Use event.currentTarget
        } else {
            console.error("Error:", data);
            setResult(data.message);
        }
    };
    
    return (
        <div id='contact' className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[url('/footer-bg-color.png')] bg-cover">
            <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
            <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                As a skilled junior developer, I am seeking a challenging position in a stable company that
                values creativity and innovation. With expertise in HTML, CSS, JavaScript, and modern front-end technologies.
            </p>

            <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
                <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white' name='name' />
                    <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <textarea rows={6} placeholder="Enter your message" required className='w-full p-6 outline-none border border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
                    Submit now
                    <Image src={assets.right_arrow_white} alt='' width={16} height={16} />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    );
};

export default Contact;
