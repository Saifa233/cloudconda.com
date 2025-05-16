import NavBar from "../navbar";
import Footer from "../footer";

export default function Contact() {
    return(
        <div className="overflow-hidden">
            <div className="min-h-screen bg-white">
                <NavBar/>
                <section className="p-0">
                    <div style={{
                        backgroundImage : 'url(https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}className="text-black h-[700px]"></div>
                    <div className="p-6">
                        <h1 className="uppercase text-black pt-8">offices</h1>
                    </div>
                </section>
            </div>

            <div className="min-h-screen bg-white">
                <section className="p-32">
                    <div className="flex justify-center gap-32 pt-16">
                        <div className="flex flex-col rounded-2xl w-1/4 p-8 bg-blue-600 text-2xl space-y-16 ">
                            <h2 className="uppercase">email</h2>
                            <span>info@cloudconda.com</span>
                            <span>www.cloudconda.com</span>
                        </div>
                        <div className="flex flex-col rounded-2xl w-1/4 p-8 bg-blue-600 text-2xl space-y-16 ">
                            <h2 className="uppercase">phone</h2>
                            <span>+358 44 9489753</span>
                            <span>+92 345 6006720</span>
                            <span>+92 335 7559701</span>
                        </div>
                        <div className="flex flex-col rounded-2xl w-1/4 p-8 bg-blue-600 text-2xl space-y-16 pb-32">
                            <h2 className="uppercase">address</h2>
                            <span>Finland : Koskikuja 1 B 10, 01600, Vantaa, Finland</span>
                            <span>Pakistan : Flat#811, Diamond Terrace, Cotton Export Society, Sector 51A, Scheme 33, Karachi.</span>
                        </div>
                    </div>
                </section>
            </div>      

            <Footer/>
        </div>           

    );
}