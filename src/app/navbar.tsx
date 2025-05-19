import Link from 'next/link'

export default function NavBar(){

return (
    <nav className="fixed z-50 bg-white w-full h-[80px] flex justify-between">
        <Link href="/" className="block w-[120px]"><img className="mx-2 lg:mx-4" src="/assets/logo.png"></img></Link>
        
        <div className='lg:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-black mt-4 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
        <div className="hidden lg:flex gap-16 pt-8 pr-24">
            <Link href="/" className="text-black text-lg">Home</Link>
            <Link href="/services" className="text-black text-lg">Services</Link>
            <Link href="/insights" className="text-black text-lg">Insights</Link>
            <Link href="/joinus" className="text-black text-lg">Join us</Link>
        </div>
    </nav>
)};