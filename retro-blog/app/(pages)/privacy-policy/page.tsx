import Badge from "@/app/components/Badge";
import CalloutWrapper from "@/app/components/CalloutWrapper";
import Heading from "@/app/components/Heading";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950 text-gray-200">
      {/* CRT Scanlines Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_1px,transparent_2px,transparent_3px,rgba(0,255,255,0.04)_4px)]" />

      {/* Circuit Grid (Subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <main className="relative z-10 px-4 py-10 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Heading className="mb-6" size="xl">
            PRIVACY PROTOCOL
          </Heading>

          {/* Intro */}
          <div className="mb-8 font-mono text-[15px] leading-relaxed text-gray-300">
            <p>
              This system operates in{" "}
              <span className="text-teal-300">ARCHIVE MODE</span>. No user data
              is collected, stored, or transmitted. The following policy is
              provided as a standard template for developers deploying this
              Retro Blog template.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 font-mono text-[15px] leading-relaxed text-gray-300">
            <section>
              
              <Heading className="mb-2" textAlign="left">
                1. Data Collection
              </Heading>
              <p>
                This template does not include analytics, cookies, or tracking
                scripts by default. If deployed as-is,{" "}
                <span className="text-teal-300">zero personal data</span> is
                collected from visitors.
              </p>
            </section>

            <section>
              <Heading className="mb-2" textAlign="left">
                2. Third-Party Services
              </Heading>
              <p>
                If you integrate third-party services (e.g., comments,
                analytics, ads), those services may collect data under their own
                policies. Review their terms before integration.
              </p>
            </section>

            <section>
              <Heading className="mb-2" textAlign="left">
                3. Comments & User Input
              </Heading>
              <p>
                The comment section in this template is{" "}
                <span className="text-teal-300">
                  static and non-interactive
                </span>
                . No input fields are functional unless you add a backend. Any
                future comment system must comply with local data laws (e.g.,
                GDPR, CCPA).
              </p>
            </section>

            <section>
              <Heading className="mb-2" textAlign="left">
                4. Cookies
              </Heading>
              <p>
                This template does not set cookies. If you add authentication,
                preferences, or tracking, you must implement cookie consent
                mechanisms as required by law.
              </p>
            </section>

            <section>
              <Heading className="mb-2" textAlign="left">
                5. Data Retention
              </Heading>
              <p>
                No data = no retention. If you extend this template with user
                accounts or forms, define clear retention policies and secure
                deletion procedures.
              </p>
            </section>

            <section>
              <Heading className="mb-2" textAlign="left">
                6. Policy Updates
              </Heading>
              <p>
                As this is a static template, this policy does not auto-update.
                Developers are responsible for maintaining compliance in their
                deployed versions.
              </p>
            </section>
          </div>

          {/* Disclaimer */}
          <CalloutWrapper className="mt-10">
            <p className="font-mono text-sm italic text-gray-400">
              ⚠️ This is a generic privacy policy for demonstration purposes
              only. Consult a legal professional before deploying in production.
            </p>
            <p className="mt-2 font-mono text-xs text-teal-400">
              — NOT A LEGAL DOCUMENT
            </p>
          </CalloutWrapper>

          {/* System Status Bar */}
          <div className="mt-10 flex justify-center">
            <Badge status="active" variant="secondary" size="sm">
              POLICY LOADED
            </Badge>
          </div>

          {/* Back to Home - Retro Control Button */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border-2 border-teal-400 bg-gray-900 px-6 py-2 font-mono text-[13px] font-bold uppercase tracking-wider text-teal-300 transition-all duration-300 hover:border-teal-300 hover:text-teal-200"
            >
              <div className="absolute inset-0 bg-teal-400/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative z-10 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
                ← RETURN TO TERMINAL
              </span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
