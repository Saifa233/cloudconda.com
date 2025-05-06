import Image from "next/image";

export default function Values(){

return (
    <section className="min-h-screen bg-black">
        <div className="flex flex-col py-8 px-4 pb-32">
            <h1 className="text-5xl max-w-sm">Selected success stories</h1>

            <div className="flex flex-col gap-2 pt-12">
                <img className="h-[320px] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <span className="text-md uppercase px-6">microsoft</span>
                <h3 className="text-lg max-w-sm px-6 font-bold">From data platforms to AI-enhanced insights</h3>
            </div>

            <div className="flex flex-col gap-2 pt-12">          
                <img className="h-[320px] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1644426358812-879f02d1d867?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <span className="text-md uppercase px-6">finavia</span>
                <h3 className="text-lg max-w-sm px-6 font-bold">Situational awareness with unified data</h3></div>

            <div className="flex flex-col gap-2 pt-12">               
                <img className="h-[320px] w-[90%] mx-auto" src="https://images.unsplash.com/photo-1638742385167-96fc60e12f59?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <span className="text-md uppercase px-6">fondia</span>
                <h3 className="text-lg max-w-sm px-6 font-bold">AI-Powered digital customer experience for a legal industry disruptor</h3></div>

            <button className="w-1/2 py-4 mx-auto translate-y-16 uppercase text-lg border border-white rounded-4xl">show more</button>
        </div>
    </section>
  );
}
