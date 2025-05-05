'use client'
import Link from 'next/link'
import Image from "next/image";

export default function Hero(){

return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
    {/* Background image */}
    <img
        src="https://images.unsplash.com/photo-1578577133030-78394054ee83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fullscreen"
        className="absolute inset-0 z-0 w-full h-screen"
    />

    {/* Overlay content */}
    <div className="relative z-10 flex flex-col gap-4 text-white px-10 py-10">
        <div className="flex flex-row items-center">
        <Image
            alt="rainbow spiral"
            width={150}
            height={200}
            src="https://cloudconda.com/wp-content/uploads/2022/09/123.jpeg"
            className="bg-transparent"
        />
        <nav className="hidden xl:block text-xl text-black/70 font-semibold space-x-24 mt-8 mx-auto -translate-x-5">
            <Link href='/about' className="uppercase">About</Link>
            <Link href='/services' className="uppercase">Services</Link>
            <Link href='/values' className="uppercase">Values</Link>
            <Link href='/contact' className="uppercase">Contact</Link>
        </nav>
        <Image
        alt="cloud"
        width={100}
        height={100}
        src="https://img.icons8.com/?size=100&id=OZN79ZXaalGp&format=png&color=000000"
        className="bg-transparent hidden xl:block"
        />
        </div>
    
        <h1 className="text-7xl md:text-9xl text-black/80 font-bold tracking-tighter text-center mt-20">Welcome to<br />Cloudconda</h1>
        <p className="text-2xl text-black/70 max-w-4xl font-medium tracking-tighter mx-auto text-center">
        Our consulting services will help you assess different technology strategies and utilize your digital assets to optimally achieve your business goals
        </p>

    </div>
    </div>
  );
}
