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
  const title = "Izazovi i rješenja";
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

  const communityResources = [
    {
      title: "Kako ostati vegan",
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Nemoj odustati ako nemaš sve odgovore i ako nemaš podršku od svoje
            okoline!
          </p>
          <p>
            Ne budi kao Miley Cyrus - koja je prestala biti veganka zato jer
            navodno nije dobila dovoljno Omega 3! Očigledno nije znala da može
            zadovoljiti potrebe tijela za Omega 3 masnim kiselinama tako da
            ubaci 2 žlice samljevenih lanenih sjemenki u zobene, salatu ili
            shake ili da uzme Omega 3 kapsule.
          </p>
          <p>
            Pitaj za podršku! Tu smo za tebe. Javi nam se slobodno i poslat
            ćemo ti koje god informacije ti trebaju (LINK)
          </p>
          <p>
            Pogledaj dokumentarce koji će potvrditi da kada biraš veganstvo
            biraš pravu, zdravu, lijepu stvar. Ovdje smo složili listu za tebe
            (LINK), kao i brdo super knjiga (LINK).
          </p>
        </div>
      ),
    },
    {
      title: "Pomozi životinjama",
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Uz šeranje veganskih recepata, doniranje udrugama i utočištima lako
            nađi nove načine kako povezati druženje s cool ekipom s pomaganjem
            životinjama... fundraiseri za utočišta, pomaganje u officeu, ulične
            akcije, pečenje keksa - samo se javi i pitaj kako se možeš
            pridružiti.
          </p>
          <p>
            Mi smo ujedno i kreatori ove webstranice, tako da nas slobodno
            kontaktiraj ako imaš ikakvih pitanja i ako trebaš pomoć.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/share/14KUhzuduEy"
                target="_blank"
                rel="noreferrer"
              >
                Prijatelji životinja
              </a>
            </li>
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/groups/veganthugz"
                target="_blank"
                rel="noreferrer"
              >
                Vegan Thugz
              </a>
            </li>
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/groups/wtfzagreb"
                target="_blank"
                rel="noreferrer"
              >
                WeTheFree Zagreb
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nađi nove proizvode & recepte na Instagramu",
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Zaprati Instagram profile na kojima ćeš lako naći recenzije
            veganske hrane u restoranima, nove veganske proizvode u dućanima,
            kao i fine veganske recepte.
          </p>
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Restorani i proizvodi:</p>
            <ul className="list-disc pl-5">
              <li>
                <a
                  className="text-emerald-700 underline"
                  href="https://www.instagram.com/veganfoodcroatia"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/veganfoodcroatia
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">Recepti:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <a
                  className="text-emerald-700 underline"
                  href="https://www.instagram.com/burbon_i_borovnice"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/burbon_i_borovnice
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-700 underline"
                  href="https://www.instagram.com/delicious_and_healthy_by_maya"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/delicious_and_healthy_by_maya
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-700 underline"
                  href="https://www.instagram.com/plantbasedfulloftaste"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/plantbasedfulloftaste
                </a>
              </li>
              <li>
                <a
                  className="text-emerald-700 underline"
                  href="https://www.instagram.com/zlicasecera"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.instagram.com/zlicasecera
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Poveži se s drugima na Facebooku",
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Pridruži se veganskim grupama na Facebooku, gdje ćeš moći naći nove
            proizvode u dućanima, nove recepte, nove veganske evente i još puno
            toga. Složili smo listu nekoliko grupa za tebe (LINKOVI). Dodatno
            istražuj i nađi nove grupe.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/groups/183140573770"
                target="_blank"
                rel="noreferrer"
              >
                Veganski proizvodi
              </a>
            </li>
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/groups/734379246610659"
                target="_blank"
                rel="noreferrer"
              >
                Veganska zajednica
              </a>
            </li>
            <li>
              <a
                className="text-emerald-700 underline"
                href="https://www.facebook.com/groups/veganske.dostave"
                target="_blank"
                rel="noreferrer"
              >
                Veganske dostave
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Nekoliko finih preporuka",
      content: (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Probaj GreenVie Greek Style sir (feta) &amp; GreenVie Mozzarella
            sir, Annapurna dimljeni seitan, Lindt Classic veganska čokolada u
            Mulleru, Sojade jogurt u bio&amp;bio, Veganz choc-bar coconut
            čokoladica u Mulleru, DM Sportness proteinska pločica u DMu.
          </p>
          <p>
            Što se tiče restorana u Zagrebu, probaj veganske lazanje i tiramisu
            u restoranu Cynic u Zagrebu, vegansku pizzu Šokicu u Caruso,
            vegansku palačinku u Milky Zagreb, Seitan Cordon Bleu u Zrno Bio
            Bistro, veganski steak u restoranu Kućica Sljeme, Dunavske valove u
            Vegehopu, veganski kebab u restoranu OAZA, vegansku Capricciosa
            pizzu u restoranu Plantea, veganski kurtoš u Sisters Kurtoš, Katsu
            tofu i brownie u Br00m44. Ima još toga, nešto moraš otkriti i sam/a
            :)
          </p>
          <p>Ako si u blizini Osijeka, obavezno se zaleti u Yes rebel bites!</p>
          <div className="space-y-2">
            <p className="font-semibold text-gray-800">
              Kako naručiti hranu u restoranu?
            </p>
            <p>
              Ako hrana nije jasno označena kao veganska ili ako je označena
              kao plant-based, pitaj da li hrana sadrži mlijeko, maslac, jaja
              ili bilo koje druge sastojke koji dolaze od životinja. LEVEL PRO
              TIP: reci da si alergična/n na mlijeko i jaja. U tom slučaju će
              djelatnici restorana obavezno provjeriti s kuharima ili vlasnikom
              restorana.
            </p>
            <p>
              Također možeš pitati da li je hrana - ako je pržena - pržena
              zajedno s mesom, da li umak u sebi ima meda ili jogurt, da li u
              prženju hrane koriste maslac.
            </p>
            <p>
              Ako u restoranu nemaju ništa vegansko, pitaj za njihov Instagram
              profil i kasnije im pošalji poruku da bi te obradovalo kada bi
              uveli i vegansku ponudu, kao i biljno mlijeko za kavu. Možeš im
              dati ideju da uzmu neko fino barista biljno mlijeko. Tako možeš
              pomoći kreirati bolju ponudu veganske hrane u Hrvatskoj... svaki
              glas se računa, vjeruj nam.
            </p>
            <p>
              Ako restoran ima vegansku ponudu i svidi ti se, svakako im to
              reci (to im puno znači), fotkaj hranu i podijeli preporuku sa
              svojim frendovima na Facebooku i Instagramu. Tagiraj restoran i
              pohvali ih. Na taj način pomažeš održati vegansku ponudu u tom
              restoranu!
            </p>
          </div>
        </div>
      ),
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

        {/* Common Challenges */}
        {/* <motion.div {...revealProps} className="mb-16">
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
        </motion.div> */}

        {/* Community Resources */}
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Još korisnih smjernica
          </h2> */}
          <div className="space-y-6">
            {communityResources.map((item) => (
        <motion.div {...revealProps} className="mb-16">

              <div key={item.title} className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h2>
                {item.content}
              </div>
        </motion.div>
            ))}
          </div>

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
        {/* <motion.div {...revealProps} className="mb-16">
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
        </motion.div> */}

        {/* Call to Action */}
        <motion.div {...revealProps} className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pridružite se našoj
            zajednici danas</h2>
          <h2 className="text-2xl font-bold mb-4">
             Započnite svoj put prema zdravijem i
            suosjećajnijem načinu života!
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
              Pridruži se zajednici
            </a>
            {/* <a
              href="/nutricija"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              Uite o nutricičji
            </a> */}
          </div>
        </motion.div>
        <h2 className="text-xl font-bold text-black/90"></h2>
        <ul>
          <li><h2 className="text-xl font-bold text-black/90">Odlučiti želimo li poziv na akciju za kraj i kakav?</h2></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
      </main>
    </div>
  );
};

export default BeginnerTips;
