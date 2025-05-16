import NavBar from "../navbar";
import Footer from "../footer";

export default function Insights(){

return (
    <div className="overflow-hidden">
        <section className="min-h-screen md:min-h-full">
            <div className='min-h-screen bg-white'>
                <NavBar/>
                <div className="relative z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute z-0 w-full h-screen object-cover"
                    >
                    <source src="https://v1.pinimg.com/videos/mc/expMp4/df/55/6d/df556d907fe58d3315c46d732132aaf3_t1.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 pt-160"><h1 className="text-8xl text-black uppercase px-16">Insights</h1></div>
                </div>
                
            </div>
        </section>

        <div className="min-h-screen bg-white">
            <section className="p-24">
                <div className="grid grid-cols-2 text-black gap-8 pb-12 pt-12">
                    <div className="space-y-8">
                        <div className="h-[600px]">
                            <img className="w-full h-full" src="/assets/blog.jpg" alt="" />
                        </div>
                        <h3>Google’s protocol will standardise AI agent communication</h3>
                        <p className="max-w-4xl text-xl">AI agents handle increasingly complex and recurring tasks, such as planning supply chains and ordering equipment. As organisations deploy more agents developed by different vendors on different frameworks, agents can end up siloed, unable to coordinate or communicate. Lack of interoperability remains a challenge for organisations, with different agents making conflicting recommendations. It’s difficult to create standardised AI workflows, and agent integration require middleware, adding more potential failure points and layers of complexity.</p>
                        <button className="uppercase rounded-4xl text-xl border px-4 py-3">read post</button>
                    </div>
                    <div className="space-y-8">
                        <div className="h-[600px]">
                            <img className="w-full h-full" src="/assets/blog-2.jpg" alt="" />
                        </div>
                        <h3>Transforming the supply chain through AI</h3>
                        <p className="max-w-4xl text-xl">AI is driving a new revolution across a number of industries and the supply chain is no exception. AI has been the most transformative technology of the decade, and it’s no secret it has helped supply chains become more efficient, resilient, and responsive, while allowing organisations to become more efficient and ensuring workforces to focus on more strategic growth.</p>
                        <button className="uppercase rounded-4xl text-xl border px-4 py-3">read post</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-black gap-8 pb-12 pt-12">
                    <div className="space-y-8">
                        <div className="h-[600px]">
                            <img className="w-full h-full" src="/assets/blog-3.jpg" alt="" />
                        </div>
                        <h3>The Future of FaaS: Cloud Computing and Global Payment Solutions Fuel Market Growth</h3>
                        <p className="max-w-4xl text-xl">Fintech as a Service, or FaaS, allows companies to integrate financial technologies into their products and services without having to develop the infrastructure themselves. It provides businesses with ready-made financial solutions such as payment processing, banking services, lending, fraud prevention and compliance management through APIs and cloud-based platforms.</p>
                        <button className="uppercase rounded-4xl text-xl border px-4 py-3">read post</button>
                    </div>
                    <div className="space-y-8">
                        <div className="h-[600px]">
                            <img className="w-full h-full" src="/assets/blog-4.jpg" alt="" />
                        </div>
                        <h3>The Future of Data Solutions</h3>
                        <p className="max-w-4xl text-xl">We are in the midst of a data renaissance. Just as the artistic and intellectual movements of the Renaissance transformed Europe, the modern data revolution is reshaping the business landscape. This isn't just about numbers or bytes; it's about the stories they tell, the patterns they reveal, and the futures they can help us forge.</p>
                        <button className="uppercase rounded-4xl text-xl border px-4 py-3">read post</button>
                    </div>
                </div>
            </section>
        </div>


        <Footer/>
    </div>
   
  );
}
