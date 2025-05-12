import Image from "next/image";

export default function Services(){

return (
  <section className="h-full bg-white">
    <div className="flex flex-col space-y-16 pb-16">
      <div className="relative w-full h-[500px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1644212830458-32ef05d37772?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Background"
          />
          <div className="relative z-10 space-y-8 px-5">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="xl:pl-24 2xl:pl-48">
                  <h1 className="text-[48px] md:text-[40px] xl:text-5xl text-black pt-6 md:pt-12 md:px-4 2xl:pt-16">Cloudconda Advisory</h1>
                </div>
                <div className="pt-6 space-y-6 xl:pr-48 2xl:pr-96">
                  <span className="font-bold text-black">___________________________________________</span>
                  <p className="text-[22px] xl:text-3xl pt-8 md:max-w-sm text-black">Capturing the value of the AI age needs a new approach: Deep technology skill combined with creativity, co-creation, and business acumen.</p>
                  <button className="w-1/3 border text-black rounded-4xl px-2 py-4 uppercase">Discover</button>
                </div>
            </div>
          </div> 
      </div>

      <div className="flex flex-col md:flex-row px-4 md:gap-12 md:px-8 overflow-hidden justify-between">
        <div className="xl:px-64 xl:space-y-16">
          <h1 className="max-w-xs text-[48px] md:text-[40px] xl:text-5xl text-black">Why Cloudconda?</h1>
          <p className="max-w-sm md:max-w-xs xl:max-w-lg pt-4 text-[20px] xl:text-3xl text-black">We offer AI-powered end-to-end digital development - from strategy and design, to innovation, data, engineering, platforms and continous solutions.</p>
        </div>
        <div className="flex flex-col gap-6 pt-32 md:pt-2 md:gap-16 xl:pr-48 2xl:pr-96">
            <span className="font-bold text-black">_____________________________________________</span>
            <div className="flex flex-col pb-2">
              <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black xl:text-3xl">Deep expertise across cloud, data, AI, and software development</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black mt-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            
            <span className="font-bold text-black">_____________________________________________</span>
            </div>
            <div className="flex flex-col pb-2">
            <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black xl:text-3xl">Proven delivery methodologies tailored to complex enterprise environments</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            
            <span className="font-bold text-black">_____________________________________________</span>
            </div>
            <div className="flex flex-col pb-2">
              <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black xl:text-3xl">Emphasis on long-term partnership, transparency, and co-creation</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <span className="font-bold text-black">_____________________________________________</span>
            </div>
            <div className="flex flex-col pb-2">
              <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black xl:text-3xl">Focus on scalable, secure, and sustainable digital solutions</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
              <span className="font-bold text-black">_____________________________________________</span>
            </div>
        </div>
      </div>
    </div>
  </section>
  );    
}
