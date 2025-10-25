"use client";
import { useState, useEffect } from "react";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // حماية من SSR
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialMode = savedTheme ? savedTheme === "dark" : prefersDark;
    setDarkMode(initialMode);

    // تحديث عند تغيير تفضيلات النظام
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    console.log("Dark mode:", darkMode); // أضف هذا السطر للديباج
  }, [darkMode]);

  // اجعل toggleTheme يقلب الوضع إذا لم يتم تمرير قيمة
  const toggleTheme = (mode) => {
    if (mode === "dark") setDarkMode(true);
    else if (mode === "light") setDarkMode(false);
    else setDarkMode((prev) => !prev);
  };

  return { darkMode, toggleTheme };
}
