import Image from "next/image";

export default function Services(){

return (
    <div className="relative w-full h-full bg-black overflow-hidden">
        <img
            src="https://images.unsplash.com/photo-1578577133030-78394054ee83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fullscreen"
            className="absolute inset-0 z-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col gap-4 bg-white/60 w-[90%] xl:w-3/4 mx-auto rounded-4xl mt-20">
            <h2 className="text-4xl text-black uppercase font-bold text-center tracking-tighter mt-10">Our Services</h2>
            <div className="flex flex-col xl:flex-row pb-20">
                <p className="text-2xl font-medium text-black mt-10 max-w-[90%] 2xl:maw-w-5xl mx-auto xl:pl-24">Provision of high quality services and innovation techniques via our digital proficient. From concept to digitizing, we fortify your concerns ensuring the prime transformation of your organization. Keeping in regards your minute details, Cloud Conda bring forth the Data based digital strategy that goes orderly with your business objectives and optimize. We believe that success finds its way with persistent focus on learning and partner shipping.</p>
                <img alt="cloud-icon" className="w-40 h-40 mx-auto xl:mx-20 mt-10" src="https://img.icons8.com/?size=100&id=QHsDIblhqhg9&format=png&color=000000"></img>
            </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 justify-center items-center">
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-[35%] 2xl:w-[30%] rounded-4xl mt-20 pb-20">
                <h2 className="text-black text-3xl font-bold tracking-tighter mt-10 text-center uppercase">IT Consultation</h2>
                <p className="text-xl font-medium text-black max-w-[90%] 2xl:max-w-2xl mt-20 px-6">Our consulting services will help you assess different technology strategies and utilize your digital assets to optimally achieve your business goals.</p>
            </div>
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-[35%] 2xl:w-[30%] rounded-4xl xl:mt-20 pb-20">
                <h2 className="text-black text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Cloud Services</h2>
                <p className="text-xl font-medium text-black mt-20 max-w-[90%] 2xl:max-w-2xl px-6">Meet your business challenges head on with our cloud services which is stable, cost effective and relevant to your evolving business needs.</p>
            </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-12 justify-center items-center">
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-[35%] 2xl:w-[30%] rounded-4xl mt-20 pb-20">
                <h2 className="text-black text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Amazon Web Services</h2>
                <p className="text-xl font-medium text-black mt-20 max-w-[90%] 2xl:max-w-2xl px-6">The highly beneficial division of Amazon provides servers, depot, networking, remote computing, email, mobile development, and security. </p>
            </div>
            <div className="relative z-10 bg-white/60 w-[90%] xl:w-[35%] 2xl:w-[30%] rounded-4xl xl:mt-20 pb-20">
                <h2 className="text-black text-3xl font-bold tracking-tighter mt-10 text-center uppercase">Accountability</h2>
                <p className="text-xl font-medium text-black mt-20 max-w-[90%] 2xl:max-w-2xl px-6">We all our responsible for our work, outcomes and your betterment. We treat our clients with dignity and professionalism.</p>
            </div>
        </div>

        <div className="hidden 2xl:flex relative z-10 flex flex-col gap-4 bg-white/60 w-3/4 mx-auto rounded-4xl mt-20 mb-20">
            <h2 className="text-4xl text-black uppercase font-bold text-center tracking-tighter mt-10">Cloud Computing Top Platforms</h2>
            <div className="flex pb-20 gap-32 mx-auto mt-10">
                <img alt="aws-icon" src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"></img>
                <img alt="google-icon" src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"></img>
                <img alt="azure-icon" src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000"></img>
                <img alt="hadoop-icon" src="https://img.icons8.com/?size=100&id=69132&format=png&color=000000"></img>
                <img alt="salesforce-icon" src="https://img.icons8.com/?size=100&id=38762&format=png&color=1A1A1A"></img>
            </div>
        </div>
    </div>

  );
}
