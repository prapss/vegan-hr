import React, { useEffect, useState } from "react";
import img3 from '../assets/img/chapter3.jpg';
import img4 from '../assets/img/chapter4.jpg';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


interface SafeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function SafeButton({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}: SafeButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Text arrow — clean & minimal
export function TextArrow({ className = "ml-2" }) {
  return (
    <span className={className} aria-hidden>
      →
    </span>
  );
}

function AnimatedWrapper({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        mounted
          ? "opacity-100 translate-y-0 blur-0"
          : "opacity-0 translate-y-4 blur-sm"
      }`}
    >
      {children}
    </div>
  );
}

// Ultra‑Modern CTA Component — glassmorphism + gradient + smooth animations
export default function UltraModernCTA() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <AnimatedWrapper>
        <div className="relative w-full max-w-2xl p-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-28 -left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-28 -right-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-500">
              Ulazi u svijet veganstva
            </h1>

            <p className="text-gray-300 text-lg max-w-md mx-auto mb-8 leading-relaxed">
              Moderno, etički, održivo — započni put kroz informacije o
              zdravlju, okolišu i etici.
            </p>

            <SafeButton className="px-8 py-4 rounded-2xl text-white text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition-all shadow-lg hover:shadow-emerald-500/40">
              Istraži dalje
              <TextArrow className="ml-2 text-2xl" />
            </SafeButton>
          </div>
        </div>
      </AnimatedWrapper>
    </div>
  );
}

export function CTASectionNeon({title, description, buttonText, buttonLink}: { title: string; description: string; buttonText: string; buttonLink: string }) {
  return (
    <div className="p-10 flex justify-center bg-black text-center">
      <div className="border border-green-400/40 rounded-2xl p-10 shadow-[0_0_30px_rgba(0,255,150,0.4)]">
        <h2 className="text-3xl font-bold text-green-300 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)] mb-4">
          Explore the Future
        </h2>
        <p className="text-green-200 mb-6 max-w-md">
          A hyper-modern look with neon aesthetics and glowing accents.
        </p>
        <SafeButton className="text-black bg-green-300 hover:bg-green-400 px-6 py-4 rounded-xl font-semibold shadow-[0_0_15px_rgba(0,255,150,0.7)]">
          Start Now <TextArrow />
        </SafeButton>
      </div>
    </div>
  );
}

// Variant 7: Glassmorphism CTA
export function CTASectionGlass({title, description, buttonText, buttonLink}: { title: string; description: string; buttonText: string; buttonLink: string;  }){
  return (
    <div className="p-10 flex justify-center bg-gradient-to-br from-green-100 to-green-300/40">
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl shadow-xl p-10 text-center max-w-lg">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          {title}
        </h2>
        <p className="text-green-800/80 mb-6">
          {description}
        </p>
        <Link to={buttonLink} className="bg-accent hover:bg-emerald-600 text-white font-semibold hover:font-bold px-8 py-4 rounded-xl">
          {buttonText} 
          {/* <ArrowRight className="inline text-xl text-white h-5 w-5 ml-1" /> */}
        </Link>
      </div>
    </div>
  );
}

          // <Link to="/shopping" className='bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block'>
          //   Dalje
          //   <ArrowRight className="inline text-xl text-primary h-5 w-5 ml-1" />
          // </Link>

// Variant 8: Minimal Ultra-flat
export function CTASectionUltraFlat({title, description, buttonText, buttonLink}: { title: string; description: string; buttonText: string; buttonLink: string }) {
  return (
    <div className="p-10 flex justify-center bg-white text-center">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-green-700">
          {title || "Ultra-flat CTA"}
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          {description || "A clean and minimal call-to-action section with ultra-flat design principles."}
        </p>
        <SafeButton className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
          {buttonText || "Continue"} <TextArrow />
        </SafeButton>
      </div>
    </div>
  );
}

// Variant 9: Split Layout CTA
export function CTASectionSplit({title, description, buttonText, buttonLink, image}: { title?: string; description?: string; buttonText?: string; buttonLink?: string; image?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-60 rounded-3xl overflow-hidden shadow-xl">
      <div className="bg-emerald-700 text-white flex flex-col justify-start text-right items-end p-10 space-y-4">
        <h2 className="text-3xl font-bold">{title || "Zbog koga?"}</h2>
        <p className="text-white/90 max-w-sm">
          {description || "Sljedeća stranica vodi te kroz etičke razloge veganstva."}
        </p>
        <Link to={buttonLink || "#"} className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold w-fit">
          {buttonText || "Dalje"} 
          {/* <ArrowRight className="inline text-xl text-green-700 h-5 w-5 ml-1" /> */}
        </Link>
      </div>
      <img src={image || img3} alt="Veganism" className="hidden h-full md:block bg-gradient-to-r from-black/75 via-black/55 to-transparent" />
    </div>
  );
}
