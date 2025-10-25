"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const progressBarRef = useRef(null);

  useEffect(() => {
    gsap.to(progressBarRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-2 bg-gray-300 z-50">
      <div
        ref={progressBarRef}
        className="h-full bg-orange-500 transform scale-x-0"
      ></div>
    </div>
  );
}
