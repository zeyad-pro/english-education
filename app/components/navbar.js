"use client";
import { useEffect } from "react";
import React from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
function Navbar() {
//   useEffect(() => {
//     // from width 0 to 100% حسب السكروول
//     gsap.fromTo(
//       ".progress-bar",
//       { width: "0%" },
//       {
//         width: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: document.body,
//           start: "top top",
//           end: "bottom top", // طول الصفحة كامل
//           scrub: 0.6,
//         },
//       }
//     );

//     // تأكد من إعادة حساب ScrollTrigger بعد التحميل
//     ScrollTrigger.refresh();
//   }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <header className="bg-white/50 backdrop-blur-2xl z-50  fixed top-1 w-full  h-16 shadow ">

      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="#">
          <h1 className="font-bold main-text-color text-2xl">THE GENIUS</h1>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-orange-500 cursor-pointer"
                  href="#hero"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-orange-500 cursor-pointer"
                  href="#grades"
                >
                  {" "}
                  Grades{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-orange-500 cursor-pointer"
                  href="#books"
                >
                  {" "}
                  Books{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer"
                  href="#"
                >
                  {" "}
                  Top People{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block main-text-color main-hvcolor hover:text-white rounded-sm px-5 py-2.5 text-sm font-medium border main-brcolor transition "
                href="#"
              >
                Login
              </a>

              <a
                className="hidden main-bgcolor text-white rounded-sm hover:bg-transparent hover:text-orange-500  hover:border-orange-500 hover:border border border-orange-500  px-5 py-2.5 text-sm font-medium transition  sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
