"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import Theme from "../hooks/theme";

function Radio() {
  const { darkMode, toggleTheme } = Theme();

  return (
    <div className="relative w-19 p-1 bg-gray-300 rounded-full flex items-center space-x-2">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-8 h-8 bg-gray-800 rounded-full"
        style={{
          left: darkMode ? "calc(100% - 34px)" : 2,
        }}
      />

      <button
        onClick={() => toggleTheme("light")}
        className="w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
      >
        <FaSun color={!darkMode ? "white" : "yellow"} />
      </button>

      <button
        onClick={() => toggleTheme("dark")}
        className="w-8 h-8 flex items-center justify-center z-10 cursor-pointer"
      >
        <FaMoon color={darkMode ? "white" : "black"} />
      </button>
    </div>
  );
}

export default Radio;
