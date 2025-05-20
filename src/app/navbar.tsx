// import Link from 'next/link'
// import { useState } from 'react';

// export default function NavBar(){
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <nav className="fixed z-50 bg-white w-full h-[80px] flex justify-between">
//             <Link href="/" className="block w-[120px]"><img className="mx-2 lg:mx-4" src="/assets/logo.png"></img></Link>

//             <div className='lg:hidden'>
//                 <button onClick={() => setIsOpen(!isOpen)} aria-label="toggle-menu" className="">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-black mt-4 mr-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                     </svg>
//                 </button>

//                 {isOpen && (<div className="flex flex-col gap-4 text-xl pt-8 bg-black/40 p-8 rounded-xl w-full">
//                         <Link href="/" className="">Home</Link>
//                         <Link href="/services" className="">Services</Link>
//                         <Link href="/insights" className="">Insights</Link>
//                         <Link href="/joinus" className="">Join us</Link>
//                         <Link href="/contact" className="">Contact</Link>
//                     </div>
//                 )}
//             </div>

//             <div className="hidden lg:flex gap-16 pt-8 pr-24">
//                 <Link href="/" className="text-black text-lg">Home</Link>
//                 <Link href="/services" className="text-black text-lg">Services</Link>
//                 <Link href="/insights" className="text-black text-lg">Insights</Link>
//                 <Link href="/joinus" className="text-black text-lg">Join us</Link>
//                 <Link href="/contact" className="text-black text-lg">Contact</Link>
//             </div>
//         </nav>
//     )};

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden w-full">
        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-between items-center bg-white shadow-md fixed w-full z-50 pr-10">
            <Link href="/" className="block w-[100px]">
                <img className="mx-2 lg:mx-4" src="/assets/logo.png"></img>
            </Link>

            <div className="flex gap-16 mt-2">
                <Link href="/" className="text-black text-md">Home</Link>
                <Link href="/services" className="text-black text-md">Services</Link>
                <Link href="/insights" className="text-black text-md">Insights</Link>
                <Link href="/joinus" className="text-black text-md">Join us</Link>
                <Link href="/contact" className="text-black text-md">Contact</Link>
            </div>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden w-full">
        <div className="flex justify-between items-center px-3 bg-white shadow-md fixed w-full z-50">
            <Link href="/" className="block w-[100px]">
                <img className="" src="/assets/logo.png"></img>
            </Link>

            <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            {/* Hamburger Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-black"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
            </button>
        </div>

        {/* Dropdown Menu*/}
        {isOpen && (
            <div className="pt-[90px] w-full bg-gray-100 text-black flex flex-col gap-8 px-6 py-6 text-xl shadow-md">
            <Link href="/" className="">Home</Link>
            <Link href="/services" className="">Services</Link>
            <Link href="/insights" className="">Insights</Link>
            <Link href="/joinus" className="">Join us</Link>
            <Link href="/contact" className="">Contact</Link>
            </div>
        )}
        </div>
    </div>
  );
}
