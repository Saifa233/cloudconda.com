'use client'
import Footer from '../footer';
import Form from '../form';
import NavBar from '../navbar';

export default function Services(){ 

return (
    <div className="overflow-hidden">
        <NavBar/>
        <div style={{
            'backgroundImage' : 'url(https://images.unsplash.com/photo-1609764262480-a58aca4dfc93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
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
                    <div className="flex flex-col md:flex-row gap-16">
                        <img className="w-full md:w-1/2 lg:w-[534px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px] md:h-[320px]" src="/assets/img-service-1.png" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Cloud Infrastructure</span>
                            <p className="text-2xl lg:max-w-sm 2xl:max-w-2xl">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</p>
                            <p className="text-xl lg:max-w-sm 2xl:max-w-2xl">
                                •	Cloud strategy, architecture, and transformation roadmaps<br />
                                •	Migration to AWS, Azure, and Google Cloud<br />
                                •	Infrastructure as Code (IaC) and platform automation<br />
                                •	Managed cloud environments with performance and cost optimization<br />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1657727534685-36b09f84e193?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Data Solutions</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Unlock business value from data through structured platforms, governance, and analytics.</p>
                            <p className="text-xl lg:max-w-sm 2xl:max-w-2xl">
                                •	Data platform architecture, lakehouse design, and cloud warehousing<br />
                                •	Real-time and batch data pipeline development (ETL/ELT)<br />
                                •	Business Intelligence, KPI dashboards, and self-service analytics<br />
                                •	Data governance, quality frameworks, and compliance readiness<br />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-16">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1675897634504-bf03f1a2a66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Artificial Intelligence</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Integrate intelligent automation and decision-making capabilities into your business operations.</p>
                            <p className="text-xl lg:max-w-sm 2xl:max-w-2xl">
                                •	AI opportunity assessments and implementation roadmaps<br />
                                •	Machine learning model development, training, and deployment<br />
                                •	Natural language processing (NLP) and computer vision solutions<br />
                                •	MLOps frameworks for model lifecycle management and monitoring<br />
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row-reverse gap-16">
                        <img className="w-full md:w-1/2 md:h-[320px] xl:w-[800px] xl:h-[400px] 2xl:w-[934px] 2xl:h-[500px]" src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col gap-4">
                            <span className="uppercase">Software Engineering</span>
                            <p className="text-2xl lg:max-w-md 2xl:max-w-2xl">Design, build, and scale robust software solutions tailored to your business goals.</p>
                            <p className="text-xl lg:max-w-sm 2xl:max-w-2xl">
                                •	Custom application development (web, mobile, backend)<br />
                                •	Agile delivery, DevOps, and CI/CD pipeline integration<br />
                                •	API-first system design and microservices architecture<br />
                                •	Automated testing, performance optimization, and maintainability<br />
                            </p>
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
