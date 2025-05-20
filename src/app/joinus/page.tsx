import NavBar from "../navbar";
import Footer from "../footer";

export default function JoinUs(){

return (
    <div className="overflow-hidden">

        <div className="lg:min-h-screen">
            <section className="p-0">
                <div className='min-h-screen bg-white'>
                    <NavBar/>
                    <div style={{
                        backgroundImage : 'url(https://images.unsplash.com/photo-1621570274614-441323d10052?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundPosition:"center",
                        backgroundRepeat : "no-repeat",
                        backgroundSize : "cover"
                    }}className="h-[800px] lg:h-[1100px]">
                    </div>
                </div>
            </section>
        </div>
                    
        <div className="min-h-screen bg-white">
            <section className="p-0">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:gap-64 text-black px-6 sm:px-12 lg:px-36 pb-16 lg:py-16">
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-semibold">Open positions</h2>
                        <p className="text-lg sm:text-xl max-w-lg">
                        Join our community of brilliant, approachable, honest, and hardworking professionals. If you think you’re a fit, reach out; you might be the missing piece.
                        </p>
                    </div>

                    <div className="pt-8 lg:pt-24 space-y-10 lg:space-y-16">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 text-base sm:text-lg">
                        <div className="flex gap-2 items-center">
                            <span className="inline-block rotate-90 text-sm">→</span>
                            <span>All departments</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="inline-block rotate-90 text-sm">→</span>
                            <span>All locations</span>
                        </div>
                        </div>
                        <div className="flex items-center gap-2">
                        <span className="inline-block text-sm">→</span>
                        <span className="text-base sm:text-lg">No available position</span>
                        </div>
                    </div>
                </div>

                <div
                style={{
                    backgroundImage:
                    'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="w-full px-6 sm:px-12 lg:px-36 py-16 lg:py-36 text-white flex flex-col gap-10 lg:gap-16"
                >
                <h2 className="text-3xl sm:text-4xl font-semibold max-w-4xl">
                    Come as you are; and grow with us to make AI real.
                </h2>
                <div className="flex flex-col gap-6 text-base sm:text-xl max-w-4xl">
                    <span className="font-bold">
                    At Cloudconda, we’ve created a community of top professionals dedicated to shaping the future. We embrace you just as you are and support your personal and professional growth.
                    </span>
                    <span>
                    Our culture is defined by joy and a strong sense of humanity. We're driven, responsible — both for our careers and the world around us — and our local communities and focus on continuous learning empower you to follow a career path that’s uniquely yours. With AI at the heart of what we do, we’re building the leading network for digital development experts.
                    </span>
                    <span>
                    At Cloudconda, your work has real impact. We bring passion and innovation to help our clients tackle the challenges of tomorrow. Whether you specialize in AI, data, software development, or design, joining Cloudconda means more than advancing your career — it means helping shape the Age of AI.
                    </span>
                </div>
                </div>
            </section>
        </div>

        <div className="bg-white">
            <section className="px-4 sm:px-8 py-12 sm:py-16 lg:py-24 lg:px-24">
                <div className="text-black pb-16">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16 lg:mb-32">Our Values</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                        <div className="space-y-16 text-center lg:text-left">
                        <h3 className="text-2xl font-bold">Ambition</h3>
                        <p className="text-base sm:text-lg lg:text-xl max-w-xs mx-auto lg:mx-0">
                            We value high-quality delivery in our customer projects as well as professional growth. We strive for excellence.
                        </p>
                        </div>

                        <div className="space-y-16 text-center lg:text-left">
                        <h3 className="text-2xl font-bold">Joy</h3>
                        <p className="text-base sm:text-lg lg:text-xl max-w-xs mx-auto lg:mx-0">
                            Cloudconda makes life easier and more joyful for customers. We embrace a culture where enjoyment is woven into our work, ensuring that we have fun while making a positive impact.
                        </p>
                        </div>

                        <div className="space-y-16 text-center lg:text-left">
                        <h3 className="text-2xl font-bold">Humane</h3>
                        <p className="text-base sm:text-lg lg:text-xl max-w-xs mx-auto lg:mx-0">
                            Cloudconda is all about people – both in fostering a human corporate culture and in creating services with a human-first focus.
                        </p>
                        </div>

                        <div className="space-y-16 text-center lg:text-left">
                        <h3 className="text-2xl font-bold">Responsibility</h3>
                        <p className="text-base sm:text-lg lg:text-xl max-w-xs mx-auto lg:mx-0">
                            Cloudconda drives change and creates means for the world to do so in a way that’s sustainable and responsible.
                        </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <Footer/>
        
    </div>
  );
}