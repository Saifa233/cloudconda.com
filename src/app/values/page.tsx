import Image from "next/image";

export default function Values(){

return (
    <div className="relative w-full h-full bg-black overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1578577133030-78394054ee83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fullscreen"
            className="absolute inset-0 z-0 -scale-y-100 w-full h-full"
        />
        <div className="relative z-10 flex flex-col gap-4 bg-white/60 w-[90%] xl:w-3/4 mx-auto rounded-4xl mt-20">
            <h2 className="text-2xl md:text-4xl text-black uppercase font-bold text-center tracking-tighter mt-10">Core Values</h2>
            <div className="flex flex-col xl:flex-row pb-20">
                <p className="text-xl md:text-2xl font-medium text-black mt-10 max-w-[90%] xl:max-w-5xl mx-auto xl:pl-24">
                    Integrity Properties: Integrity creates trust, prioritize working with strong ethics.<br/>
                    <br/>
                    (Challenging Staff) Team Work:<br/>
                    <br/>
                    We earn more when we collaborate and all work together. Our each member try to cooperate using his individual skills and provide constructive feedbacks.
                </p>
                <img alt="cloud-icon" className="w-20 h-20 lg:w-40 lg:h-40 mx-auto xl:mx-20 mt-10" src="https://img.icons8.com/?size=100&id=iNYXj5zCcfyA&format=png&color=000000"></img>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 justify-center items-center mt-20">
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-1/3 rounded-4xl pb-40">
                <h2 className="text-black text-2xl md:text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Innovative Thinking</h2>
                <p className="text-xl font-medium text-black max-w-[90%] mt-20 mx-auto">Discover your journey with our innovative ideas and solutions to your digital challenges.</p>
            </div>
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-1/3 rounded-4xl pb-40">
                <h2 className="text-black text-2xl md:text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Ownership Mindset</h2>
                <p className="text-xl font-medium text-black max-w-[90%] mt-20 max-w-2xl mx-auto">Build the capacity and entrust the responsibility that create deep and lasting client relationships.</p>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-8 justify-center items-center mt-20 xl:mb-20">
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-1/3 rounded-4xl pb-40">
                <h2 className="text-black text-2xl md:text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Value Creation</h2>
                <p className="text-xl font-medium text-black max-w-[90%] mt-20 max-w-2xl mx-auto">An approach to assess the business’s current state, and to design an execution plan that assist companies to thrive in a competitive circumstances.</p>
            </div>
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-1/3 rounded-4xl pb-48">
                <h2 className="text-black text-2xl md:text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Learning Attitude</h2>
                <p className="text-xl font-medium text-black max-w-[90%] mt-20 max-w-2xl mx-auto">Welcoming you to experience and recognize many different kinds of learning opportunities.</p>
            </div>
        </div>
    </div>
  );
}
