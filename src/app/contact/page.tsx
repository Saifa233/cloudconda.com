import Image from "next/image";

export default function Values(){

return (
    <div className="relative w-full h-full bg-black overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1578577133030-78394054ee83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fullscreen"
            className="absolute inset-0 z-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col xl:flex-row gap-4 bg-white/60 w-[90%] xl:w-2/3 mx-auto rounded-4xl mt-20 h-full xl:h-[400px] mb-20 pb-20 items-center">
            <h2 className="text-3xl md:text-4xl xl:text-5xl mt-20 xl:mt-2 text-black/80 max-w-[90%] xl:px-20">Multiple Locations, Multiple Operations,One Solution, Cloudconda</h2>
            <img alt="earth-icon" className="w-20 h-20 lg:w-40 lg:h-40 mt-20 mx-auto xl:mr-20" src="https://img.icons8.com/?size=100&id=o0RGqX45DhsZ&format=png&color=000000"/>
        </div>

        <div className="relative z-10 flex w-full h-[400px] bg-white/60 mt-30 gap-8 justify-center">
            <div className="flex flex-col mt-20 rounded-xl px-6 md:px-10 xl:px-20 mb-10">
                <h2 className="text-black text-lg xl:text-2xl uppercase mb-10 mt-4 font-bold">Contact</h2>
                <span className="text-black text-sm xl:text-2xl">info@cloudconda.com</span>
                <span className="text-black text-sm xl:text-2xl">www.cloudconda.com</span>
                <span className="text-black text-sm xl:text-2xl">+358 44 9489753</span>
                <span className="text-black text-sm xl:text-2xl">+92 345 6006720</span>
                <span className="text-black text-sm xl:text-2xl">+92 335 7559701</span>
            </div>
            <div className="flex flex-col mt-20 rounded-xl md:px-10 mb-20">
                <h2 className="text-black text-lg xl:text-2xl uppercase mb-10 mt-4 font-bold">Address</h2>
                <span className="text-black text-sm xl:text-2xl">Finland : Koskikuja 1 B 10, 01600, Vantaa, Finland</span>
                <span className="text-black text-sm xl:text-2xl max-w-sm">Pakistan : Flat#811, Diamond Terrace, Cotton Export Society, Sector 51A, Scheme 33, Karachi.</span>
            </div>
            <div className="hidden xl:flex flex-col mt-20 rounded-xl px-8 mb-20">
                <h2 className="text-black text-2xl uppercase mb-10 mt-4 font-bold">Get your free weekly updates</h2>
                <input placeholder="Enter your email here" className="bg-black/20 p-2 rounded-md placeholder-white"></input>
                <div>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </div>
    </div>
  );
}
