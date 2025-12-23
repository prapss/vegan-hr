import React, { useState } from 'react';
import chapterImage from '../assets/img/chapter4.jpg';
import nextChapterImage from '../assets/img/chapter5.jpg';
import { Brain, Bone, Heart, Activity, Shield, Zap, CheckCircle, Waves, Leaf, Key, ShieldCheck, Droplets, Hourglass, ChevronDown, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeadingImage } from '../components/HeadingImage';
import { motion, type Transition } from 'framer-motion';
import { CTAClean } from '../components/UltraCTA';

const Health = () => {
  const title = 'Zdravlje, vitalnost, energija'
  const [isStudiesOpen, setIsStudiesOpen] = useState(false);
  const revealProps: {
    initial: { opacity: number; y: number };
    whileInView: { opacity: number; y: number };
    transition: Transition;
    viewport: { once: boolean; amount: number };
  } = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true, amount: 0.2 },
  };
  const healthBenefits = [
    {
      title: 'Zdravlje srca',
      description: 'Može značajno smanjiti rizik od srčanih bolesti i poboljšati cirkulaciju.',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Kontrola tjelesne težine',
      description: 'Veganska prehrana pomaže u održavanju zdrave tjelesne težine i ubrzava metabolizam.',
      icon: Activity,
      color: 'text-blue-500'
    },
    {
      title: 'Jačanje imuniteta',
      description: 'Bogata antioksidansima, veganska prehrana jača imunološki sustav.',
      icon: Shield,
      color: 'text-green-500'
    },
    {
      title: 'Više energije',
      description: 'Mnogi vegani izvještavaju o povećanoj energiji i boljoj kvaliteti sna.',
      icon: Zap,
      color: 'text-yellow-500'
    },
    {
      title: 'Smanjen rizik od dijabetesa tipa 2',
      description: 'Bolja osjetljivost na inzulin i stabilnija razina šećera u krvi.',
      icon: Key,
      color: 'text-blue-500'
    },
    {
      title: 'Zdravija probava',
      description: 'Veći unos vlakana pozitivno utječe na probavu i crijevnu floru.',
      icon: Waves,
      color: 'text-orange-500'
    },
    
    {
      title: 'Manji rizik od određenih vrsta raka',
      description: 'Vlakna ubrzavaju probavu i smanjuju kontakt crijeva s potencijalno štetnim tvarima, a Antioksidansi i fitokemikalije pomažu u zaštiti stanica od oštećenja',
      icon: ShieldCheck,
      color: 'text-lime-500'
    },
    
    {
      title: 'Smanjena upala (inflamacija) u tijelu',
      description: 'Biljna hrana ima protuupalni učinak, te može pomoći kod autoimunih i kroničnih upalnih stanja.',
      icon: Droplets,
      color: 'text-blue-500'
    },
    {
      title: 'Moguće usporavanje biološkog starenja',
      description: 'Veganska prehrana može usporiti biološko starenje jer smanjuje kronične upale i oksidativni stres zahvaljujući visokom udjelu antioksidansa i vlakana.',
      icon: Hourglass,
      color: 'text-teal-500'
    },

  ];

  const references = [
    {
      text: "MDPI: Vegan and Plant-Based Diets in the Management of Metabolic Syndrome",
      link: "https://www.mdpi.com/2072-6643/17/16/2656",
    },
    {
      text: 'Vegan diets boost weight loss, lower blood sugar in adults with overweight or type 2 diabetes',
      link: 'https://easo.org/vegan-diets-boost-weight-loss-lower-blood-sugar-in-adults-with-overweight-or-type-2-diabetes/'
    },
    {
      text: 'MDPI: Vegan and Plant-Based Diets in the Management of Metabolic Syndrome',
      link: 'https://www.mdpi.com/2072-6643/17/16/2656'
    },
    {
      text: 'MDPI: Vegan and Plant-Based Diets in the Management of Metabolic Syndrome',
      link: 'https://www.mdpi.com/2072-6643/17/16/2656'
    },
    {
      text: 'PubMed: Vegetarian, vegan diets and multiple health outcomes',
      link: 'https://pubmed.ncbi.nlm.nih.gov/26853923/'
    },
    {
      text: 'PubMed: The Safe and Effective Use of Plant-Based Diets with Guidelines for Health Professionals',
      link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8623061/'
    },
    {
      text: "PubMed: Health outcomes of shifting from a traditional to a vegan Mediterranean diet in healthy men",
      link: "https://pubmed.ncbi.nlm.nih.gov/39358106/",
    },
  ];

  const nutritionTips = [
    'Unosite raznovrsnu hranu svih boja',
    'Osigurajte dovoljan unos vitamina B12',
    'Kombinirajte različite bjelančevine',
    'Jedite hranu bogatu željezom s vitaminom C',
    'Ne zaboravite na omega-3 masne kiseline',
    'Pijte dovoljno vode tijekom dana'
  ];

    const nutrients = [
    {
      name: 'Protein',
      description: 'Potreban za rast i obnovu tkiva',
      sources: ['Mahunarke', 'Quinoa', 'Tofu', 'Orašasti plodovi'],
      dailyNeed: '0.8g/kg tjelesne težine',
      icon: Zap,
      color: 'text-orange-500'
    },
    {
      name: 'Vitamin B12',
      description: 'Ključan za živčani sustav i tvorbu krvi',
      sources: ['Obogaćeni proizvodi', 'Dodaci prehrani', 'Hranjive kvasnice'],
      dailyNeed: '2.4 mcg',
      icon: Brain,
      color: 'text-purple-500'
    },
    {
      name: 'Željezo',
      description: 'Potrebno za transport kisika u krvi',
      sources: ['Špinat', 'Leća', 'Quinoa', 'Bundeva sjemenke'],
      dailyNeed: '8-18 mg',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      name: 'Kalcij',
      description: 'Važan za zdrave kosti i zube',
      sources: ['Tamno lisnato povrće', 'Tahini', 'Bademi', 'Brokula'],
      dailyNeed: '1000-1200 mg',
      icon: Bone,
      color: 'text-green-500'
    },
    {
      name: 'Omega-3',
      description: 'Potrebne za zdravlje srca i mozga',
      sources: ['Lan sjemenke', 'Chia sjemenke', 'Orasi', 'Morske alge'],
      dailyNeed: '1.1-1.6 g',
      icon: Shield,
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-50">
      <header>
      <div className='p-4 flex justify-between items-center top-0 backdrop-blur-sm z-10 border-b border-border/50 bg-gradient-to-r from-accentnice to-emerald-50 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-700/70'>
        <Link to="/" className='flex items-center space-x-2 text-2xl font-bold text-emerald-700 hover:text-emerald-500 transition-colors'>
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
          <HeadingImage image={chapterImage} title={title} />
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        {/* Header */}

        {/* Hero Image */}
        {/* <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Zdravo voće i povrće"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-green-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vaše zdravlje je vaše bogatstvo
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Investirajte u sebe kroz pravilnu prehranu
              </p>
            </div>
          </div>
        </div> */}

        {/* Health Benefits */}
        <motion.div {...revealProps} className="my-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Zdravstvene prednosti veganske prehrane
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon ? benefit.icon : null;
              return (
                <motion.div
                  key={index}
                  {...revealProps}
                  className="bg-white rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-full p-3 mr-4">
                      {
                        IconComponent && <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                      }
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Scientific Evidence */}
        <motion.div {...revealProps} className="mb-16 bg-emerald-50 rounded-2xl text-center ">
          <button
            type="button"
            onClick={() => setIsStudiesOpen((prev) => !prev)}
            className="max-w-2xl  mx-auto bg-white rounded-xl px-6 py-4 text-left shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 cursor-pointer hover:-translate-y-0.5 ring-1 ring-emerald-100/70 hover:ring-emerald-300/80 border-2 border-border border-green-500/50 hover:border-accentnice hover:border-primary/70 hover:scale-[1.02]"
          >
            <div className="flex items-center justify-between gap-12">
              <div className="flex items-center gap-4">
                <div className="bg-emerald-100 rounded-full p-2">
                  <List className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                  Lista istraživanja
                </h2>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-green-500/50 rounded-sm py-1 px-2 text-emerald-700">
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {isStudiesOpen ? "Sakrij" : "Prikaži"}
                </span>
                <ChevronDown
                  className={`h-6 w-6 transition-transform duration-300 ${isStudiesOpen ? "rotate-180" : ""}`}
                />
              </div>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isStudiesOpen ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}
          >
            <div className="bg-white rounded-xl px-6 py-4 text-lg shadow-lg">
              <ul className="list-disc list-inside text-gray-600">
                {references.map((ref, refIndex) => (
                  <li key={refIndex} className='pb-4 md:pb-2'>
                    {ref.link ? (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        {ref.text}
                      </a>
                    ) : (
                      ref.text
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>


        
        

        

{/* Key Nutrients */}
        <motion.div {...revealProps} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Bitni hranjivi sastojci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutrients.map((nutrient, index) => {
              const IconComponent = nutrient.icon;
              return (
                <motion.div
                  key={index}
                  {...revealProps}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-full p-3 mr-4">
                      <IconComponent className={`h-6 w-6 ${nutrient.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {nutrient.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {nutrient.dailyNeed}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {nutrient.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Biljni izvori:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {nutrient.sources.map((source, i) => (
                        <span
                          key={i}
                          className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-sm"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>


        {/* Nutrition Tips */}
        <motion.div {...revealProps} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Nutricionistički savjeti
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nutritionTips.map((tip, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Preporuke za gledanje i čitanje */}
        <motion.div {...revealProps} className="mb-16 rounded-2xl p-6 md:p-8 shadow-lg bg-white">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Preporuke za gledanje i čitanje
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Dokumentarci</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://gamechangersmovie.com/" target="_blank" rel="noreferrer">
                    The Game Changers
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://www.forksoverknives.com/the-film/" target="_blank" rel="noreferrer">
                    Forks Over Knives
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://www.whatthehealthfilm.com/" target="_blank" rel="noreferrer">
                    What the Health
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://www.seaspiracy.org/" target="_blank" rel="noreferrer">
                    Seaspiracy
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50 to-white p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Knjige</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://nutritionfacts.org/book/how-not-to-die/" target="_blank" rel="noreferrer">
                    How Not to Die - Michael Greger
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://nutritionstudies.org/the-china-study/" target="_blank" rel="noreferrer">
                    The China Study - T. Colin Campbell
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://theplantfedgut.com/book/" target="_blank" rel="noreferrer">
                    Fiber Fueled - Will Bulsiewicz
                  </a>
                </li>
                <li>
                  <a className="text-emerald-700 hover:underline" href="https://www.drfuhrman.com/" target="_blank" rel="noreferrer">
                    Eat to Live - Joel Fuhrman
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>


        </main>
        <motion.div {...revealProps}>
          <CTAClean title='Gdje kupiti vegansku hranu?' description='Saznajte kako i gdje nabaviti sve potrebne namirnice za zdravu vegansku prehranu.'  buttonLink='/shopping'/>
        </motion.div>
        </div>

  );
};

export default Health;
