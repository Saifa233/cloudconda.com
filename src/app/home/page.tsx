'use client'
import Link from 'next/link'
import Image from "next/image";

export default function Hero(){

return (
    <section className="min-h-screen md:min-h-full">
        <nav className="bg-white w-full h-[80px] flex justify-between">
            <h1 className="text-black text-3xl px-3 py-6 tracking-tighter">CLOUDCONDA</h1>
            <div className='lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-black mt-4 mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className="hidden lg:flex gap-12 pt-8 pr-8">
                <span className="text-black text-md">Services</span>
                <span className="text-black text-md">Cases</span>
                <span className="text-black text-md">Industries</span>
                <span className="text-black text-md">Insights</span>
                <span className="text-black text-md">Join Us</span>
            </div>
        </nav>
        <div className="relative w-full h-screen md:h-[500px]">
            <img 
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </img>
            <div className="absolute inset-0 bg-opacity-50 flex flex-col px-4 py-6 pt-72 md:pt-12 md:px-18">
                <h1 className="max-w-sm w-[100%] text-[36px] md:text-[32px] lg:text-[40px] lg:max-w-xl lg:pt-20 text-cyan-200">Cloudconda - Building Resilient Digital Foundations</h1>
                <p className="max-w-sm md:max-w-sm text-[20px] md:text-[16px] lg:text-[20px] lg:max-w-xl text-cyan-200 pt-6 md:pt-4">We are Cloudconda, a technology consulting and engineering partner delivering high-performance solutions in cloud infrastructure, data platforms, artificial intelligence, and modern software development.</p>
                {/* <button className="mt-2 w-1/3 md:w-1/5 md:text-md rounded-4xl border px-2 py-4 text-cyan-200 uppercase">Let's Talk</button> */}
                <button className="mt-8 w-1/2 md:w-1/4 lg:w-1/5 md:text-md rounded-4xl border py-4 text-cyan-200 uppercase">Join the Team</button>
            </div>
        </div>
    </section>
  );
}
