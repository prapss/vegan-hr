import React from "react";
import {
  Compass,
  Target,
  Calendar,
  CheckCircle,
  AlertCircle,
  Star,
  Leaf,
} from "lucide-react";
import LinkToHomepage from "../components/LinkToHomeCard";
import { Link } from "react-router-dom";
import { HeadingImage } from "../components/HeadingImage";
import headingImage from "../assets/img/chapter8.jpg";
import { motion, type Transition } from "framer-motion";

const BeginnerTips = () => {
  const title = "Savjeti za početnike";
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
  const weeklyPlan = [
    {
      week: "Tjedan 1-2",
      title: "Postepeni prelazak",
      goals: [
        "Zamijenite mlijeko biljnom alternativom",
        "Probajte veganske verzije omiljenih jela",
        "Otkrijte nova veganska brandova",
        "Čitajte etikete proizvoda",
      ],
      color: "bg-green-100 text-green-800",
    },
    {
      week: "Tjedan 3-4",
      title: "Proširivanje izbora",
      goals: [
        "Uklonite meso iz 3-4 obroka tjedno",
        "Naučite osnovne veganske recepte",
        "Pronađite veganske restorane",
        "Pripremite si veganske grickalice",
      ],
      color: "bg-blue-100 text-blue-800",
    },
    {
      week: "Tjedan 5-6",
      title: "Dublje razumijevanje",
      goals: [
        "Uklonite sve životinjske proizvode",
        "Planirajte obruke unaprijed",
        "Učite o veganskoj nutriciji",
        "Pripremite obroke za cijeli dan",
      ],
      color: "bg-purple-100 text-purple-800",
    },
    {
      week: "Tjedan 7-8",
      title: "Stabilizacija",
      goals: [
        "Budite potpuno vegan",
        "Otkrijte nove okuse i teksture",
        "Spojite se s vegan zajednicom",
        "Educite obitelj i prijatelje",
      ],
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const commonChallenges = [
    {
      challenge: "Manjak proteina",
      solution: "Kombinirajte različite biljne izvore proteina kroz dan",
      icon: Target,
      color: "text-red-500",
    },
    {
      challenge: "Dosadni obroci",
      solution:
        "Eksperimentirajte s novim začinima, sojevima i tehnikama kuhanja",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      challenge: "Društvene situacije",
      solution:
        "Pripremi se unaprijed, donesi vlastiti obrok ili jedi prije izlaska",
      icon: AlertCircle,
      color: "text-blue-500",
    },
    {
      challenge: "Visoka cijena",
      solution:
        "Fokusiraj se na osnove: mahunarke, žitarice, sezonsko voće i povrće",
      icon: CheckCircle,
      color: "text-green-500",
    },
  ];

  const shoppingList = [
    {
      category: "Proteini",
      items: ["Leća", "Grah", "Tofu", "Tempeh", "Quinoa", "Orašasti plodovi"],
    },
    {
      category: "Ugljikohidrati",
      items: [
        "Smeđa riža",
        "Zobene pahuljice",
        "Krumpir",
        "Slatki krumpir",
        "Tjestenina",
      ],
    },
    {
      category: "Povrće",
      items: ["Špinat", "Brokula", "Mrkva", "Paprika", "Rajčice", "Avokado"],
    },
    {
      category: "Voće",
      items: ["Banane", "Borovnice", "Jabuke", "Naranče", "Grožđe", "Mango"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-50">
      <header>
      <div className="p-4 flex justify-between items-center top-0 backdrop-blur-sm z-10 border-b border-border/50 bg-gradient-to-r from-accentnice to-emerald-50 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-700/70">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <Leaf className="h-6 w-6 text-primary animate-pulse text-emerald-700" />
            <span>
              <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 dark:from-emerald-300 dark:via-green-300 dark:to-lime-300 bg-clip-text text-transparent drop-shadow-sm">
                Vegan.hr
              </h1>
            </span>
          </div>
        </Link>
        </div>
        <motion.div {...revealProps}>
          <HeadingImage image={headingImage} title={title} />
        </motion.div>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">

        {/* Header */}
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Savjeti za početnike
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Vaš praktični vodič za uspješan prelazak na veganski način života. 
            Korak po korak prema novom, zdravijem i etičnijem životu.
          </p>
        </div> */}

        {/* Hero Section */}
        {/* <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Veganski početak"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/80 to-green-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <Compass className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vaš vodič kroz promjenu
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Svaki veliki put počinje jednim korakom
              </p>
            </div>
          </div>
        </div> */}

        {/* Weekly Plan */}
        <div className="mb-16 hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            8-tjedni plan prelaska
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weeklyPlan.map((week, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${week.color}`}
                    >
                      {week.week}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-2">
                      {week.title}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {week.goals.map((goal, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <motion.div {...revealProps} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Česti izazovi i rješenja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <IconComponent className={`h-6 w-6 ${item.color} mr-3`} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.challenge}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Rješenje:</strong> {item.solution}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Shopping List */}
        {/* <motion.div {...revealProps} className="mb-16 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Lista za kupovinu početnika
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shoppingList.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Quick Tips */}
        <motion.div {...revealProps} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Brzi savjeti za uspjeh
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Praktični savjeti
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Počnite s jednostavnim receptima</li>
                  <li>• Pripremite obroke unaprijed</li>
                  <li>• Uvijek imajte veganske grickalice</li>
                  <li>• Istražite lokalne veganske trgovine</li>
                  <li>• Pratite veganske blogove i kanale</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Mentalni savjeti
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Budite strpljivi sa sobom</li>
                  <li>• Slavite male pobjede</li>
                  <li>• Educite se o prednostima</li>
                  <li>• Spojite se s vegan zajednicom</li>
                  <li>• Fokusirajte se na pozitivne promjene</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div {...revealProps} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Spremni za početak?</h2>
          <h2 className="text-3xl font-bold mb-4">
            Ovdje bi išao poziv na volontiranje
          </h2>
          {/* <p className="text-xl mb-6 max-w-2xl mx-auto">
            Svaki veliki put počinje jednim korakom. Počnite danas i otkrijte 
            koliko može biti jednostavno i ugodno živjeti veganski.
          </p> */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/recepti"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Pogledajte recepte
            </a>
            <a
              href="/nutricija"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Učite o nutriciji
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BeginnerTips;
