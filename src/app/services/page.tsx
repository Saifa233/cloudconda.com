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
            <h1 className="text-[48px] text-black pt-6">SIILI Advisory</h1>
            <span className="font-bold text-black">___________________________________________</span>
            <p className="text-[24px] pt-4 max-w-sm text-black">Capturing the value of the AI age needs a new approach: Deep technology skill combined with creativity, co-creation, and business acumen.</p>
            <button className="w-1/3 border text-black rounded-4xl px-2 py-4 uppercase">Discover</button>
          </div> 
      </div>
      <div className="px-4 pb-32">
        <h1 className="max-w-xs text-[48px] text-black">Impact driven, AI powered</h1>
        <p className="max-w-sm pt-4 text-[20px] text-black">We offer AI-powered end-to-end digital development - from strategy and design, to innovation, data, engineering, platforms and continous solutions.</p>
        <div className="flex flex-col gap-6 translate-y-32">
            <span className="font-extrabold text-black">___________________________________________________</span>
            <div className="flex flex-col pb-2">
              <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black">Forerunner AI-powered software development</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black mt-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            
            <span className="font-extrabold text-black">___________________________________________________</span>
            </div>
            <div className="flex flex-col pb-2">
            <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black">Tech partnerships</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            
            <span className="font-extrabold text-black">___________________________________________________</span>
            </div>
            <div className="flex flex-col pb-2">
              <div className="flex justify-between pr-6">
                <span className="max-w-xs text-2xl text-black">AI-powered development process</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.0" stroke="currentColor" className="size-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
              </div>
            <span className="font-extrabold text-black">____________________________________________________</span>
            </div>
        </div>
      </div>
    </div>
  </section>
  );    
}
