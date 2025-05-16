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

        <Footer/>
    </div>
   
  );
}
