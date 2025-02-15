import React from "react";
import { BackgroundGradientAnimation } from "@/app/components/ui/BackgroundGradientAnimation";
import { TypewriterEffectSmooth } from "@/app/components/ui/TypewiterEffext";
const words = [
  { text: "Building" },
  { text: "better" },
  { text: "businesses." },
];

export default function HeroSection() {
  return (
    <section>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-xl bg-gradient-to-b from-white/80 to-white/20 py-5">
            Bridger Labs
          </p>
          <TypewriterEffectSmooth words={words} className="text-white block" />
        </div>
      </BackgroundGradientAnimation>
    </section>
  );
}
