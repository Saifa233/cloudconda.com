import Form from "../form"
import NavBar from "../navbar"
import Footer from '../footer'
export default function Contact () {
    return(
        <div className="overflow:hidden">
            <NavBar/>
            <div className="min-h-screen bg-white">
                <section>
                    <div style={{
                        backgroundImage : 'url(https://images.unsplash.com/photo-1525969078312-6b67ed648b39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundPosition:"center",
                        backgroundRepeat : "no-repeat",
                        backgroundSize : "cover"
                    }}className="h-[1000px]">
                    </div>
                </section>
            </div>

            <Form/>
            <Footer />
        </div>
    )
}