'use client';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function Footer(){
    const router = useRouter();

    const goToServices = () => {
        router.push('/services');
    }
    const goToJoinUs = () => {
        router.push('/joinus');
    }
    const goToContact = () => {
        router.push('/contact');
    }    
    const goToInsights = () => {
        router.push('/insights');
    }
    const goToOffices = () => {
        router.push('/offices');
    }

    return(
        <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1707209857266-fa0eb4c3b05d?q=80&w=2113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);background-size:cover;background-position:center;background-repeat:no-repeat)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
            }} className="">
            <section className="px-10 xl:px-18 pt-20 pb-14 xl:pb-24">
                <div className="flex justify-between">
                <div className="text-white text-lg flex flex-col gap-8 xl:gap-16 2xl:gap-12">
                    <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span onClick={goToServices} className="text-md 2xl:text-2xl">Services</span></div>
                    <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span onClick={goToJoinUs} className="text-md 2xl:text-2xl">Join Us</span></div>
                    <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span onClick={goToInsights} className="text-md 2xl:text-2xl">Insights</span></div>
                    <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span onClick={goToContact} className="text-md 2xl:text-2xl">Get In Touch</span></div>
                    <div className="flex gap-4"><span className="text-md 2xl:text-xl">→</span><span onClick={goToOffices} className="text-md 2xl:text-2xl">Offices</span></div>
                </div>
                <div className="flex items-end">
                    <Link href="/" className="block"><img className="mx-2 lg:mx-4 2xl:h-[150px] 2xl:w-[200px] 2xl:pt-12 2xl:translate-y-18" src="/logo-og.png"></img></Link>
                </div>
                </div>
            </section>
        </div>
    );
}