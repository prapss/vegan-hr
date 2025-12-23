import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  Heart,
  Leaf,
  Globe,
  ChefHat,
  Lightbulb,
  ArrowRight,
  Info,
  Sprout,
  Sparkles,
} from "lucide-react";
import img1 from "../assets/img/chapter1.jpg";
import img2 from "../assets/img/chapter2.jpg";
import img3 from "../assets/img/chapter3.jpg";
import img4 from "../assets/img/chapter4.jpg";
import img5 from "../assets/img/chapter5.jpg";
import img6 from "../assets/img/chapter6.jpg";
import img7 from "../assets/img/chapter7.jpg";
import img8 from "../assets/img/chapter8.jpg";

import mascotTransparent160w from "../assets/img/mascot/transparent_160w.webp";
import mascotTransparent192w from "../assets/img/mascot/transparent_192w.webp";
import mascotTransparent256w from "../assets/img/mascot/transparent_256w.webp";
import mascotTransparent320w from "../assets/img/mascot/transparent_320w.webp";
import mascotTransparent360w from "../assets/img/mascot/transparent_360w.webp";
import mascotTransparent384w from "../assets/img/mascot/transparent_384w.webp";
import mascotTransparent420w from "../assets/img/mascot/transparent_420w.webp";
import mascotTransparent512w from "../assets/img/mascot/transparent_512w.webp";
import mascotTransparent640w from "../assets/img/mascot/transparent_640w.webp";
import mascotTransparent698w from "../assets/img/mascot/transparent_698w.webp";
import HeroMascot from "../components/HeroMascot";

const MASCOT_SRC = "../assets/img/mascot/transparent_320w.webp";
const MASCOT_SRCSET = [
  "../assets/img/mascot/transparent_160w.webp 160w",
  "../assets/img/mascot/transparent_192w.webp 192w",
  "../assets/img/mascot/transparent_256w.webp 256w",
  "../assets/img/mascot/transparent_320w.webp 320w",
  "../assets/img/mascot/transparent_360w.webp 360w",
  "../assets/img/mascot/transparent_384w.webp 384w",
  "../assets/img/mascot/transparent_420w.webp 420w",
  "../assets/img/mascot/transparent_512w.webp 512w",
  "../assets/img/mascot/transparent_640w.webp 640w",
  "../assets/img/mascot/transparent_698w.webp 698w",
].join(", ");
const MASCOT_SIZES =
  "(min-width: 1280px) 512px, (min-width: 1024px) 420px, (min-width: 768px) 360px, (min-width: 640px) 320px, 256px";


const Homepage = () => {
  const topics = [
    {
      id: "intro",
      title: "Zanima te veganstvo?",
      description: "Uvod u svijet suosjećanja i zdravlja.",
      icon: Info,
      image: img1,
      // color: 'from-blue-500 to-indigo-500',
      link: "/intro",
      // color: 'from-emerald-100 to-emerald-100 dark:from-emerald-950 dark:to-teal-950'
    },
    {
      id: "veganism",
      title: "Zbog čega",
      description: "Etika, zdravlje i okoliš.",
      icon: Leaf,
      image: img2,
      // color: 'from-blue-500 to-indigo-500',
      link: "/veganism",
    },
    {
      id: "ethics",
      title: "Zbog koga",
      description: "Životinje, osjećaji i prava.",
      icon: Leaf,
      image: img3,
      // color: 'from-blue-500 to-indigo-500',
      link: "/ethics",
    },
    {
      id: "health",
      title: "Zdravlje, vitalnost, energija",
      description: "Nutricionizam i zdravstvene prednosti veganske prehrane.",
      icon: Heart,
      image: img4,
      // color: 'from-red-500 to-pink-500',
      link: "/health",
    },
    {
      id: "shopping",
      title: "Gdje kupiti vegansku hranu",
      description: "Vodič kroz trgovine u Hrvatskoj.",
      icon: Globe,
      image: img5,
      color: "from-green-500 to-emerald-500",
      link: "/shopping",
    },
    {
      id: "restaurants",
      title: "Gdje naći veganske restorane",
      description: "Vodič kroz veganske restorane u Hrvatskoj.",
      icon: ChefHat,
      image: img6,
      color: "from-orange-500 to-red-500",
      link: "/restaurants",
    },
    {
      id: "recipes",
      title: "Kuhanje",
      description: "Trikovi, zamjene i inspiracija.",
      icon: Lightbulb,
      image: img7,
      color: "from-yellow-500 to-orange-500",
      link: "/recipes",
    },
    {
      id: "beginner-tips",
      title: "Izazovi i rješenja",
      description: "Rješenja za uobičajene izazove.",
      icon: Lightbulb,
      image: img8,
      // color: 'from-yellow-500 to-orange-500',
      link: "/beginner-tips",
    },
  ];

  const title = "Bok! Ja sam Ana 👋"
  const subtitle = "Tu sam da ti pomognem — krenimo zajedno."
  const primaryCta = { label: "Kreni odmah", href: "#start" }
  const secondaryCta = { label: "Saznaj više", href: "#vise" }

  return (
    <div className="min-h-screen">

      <HeroMascot         
        title="Bok! Ja sam Ana 👋"
        subtitle="Pronađi informacije brzo i jasno — krenimo."
        primaryCta={{ label: "Započni", href: "/start" }}
        secondaryCta={{ label: "Kontakt", href: "/kontakt" }}
      />

      {/* Topics Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-emerald-50/80 via-emerald-50/50 to-transparent backdrop-blur-sm" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-emerald-100/40 to-transparent blur-md" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),rgba(16,185,129,0)_75%)] blur-md" />

        <div className="max-w-4xl mx-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                className="group relative bg-white/70 border-border border-green-600/40 hover:border-primary/60 hover:border-2 rounded-2xl overflow-hidden shadow-lg shadow-emerald-900/10 hover:shadow-xl hover:shadow-emerald-900/20"
                key={topic.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.04,
                  boxShadow: "0 22px 34px rgba(0, 0, 0, 0.35)",
                  transition: { duration: 0.3 },
                }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link key={topic.id} to={topic.link} className="">
                  {/* Image section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="w-full h-full object-cover saturate-110"
                    />

                    {/* Gradient overlay (for readability) */}
                    <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent"></div>

                    {/* Icon (top-left) */}
                    {/* <div className="absolute top-4 left-4"> 
              <div className={`
                w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color}
                flex items-center justify-center mb-4
                transition-transform duration-500
                group-hover:scale-110 group-hover:rotate-12
              `}>
                <IconComponent className='w-7 h-7 text-green-600 dark:text-green-400 transition-colors duration-30' />
              </div></div> */}

                    {/* <div className="absolute top-4 left-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110" >
                  <IconComponent className="h-6 w-6 text-white text-green-600 dark:text-green-400 transition-colors duration-300" />
                </div>
              </div> */}

                    {/* Title (bottom-left over image) */}
                    <div className="absolute z-10 bottom-2 left-3">
                      <h3 className="text-xl font-bold text-white drop-shadow-md group-hover:text-accent transition-colors duration-400">
                        {topic.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description and link */}
                  <div className="p-4 pr-12">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="flex items-center items-end text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors group-hover:translate-x-1 transition-transform duration-400">
                      {/* <span>Saznajte više</span> */}
                      {/* <ArrowRight className="h-4 w-4 ml-2 group-hover:animate-pulse" /> */}
                    </div>
                    <div className="absolute z-10 bottom-4 right-4 opacity-75 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="text-primary h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
