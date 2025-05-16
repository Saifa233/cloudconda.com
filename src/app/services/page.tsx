'use client'
import Footer from '../footer';
import Form from '../form';
import NavBar from '../navbar';

export default function Services(){ 

return (
    <div className="overflow-hidden">
        <NavBar/>
        <div style={{
            'backgroundImage' : 'url(https://images.unsplash.com/photo-1679485205984-4ce35c32b2d6?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            'backgroundSize' : 'cover',
            'backgroundPosition' : 'center',
            'backgroundRepeat' : 'no-repeat'
        }}
        className='flex min-h-screen md:min-h-[400px] xl:min-h-screen'>
        <section className="flex flex-col justify-end">
            <div className="flex flex-col pb-24">
                <p className="text-4xl md:text-5xl text-black uppercase px-8 lg:px-20 pt-8">our services</p>
            </div>
        </section>
        </div>

        <div className='min-h-screen bg-white'>
            <section className="p-6 md:pt-12 md:pb-24 2xl:p-32">
                <div className="flex flex-col text-black gap-16">
                    <div className="flex flex-col md:flex-row gap-4">
                        <img className="w-full md:w-1/2 lg:w-[534px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px] md:h-[320px]" src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Cloud Infrastructure</span>
                            <p className="text-2xl lg:max-w-sm 2xl:max-w-2xl">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Data Solutions</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Unlock business value from data through structured platforms, governance, and analytics.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1675897634504-bf03f1a2a66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Artificial Intelligence</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Integrate intelligent automation and decision-making capabilities into your business operations.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-4">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Software Engineering</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Design, build, and scale robust software solutions tailored to your business goals.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        <Form/>

        <Footer/>
        
    </div>
  );
}
