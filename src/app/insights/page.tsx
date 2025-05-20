import NavBar from "../navbar";
import Footer from "../footer";

export default function Insights(){

return (
    <div className="overflow-hidden">
        <section className="min-h-screen md:min-h-full">
            <div className="min-h-screen bg-white relative">
                <NavBar />
                
                <div
                className="relative h-screen w-full"
                style={{
                    backgroundImage:
                    'url(https://images.unsplash.com/photo-1618853606840-d2138cef5431?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                >
                <div className="absolute inset-0 flex items-end justify-start px-6 xl:px-16 pb-24">
                    <h2 className="text-3xl md:text-4xl text-white uppercase">Insights</h2>
                </div>
                </div>
            </div>
        </section>

        <div className="min-h-screen bg-white text-black">
            <section className="px-4 sm:px-8 lg:px-24 py-12 sm:py-16 lg:py-24">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pb-12">
                {/* Blog Card 1 */}
                <div className="space-y-6">
                    <div className="h-auto">
                    <img className="w-full h-full object-cover rounded-lg" src="/assets/blog.jpg" alt="blog 1" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                    Google’s protocol will standardise AI agent communication
                    </h3>
                    <p className="text-base sm:text-lg">
                    AI agents handle increasingly complex and recurring tasks, such as planning supply chains and ordering equipment...
                    </p>
                    <button className="uppercase rounded-full text-sm sm:text-base border px-4 py-2 hover:bg-black hover:text-white transition">
                    read post
                    </button>
                </div>

                {/* Blog Card 2 */}
                <div className="space-y-6">
                    <div className="h-auto">
                    <img className="w-full h-full object-cover rounded-lg" src="/assets/blog-2.jpg" alt="blog 2" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                    Transforming the supply chain through AI
                    </h3>
                    <p className="text-base sm:text-lg">
                    AI is driving a new revolution across a number of industries and the supply chain is no exception...
                    </p>
                    <button className="uppercase rounded-full text-sm sm:text-base border px-4 py-2 hover:bg-black hover:text-white transition">
                    read post
                    </button>
                </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                {/* Blog Card 3 */}
                <div className="space-y-6">
                    <div className="h-auto">
                    <img className="w-full h-full object-cover rounded-lg" src="/assets/blog-3.jpg" alt="blog 3" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                    The Future of FaaS: Cloud Computing and Global Payment Solutions Fuel Market Growth
                    </h3>
                    <p className="text-base sm:text-lg">
                    Fintech as a Service, or FaaS, allows companies to integrate financial technologies into their products and services...
                    </p>
                    <button className="uppercase rounded-full text-sm sm:text-base border px-4 py-2 hover:bg-black hover:text-white transition">
                    read post
                    </button>
                </div>

                {/* Blog Card 4 */}
                <div className="space-y-6">
                    <div className="h-auto">
                    <img className="w-full h-full object-cover rounded-lg" src="/assets/blog-4.jpg" alt="blog 4" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                    The Future of Data Solutions
                    </h3>
                    <p className="text-base sm:text-lg">
                    We are in the midst of a data renaissance. Just as the artistic and intellectual movements of the Renaissance...
                    </p>
                    <button className="uppercase rounded-full text-sm sm:text-base border px-4 py-2 hover:bg-black hover:text-white transition">
                    read post
                    </button>
                </div>
                </div>
            </section>
        </div>

        <Footer/>
    </div>
   
  );
}