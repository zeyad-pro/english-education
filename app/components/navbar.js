"use client";
import { useEffect, useState } from "react";
import React from "react";
import Radio from "./radio";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      });
    });
  }, []);

  return (
    <header className="bg-white/50 dark:bg-gray-900/80 backdrop-blur-2xl z-50 fixed top-1 w-full h-16 shadow transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <h1 className="font-bold main-text-color text-2xl">THE GENIUS</h1>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className={`${
              menuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full md:bg-transparent bg-white dark:bg-gray-900 md:static md:block md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-6 text-sm p-4 md:p-0">
              <li>
                <a
                  className="text-gray-500 hover:text-orange-500"
                  href="/#hero"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-orange-500"
                  href="/#grades"
                >
                  Grades
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-orange-500"
                  href="/#books"
                >
                  Books
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-orange-500"
                  href="/#toppeople"
                >
                  Top People
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 hover:text-orange-500"
                  href="/pearentsCheck"
                >
                  متابعه ولي الامر
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <Radio />
            <div className="sm:flex sm:gap-4  gap-4  flex">
              <a
                className="block main-text-color main-hvcolor hover:text-white rounded-sm px-3 md:px-5 py-2.5 text-sm font-medium border main-brcolor transition"
                href="/login"
              >
                Login
              </a>
              <a
                className="main-bgcolor hidden md:flex text-white rounded-sm hover:bg-transparent hover:text-orange-500 hover:border-orange-500 hover:border border border-orange-500 px-5 py-2.5 text-sm font-medium transition"
                href="/register"
              >
                Register
              </a>
            </div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
