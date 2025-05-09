import Image from "next/image";

export default function About(){

return (
    <section className="min-h-screen md:min-h-full bg-white overflow-x-hidden">
        <div className="flex min-h-screen md:min-h-full flex-col md:pb-16 items-center">
            <h1 className="w-full px-8 py-6 text-[42px] text-black xl:text-center">We identify what is essential. Then we build it.</h1>
            <div className="flex flex-col md:grid md:grid-cols-3">
                <div className="flex flex-col items-start gap-2 md:gap-4">
                    <img className="h-[320px] md:h-[180px] md:w-[80%] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1663137658384-a9c36b3cd99d?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm uppercase text-slate-700 px-6">Exploration</span>
                    <h2 className="text-2xl text-black px-6">Discover and define your next opportunity.</h2>
                </div>
                <div className="flex flex-col items-start gap-2 md:gap-4 pt-16 md:pt-0">
                    <img className="h-[320px] md:h-[180px] md:w-[80%] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1604076947037-d909e2f10fca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm uppercase text-slate-700 px-6">Design & Build</span>
                    <h2 className="text-2xl text-black px-6">Make your vision real for growth or adaptation.</h2>
                </div>
                <div className="flex flex-col items-start gap-2 md:gap-4 pt-16 md:pt-0">
                    <img className="h-[320px] md:h-[180px] md:w-[80%] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1667958650125-5c452fc9c530?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm uppercase text-slate-700 px-6">Scale & Maintain</span>
                    <h2 className="text-2xl text-black px-6">Ensure reliability and continous optimization.</h2>
                </div>
            </div>
            <div className="flex pt-2 pb-16 gap-2 px-4 md:px-12 md:pt-6 md:justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" className="size-12 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <button className="uppercase text-black">view all services</button>
            </div>
        </div> 
    </section>
  );
}
