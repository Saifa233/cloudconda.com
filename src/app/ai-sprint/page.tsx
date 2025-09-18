import Link from 'next/link';
import NavBar from '../navbar';
import Footer from '../footer';
import Form from '../form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Readiness Sprint | CloudConda',
  description: 'Ship a production-ready AI agent for one high-impact workflow.',
};

export default function AISprintPage() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />

      {/* Hero */}
      <div
        className="flex min-h-[60vh] md:min-h-[70vh] items-end text-white"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1676035674913-64fbe7ca694b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <section className="w-full px-6 pb-10 md:p-12 2xl:p-20">
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
            <h1>AI Readiness Sprint</h1>
            <p className="text-lg md:text-xl 2xl:text-2xl max-w-3xl">
              Ship a production-ready AI agent for one high-impact workflow.
            </p>
            <div>
              <Link
                href="#contact"
                className="inline-block rounded-4xl border px-6 py-2 uppercase text-lg md:text-xl hover:bg-white hover:text-black hover:border-none"
              >
                Get custom quote
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Outcomes / Deliverables */}
      <div className="bg-white text-black">
        <section className="p-6 md:p-10 xl:p-15 2xl:p-18">
          <div className="flex flex-col gap-6 2xl:gap-8">
            <h2>Outcomes</h2>
            <ul className="list-disc pl-6 text-lg md:text-xl 2xl:text-2xl space-y-3 max-w-4xl">
              <li>Production-ready AI agent scoped to one priority workflow</li>
              <li>Secure data access patterns and redaction where appropriate</li>
              <li>Operational runbook and success metrics</li>
              <li>Deployment checklist and engineering handover</li>
            </ul>
          </div>
        </section>
      </div>

      {/* 4-Week Plan */}
      <div className="bg-white text-black">
        <section className="p-6 md:p-10 xl:p-15 2xl:p-18 pt-0">
          <div className="grid md:grid-cols-2 gap-10 2xl:gap-16">
            <div>
              <h3 className="mb-3">Discover (Week 1)</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
                <li>Choose a single high-impact workflow</li>
                <li>Define guardrails, data boundaries, and KPIs</li>
                <li>Confirm integration points and delivery plan</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Build (Week 2)</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
                <li>Implement the agent, prompts, and orchestration</li>
                <li>Wire up data sources and tools with least-privilege access</li>
                <li>Instrument basic telemetry for validation only</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Validate (Week 3)</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
                <li>Test with realistic inputs and edge cases</li>
                <li>Align outputs with business and compliance expectations</li>
                <li>Iterate for reliability and clarity</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3">Handover (Week 4)</h3>
              <ul className="list-disc pl-6 space-y-2 text-lg md:text-xl">
                <li>Deploy to your preferred environment</li>
                <li>Provide runbooks and knowledge transfer</li>
                <li>Roadmap next steps</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Contact */}
      <div className="bg-white text-black" id="contact">
        <section className="p-0">
          <div className="flex flex-col gap-6">
            <Form requiredRegulatoryNotes packageName="AI Readiness Sprint" />
          </div>
        </section>
      </div>

      {/* Optional future sections */}
      {/**
       * FAQ placeholder – add common questions about scope, data handling, pricing ranges.
       * Testimonials placeholder – add short quotes from relevant projects.
       */}

      <Footer />
    </div>
  );
}
