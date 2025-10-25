"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function AnimatedText({ children, delay }) {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 20,
      x: -10,
      stagger: 0.15,
      duration: 0.6,
      delay: delay || 0,
      ease: "power2.out",
    });
  }, []);

  return (
    <h1 ref={textRef} dir="rtl" className="">
      {children}
    </h1>
  );
}
