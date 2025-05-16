import NavBar from "../navbar";
import Footer from "../footer";

export default function JoinUs(){

return (
    <div className="overflow-hidden">

        <div className="min-h-screen">
            <section className="p-0">
                <div className='min-h-screen bg-white'>
                    <NavBar/>
                    <div style={{
                        backgroundImage : 'url(https://images.unsplash.com/photo-1621570274614-441323d10052?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundPosition:"center",
                        backgroundRepeat : "no-repeat",
                        backgroundSize : "cover"
                    }}className="h-[800px]">
                        </div>
                        <div className="p-6">
                            <h2 className="uppercase text-black">Join Us</h2>
                        </div>
                </div>
            </section>
        </div>

        <div className="min-h-screen bg-white">
            <section className="p-0">
                <div className="grid grid-cols-2 gap-64 text-black p-36">
                    <div className="space-y-8">
                        <h2>Open positions</h2>
                        <p className="text-2xl max-w-lg">Join our community of brilliant, approachable, honest, and hardworking professionals. If you think you’re a fit, reach out; you might be the missing piece. </p>
                    </div>
                    <div className="pt-24 space-y-16">
                        <div className="flex gap-16 text-lg">
                            <div className="flex gap-4">
                                <span className="inline-block rotate-90 text-sm">→</span>
                                <span>All departments</span>
                            </div>
                            <div className="flex gap-4">
                                <span className="inline-block rotate-90 text-sm">→</span>
                                <span>All locations</span>
                            </div>
                        </div>
                        <span className="inline-block text-sm pr-4">→</span>
                        <span className="text-lg">No available position</span>
                    </div>

                </div>

                <div className="bg-orange-400 w-full p-36 text-black flex flex-col gap-16">
                    <h1>Come as you are; and grow with us to make AI real.</h1>
                    <div className="flex flex-col gap-4 text-2xl max-w-4xl">
                        <span className="font-bold">At Cloudconda, we’ve created a community of top professionals dedicated to shaping the future. We embrace you just as you are and support your personal and professional growth.</span><br/>
                        <span>Our culture is defined by joy and a strong sense of humanity. We're driven, responsible — both for our careers and the world around us — and our local communities and focus on continuous learning empower you to follow a career path that’s uniquely yours. With AI at the heart of what we do, we’re building the leading network for digital development experts.
                        At Cloudconda, your work has real impact. We bring passion and innovation to help our clients tackle the challenges of tomorrow. Whether you specialize in AI, data, software development, or design, joining Cloudconda means more than advancing your career — it means helping shape the Age of AI.</span>   
                    </div>
                </div>
            </section>
        </div>
        
        <Footer/>
        
        
    </div>
  );
}