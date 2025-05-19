'use client';
import { useState } from 'react';

export default function Form() {
    const [form, setForm] = useState({
        firstname : '',
        lastname : '',
        jobTitle : '',
        company : '',
        email : '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        console.log('Submitted....')
        e.preventDefault();
        const res = await fetch('/api/contact', {
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(form),
        });
        console.log(res)

        const data = await res.json();
        alert(data.message);
    }

    return (
        <div className="min-h-screen bg-white">
            <section className="p-5 xl:p-16 2xl:px-48 2xl:pb-24">
                <div className="flex flex-col gap-8 2xl:gap-16 text-black">
                <h2 className="xl:max-w-lg">Interested in our development services?</h2>
                <span className="text-lg xl:text-xl 2xl:text-2xl">Leave a message and we will get back to you with further details.</span>
                <div className="flex flex-col gap-10">
                    <div className="flex gap-4 md:gap-24 lg:gap-48">
                        <div className="flex flex-col gap-8">
                            <span className="text-lg 2xl:text-2xl">Firstname</span>
                            <input name="firstname" value={form.firstname} onChange={handleChange} className="border-b-2 py-3" type="text"/>
                        </div>
                        <div className="flex flex-col gap-8">
                            <span className="text-lg 2xl:text-2xl">Lastname</span>
                            <input name="lastname" value={form.lastname} onChange={handleChange} className="border-b-2 py-3" type="text"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2">
                        <span className="text-lg 2xl:text-2xl">Job Title</span>
                        <input name="jobTitle" value={form.jobTitle} onChange={handleChange} className="border-b-2 py-3" type="text" />
                    </div>
                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2">
                        <span className="text-lg 2xl:text-2xl">Company</span>
                        <input name="company" value={form.company} onChange={handleChange} className="border-b-2 py-3" type="text" />
                    </div>
                    <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2">
                        <span className="text-lg 2xl:text-2xl">Email address</span>
                        <input name="email" value={form.email} onChange={handleChange} className="border-b-2 py-3" type="text" />
                    </div>

                    <button type="submit" onClick={handleSubmit} className="w-fit rounded-4xl border px-6 py-2 xl:py-4 text-xl uppercase 2xl:text-2xl 2xl:py-3 hover:bg-black hover:text-white">Submit</button>
                </div>
                </div>
            </section>
        </div>
    )
}