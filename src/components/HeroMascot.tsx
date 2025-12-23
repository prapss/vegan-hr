import React from "react";

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
import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

const MASCOT_SRC = "../assets/img/mascot/transparent_160w.webp";
const MASCOT_SRCSET = [
  `${mascotTransparent160w} 160w`,
  `${mascotTransparent192w} 192w`,
  `${mascotTransparent256w} 256w`,
  `${mascotTransparent320w} 320w`,
  `${mascotTransparent360w} 360w`,
  `${mascotTransparent384w} 384w`,
  `${mascotTransparent420w} 420w`,
  `${mascotTransparent512w} 512w`,
  `${mascotTransparent640w} 640w`,
  `${mascotTransparent698w} 698w`,
].join(", ");
const MASCOT_SIZES =
  "(min-width: 1280px) 512px, (min-width: 1024px) 420px, (min-width: 768px) 360px, (min-width: 640px) 320px, 256px";

export default function Hero({
  title = "Bok! Ja sam Ana 👋",
  subtitle = "Tu sam da ti pomognem — krenimo zajedno.",
  primaryCta = { label: "Kreni odmah", href: "#start" },
  secondaryCta = { label: "Saznaj više", href: "#vise" },
}) {
  return (
    <div>
                  <motion.div
            className="mt-auto flex justify-end"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeIn" }}
          >
              <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative inline-flex items-center gap-2 rounded-full border border-emerald-100/60 bg-gradient-to-br from-emerald-600/80 via-emerald-500/70 to-lime-500/70 px-3 py-1 text-white shadow-[0_12px_32px_-16px_rgba(0,0,0,0.85)]">
                  <div className="relative inline-flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-emerald-100 drop-shadow" />
                    <span className="font-semibold text-sm text-emerald-50 tracking-wide drop-shadow-sm">
                      Vegan.hr
                    </span>
                  </div>
                </div>
              </div>

          </motion.div>

    <section
      className="relative overflow-hidden bg-gradient-to-b from-emerald-400/50 via-green-200/40 to-green-50"
      //   style={{
      //     background:
      //       "linear-gradient(to bottom right, oklch(98.2% 0.018 155.826), oklch(97.9% 0.021 166.113))",
      //   }}
    >

      {/* Content */}
      <div className="relative pt-4 md:py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <img
            src={MASCOT_SRC}
            srcSet={MASCOT_SRCSET}
            sizes={MASCOT_SIZES}
            width={512}
            height={418}
            alt=""
            aria-hidden="true"
            decoding="async"
            loading="eager"
            fetchPriority="high"
            className="
              pointer-events-none select-none
              z-20 w-28 h-auto
              absolute -bottom-0 left-0 mx-0 md:w-[360px]
              lg:w-[420px]
              xl:w-[512px]
            "
          />


        {/* Rezerviraj prostor lijevo na md+ da CTA ima “puno zraka” desno */}
        <div className="">
          {/* Speech bubble */}
          {/* border border-black/5 rounded-3xl bg-white/70 */}
          
          <div
            className="min-h-[25vh]
              relative isolate 
               md:p-6 shadow-sm
               backdrop-blur-md border-b border-emerald-500/10 transition-[border-color,box-shadow] duration-500 ease-out hover:shadow-[0_18px_36px_-24px_rgba(16,185,129,0.35)]
               shadow-[0_12px_32px_-22px_rgba(16,185,129,0.6)]
               after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-transparent after:via-emerald-300/70 after:to-transparent after:blur-sm after:opacity-80 after:transition-opacity after:duration-500 after:content-['']
               before:absolute before:inset-x-0 before:bottom-0 before:h-10 before:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.32),rgba(16,185,129,0)_70%)] before:blur-md before:opacity-90 before:content-['']"
          >
            {/* Tail (mobile: gore sredina) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
            >
                          <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
            >
            <span
              aria-hidden="true"
              className="
                md:hidden
                absolute left-28 top-32 -translate-x-1/2 -translate-y-1/2
                h-3 w-3 rotate-45
                bg-white/70 border border-t-black/5 shadow-sm backdrop-blur-md
                -z-10
              "
            /></motion.div></motion.div>

            {/* Tail (md+: lijevo u sredini, prema liku) */}
            {/* <span
              aria-hidden="true"
              className="
                hidden md:block
                absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
                h-6 w-6 rotate-45
                bg-white/70 border border-black/5 shadow-sm backdrop-blur-md
                -z-10
              "
            /> */}
                              <motion.div
            className=""
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeIn" }}
          >
            <h1 className="text-4xl leading-9 text-center mt-8 my-6 md:text-5xl font-bold font-[SuperJoyful] drop-shadow-md text-gray-800">
              Tvoj vodič kroz
              <span className="text-green-600 block m-0">
                svijet veganstva
              </span>
            </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
            >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
            >
              <p className="text-[0.6rem] mt-8 mr-3 ml-28 md:text-2xl text-gray-600 min-w-56 px-2 py-1 leading-relaxed border border-black/5 rounded-xl bg-white/70">
              Otkrij kako veganstvo može transformirati vaše
              zdravlje, zaštititi planet i stvoriti etičniji svijet za sva žive
              bića.
              </p>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
    
                    </div>
    
  );
}
