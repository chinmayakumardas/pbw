"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f8f8f6] pt-24">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10 xl:px-16">
        {/* Top */}
        <div className="mb-4 flex items-end justify-between">
          <span className="text-xl font-bold tracking-tight text-black">
            01
          </span>

          <span className="hidden text-[12px] font-semibold uppercase tracking-[0.9em] text-black/70 lg:block">
            BASED IN INDIA
          </span>
        </div>

        {/* Huge Title */}
        <div className="relative">
          <h1 className="select-none text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.08em] text-black sm:text-[16vw] lg:text-[13vw]">
            CREATIVE
            <br />
            DEVELOPER
          </h1>

          {/* Floating Image */}
          <div className="absolute left-1/2 top-[42%] z-20 w-[230px] -translate-x-1/2 md:w-[320px] lg:w-[380px] xl:w-[430px]">
            <div className="overflow-hidden shadow-2xl">
              <Image
                src="/images/profile.png"
                alt="Portrait"
                width={700}
                height={900}
                priority
                className="h-auto w-full object-cover grayscale transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-12 lg:mt-6 lg:flex-row">
          <div className="space-y-3">
            <p className="text-2xl font-black uppercase tracking-tight">
              / Full Stack Development
            </p>

            <p className="text-2xl font-black uppercase tracking-tight">
              / UI / UX Design
            </p>

            <p className="text-2xl font-black uppercase tracking-tight">
              / Motion & GSAP
            </p>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-8 text-black/65 md:text-base">
              I build modern websites and digital experiences with
              performance, motion, and clean design. Focused on creating
              memorable products using React, Next.js, Three.js and GSAP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}