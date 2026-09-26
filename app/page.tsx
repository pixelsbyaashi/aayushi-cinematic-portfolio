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

const brands = [
  "SIAN",
  "RUPIN",
  "PHYOBLIX",
  "PEARLUXE",
  "OCEANIA",
  "RAEIRA",
  "SANTOO",
  "VYOMA",
];

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
  "Brand Strategy",
  "Brand Identity",
  "Packaging Design",
  "Creative Direction",
  "Art Direction",
  "Visual Direction",
  "Campaign Design",
  "Social Media Design",
  "Product Naming",
  "Typography",
  "Layout Design",
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understanding the brand, audience, category, competition and opportunity before defining the creative direction.",
  },
  {
    number: "02",
    title: "Define",
    text: "Building a clear strategic idea and translating it into a distinctive visual point of view.",
  },
  {
    number: "03",
    title: "Create",
    text: "Developing identity, typography, colour, imagery and packaging into one coherent visual language.",
  },
  {
    number: "04",
    title: "Direct",
    text: "Shaping the creative expression across campaigns, content, product presentation and brand communication.",
  },
  {
    number: "05",
    title: "Refine",
    text: "Balancing aesthetics, usability and commercial relevance so every detail feels intentional.",
  },
];

const experience = [
  {
    year: "2025 · Present",
    role: "Brand & Packaging Consultant",
    company: "Siddharth Cosmetics",
    description:
      "Working across cosmetic product concepts, product naming, packaging, visual communication, creative direction and product presentation. Collaborating with client, packaging and manufacturing teams to develop cohesive and market ready brand expressions.",
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

const portfolioImages = [
  "portfolio-01.jpg",
  "portfolio-02.png",
  "portfolio-03.jpg",
  "portfolio-04.jpg",
  "portfolio-05.jpg",
  "portfolio-06.jpg",
  "portfolio-07.jpg",
  "portfolio-08.jpg",
  "portfolio-09.jpg",
  "portfolio-10.jpg",
  "portfolio-11.png",
  "portfolio-12.jpg",
  "portfolio-13.png",
  "portfolio-14.jpg",
  "portfolio-15.png",
  "portfolio-16.png",
  "portfolio-17.png",
  "portfolio-18.png",
  "portfolio-19.png",
  "portfolio-20.jpg",
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
      className={`${display.variable} ${sans.variable} min-h-screen overflow-x-hidden bg-[#070506] text-[#f5f2ed] selection:bg-[#a90020] selection:text-white`}
    >
      <style jsx global>{`
        :root {
          --ink: #070506;
          --cream: #f5f2ed;
          --muted: #aaa39b;

          --red-dark: #420008;
          --red-deep: #69000e;
          --red: #a90020;
          --red-bright: #df183f;
          --red-light: #ff4768;

          --silver: #ded8d2;
          --gold: #d7b98c;

          --line: rgba(245, 242, 237, 0.12);
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

        /* =====================================================
           METALLIC RED
        ===================================================== */

        .metal-red {
          background:
            linear-gradient(
              115deg,
              #430008 0%,
              #8e0018 18%,
              #e51b42 36%,
              #71000f 53%,
              #b50027 70%,
              #4b0009 86%,
              #d91a3d 100%
            );
          background-size: 240% 240%;
          animation: metalShift 7s ease-in-out infinite;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.28),
            inset 0 -1px 0 rgba(0, 0, 0, 0.45),
            0 12px 35px rgba(130, 0, 25, 0.2);
        }

        @keyframes metalShift {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .metal-text {
          background:
            linear-gradient(
              105deg,
              #ffffff 0%,
              #d8c0c5 20%,
              #ff4b6c 42%,
              #ffffff 57%,
              #b90026 76%,
              #ffffff 100%
            );
          background-size: 220% 220%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shineText 5s ease-in-out infinite;
        }

        @keyframes shineText {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .text-gradient {
          background:
            linear-gradient(
              105deg,
              #ffffff 0%,
              #ffffff 28%,
              #e6aab5 47%,
              #ff3159 65%,
              #9c001d 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 180% 180%;
          animation: shineText 6s ease-in-out infinite;
        }

        .text-gradient-gold {
          background:
            linear-gradient(
              105deg,
              #ffffff 0%,
              #d7b98c 45%,
              #ff3159 75%,
              #ffffff 100%
            );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 180% 180%;
          animation: shineText 7s ease-in-out infinite;
        }

        .accent {
          color: var(--red-bright);
        }

        .soft-accent {
          color: #e1a4af;
        }

        .gold-accent {
          color: var(--gold);
        }

        /* =====================================================
           GRAIN
        ===================================================== */

        .grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          z-index: 60;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
        }

        /* =====================================================
           IMAGE MOTION
        ===================================================== */

        .image-hover {
          transition:
            transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1),
            filter 900ms ease;
        }

        .image-wrap:hover .image-hover {
          transform: scale(1.045);
          filter: saturate(1.1) contrast(1.04);
        }

        /* =====================================================
           SELECTED WORK MARQUEE
        ===================================================== */

        .selected-work-marquee {
          overflow: hidden;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.28);
        }

        .selected-work-track {
          display: flex;
          width: max-content;
          animation: selectedWorkRightToLeft 55s linear infinite;
        }

        @keyframes selectedWorkRightToLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .selected-work-image {
          flex: 0 0 auto;
          width: 330px;
          height: 245px;
          margin: 12px 6px;
          overflow: hidden;
          background: #120709;
          border: 1px solid rgba(255, 255, 255, 0.09);
        }

        .selected-work-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 768px) {
          .selected-work-image {
            width: 245px;
            height: 185px;
          }
        }

        /* =====================================================
           PROFILE IMAGE
        ===================================================== */

        .profile-frame {
          animation: profileFloat 6s ease-in-out infinite;
        }

        @keyframes profileFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-9px) rotate(0.35deg);
          }
        }

        .profile-glow {
          animation: profileGlow 4s ease-in-out infinite;
        }

        @keyframes profileGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.96);
          }

          50% {
            opacity: 0.55;
            transform: scale(1.02);
          }
        }

        /* =====================================================
           POP UP TEXT
        ===================================================== */

        .hero-pop {
          animation: heroPop 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        @keyframes heroPop {
          from {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* =====================================================
           BRAND MARQUEE
        ===================================================== */

        .brand-marquee {
          overflow: hidden;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
        }

        .brand-track {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 28s linear infinite;
        }

        @keyframes marqueeRightToLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .brand-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 190px;
          height: 58px;
          margin: 8px 6px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.28em;
          color: white;
          white-space: nowrap;
        }

        /* =====================================================
           SECTIONS
        ===================================================== */

        .section-glow {
          position: relative;
        }

        .section-glow::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          left: -180px;
          top: 20%;
          border-radius: 999px;
          background: rgba(140, 0, 25, 0.08);
          filter: blur(100px);
          pointer-events: none;
        }

        .thin-line {
          height: 1px;
          background:
            linear-gradient(
              90deg,
              rgba(190, 0, 35, 0.8),
              rgba(245, 242, 237, 0.12),
              transparent
            );
        }

        /* =====================================================
           CAPABILITY BOXES
        ===================================================== */

        .capability-box {
          min-height: 145px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 22px;
          transition:
            transform 400ms ease,
            border-color 400ms ease,
            filter 400ms ease;
        }

        .capability-box:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 255, 255, 0.35);
          filter: brightness(1.1);
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .brand-item {
            min-width: 145px;
            height: 50px;
            font-size: 8px;
          }
        }
      `}</style>

      <div className="grain" />

      {/* =====================================================
          FULL PAGE BACKGROUND VIDEO
          BRIGHTENED ONLY
      ===================================================== */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/video/portfolio-background.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover brightness-[0.62] contrast-[1.18] saturate-[1.45]"
        />

        <div className="absolute inset-0 bg-[#280008]/20 mix-blend-screen" />

        <div className="absolute inset-0 bg-black/38" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(180,0,35,0.18),transparent_35%)]" />
      </div>

      {/* =====================================================
          CONTENT WRAPPER
      ===================================================== */}

      <div className="relative z-10">

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <header className="fixed left-0 right-0 top-0 z-50">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 md:px-10">
            <a
              href="#top"
              className="display-font text-2xl font-semibold tracking-[0.08em]"
            >
              AAYUSHI<span className="accent">.</span>
            </a>

            <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.24em] text-white/70 md:flex">
              <a className="transition hover:text-white" href="#about">
                About
              </a>

              <a
                className="transition hover:text-white"
                href="#capabilities"
              >
                Capabilities
              </a>

              <a className="transition hover:text-white" href="#work">
                Work
              </a>

              <a
                className="transition hover:text-white"
                href="#experience"
              >
                Experience
              </a>

              <a
                className="transition hover:text-white"
                href="#contact"
              >
                Contact
              </a>
            </nav>

            <a
              href="mailto:pixelsbyaashi@gmail.com"
              className="metal-red rounded-full px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </div>
        </header>

          {/* ===================================================
            HERO
        =================================================== */}

        <section
          id="top"
          className="relative flex min-h-screen items-end overflow-hidden"
        >
          <div
            className={`relative z-10 w-full px-6 pb-12 pt-36 transition-all duration-1000 md:px-10 md:pb-16 ${
              ready
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1fr_430px] md:items-end">

              {/* HERO TEXT */}

              <div className="hero-pop">

                <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-[#e0a2ae]">
                  Brand Strategist · Creative Direction · Packaging
                </p>

                {/* HEADLINE */}

                <h1 className="display-font max-w-4xl text-[clamp(3.4rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.045em]">
                  <span className="metal-text">Ideas</span>
                  <br />
                  <span className="text-white">with</span>{" "}
                  <span className="text-gradient-gold">intention.</span>
                </h1>

                {/* LARGE SPACE BETWEEN HEADLINE AND INTRO */}

                <div className="mt-20 md:mt-24">

                  <p className="max-w-xl text-sm leading-7 text-white/70 md:text-[15px]">
                    I am Aayushi Trivedi, a multidisciplinary brand and
                    creative strategist working across beauty, cosmetics,
                    packaging and lifestyle. I combine strategy, storytelling
                    and visual direction to create brands that feel
                    distinctive, considered and commercially relevant.
                  </p>

                  {/* BUTTONS */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    <a
                      href="#work"
                      className="metal-red rounded-full px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition hover:scale-105"
                    >
                      Explore Work
                    </a>

                    <a
                      href="/CV.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition hover:border-white/60 hover:bg-white/10"
                    >
                      View CV
                    </a>

                  </div>

                </div>

              </div>

              {/* PROFILE IMAGE
                  MOVED LOWER TO SIT BESIDE INTRODUCTION */}

              <div className="relative mx-auto w-full max-w-[430px] translate-y-20 md:ml-auto md:translate-y-24">

                <div className="profile-glow absolute -inset-8 rounded-[30px] bg-[#b60028]/25 blur-3xl" />

                <div className="profile-frame relative overflow-hidden rounded-[18px] border border-white/20 bg-black/30 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-sm">

                  <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] bg-[#100608]">

                    <img
                      src="/profile.png"
                      alt="Aayushi Trivedi"
                      className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">

                      <div>

                        <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                          Creative Strategist
                        </p>

                        <p className="display-font mt-1 text-2xl text-white">
                          Aayushi Trivedi
                        </p>

                      </div>

                      <span className="metal-red rounded-full px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white">
                        Delhi
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* SCROLL */}

          <div className="absolute bottom-5 left-6 z-20 md:left-10">

            <span className="text-[9px] uppercase tracking-[0.35em] text-white/50">
              Scroll to explore
            </span>

          </div>

        </section>

        {/* ===================================================
            BRAND MARQUEE
        =================================================== */}

        <section className="relative z-20 pt-20 md:pt-28">

  <div className="mx-auto max-w-[1500px] px-6 pb-8 md:px-10 md:pb-10">

    <p className="text-center text-[11px] font-bold uppercase tracking-[0.35em] text-white md:text-sm">
      <span className="metal-text">
        Brands I Have Worked With
      </span>
    </p>

    <div className="mx-auto mt-4 h-[2px] w-16 bg-[#e00036]" />

  </div>

  <div className="brand-marquee">

    <div className="brand-track">

      {[...brands, ...brands].map((brand, index) => (
        <div
          key={`${brand}-${index}`}
          className="brand-item metal-red"
        >
          {brand}
        </div>
      ))}

    </div>

  </div>

</section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="section-glow px-6 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.65fr_1.35fr]">

            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                01 / About
              </p>

              <div className="mt-7 h-px w-20 bg-[#d20a31]" />

              <p className="mt-8 max-w-xs text-xs leading-6 text-white/40">
                Strategy led creative thinking with a focus on beauty,
                packaging, lifestyle and contemporary brand experiences.
              </p>
            </div>

            <div>
              <h2 className="display-font max-w-6xl text-[clamp(2.7rem,6vw,6.2rem)] leading-[0.9] tracking-[-0.035em]">
                I create brands where{" "}
                <span className="text-gradient">strategy</span> meets{" "}
                <span className="soft-accent">visual expression</span> and
                every detail has a{" "}
                <span className="text-gradient-gold">purpose.</span>
              </h2>

              <div className="mt-10 grid gap-8 text-sm leading-7 text-white/60 md:grid-cols-2">
                <p>
                  My work sits at the intersection of brand strategy,
                  storytelling, design and culture. I focus particularly on
                  beauty, skincare, cosmetics and lifestyle brands.
                </p>

                <p>
                  I enjoy developing the complete world around a product,
                  from naming and positioning through identity, packaging,
                  campaigns, social communication and visual direction.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            CAPABILITIES
        =================================================== */}

        <section
          id="capabilities"
          className="border-y border-white/10 bg-black/20 px-6 py-24 md:px-10 md:py-32"
        >
          <div className="mx-auto max-w-[1500px]">

            <div className="mb-16 flex items-end justify-between gap-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  02 / Capabilities
                </p>

                <h2 className="display-font mt-5 text-5xl leading-none md:text-7xl">
                  What I <span className="metal-text">do.</span>
                </h2>
              </div>

              <p className="hidden max-w-xs text-right text-xs leading-6 text-white/40 md:block">
                From the first idea to the final visual expression, I build
                cohesive brand worlds with clarity and intention.
              </p>
            </div>

            {/* METALLIC RED CAPABILITY BOXES */}

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="capability-box metal-red group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-bold tracking-[0.25em] text-white/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                      Creative
                    </span>
                  </div>

                  <h3 className="display-font text-3xl leading-none text-white md:text-4xl">
                    {item}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================================================
            APPROACH
        =================================================== */}

        <section className="px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-[1500px]">

            <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">

              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  03 / Approach
                </p>

                <h2 className="display-font mt-6 max-w-md text-5xl leading-[0.95] md:text-7xl">
                  From idea
                  <br />
                  <span className="metal-text">to expression.</span>
                </h2>
              </div>

              <div>
                {process.map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-5 border-t border-white/10 py-7 md:grid-cols-[70px_220px_1fr]"
                  >
                    <span className="metal-red inline-flex h-8 w-12 items-center justify-center rounded-sm text-[10px] font-bold tracking-[0.2em] text-white">
                      {item.number}
                    </span>

                    <h3 className="display-font text-3xl text-white">
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
        </section>

        {/* ===================================================
            SELECTED WORK
            ALL IMAGES FLOAT RIGHT TO LEFT
        =================================================== */}

        <section
          id="work"
          className="border-t border-white/10 px-6 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">

            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  04 / Selected Work
                </p>

                <h2 className="display-font mt-6 text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]">
                  Selected <span className="metal-text">work.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-6 text-white/45">
                A curated selection of visual work across beauty, packaging,
                product presentation and contemporary brand communication.
              </p>
            </div>

            {/* ONLY SELECTED WORK IMAGES */}
            <div className="selected-work-marquee">
              <div className="selected-work-track">

                {[...portfolioImages, ...portfolioImages].map(
                  (image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className="selected-work-image image-wrap"
                    >
                      <img
                        src={`/new-work/${image}`}
                        alt={`Selected work ${index + 1}`}
                        className="image-hover"
                      />
                    </div>
                  )
                )}

              </div>
            </div>

          </div>
        </section>

        {/* ===================================================
            PACKAGING / MOCKUPS
        =================================================== */}

        <section className="px-6 pb-28 md:px-10 md:pb-40">
          <div className="mx-auto max-w-[1500px]">

            <div className="mb-14 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  05 / Product
                </p>

                <h2 className="display-font mt-5 text-5xl md:text-7xl">
                  Product <span className="metal-text">worlds.</span>
                </h2>
              </div>

              <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/30 md:block">
                Packaging and product explorations
              </span>
            </div>

            <div className="space-y-4 overflow-hidden">

  {/* PRODUCT ROW 1 */}
  <div className="overflow-hidden">
    <div className="flex w-max gap-4 animate-[marqueeRightToLeft_28s_linear_infinite]">
      {[...mockups.slice(0, 5), ...mockups.slice(0, 5)].map(
        (mockup, index) => (
          <div
            key={`${mockup}-row1-${index}`}
            className="image-wrap relative h-[240px] w-[320px] shrink-0 overflow-hidden border border-white/10 bg-black/25 md:h-[300px] md:w-[420px]"
          >
            <img
              src={`/work/${mockup}`}
              alt={`Packaging exploration ${(index % 5) + 1}`}
              className="image-hover h-full w-full object-cover"
            />

            <div className="metal-red absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              {String((index % 5) + 1).padStart(2, "0")}
            </div>
          </div>
        )
      )}
    </div>
  </div>

  {/* PRODUCT ROW 2 */}
  <div className="overflow-hidden">
    <div className="flex w-max gap-4 animate-[marqueeRightToLeft_32s_linear_infinite]">
      {[...mockups.slice(5, 9), ...mockups.slice(5, 9)].map(
        (mockup, index) => (
          <div
            key={`${mockup}-row2-${index}`}
            className="image-wrap relative h-[240px] w-[320px] shrink-0 overflow-hidden border border-white/10 bg-black/25 md:h-[300px] md:w-[420px]"
          >
            <img
              src={`/work/${mockup}`}
              alt={`Packaging exploration ${(index % 4) + 6}`}
              className="image-hover h-full w-full object-cover"
            />

            <div className="metal-red absolute left-4 top-4 rounded-full px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              {String((index % 4) + 6).padStart(2, "0")}
            </div>
          </div>
        )
      )}
    </div>
  </div>

</div>

          </div>
        </section>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          id="experience"
          className="border-y border-white/10 bg-black/20 px-6 py-28 md:px-10 md:py-40"
        >
          <div className="mx-auto max-w-[1500px]">

            <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">

              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  06 / Experience
                </p>

                <h2 className="display-font mt-6 max-w-md text-5xl leading-[0.92] md:text-7xl">
                  Creative thinking with{" "}
                  <span className="metal-text">commercial purpose.</span>
                </h2>
              </div>

              <div>

                {experience.map((item) => (
                  <article
                    key={`${item.year}-${item.company}`}
                    className="border-t border-white/10 py-9"
                  >

                    <div className="grid gap-6 md:grid-cols-[180px_1fr]">

                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#e00036]">
                        {item.year}
                      </p>

                      <div>

                        <h3 className="display-font text-3xl text-white">
                          {item.role}
                        </h3>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#e0a2ae]">
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

        {/* ===================================================
            TOOLS + EDUCATION
        =================================================== */}

        <section className="px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto grid max-w-[1500px] gap-20 md:grid-cols-2">

            <div>

              <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                07 / Tools
              </p>

              <h2 className="display-font mt-5 text-5xl md:text-7xl">
                Built with <span className="metal-text">range.</span>
              </h2>

              <div className="mt-12 flex flex-wrap gap-2">

                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="metal-red rounded-sm px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white transition hover:scale-105"
                  >
                    {tool}
                  </span>
                ))}

              </div>

            </div>

            <div>

              <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                08 / Education & Certifications
              </p>

              <div className="mt-10">

                <div className="border-t border-white/10 py-7">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#e00036]">
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

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#e00036]">
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

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#e00036]">
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

        {/* ===================================================
            CREATIVE STATEMENT
        =================================================== */}

        <section className="relative overflow-hidden border-y border-white/10 px-6 py-32 md:px-10 md:py-48">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(185,0,35,0.18),transparent_35%)]" />

          <div className="relative mx-auto max-w-[1500px]">

            <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
              Creative Philosophy
            </p>

            <h2 className="display-font mt-8 max-w-6xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.045em]">
              Make it{" "}
              <span className="metal-text">beautiful.</span>
              <br />
              Make it{" "}
              <span className="text-gradient-gold">meaningful.</span>
              <br />
              Make it{" "}
              <span className="text-gradient">memorable.</span>
            </h2>

            <p className="mt-10 max-w-xl text-sm leading-7 text-white/45">
              I believe the strongest brands are built when every decision
              works together, from the idea behind the product to the way it
              is seen, remembered and experienced.
            </p>

          </div>

        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="px-6 py-28 md:px-10 md:py-40"
        >

          <div className="mx-auto max-w-[1500px]">

            <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">

              <div>

                <p className="text-[10px] uppercase tracking-[0.32em] text-[#e0a2ae]">
                  09 / Contact
                </p>

                <h2 className="display-font mt-6 text-6xl leading-[0.82] tracking-[-0.04em] md:text-8xl">
                  Let&apos;s create
                  <br />
                  something{" "}
                  <span className="metal-text">distinctive.</span>
                </h2>

              </div>

              <div className="flex flex-col justify-end">

                <p className="max-w-xl text-sm leading-7 text-white/50">
                  Open to opportunities across beauty branding, packaging,
                  creative direction, brand design and strategic creative
                  work.
                </p>

                <div className="mt-12 space-y-6">

                  <a
                    href="mailto:pixelsbyaashi@gmail.com"
                    className="group block border-t border-white/10 pt-5"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#e00036]">
                      Email
                    </span>

                    <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#ff5474] md:text-4xl">
                      pixelsbyaashi@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://wa.me/918920799095"
                    target="_blank"
                    rel="noreferrer"
                    className="group block border-t border-white/10 pt-5"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#e00036]">
                      WhatsApp · No Calls
                    </span>

                    <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#ff5474] md:text-4xl">
                      +91 89207 99095
                    </span>
                  </a>

                  <a
                    href="https://instagram.com/aashisartwork"
                    target="_blank"
                    rel="noreferrer"
                    className="group block border-t border-white/10 pt-5"
                  >
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#e00036]">
                      Instagram
                    </span>

                    <span className="display-font mt-2 block text-2xl text-white transition group-hover:text-[#ff5474] md:text-4xl">
                      @aashisartwork
                    </span>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <footer className="border-t border-white/10 px-6 py-8 md:px-10">

          <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.2em] text-white/30 md:flex-row">

            <span>
              Aayushi Trivedi{" "}
              <span className="text-[#e00036]">·</span> Creative Strategist
            </span>

            <span>New Delhi · India</span>

            <span>
              © {new Date().getFullYear()} All Rights Reserved
            </span>

          </div>

        </footer>

      </div>
    </main>
  );
}