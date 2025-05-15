'use client'
import Link from 'next/link'
import Image from "next/image";
import NavBar from '../navbar';
export default function Services(){ 

return (
    <div className="overflow-hidden">
        <NavBar/>
        <div style={{
            'backgroundImage' : 'url(https://images.unsplash.com/photo-1679485205984-4ce35c32b2d6?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            'backgroundSize' : 'cover',
            'backgroundPosition' : 'center',
            'backgroundRepeat' : 'no-repeat'
        }}
        className='flex min-h-screen md:min-h-[400px] xl:min-h-screen'>
        <section className="flex flex-col justify-end">
            <div className="flex flex-col pb-24">
                <p className="text-4xl md:text-5xl text-black uppercase px-8 lg:px-20 pt-8">our services</p>
            </div>
        </section>
        </div>

        <div className='min-h-screen bg-white'>
            <section className="p-6 md:pt-12 md:pb-24 2xl:p-32">
                <div className="flex flex-col text-black gap-16">
                    <div className="flex flex-col md:flex-row gap-4">
                        <img className="w-full md:w-1/2 lg:w-[534px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px] md:h-[320px]" src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Cloud Infrastructure</span>
                            <p className="text-2xl lg:max-w-sm 2xl:max-w-2xl">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Data Solutions</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Unlock business value from data through structured platforms, governance, and analytics.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1675897634504-bf03f1a2a66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Artificial Intelligence</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Integrate intelligent automation and decision-making capabilities into your business operations.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Software Engineering</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Design, build, and scale robust software solutions tailored to your business goals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <div className="min-h-screen bg-white">
            <section className="p-5 xl:p-16 2xl:px-48 2xl:pb-24">
                <div className="flex flex-col gap-8 2xl:gap-16 text-black">
                <h2 className="xl:max-w-lg">Interested in our development services?</h2>
                <span className="text-lg xl:text-xl 2xl:text-2xl">Leave a message and we will get back to you with further details.</span>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 md:gap-24 lg:gap-48">
                    <div className="flex flex-col gap-8"><span className="text-lg 2xl:text-2xl">Firstname</span><input className="border-b-2" type="text" /></div>
                    <div className="flex flex-col gap-8"><span className="text-lg 2xl:text-2xl">Lastname</span><input className="border-b-2" type="text" /></div>
                    </div>
                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2"><span className="text-lg 2xl:text-2xl">Job Title</span><input className="border-b-2" type="text" /></div>
                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2"><span className="text-lg 2xl:text-2xl">Company</span><input className="border-b-2" type="text" /></div>
                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2"><span className="text-lg 2xl:text-2xl">Email address</span><input className="border-b-2" type="text" /></div>
                    <button className="w-fit rounded-4xl border px-6 py-2 xl:py-4 text-xl uppercase 2xl:text-2xl 2xl:py-3">Submit</button>
                </div>
                </div>
            </section>
        </div>
    
        <div style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);background-size:cover;background-position:center;background-repeat:no-repeat)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      }} className="">
      <section className="px-10 xl:px-18 pt-20 pb-14 xl:pb-64 2xl:pb-96">
        <div className="flex justify-between">
          <div className="text-white text-lg flex flex-col gap-8 xl:gap-16 2xl:gap-12">
            <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span className="text-md 2xl:text-3xl">Services</span></div>
            <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span className="text-md 2xl:text-3xl">Join Us</span></div>
            <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span className="text-md 2xl:text-3xl">Insights</span></div>
            <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span className="text-md 2xl:text-3xl">Get In Touch</span></div>
            <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span className="text-md 2xl:text-3xl">Offices</span></div>
          </div>
          <div className="flex items-end translate-y-2">
            <Link href="/" className="block"><img className="mx-2 lg:mx-4 2xl:h-[150px] 2xl:w-[200px] 2xl:pt-12 2xl:translate-y-48" src="/logo-og.png"></img></Link>
          </div>
        </div>
      </section>
        </div>

    </div>
  );
}
