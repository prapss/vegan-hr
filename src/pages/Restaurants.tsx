import React from "react";
import chapterImage from "../assets/img/chapter5.jpg";
import nextChapterImage from "../assets/img/chapter6.jpg";
import {
  Brain,
  Bone,
  Heart,
  Activity,
  Shield,
  Zap,
  CheckCircle,
  Waves,
  Leaf,
  Key,
  ShieldCheck,
  Droplets,
  PhoneCall,
  MessageCircleQuestionMark,
  BookOpen,
  Users,
  MapPin,
  MapPinned,
  Utensils,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import { HeadingImage } from "../components/HeadingImage";
import { motion, type Transition } from "framer-motion";
import { CTAClean } from "../components/UltraCTA";

const Restaurants = () => {
  const title = "Restorani";
  const revealProps: {
    initial: { opacity: number; y: number };
    whileInView: { opacity: number; y: number };
    transition: Transition;
    viewport: { once: boolean; amount: number };
  } = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-50">
      <header>
      <div className="p-4 flex justify-between items-center top-0 backdrop-blur-sm z-10 border-b border-border/50 bg-gradient-to-r from-accentnice to-emerald-50 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-700/70">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-emerald-700 hover:text-emerald-500 transition-colors"
        >
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <Leaf className="h-8 w-8 animate-pulse text-emerald-700" />
            <span>
              <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 dark:from-emerald-300 dark:via-green-300 dark:to-lime-300 bg-clip-text text-transparent drop-shadow-sm">
                Vegan.hr
              </h1>
            </span>
          </div>
        </Link>
        </div>
          <motion.div {...revealProps}>
            <HeadingImage image={chapterImage} title={title} />
          </motion.div>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">


        {/* Tips: how to find vegan restaurants */}
        <motion.div {...revealProps} className="mb-16 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Savjeti kako naći veganske restorane</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2  gap-4 text-gray-600 list-none">
            <li className="row-span-2 flex items-start">
              <Search className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <strong>Iskoristi aplikacije</strong>
                <ul className=" space-y-1 pl-1">
                  <li className=""><strong><a className="text-primary hover:underline" href="https://www.happycow.net/" target="_blank" rel="noopener noreferrer">HappyCow:</a></strong> kao TripAdvisor, ali za vegansku i vegetarijansku hranu</li>
                  <li className=""><strong><a className="text-primary hover:underline" href="https://www.google.com/maps/search/vegan+food/" target="_blank" rel="noopener noreferrer">Google Maps:</a></strong> upiši “veganski restoran”, “vegan food”</li>
                  <li className=""><strong><a className="text-primary hover:underline" href="https://www.tripadvisor.com/Restaurants-g294454-zfz10697-Zagreb_Central_Croatia.html" target="_blank" rel="noopener noreferrer">TripAdvisor:</a></strong> koristi filtere i ključne riječi u recenzijama</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start">
              <Users className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <strong>Prati lokalne veganske grupe:</strong> Facebook i Instagram često dijele preporuke i popise.
              </div>
            </li>
            <li className="flex items-start">
              <MessageCircleQuestionMark className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <strong>Pitaj osoblje:</strong> Mnogi restorani rado prilagode jela ili preporuče veganske opcije.
              </div>
            </li>
            <li className="flex items-start">
              <BookOpen className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <strong>Provjeri jelovnik online:</strong> Mnogi restorani imaju jasne oznake ili odvojene veganske sekcije.
              </div>
            </li>
            <li className="flex items-start">
              <PhoneCall className="h-4 w-4 text-emerald-600 mr-3" />
              <div>
                <strong>Nazovi restoran prije posjete:</strong> Brza provjera štedi vrijeme
              </div>
            </li>
            {/* <li className="flex items-start">
              <Zap className="h-6 w-6 text-emerald-600 mr-3" />
              <div>
                <strong>Isprobaj lokalne specijalitete:</strong> male veganske pekare, kafići i street food često imaju kreativne opcije.
              </div>
            </li> */}
          </ul>
        </motion.div>


      </main>
      <motion.div {...revealProps}>
        <CTAClean
          title="Kuhanje"
          description="Savjeti, zamjene i inspiracija "
          buttonLink="/recipes"
        />
      </motion.div>
    </div>
  );
};

export default Restaurants;
