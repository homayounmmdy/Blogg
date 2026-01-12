// app/about/page.tsx
import Badge from "@/app/components/Badge";
import CalloutWrapper from "@/app/components/CalloutWrapper";
import Heading from "@/app/components/Heading";
import Link from "next/link";

const AboutPage = () => {
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
            SYSTEM PROFILE
          </Heading>

          {/* About Content */}
          <div className="space-y-6 font-mono text-[15px] leading-relaxed text-gray-300">
            <p>
              <span className="text-teal-300">Retro Blog</span> is a
              developer-first template built for creators who love the
              aesthetics of retro-futurism—where 1980s cyberpunk meets
              tomorrow’s tech.
            </p>
            <p>
              Designed with care using{" "}
              <span className="text-teal-300">TypeScript</span>,{" "}
              <span className="text-teal-300">Tailwind CSS</span>, and{" "}
              <span className="text-teal-300">Next.js</span>, this template
              provides ready-to-use components that blend nostalgic terminal
              interfaces with modern web performance.
            </p>
            <p>
              Every pixel is calibrated to evoke the glow of a CRT monitor, the
              hum of analog circuits, and the quiet confidence of a
              well-architected system. It’s not just a blog—it&quot;s a{" "}
              <span className="text-teal-300">
                time capsule from the future
              </span>
              .
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-10">
            <Heading className="mb-4" textAlign="left">
              CORE MODULES
            </Heading>
            <ul className="space-y-3 font-mono text-sm">
              {[
                "• Fully typed with TypeScript",
                "• Responsive retro UI with Tailwind",
                "• CRT scanlines & circuit grid overlays",
                "• Static comment showcase (non-interactive)",
                "• Terminal-style typography & glow effects",
                "• Zero external dependencies",
                "• Ready for SSR & static export",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-teal-400">›</span>
                  <span className="ml-2 text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Author Note */}
          <CalloutWrapper className="mt-10">
            <p className="font-mono text-sm italic text-gray-400">
              &quot;This system is not connected to live data. All content is
              static—preserved for reference and inspiration.&quot;
            </p>
            <p className="mt-2 font-mono text-xs text-teal-400">
              — ARCHIVE MODE ACTIVE
            </p>
          </CalloutWrapper>

          {/* System Status Bar */}
          <div className="mt-10 flex justify-center">
            <Badge status="active" variant="secondary" size="sm">
              PROFILE LOADED
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

export default AboutPage;
