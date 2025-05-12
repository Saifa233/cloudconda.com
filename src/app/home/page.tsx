'use client';
import { useRouter } from 'next/navigation';
import NavBar from '../navbar';

export default function Hero(){
    const router = useRouter()
return (
    <section className="min-h-screen md:min-h-full">
        <NavBar/>
        <div className="relative w-full h-screen md:h-[500px] xl:h-screen">
            <img 
                className="w-full h-full object-cover"
                // src="https://images.unsplash.com/photo-1675351124730-4548a8391f07?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                /* src="https://images.unsplash.com/photo-1740568439252-b060d7ff3437?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"> */
                /* src = "https://images.unsplash.com/photo-1669465716251-0973b3602278?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">*/
                src="https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </img>
            <div className="absolute inset-0 bg-opacity-50 flex flex-col px-4 py-6 pt-72 md:pt-12 md:px-18 xl:pt-64 2xl:gap-6">
                <h1 className="max-w-sm w-[100%] text-[36px] md:text-[32px] lg:text-[40px] xl:text-6xl lg:max-w-xl 2xl:max-w-2xl lg:pt-20 text-white">Cloudconda.<br/>Building Resilient Digital Foundations.</h1>
                <p className="max-w-sm md:max-w-sm text-[20px] md:text-[16px] lg:text-[20px] xl:text-2xl lg:max-w-xl text-white pt-6 md:pt-4 2xl:max-w-4xl">We are Cloudconda, a technology consulting and engineering partner delivering high-performance solutions in cloud infrastructure, data platforms, artificial intelligence, and modern software development.</p>
                {/* <button className="mt-2 w-1/3 md:w-1/5 md:text-md rounded-4xl border px-2 py-4 text-white uppercase">Let's Talk</button> */}
                <button onClick={() => router.push('/joinus')} className="mt-8 w-1/2 md:w-1/4 lg:w-1/5 2xl:w-1/8 md:text-md rounded-4xl border py-4 text-white uppercase">Join the Team</button>
            </div>
        </div>
        
    </section>
  );
}
