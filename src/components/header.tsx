"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const links = [
    { name: "ABOUT ME", href: "/about" },
    { name: "WORKS", href: "/works" },
    { name: "SERVICES", href: "/services" },
    { name: "CONNECT", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10 ">
        {/* Logo */}
        <Link
          href="/"
          className="leading-[0.8] transition-opacity duration-300 hover:opacity-70"
        >
          <h1 className="text-xl font-black uppercase leading-[0.78] tracking-[-0.08em] text-black sm:text-2xl lg:text-[2rem]">
            CHINMAYA
            <br />
            KUMAR
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-16 xl:gap-24 2xl:gap-28">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-black"
            >
              <span className="text-black/60">[</span>

              <span className="relative overflow-hidden">
                {link.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </span>

              <span className="text-black/60">]</span>
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <Link
          href="/contact"
          className="group hidden lg:inline-flex items-center gap-2"
        >
          <span className="relative overflow-hidden text-[13px] font-bold uppercase tracking-[0.22em] text-black">
            CONTACT ME

            <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-black transition-transform duration-300 group-hover:scale-x-0" />
          </span>

          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45"
          />
        </Link>

        {/* Mobile */}
        <button className="text-sm font-bold uppercase tracking-[0.3em] text-black transition-opacity duration-300 hover:opacity-60 lg:hidden">
          MENU
        </button>
      </div>
    </header>
  );
}