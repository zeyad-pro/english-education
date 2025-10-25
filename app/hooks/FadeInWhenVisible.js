"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FadeInWhenVisible({
  children,
  direction = "up", // up, down, left, right
  distance = 50,
  delay = 0,
  duration = 0.8,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    if (direction === "down") y = -distance;
    if (direction === "left") x = distance;
    if (direction === "right") x = -distance;

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // يبدأ لما العنصر يدخل الشاشة
        },
      }
    );
  }, [direction, distance, delay, duration]);

  return <div ref={ref}>{children}</div>;
}
