'use client'; 

import './globals.css'
import NavBar from './navbar';
import Footer from './footer';
import Form from './form';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// cloudconda.com
export default function App(){

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const router = useRouter();

  const goToContact = () => {
      router.push('/contact');
    };

  const goToJoinUs = () => {
      router.push('/joinus');
    };

  const goToServices = () => {
    router.push('/services');
  };
  
  const goToInsights = () => {
    router.push('/insights');
  };
  

  return (
    <div className="overflow-x-hidden">
      <NavBar/>
      <div  
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        className="flex min-h-screen md:min-h-[400px] xl:min-h-[700px] 2xl:min-h-screen">
        <section className="flex flex-col justify-end gap-8 px-4 pb-8 text-white">
          <div className="flex flex-col justify-end gap-8 md:p-16">
            <div className="space-y-4">
              <h1 className="max-w-lg font-semibold 2xl:max-w-xl">Building Resilient Digital Foundations.</h1>
              <p className="hidden text-sm md:block md:max-w-sm xl:max-w-md md:text-lg xl:text-xl 2xl:text-2xl 2xl:max-w-xl">We are Cloudconda, a technology consulting and engineering partner delivering high-performance solutions in cloud infrastructure, data platforms, artificial intelligence, and modern software development.</p>
            </div>

            <div className="flex flex-col gap-4">
              
              <button onClick={goToContact} className="w-fit rounded-4xl border px-6 py-2 uppercase text-lg 2xl:text-xl 2xl:py-3 hover:bg-white hover:text-black hover:border-none">Let's Talk</button>
              <button onClick={goToJoinUs} className="w-fit rounded-4xl border px-6 py-2 uppercase text-lg 2xl:text-xl 2xl:py-3 hover:bg-white hover:text-black hover:border-none">Join our team</button>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section className="p-6 md:p-10 xl:p-15 2xl:p-18 text-black">
          <div className="flex flex-col gap-8 2xl:gap-0">
            <h2 className="2xl:px-36">We understand the need, then transform it into a product.</h2>
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6 xl:pt-12 2xl:pt-16 2xl:p-36 2xl:pb-0">
              <div className="space-y-4">
                <img className="h-[313px] md:h-[180px] lg:h-[230px] xl:h-[277px] 2xl:h-[342px] w-full 2xl:w-[90%] object-cover" src="https://images.unsplash.com/photo-1729676149044-b20ca7b1caf6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="flex flex-col gap-4 pb-24 xl:pb-0">
                  <span className="text-sm uppercase text-slate-700 2xl:text-lg">Cloud Infrastructure</span>
                  <h3 className="">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</h3>
                </div>
              </div>
              <div className="space-y-4">
                <img className="h-[313px] md:h-[180px] lg:h-[230px] xl:h-[277px] 2xl:h-[342px] w-full 2xl:w-[90%] object-cover" src="/assets/img-1.png" alt="" />
                <div className="flex flex-col gap-4 pb-24 xl:pb-0">
                  <span className="text-sm uppercase text-slate-700 2xl:text-lg">Data Solutions</span>
                  <h3 className="">Unlock business value from data through structured platforms, governance, and analytics.</h3>
                </div>
              </div>
              <div className="space-y-4">
                <img className="h-[313px] md:h-[180px] lg:h-[230px] xl:h-[277px] 2xl:h-[342px] w-full 2xl:w-[90%] object-cover" src="/assets/img-2.png" alt="" />
                <div className="flex flex-col gap-4 pb-4 xl:pb-0">
                  <span className="text-sm uppercase text-slate-700 2xl:text-lg">Artificial Intelligence</span>
                  <h3 className="">Integrate intelligent automation and decision-making capabilities into your business operations.</h3>
                </div>
              </div>
              <div className="flex gap-2 pb-8">
                  <div className="size-10 2xl:size-12 rounded-full hover:bg-black group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="0.8" stroke="currentColor" 
                      className="size-10 2xl:size-12 group-hover:text-white transition-colors duration-300"> <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <button onClick={goToServices} className="uppercase 2xl:text-2xl">View all services</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="min-h-screen bg-white">
        <section className="p-0">
          <div className="flex flex-col gap-8">
            <div style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              className="flex flex-col md:flex-row md:justify-between gap-8 p-6 lg:p-12 xl:p-18 2xl:px-85 text-white pb-12 lg:pb-24 md:pt-12 2xl:pb-36">
              <h2>Our Mission</h2>
              <div className="flex flex-col gap-8 2xl:gap-16">
                <span className="text-2xl lg:text-3xl md:max-w-sm xl:max-w-lg 2xl:text-4xl 2xl:max-w-2xl"> 
                  To enable organizations to operate at scale, make data-driven decisions, and accelerate innovation through intelligent, reliable, and future-ready technology.
                </span> 
                <button onClick={goToInsights} className="uppercase border w-fit px-6 rounded-4xl py-2 text-lg 2xl:text-2xl 2xl:py-3 hover:bg-white hover:text-black hover:border-none">Discover</button>
              </div>
            </div>

            <div className="flex flex-col gap-24 p-6 xl:p-15 2xl:px-48 pb-12 lg:pb-24 2xl:pb-36 text-black md:flex-row">
              <div className="flex flex-col gap-8 2xl:gap-16">
                <h2 className="max-w-xs">Why choose us?</h2>
                <p className="text-xl md:max-w-2xl lg:max-w-7xl 2xl:text-2xl 2xl:max-w-5xl">We offer AI-powered end-to-end digital development - from strategy and design, to innovation, data, engineering, platforms and continous solutions.</p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <div className="flex">
                  <button className="flex w-full 2xl:w-[90%] items-center justify-between border-t-2 py-4 md:py-8">
                    <span className="inline-block max-w-xs text-left text-2xl 2xl:text-3xl">Deep expertise</span>
                    <span className="inline-block rotate-90 text-3xl">→</span>
                  </button>
                </div>
                <div className="flex">
                  <button className="flex w-full 2xl:w-[90%] items-center justify-between border-t-2 py-4 md:py-8">
                    <span className="inline-block max-w-xs text-left text-2xl 2xl:text-3xl">Proven delivery</span>
                    <span className="inline-block rotate-90 text-3xl">→</span>
                  </button>
                </div>
                <div className="flex">
                  <button className="flex w-full 2xl:w-[90%] items-center justify-between border-t-2 py-4 md:py-8">
                    <span className="inline-block max-w-xs text-left text-2xl 2xl:text-3xl">Long term commitments</span>
                    <span className="inline-block rotate-90 text-3xl">→</span>
                  </button>
                </div>
                <div className="flex">
                  <button className="flex w-full 2xl:w-[90%] items-center justify-between border-t-2 border-b-2 py-4 md:py-8">
                    <span className="inline-block max-w-xs text-left text-2xl 2xl:text-3xl">Sustainable digital solutions</span>
                    <span className="inline-block rotate-90 text-3xl">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        }}
        className="">
        <section className="p-6 2xl:px-36 pt-8 2xl:pt-16 pb-16">
          <div className="flex flex-col flex-col-reverse md:grid md:grid-cols-2 gap-4 rounded-lg">
            <div className="text-white p-4 rounded">
              <div className="flex flex-col gap-8 xl:gap-12 xl:p-8">
                <h2 className="text-white">Let’s Create What’s Next</h2>
                <h4 className="text-white md:max-w-sm xl:max-w-lg 2xl:max-w-2xl">Whether you're beginning your digital transformation or scaling to the next level, we’re here to help you build the foundations for long-term success.</h4>
                <button onClick={goToJoinUs} className="text-white border px-8 py-2 rounded-4xl text-lg uppercase w-fit 2xl:text-2xl 2xl:py-3 hover:bg-white hover:text-black hover:border-none">Join us</button>
              </div>
            </div>
            <div className="text-white rounded overflow-hidden md:p-12 md:-translate-y-8 2xl:-translate-y-12">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1681949098615-448f733a782c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            </div>
          </div>
        </section>
      </div>

      <Form/>
      
      {isClient && <Footer/>}
    </div>
    );
  }