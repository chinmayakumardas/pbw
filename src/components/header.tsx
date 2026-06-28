



// "use client";

// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// export default function Header() {
//   const links = [
//     { name: "ABOUT ME", id: "about" },
//     { name: "WORKS", id: "projects" },
//     { name: "SERVICES", id: "services" },
//     { name: "CONNECT", id: "connect" },
//   ];

//   const handleScroll = (id) => {
//     document.getElementById(id)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
//       <div className="mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10">
        
//         {/* Logo */}
//         <Link
//           href="/"
//           className="leading-[0.8] transition-opacity duration-300 hover:opacity-70"
//         >
//           <h1 className="text-xl font-black uppercase leading-[0.78] tracking-[-0.08em] text-black sm:text-2xl lg:text-[2rem]">
//             CHINMAYA
//             <br />
//             KUMAR
//           </h1>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-16 xl:gap-24 2xl:gap-28">
//           {links.map((link) => (
//             <button
//               key={link.name}
//               onClick={() => handleScroll(link.id)}
//               className=" cursor-pointer group flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em] text-black"
//             >
//               <span className="text-black/60">[</span>

//               <span className="relative overflow-hidden">
//                 {link.name}

//                 <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
//               </span>

//               <span className="text-black/60">]</span>
//             </button>
//           ))}
//         </nav>

//         {/* Contact */}
//         <button
//           onClick={() => handleScroll("contact")}
//           className="group hidden lg:inline-flex items-center gap-2"
//         >
//           <span className="relative overflow-hidden text-[13px] font-bold uppercase tracking-[0.22em] text-black">
//             CONTACT ME

//             <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-black transition-transform duration-300 group-hover:scale-x-0" />
//           </span>

//           <ArrowUpRight
//             size={18}
//             strokeWidth={2}
//             className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45"
//           />
//         </button>

//         {/* Mobile */}
//         <button className="text-sm font-bold uppercase tracking-[0.3em] text-black transition-opacity duration-300 hover:opacity-60 lg:hidden">
//           MENU
//         </button>
//       </div>
//     </header>
//   );
// }



"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isWhite, setIsWhite] = useState(false);

  const links = [
    { name: "ABOUT ME", id: "about" },
    { name: "RECENT WORKS", id: "recent-works" },
    { name: "SERVICES", id: "services" },
    { name: "CONNECT", id: "contact" },
  ];

  // 👇 ONLY these sections will turn header WHITE
  const whiteSections = ["about"];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);

    const handleScrollEvent = () => {
      let current = "";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // section is in view
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      // ONLY turn white if current section is in array
      setIsWhite(whiteSections.includes(current));
    };

    window.addEventListener("scroll", handleScrollEvent);
    handleScrollEvent(); // run once

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div
        className={`mx-auto flex h-16 items-center justify-between px-6 md:h-20 md:px-10 transition-colors duration-500 ${
          isWhite ? "text-white" : "text-black"
        }`}
      >
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-xl font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-2xl lg:text-[2rem]">
            CHINMAYA
            <br />
            KUMAR
          </h1>
        </Link>

        {/* NAV */}
        <nav className="hidden lg:flex items-center gap-16 xl:gap-24 2xl:gap-28">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.id)}
              className="group flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.22em]"
            >
              <span className="opacity-60">[</span>

              <span className="relative overflow-hidden">
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    isWhite ? "bg-white" : "bg-black"
                  }`}
                />
              </span>

              <span className="opacity-60">]</span>
            </button>
          ))}
        </nav>

        {/* CONTACT */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden lg:inline-flex items-center gap-2 group"
        >
          <span className="relative text-[13px] font-bold uppercase tracking-[0.22em]">
            CONTACT ME
            <span
              className={`absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300 group-hover:scale-x-0 ${
                isWhite ? "bg-white" : "bg-black"
              }`}
            />
          </span>

          <ArrowUpRight
            size={18}
            className="transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-45"
          />
        </button>

        {/* MOBILE */}
        <button className="text-sm font-bold uppercase tracking-[0.3em] lg:hidden">
          MENU
        </button>
      </div>
    </header>
  );
}