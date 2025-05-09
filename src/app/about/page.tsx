import Image from "next/image";

export default function About(){

return (
    <section className="min-h-screen md:min-h-full bg-white overflow-x-hidden">
        <div className="flex min-h-screen md:min-h-full flex-col md:pb-16 items-center">
            <div className="w-full px-8 py-6 xl:pb-32 xl:px-12 2xl:px-32">
                <h1 className="text-[42px] text-black xl:text-6xl">We understand the need, then transform it into a product.</h1>
            </div>
            <div className="flex flex-col md:grid md:grid-cols-3 md:px-16 xl:px-32">
                <div className="flex flex-col w-full gap-6 pb-6">
                    <img className="w-[90%] md:h-[200px] 2xl:h-[400px] mx-auto" src="https://images.unsplash.com/photo-1729676149044-b20ca7b1caf6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm 2xl:text-lg uppercase text-slate-700 px-6">Cloud Infrastructure</span>
                    <h2 className="text-2xl 2xl:text-3xl 2xl:max-w-lg text-black px-6">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</h2>
                </div>
                <div className="flex flex-col w-full gap-6 pb-6">
                    <img className="w-[90%] md:h-[200px] 2xl:h-[400px] mx-auto" src="https://images.unsplash.com/photo-1706005024051-25bf89ab9d41?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm uppercase text-slate-700 px-6">Data Solutions</span>
                    <h2 className="text-2xl 2xl:text-3xl 2xl:max-w-lg text-black px-6">Unlock business value from data through structured platforms, governance, and analytics.</h2>
                </div>
                <div className="flex flex-col w-full gap-6 pb-6">
                    <img className="w-[90%] md:h-[200px] 2xl:h-[400px] mx-auto" src="https://images.unsplash.com/photo-1741705054382-00b2fea36379?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                    <span className="text-sm uppercase text-slate-700 px-6">Artificial Intelligence</span>
                    <h2 className="text-2xl 2xl:text-3xl 2xl:max-w-lg text-black px-6">Integrate intelligent automation and decision-making capabilities into your business operations.</h2>
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
