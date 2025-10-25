import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 ">
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8"></div>

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-orange-500 lg:justify-start text-3xl font-bold">
              THE GENIUS
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
              منصة تعليمية متخصصة في تدريس اللغة الإنجليزية للثانوية العامة درجة
              الإنجليزي مضمونة معانا!
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                About{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Grades{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Books{" "}
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="#"
              >
                {" "}
                Top People{" "}
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; 2025. All rights reserved.
        </p>
        <p className="mt-12 text-center text-xl text-gray-700 lg:text-center">
          Devoloped by{" "}
          <a href="https://wa.me/01067039320" className="text-black">
            Zeyad
          </a>{" "}
          and{" "}
          <a href="https://wa.me/01012774749" className="text-black">
            Ahmed
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer