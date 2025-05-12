import NavBar from "../navbar";

export default function JoinUs(){

return (
    <section className="min-h-screen md:min-h-full">
        <div className='min-h-screen bg-white'>
            <NavBar/>
            <div className="relative z-10">
                <div className="absolute inset-0 pt-64 space-y-16">
                    <h1 className="text-4xl lg:text-7xl text-black uppercase px-8 lg:px-16">Join Us</h1>
                    <h2 className="text-xl lg:text-3xl text-black px-8 lg:px-16 max-w-2xl">Come as you are<br/>
                    Be all you can be.<br/>
                    A commitment to work/life fulfilment allows us to thrive as part of a supportive, collaborative, and diverse collective. 
                    </h2>
                </div>
            </div>
        </div>
    </section>
  );
}