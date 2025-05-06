'use client'
import Link from 'next/link'
import Image from "next/image";

export default function Hero(){

return (
    <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1650803318792-6781b4884a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
        <nav className="bg-white w-full h-[80px] flex justify-between">
            <h1 className="text-black text-3xl px-4 py-5">SIILI</h1>    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-black mt-4 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </nav>
        <div className="flex flex-col px-4 py-6 pt-72">
            <h1 className="max-w-xs text-[48px] text-white">Move first. Own the Outcome.</h1>
            <p className="max-w-xs text-[24px] text-white">AI-powered end to end digital development</p>
            <button className="mt-2 w-1/3 rounded-4xl border px-2 py-4 text-white uppercase">Let's Talk</button>
            <button className="mt-2 w-1/2 rounded-4xl border py-4 text-white uppercase">Join the Team</button>
        </div>
    </section>
  );
}
