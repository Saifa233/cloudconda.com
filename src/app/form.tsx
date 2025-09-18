'use client';

import { useEffect, useState } from 'react';

type FormProps = {
  requiredRegulatoryNotes?: boolean;
  packageName?: string;
};

export default function Form({ requiredRegulatoryNotes = false, packageName }: FormProps) {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    jobTitle: '',
    company: '',
    email: '',
    regulatoryNotes: '',
    package: packageName || '',
    companyWebsite: '', // honeypot
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, package: packageName || '' }));
  }, [packageName]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.firstname.trim() || !form.email.trim()) {
      setError('Please provide your first name and a valid email.');
      return;
    }
    if (requiredRegulatoryNotes && !form.regulatoryNotes.trim()) {
      setError('Please provide regulatory notes (data sensitivity).');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || data?.message || 'Something went wrong.');
        return;
      }

      setSuccess('Thanks — your inquiry has been received. We will follow up shortly.');
      setForm({
        firstname: '',
        lastname: '',
        jobTitle: '',
        company: '',
        email: '',
        regulatoryNotes: '',
        package: packageName || '',
        companyWebsite: '',
      });
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 xl:p-16 2xl:px-48 2xl:pb-24">
        <div className="flex flex-col gap-8 2xl:gap-16 text-black">
          <h2 className="xl:max-w-lg">Interested in our development services?</h2>
          <span className="text-lg xl:text-xl 2xl:text-2xl">
            Leave a message and we will get back to you with further details.
          </span>
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="flex gap-4 md:gap-24 lg:gap-48">
              <div className="flex flex-col gap-3 2xl:gap-4">
                <span className="text-lg 2xl:text-2xl">Firstname<span className="text-red-600">*</span></span>
                <input
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  className="border-b-2 py-3"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-3 2xl:gap-4">
                <span className="text-lg 2xl:text-2xl">Lastname</span>
                <input
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  className="border-b-2 py-3"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2">
              <span className="text-lg 2xl:text-2xl">Job Title</span>
              <input
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className="border-b-2 py-3"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2">
              <span className="text-lg 2xl:text-2xl">Company</span>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                className="border-b-2 py-3"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2">
              <span className="text-lg 2xl:text-2xl">Email address<span className="text-red-600">*</span></span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border-b-2 py-3"
                type="email"
              />
            </div>

            {/* Regulatory notes (optional or required based on props) */}
            <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2">
              <span className="text-lg 2xl:text-2xl">
                Data sensitivity / regulatory notes{requiredRegulatoryNotes && (
                  <span className="text-red-600">*</span>
                )}
              </span>
              <textarea
                name="regulatoryNotes"
                value={form.regulatoryNotes}
                onChange={handleChange}
                className="border-b-2 py-3 min-h-[120px]"
                placeholder="Briefly describe data sensitivity, compliance, or regulatory considerations"
                aria-required={requiredRegulatoryNotes}
              />
            </div>

            {/* Hidden package for this page when provided */}
            <input type="hidden" name="package" value={form.package} readOnly />
            {/* Honeypot */}
            <input
              type="text"
              name="companyWebsite"
              value={form.companyWebsite}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {error && (
              <div className="text-red-600 text-sm md:text-base">{error}</div>
            )}
            {success && (
              <div className="text-green-700 text-sm md:text-base">{success}</div>
            )}

            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-fit rounded-4xl border px-6 py-2 xl:py-4 text-xl uppercase 2xl:text-2xl 2xl:py-3 hover:bg-black hover:text-white disabled:opacity-60"
            >
              {isSubmitting ? 'Submitting…' : 'Submit'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
