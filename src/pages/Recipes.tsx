// import React from 'react';
import { Link } from "react-router-dom";
import chapterImage from "../assets/img/chapter6.jpg";
import { ChefHat, Droplet, Droplets, Flame, Leaf, Sparkles, Wand2 } from "lucide-react";
import { HeadingImage } from "../components/HeadingImage";
import { motion, type Transition } from "framer-motion";
import { CTAClean } from "../components/UltraCTA";

const Recipes = () => {
  const title = "Kuhanje";
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
      {/* Header */}
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

        {/* Hero Section */}
        {/* <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Veganski recepti"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <ChefHat className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kuhajte s ljubavlju
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Svaki obrok je prilika za kreativnost i užitak
              </p>
            </div>
          </div>
        </div> */}

        {/* General tips & tricks */}
        {/* <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Opći savjeti i trikovi</h2>
          <p className="text-gray-600 mb-4">Kratki praktični savjeti koji će vam olakšati svakodnevno kuhanje i planiranje obroka — od uštede do čuvanja namirnica i brzih ideja za obroke.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Planiranje i ušteda</h3>
              <ul className="list-inside list-disc space-y-2 ">
                <li><strong>Planirajte tjedne obroke:</strong> smanjuje bacanje hrane i troškove.</li>
                <li><strong>Kupujte u rinfuzi:</strong> žitarice, mahunarke i ulja su ekonomični i svestrani.</li>
                <li><strong>Sezonsko voće i povrće:</strong> slaže okus i cijenu na vašu stranu.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Skladištenje i priprema</h3>
              <ul className="list-inside list-disc space-y-2 ">
                <li><strong>Meal-prep:</strong> kuhanje većih porcija i čuvanje u porcijama štedi vrijeme.</li>
                <li><strong>Ispravno skladištenje:</strong> suho povrće u hladnoj, tamnoj i suhoj prostoriji; zamrznite višak povrća.</li>
                <li><strong>Iskoristite ostatke:</strong> juhe, variva i variva su savršeni za transformaciju ostataka u nova jela.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Zamjene i osnove</h3>
              <ul className="list-inside list-disc space-y-2 ">
                <li><strong>Jaja:</strong> lan/chi 'zamjenski' gel, jabučni pire ili tofu za pečenje.</li>
                <li><strong>Mlijeko i vrhnje:</strong> biljna mlijeka (soja, zob, badem) i kokosno vrhnje za kuhanje.</li>
                <li><strong>Proteini:</strong> mahunarke, tofu, tempeh i seitan su osnova povoljne i hranjive prehrane.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Brze ideje</h3>
              <ul className="list-inside list-disc space-y-2 ">
                <li><strong>Smrznuto voće za smoothie:</strong> brzo, nutritivno i praktično.</li>
                <li><strong>Riža + grah:</strong> kompletan obrok sa svim makronutrijentima.</li>
                <li><strong>Sendviči i wrapovi:</strong> brzi i prilagodljivi — koristite humus i puno povrća.</li>
              </ul>
            </div>
          </div>

          <p className="mt-6  text-gray-500 text-center">Savjet: fokusirajte se na par osnovnih, ekonomičnih sastojaka i iz njih stvarajte raznolike obroke.</p>
        </div> */}

        {/* Beginner tips */}
        <motion.div {...revealProps} className="mb-16 rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800">
              Savjeti i trikovi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <div className=" bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                Start bez stresa
              </h3>
              <ul className="list-inside list-disc space-y-2  text-gray-600">
                <li>Kreni s 2-3 veganska dana tjedno i postupno povećavaj.</li>
                <li>
                  Napuni smočnicu osnovama: mahunarke, riža, tjestenina, zob,
                  smrznuto povrće.
                </li>
                <li>
                  Planiraj obroke unaprijed i drži jednostavne recepte pri ruci.
                </li>
              </ul>
            </div> */}

            <div className=" bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">
                Opći savjeti
              </h3>
              <ul className="list-inside list-disc space-y-2  text-gray-600">
                <li>
                  Svaki obrok nadogradi grahom, lećom, tofuom ili tempehom.
                </li>
                <li>
                  Kombiniraj mahunarke + žitarice za kompletan profil
                  aminokiselina.
                </li>
                <li>
                  Dodaj sjemenke (lan, chia) i orašaste plodove za zdrave masti.
                </li>
                <li>
                  Limun i ocat podižu okus i balansiraju masnoće.
                </li>
              </ul>
            </div>

            {/* <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold  text-xl text-gray-800 mb-2">
                Okus i tekstura
              </h3>
              <ul className="list-inside list-disc space-y-2  text-gray-600">
                <li>Nutritivni kvasac daje “sirasti” okus bez mlijeka.</li>
                <li>Dimljena paprika i soja sos pojačavaju umami.</li>
                <li>Limun i ocat podižu okus i balansiraju masnoće.</li>
              </ul>
            </div> */}
                        <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Veganski izvori proteina
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mahunarke (grah, leća, grašak)</li>
                <li>• Orašasti plodovi i sjemenke</li>
                <li>• Quinoa i amarant</li>
                <li>• Tofu, tempeh i seitan</li>
              </ul>
            </div>

          </div>
          

        {/* Zamjene */}
          <div className="text-center mb-6">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-start gap-2">
                <ChefHat className='text-orange-500' />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Zamjene za jaja
              </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="font-semibold text-gray-800">
                    U kolacima (povezivanje):
                  </span>{" "}
                  Zgnjecena banana ili pire od jabuke
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Pohanje:</span>{" "}
                  Brasno + voda (gusto kao za palacinke)
                </li>
                <li>
                  <span className="font-semibold text-gray-800">Kajgana:</span>{" "}
                  Tofu (izmrvljen i zacinjen)
                </li>
                                <li>
                  <span className="font-semibold text-gray-800">Ostalo:</span>{" "}
                  1 žlica lanenih ili chia sjemenki + 3 žlice vode
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-2">
                <Droplet className='text-yellow-500' />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Zamjene za mlijeko
              </h3>
              <div/>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <span className="font-semibold text-gray-800">Kava:</span>{" "}
                  Zobeno (Barista verzije)
                </li>
                <li>
                  <span className="font-semibold text-gray-800">
                    Kuhanje/Umaci:
                  </span>{" "}
                  Sojino (neutralno)
                </li>
                <li>
                  <span className="font-semibold text-gray-800">
                    Palacinke:
                  </span>{" "}
                  Bilo koje biljno mlijeko ili mineralna
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Secret ingredients */}
        <motion.div {...revealProps} className="mb-16 rounded-2xl p-6 md:p-8 shadow-lg bg-gradient-to-br from-white via-emerald-50 to-white border border-emerald-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            <span className="inline-flex items-center gap-2">
              <Flame className="h-8 w-8 text-red-500" />
              Tajni sastojci
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-4 bg-white/80 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Nutritivni kvasac
                  </h3>
                  <p className=" text-gray-600">
                    Zlatne pahuljice koje daju sirasti/orašasti okus
                    tjesteninama i umacima.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-white/80 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-semibold text-gray-800">Kala Namak</h3>
                  <p className=" text-gray-600">
                    Crna sol koja ima okus i miris po jajima (zbog sumpora).
                    Savršeno za tofu kajganu!
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-white/80 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Dimljena paprika
                  </h3>
                  <p className=" text-gray-600">
                    Daje onaj dimljeni, "mesni" šmek varivima i burgerima.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-4 bg-white/80 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">

                <div>
                  <h3 className="font-semibold text-gray-800">Aquafaba</h3>
                  <p className=" text-gray-600">
                    Voda iz konzerve slanutka - može se istuči u snijeg baš kao
                    bjelanjak!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>



        {/* Recipe resources */}
        <motion.div {...revealProps} className="mb-16 rounded-2xl p-6 md:p-8 shadow-lg bg-white">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Recepti
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.noracooks.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-br from-white via-emerald-50 to-white border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">Nora Cooks</h3>
              <p className=" text-gray-600">
                Pouzdani veganski recepti s jasnim uputama.
              </p>
            </a>

            <a
              href="https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-br from-white via-emerald-50 to-white border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold  text-primary">Minimalist Baker</h3>
              <p className=" text-gray-600">
                Brzi, jednostavni veganski recepti (10 sastojaka).
              </p>
            </a>

            <a
              href="https://www.bbcgoodfood.com/recipes/collection/vegan-recipes"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-br from-white via-emerald-50 to-white border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">BBC Good Food</h3>
              <p className=" text-gray-600">
                Velika kolekcija provjerenih veganskih recepata.
              </p>
            </a>

            <a
              href="https://www.pickuplimes.com/recipe/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-gradient-to-br from-white via-emerald-50 to-white border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">Pick Up Limes</h3>
              <p className=" text-gray-600">
                Nutritivno uravnotezeni veganski recepti.
              </p>
            </a>
          </div>
        </motion.div>

        {/* Vidi kako drugi kuhaju */}
        <motion.div {...revealProps} className="mb-16 rounded-2xl p-6 md:p-8 shadow-lg bg-white">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Vidi kako drugi kuhaju
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.youtube.com/@PickUpLimes"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">Pick Up Limes</h3>
              <p className="text-gray-600">
                Veganski videi s fokusom na zdravlje i jednostavne recepte.
              </p>
            </a>

            <a
              href="https://www.youtube.com/@avantgardevegan"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">AvantgardeVegan</h3>
              <p className="text-gray-600">
                Kreativna veganska kuhinja i moderne tehnike.
              </p>
            </a>

            <a
              href="https://www.youtube.com/@RainbowPlantLife"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">Rainbow Plant Life</h3>
              <p className="text-gray-600">
                Detaljni recepti i trikovi za bogat okus.
              </p>
            </a>

            <a
              href="https://www.youtube.com/@gazoakleychef"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-gray-700 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="font-semibold text-primary">Gaz Oakley</h3>
              <p className="text-gray-600">
                Profesionalni veganski recepti i ideje za obroke.
              </p>
            </a>
          </div>
        </motion.div>


        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Počnite svoju kulinarsku avanturu
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Kuhanje je čin ljubavi prema sebi, drugima i planetu. 
            Svaki obrok je prilika za stvaranje nečeg prekrasnog.
          </p>
          <a
            href="/beginner-tips"
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Započnite veganski put
          </a>
        </div>
      </div> */}
      </main>
      <motion.div {...revealProps}>
        <CTAClean
          title="Izazovi i rješenja"
          description="Kako savladati česte izazove "
          buttonLink="/beginner-tips"
        />
      </motion.div>
    </div>
  );
};

export default Recipes;
