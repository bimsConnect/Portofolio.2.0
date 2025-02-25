import Image from "next/image";
import { ubuntu } from "@/data/constants/fonts";
import profileImg from "@/public/profile.jpg";
import { TypewriterEffect } from "./ui/typewritet-effect";
import { color } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center py-32 z-50 relative">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <Image src={profileImg} alt="profile photo" />
      </div>
      <h2 className={`font-semibold text-lg`}>Hi, I&apos;m Bisma 🤗</h2>
      <h1
        className={`${ubuntu.className} font-bold text-3xl md:text-5xl flex flex-col`}
      >
        <span>From Concept to Creation,</span>
        <span>
          <span className="text-yellow-500">I Build Remarkable Web Experiences</span> <br />
          <FlipWords
            words={[
              "Enganging Interactions",
              "Scalable Solutions",
              "Seamless Functionality",
              "User-First Solutions",
            ]}
            className="dark:text-yellow-700 text-amber-600 text-center h-[72px] sm:h-auto"
          />
          <span className="hidden md:inline">.</span>
        </span>
      </h1>
      <p className="lg:text-md dark:text-slate-300">
        With expertise in both front-end <b> and </b>{" "}
        <br className="hidden md:block" /> back-end <b>development,</b>I transform  ideas into reality,
         <br className="hidden md:block" /> delivering intuitive user experiences and reliable functionality.
      </p>
      <a
        href="#contact"
        className="uppercase font-semibold text-xs bg-cool-black dark:bg-white dark:text-black text-white rounded-full px-8 py-4 flex items-center justify-center hover:scale-105 active:scale-100 transition-all duration-300"
      >
        <span>schedule a call</span>
      </a>
    </div>
  );
}
