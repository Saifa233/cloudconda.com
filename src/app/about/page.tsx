import Image from "next/image";

export default function About(){

return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
    {/* Background image */}
    <img
        src="https://images.unsplash.com/photo-1578577133030-78394054ee83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Fullscreen"
        className="absolute inset-0 z-0 w-full h-full -scale-y-100"
    />

    <div className="relative z-10 flex flex-col xl:flex-row gap-16 text-white px-10 py-10">
        <div className="w-full xl:w-1/2 h-full pb-20 xl:pb-56 rounded-4xl bg-white/50">
            <h2 className="text-black text-4xl font-bold tracking-tighter mt-10 text-center">ABOUT US</h2>
            <p className="text-2xl font-medium text-black mt-20 max-w-[90%] xl:max-w-lg 2xl:max-w-2xl mx-auto">We are a digital modification consultancy that provides innovative solutions for global organizations and technology startups. We re-explore the possibilities for digital transformation from innovation to implementation.</p>
            <img alt="cloud-icon" className="h-40 w-40 mx-auto mt-24" src="https://img.icons8.com/?size=100&id=xjazqoVVibng&format=png&color=000000"></img>
        </div>
        <div className="w-full xl:w-1/2 h-full pb-20 xl:pb-56 rounded-4xl bg-white/50">
            <h2 className="text-black text-4xl font-bold tracking-tighter mt-10 text-center">VISION</h2>
            <p className="text-2xl font-medium text-black mt-20 max-w-[90%] xl:max-w-lg 2xl:max-w-2xl mx-auto">To become the world’s leading business enterprise by sustainable and steady growth.</p>
            <img alt="cloud-icon" className="h-40 w-40 mx-auto mt-40" src="https://img.icons8.com/?size=100&id=2Inwt4i6gotx&format=png&color=000000"></img>
        </div>
    </div>
    </div>
  );
}
