"use client";

import { useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const mockups = [
  "mockup 1.png",
  "mockup 2.png",
  "mockup 3.png",
  "mockup 4.jpg",
  "mockup 5.png",
  "mockup 6.png",
  "mockup 7.png",
  "mockup 8.png",
  "mockup 9.png",
];

const capabilities = [
  "Brand Identity",
  "Packaging Design",
  "Visual Identity",
  "Creative Direction",
  "Art Direction",
  "Moodboarding",
  "Typography & Layout",
  "Campaign Design",
  "Social Media Design",
  "Product Naming",
  "Brand Strategy",
];

const process = [
  {
    number: "01",
    title: "Research",
    text: "Understanding the category, audience, competition and opportunity before making visual decisions.",
  },
  {
    number: "02",
    title: "Concept",
    text: "Turning strategy into a clear creative idea with a distinctive visual point of view.",
  },
  {
    number: "03",
    title: "Visual Direction",
    text: "Building the mood, typography, imagery, colour and design language that define the world.",
  },
  {
    number: "04",
    title: "Identity",
    text: "Creating a coherent identity system that feels recognisable, intentional and relevant.",
  },
  {
    number: "05",
    title: "Packaging",
    text: "Translating the identity into physical products, labels and market ready packaging.",
  },
  {
    number: "06",
    title: "Brand Touchpoints",
    text: "Extending the visual language across campaigns, social, catalogues and digital experiences.",
  },
];

const experience = [
  {
    year: "2025 · Present",
    role: "Brand & Packaging Consultant",
    company: "Siddharth Cosmetics",
    description:
      "Working across cosmetic product concepts, naming, packaging, visual communication, creative direction and product presentation. Collaborating with client, packaging and manufacturing teams to develop cohesive market ready brand expressions.",
  },
  {
    year: "2026 · Present",
    role: "Freelance Brand & Creative Strategist",
    company: "Independent Projects",
    description:
      "Working across branding, packaging, social media and creative strategy. Developing identities, packaging systems, catalogues, social creatives, product concepts, naming, content ideas and creator led marketing initiatives.",
  },
];

const tools = [
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Canva",
  "Figma",
  "CorelDRAW",
  "DaVinci Resolve",
  "Shopify",
  "Notion",
  "Generative AI",
  "ChatGPT",
];

const projects = [
  {
    number: "01",
    name: "SIAN",
    category: "Brand Identity · Packaging · Visual Direction",
    description:
      "Building a visual world for a contemporary brand through identity, packaging, moodboarding and creative direction.",
    images: ["page-04.jpg", "page-05.jpg", "page-06.jpg", "page-07.jpg"],
  },
  {
    number: "02",
    name: "RUPIN",
    category: "Brand Identity · Packaging · Catalogue",
    description:
      "Creating a distinctive visual identity for a product led brand through packaging, catalogue design and visual development.",
    images: ["page-08.jpg", "page-09.jpg", "page-10.jpg", "page-11.jpg"],
  },
  {
    number: "03",
    name: "GRAPHIC DESIGN",
    category: "Typography · Composition · Visual Design",
    description:
      "Selected graphic explorations focused on composition, typography, proportion and aesthetic consistency.",
    images: ["page-12.jpg"],
  },
  {
    number: "04",
    name: "BEYOND DESIGN",
    category: "Packaging · Social · Campaigns",
    description:
      "Selected branding applications exploring how visual identity can extend across different brand touchpoints.",
    images: ["page-13.jpg", "page-14.jpg"],
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setReady(true);
      video.play().catch(() => {});
    };

    video.addEventListener("loadedmetadata", handleLoaded);
    video.addEventListener("canplay", handleLoaded);

    if (video.readyState >= 2) {
      handleLoaded();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoaded);
      video.removeEventListener("canplay", handleLoaded);
    };
  }, []);

  return (
    <main
      className={`${display.variable} ${sans.variable} min-h-screen bg-[#080706] text-[#f5f2ed] selection:bg-[#c40024] selection:text-white`}
    >
      <style jsx global>{`
        :root {
          --ink: #080706;
          --cream: #f5f2ed;
          --muted: #aaa39b;
          --red: #c40024;
          --red-soft: #e03a57;
          --rose: #d99aa5;
          --gold: #d7b98c;
          --line: rgba(245, 242, 237, 0.13);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--ink);
          color: var(--cream);
          font-family: var(--font-sans), Arial, sans-serif;
        }

        ::selection {
          background: var(--red);
          color: white;
        }

        .display-font {
          font-family: var(--font-display), Georgia, serif;
        }

        .text-gradient {
          background: linear-gradient(
            110deg,
            #f5f2ed 0%,
            #f5f2ed 38%,
            #d99aa5 62%,
            #c40024 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .text-gradient-gold {
          background: linear-gradient(
            110deg,
            #f5f2ed 0%,
            #d7b98c 48%,
            #c40024 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .accent {
          color: var(--red-soft);
        }

        .soft-accent {
          color: var(--rose);
        }

        .gold-accent {
          color: var(--gold);
        }

        .thin-line {
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(196, 0, 36, 0.7),
            rgba(245, 242, 237, 0.12),
            transparent
          );
        }

        .grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 50;
          opacity: 0.045;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
        }

        .image-hover {
          transition:
            transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
            filter 700ms ease;
        }

        .image-wrap:hover .image-hover {
          transform: scale(1.035);
          filter: saturate(1.12) contrast(1.04);
        }

        .project-card {
          transition:
            border-color 400ms ease,
            transform 400ms ease,
            background 400ms ease;
        }

        .project-card:hover {
          border-color: rgba(196, 0, 36, 0.5);
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.035);
        }
      `}</style>

      <div className="grain" />

      {/* NAVIGATION */}
      <header className="fixed left-0 right-0 top-0 z-40">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
          <a
            href="#top"
            className="display-font text-2xl font-semibold tracking-[0.08em]"
          >
            AAYUSHI<span className="accent">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.24em] text-white/65 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#capabilities">
              Capabilities
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="mailto:pixelsbyaashi@gmail.com"
            className="rounded-full border border-white/20 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white/80 transition hover:border-[#c40024] hover:bg-[#c40024]/10 hover:text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden"
      >
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/video/portfolio-background.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover brightness-75 contrast-125 saturate-150"
          />

          <div className="absolute inset-0 bg-red-900/15 mix-blend-screen" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />
        </div>

        <div
          className={`relative z-10 w-full px-6 pb-16 pt-40 transition-all duration-1000 md:px-10 md:pb-20 ${
            ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mx-auto grid max-w-[1500px] gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#d99aa5]">
                Creative Strategist · Brand · Packaging · Visual Design
              </p>

              <h1 className="display-font max-w-5xl text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.8] tracking-[-0.045em]">
                <span className="text-gradient">Ideas</span>
                <br />
                <span className="text-white">with</span>{" "}
                <span className="text-gradient-gold">intention.</span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                I build beauty and lifestyle brands through strategy,
                storytelling, packaging and visual direction, turning
                products into{" "}
                <span className="text-[#d99aa5]">
                  distinctive brand worlds.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="rounded-full bg-[#c40024] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-[#e03a57]"
                >
                  Explore Work
                </a>

                <a
                  href="/CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:border-white/50 hover:bg-white/5"
                >
                  View CV
                </a>
              </div>
            </div>

            <div className="hidden max-w-[230px] text-right md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Based in
              </p>

              <p className="display-font mt-1 text-2xl text-[#d7b98c]">
                New Delhi
              </p>

              <div className="mt-6 ml-auto h-px w-24 bg-[#c40024]" />

              <p className="mt-4 text-[10px] uppercase leading-5 tracking-[0.18em] text-white/45">
                Beauty
                <br />
                Branding
                <br />
                Packaging
                <br />
                Creative Direction
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10 md:left-10">
          <span className="text-[9px] uppercase tracking-[0.35em] text-white/40">
            Scroll to explore
          </span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
              01 / About
            </p>

            <div className="mt-7 h-px w-20 bg-[#c40024]" />
          </div>

          <div>
            <h2 className="display-font max-w-5xl text-[clamp(2.7rem,6vw,6.2rem)] leading-[0.92] tracking-[-0.035em]">
              A multidisciplinary creative working at the intersection of{" "}
              <span className="text-gradient">strategy</span>,{" "}
              <span className="soft-accent">design</span> and{" "}
              <span className="gold-accent">culture.</span>
            </h2>

            <div className="mt-10 grid gap-8 text-sm leading-7 text-white/60 md:grid-cols-2">
              <p>
                My work focuses on beauty, skincare, cosmetics and lifestyle
                brands, translating business and consumer thinking into visual
                identities that feel intentional, contemporary and
                commercially relevant.
              </p>

              <p>
                From visual direction and packaging to campaigns and digital
                touchpoints, I enjoy shaping the complete world around a
                product rather than designing isolated assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        id="capabilities"
        className="border-y border-white/10 bg-white/[0.015] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                02 / Capabilities
              </p>

              <h2 className="display-font mt-5 text-5xl leading-none md:text-7xl">
                What I <span className="text-gradient">do.</span>
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-xs leading-6 text-white/40 md:block">
              Strategy led creativity designed to make brands feel coherent,
              memorable and ready for market.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <div
                key={item}
                className="group border-b border-r border-white/10 p-7 transition hover:bg-white/[0.035]"
              >
                <span className="text-[9px] tracking-[0.25em] text-[#c40024]">
                  0{index + 1}
                </span>

                <h3 className="display-font mt-10 text-3xl text-white/90 transition group-hover:text-[#d99aa5]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                03 / Approach
              </p>

              <h2 className="display-font mt-6 max-w-md text-5xl leading-[0.95] md:text-7xl">
                From thought
                <br />
                <span className="text-gradient">to touchpoint.</span>
              </h2>
            </div>

            <div>
              <div className="space-y-0">
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-5 border-t border-white/10 py-7 md:grid-cols-[70px_220px_1fr]"
                  >
                    <span className="text-[10px] tracking-[0.2em] text-[#c40024]">
                      {item.number}
                    </span>

                    <h3 className="display-font text-3xl text-[#f5f2ed]">
                      {item.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-6 text-white/50">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="work"
        className="border-t border-white/10 px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                04 / Selected Work
              </p>

              <h2 className="display-font mt-6 text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]">
                Selected <span className="text-gradient">work.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/45">
              A selection of identity, packaging and visual direction projects
              developed across beauty, product and lifestyle categories.
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="project-card overflow-hidden border border-white/10 bg-white/[0.018]"
              >
                <div className="grid md:grid-cols-[0.75fr_1.25fr]">
                  <div className="flex flex-col justify-between p-7 md:p-10 lg:p-14">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.3em] text-[#c40024]">
                          {project.number}
                        </span>

                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                          {String(index + 1).padStart(2, "0")} / 04
                        </span>
                      </div>

                      <h3 className="display-font mt-16 text-6xl leading-[0.8] tracking-[-0.035em] md:text-8xl">
                        {project.name}
                        <span className="text-[#c40024]">.</span>
                      </h3>

                      <p className="mt-7 text-[10px] uppercase tracking-[0.18em] text-[#d99aa5]">
                        {project.category}
                      </p>

                      <p className="mt-8 max-w-md text-sm leading-7 text-white/50">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-14">
                      <div className="thin-line mb-4 w-full" />

                      <p className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                        Brand identity / visual language / application
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    {project.images.map((image, imageIndex) => (
                      <div
                        key={image}
                        className={`image-wrap relative overflow-hidden bg-[#151311] ${
                          project.images.length === 1
                            ? "col-span-2 aspect-[4/3]"
                            : "aspect-[4/3]"
                        }`}
                      >
                        <img
                          src={`/work/${image}`}
                          alt={`${project.name} project image ${
                            imageIndex + 1
                          }`}
                          className="image-hover h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="px-6 pb-28 md:px-10 md:pb-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                05 / Applications
              </p>

              <h2 className="display-font mt-5 text-5xl md:text-7xl">
                Product <span className="text-gradient-gold">worlds.</span>
              </h2>
            </div>

            <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/30 md:block">
              Selected packaging explorations
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {mockups.map((mockup, index) => (
              <div
                key={mockup}
                className="image-wrap relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#11100f]"
              >
                <img
                  src={`/work/${mockup}`}
                  alt={`Packaging mockup ${index + 1}`}
                  className="image-hover h-full w-full object-cover"
                />

                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-white/10 bg-white/[0.015] px-6 py-28 md:px-10 md:py-40"
      >
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                06 / Experience
              </p>

              <h2 className="display-font mt-6 max-w-md text-5xl leading-[0.92] md:text-7xl">
                Experience that connects{" "}
                <span className="text-gradient">creative</span> and{" "}
                <span className="gold-accent">commercial thinking.</span>
              </h2>
            </div>

            <div>
              {experience.map((item) => (
                <article
                  key={`${item.year}-${item.company}`}
                  className="border-t border-white/10 py-9"
                >
                  <div className="grid gap-6 md:grid-cols-[180px_1fr]">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c40024]">
                      {item.year}
                    </p>

                    <div>
                      <h3 className="display-font text-3xl text-white">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#d99aa5]">
                        {item.company}
                      </p>

                      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS + EDUCATION */}
      <section className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-20 md:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
              07 / Tools
            </p>

            <h2 className="display-font mt-5 text-5xl md:text-7xl">
              Built with <span className="text-gradient">range.</span>
            </h2>

            <div className="mt-12 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-white/55 transition hover:border-[#c40024]/60 hover:text-[#d99aa5]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
              08 / Education & Certifications
            </p>

            <div className="mt-10">
              <div className="border-t border-white/10 py-7">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c40024]">
                  Education
                </p>

                <h3 className="display-font mt-3 text-3xl">
                  Bachelor of Arts · English Hons
                </h3>

                <p className="mt-2 text-xs text-white/40">
                  Sidho Kanhu Murmu University · 2019 · 2021
                </p>
              </div>

              <div className="border-t border-white/10 py-7">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c40024]">
                  Certification
                </p>

                <h3 className="display-font mt-3 text-3xl">
                  Digital Marketing
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/40">
                  Reliance Foundation Skilling Academy through Skill India
                  Digital · 140 hour online course · 2026
                </p>
              </div>

              <div className="border-t border-white/10 py-7">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#c40024]">
                  Certification
                </p>

                <h3 className="display-font mt-3 text-3xl">
                  Generative AI Mastermind
                </h3>

                <p className="mt-2 text-xs text-white/40">
                  Outskill · Certificate of Completion · 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section className="relative overflow-hidden border-y border-white/10 px-6 py-32 md:px-10 md:py-48">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(196,0,36,0.13),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1500px]">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
            Creative Philosophy
          </p>

          <h2 className="display-font mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]">
            Good design gets{" "}
            <span className="text-gradient">attention.</span>
            <br />
            Great design gives it{" "}
            <span className="text-gradient-gold">meaning.</span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-7 text-white/45">
            I believe the strongest brands are not built by adding more.
            They are built by making every decision feel intentional.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#d99aa5]">
                09 / Contact
              </p>

              <h2 className="display-font mt-6 text-6xl leading-[0.82] tracking-[-0.04em] md:text-8xl">
                Let&apos;s make
                <br />
                something{" "}
                <span className="text-gradient">distinctive.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end">
              <p className="max-w-xl text-sm leading-7 text-white/50">
                Open to opportunities across beauty branding, packaging
                design, creative direction, brand design and strategic
                creative work.
              </p>

              <div className="mt-12 space-y-6">
                <a
                  href="mailto:pixelsbyaashi@gmail.com"
                  className="group block border-t border-white/10 pt-5"
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#c40024]">
                    Email
                  </span>

                  <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#d99aa5] md:text-4xl">
                    pixelsbyaashi@gmail.com
                  </span>
                </a>

                <a
                  href="https://wa.me/918920799095"
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-t border-white/10 pt-5"
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#c40024]">
                    WhatsApp · No Calls
                  </span>

                  <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#d99aa5] md:text-4xl">
                    +91 89207 99095
                  </span>
                </a>

                <a
                  href="https://instagram.com/aashisartwork"
                  target="_blank"
                  rel="noreferrer"
                  className="group block border-t border-white/10 pt-5"
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#c40024]">
                    Instagram
                  </span>

                  <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#d99aa5] md:text-4xl">
                    @aashisartwork
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 md:flex-row">
          <span>
            Aayushi Trivedi <span className="text-[#c40024]">·</span> Creative
            Strategist
          </span>

          <span>New Delhi · India</span>

          <span>© {new Date().getFullYear()} All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}