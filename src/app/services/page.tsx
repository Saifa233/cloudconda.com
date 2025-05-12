'use client'
import Link from 'next/link'
import Image from "next/image";
import NavBar from '../navbar';
export default function Services(){ 

return (
    <section className="min-h-screen md:min-h-full">
        <div className='bg-white'>
            <div className="relative z-10"><NavBar/></div>
            <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1679485205984-4ce35c32b2d6?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="absolute inset-0 flex items-end pb-8 xl:pb-24"><h1 className="text-6xl lg:text-8xl text-black uppercase px-8 lg:px-20 pt-8">our services</h1></div>

            <div id="cards" className="flex flex-col items-center gap-32 pt-16 pb-16 h-full">
                <div className="bg-blue-600 rounded-2xl w-[90%] px-16 pt-16 pb-16">
                    <span className="text-sm 2xl:text-lg uppercase text-slate-700">Cloud Infrastructure</span>
                    <h2 className="text-2xl 2xl:text-3xl text-white">Modernize your IT foundation with scalable, secure, and automated cloud platforms.</h2>
                    <p className="text-white text-2xl pt-24">
                        •   Cloud strategy, architecture, and transformation roadmaps <br/>
                        •	Migration to AWS, Azure, and Google Cloud <br/>
                        •	Infrastructure as Code (IaC) and platform automation <br/>
                        •	Managed cloud environments with performance and cost optimization <br/>
                    </p>
                </div>
                <div className="bg-blue-600 rounded-2xl w-[90%] px-16 pt-16 pb-16">
                    <span className="text-sm 2xl:text-lg uppercase text-slate-700">Data Solutions</span>
                    <h2 className="text-2xl 2xl:text-3xl text-white">Unlock business value from data through structured platforms, governance, and analytics.</h2>
                    <p className="text-white text-2xl pt-24">
                        •	Data platform architecture, lakehouse design, and cloud warehousing <br/>
                        •	Real-time and batch data pipeline development (ETL/ELT) <br/>
                        •	Business Intelligence, KPI dashboards, and self-service analytics <br/>
                        •	Data governance, quality frameworks, and compliance readiness <br/>
                    </p>
                </div>
                <div className="bg-blue-600 rounded-2xl w-[90%] px-16 pt-16 pb-16">
                    <span className="text-sm 2xl:text-lg uppercase text-slate-700">Artificial Intelligence</span>
                    <h2 className="text-2xl 2xl:text-3xl text-white">Integrate intelligent automation and decision-making capabilities into your business operations.</h2>
                    <p className="text-white text-2xl pt-24">
                        •	AI opportunity assessments and implementation roadmaps <br/>
                        •	Machine learning model development, training, and deployment <br/>
                        •	Natural language processing (NLP) and computer vision solutions <br/>
                        •	MLOps frameworks for model lifecycle management and monitoring <br/>
                    </p> 
                </div>
                <div className="bg-blue-600 rounded-2xl w-[90%] px-16 pt-16 pb-16">
                    <span className="text-sm 2xl:text-lg uppercase text-slate-700">Software Engineering</span>
                    <h2 className="text-2xl 2xl:text-3xl text-white">Design, build, and scale robust software solutions tailored to your business goals.</h2>
                    <p className="text-white text-2xl pt-24">
                        •	Custom application development (web, mobile, backend) <br/>
                        •	Agile delivery, DevOps, and CI/CD pipeline integration <br/>
                        •	API-first system design and microservices architecture <br/>
                        •	Automated testing, performance optimization, and maintainability <br/>
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
