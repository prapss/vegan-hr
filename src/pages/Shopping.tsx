import React from 'react';
import chapterImage from '../assets/img/chapter5.jpg';
import nextChapterImage from '../assets/img/chapter6.jpg';
import { Zap, Shield, Bone, Info, Plus, Leaf, List, NotepadText, CircleDivide, Archive, SearchCheck} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeadingImage } from '../components/HeadingImage';
import { motion, type Transition } from 'framer-motion';
import { CTAClean } from '../components/UltraCTA';

const Shopping = () => {
  const title = 'Gdje kupiti vegansku hranu?'
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
  const mealPlan = [
    {
      meal: 'Doručak',
      suggestion: 'Zobene pahuljice s bananama i orasima',
      nutrients: ['Ugljikohidrati', 'Protein', 'Omega-3']
    },
    {
      meal: 'Užina',
      suggestion: 'Smoothie od borovnica i proteinskog praha',
      nutrients: ['Antioksidansi', 'Protein', 'Vitamini']
    },
    {
      meal: 'Ručak',
      suggestion: 'Quinoa salata s veganskim proteinima',
      nutrients: ['Kompletan protein', 'Vlakna', 'Minerali']
    },
    {
      meal: 'Večera',
      suggestion: 'Tofu s povrćem i smeđom rižom',
      nutrients: ['Protein', 'Kompleksni ugljikohidrati', 'Vitamini']
    }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-50">
      <header>
      <div className='p-4 flex justify-between items-center top-0 backdrop-blur-sm z-10 border-b border-border/50 bg-gradient-to-r from-accentnice to-emerald-50 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-700/70"'>
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
        <motion.div {...revealProps}>
          <HeadingImage image={chapterImage} title={title} />
        </motion.div>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">

        {/* Header */}
        {/* <div className="text-center mb-16"> */}
          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gdje kupiti vegansku hranu
          </h1> */}
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Naučite kako osigurati sve potrebne hranjive tvari kroz raznovrsnu 
            i uravnoteženu biljnu prehranu.
          </p> */}
        {/* </div> */}

        {/* Hero Section */}
        {/* <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Hranjivi veganski obroci"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <Zap className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hranjivost u svakom zalogaju
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Otkrijte kako biljni izvori pružaju sve što vašem tijelu treba
              </p>
            </div>
          </div>
        </div> */}

        {/* Meal Planning */}
        {/* <div className="mb-16 bg-g radient-to-r from-emerald-50 to-green-50 rounded-2xl p-8"> */}
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Dnevni plan obroka
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mealPlan.map((meal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {meal.meal}
                </h3>
                <p className="text-gray-600 mb-4">
                  {meal.suggestion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {meal.nutrients.map((nutrient, i) => (
                    <span
                      key={i}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm"
                    >
                      {nutrient}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Supplementation Guide */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Vodič za dodatke prehrani
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Plus className="h-5 w-5 text-emerald-600 mr-2" />
                Preporučeni dodaci
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <div>
                    <strong>Vitamin B12:</strong> Obavezan za sve vegane
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <div>
                    <strong>Vitamin D:</strong> Posebno u zimskim mjesecima
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <div>
                    <strong>Omega-3:</strong> Iz morskih algi
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <div>
                    <strong>Željezo:</strong> Ako su razine niske
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Savjeti za bolje usvajanje
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Kombinirajte željezo s vitaminom C</li>
                <li>• Jedite kalcij odvojeno od željeza</li>
                <li>• Kuhajte u željeznoj posudi</li>
                <li>• Namačite mahunarke prije kuhanja</li>
                <li>• Jedite raznovrsno svakodnevno</li>
                <li>• Redovito provjeravajte razine u krvi</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Myth Busting */}
        {/* <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Gdje naći veganske proizvode i restorane u Hrvatskoj:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Mit: "Vegani ne dobivaju dovoljno proteina"
              </h3>
              <p className="text-gray-600 mb-4">
                Činjenica: Mnogi biljni izvori su bogati proteinima, a kombiniranje 
                različitih izvora osigurava sve potrebne aminokiseline.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-red-600 mb-3">
                Mit: "Veganska prehrana je deficitarna"
              </h3>
              <p className="text-gray-600 mb-4">
                Činjenica: Dobro planirana veganska prehrana može biti hranjivija 
                od standardne prehrane i pružiti sve potrebne nutrijente.
              </p>
            </div>
          </div>
        </div> */}

                {/* Supermarket private-label vegan lines */}
        <motion.div {...revealProps} className="mb-6 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Supermarketi
          </h2>
          <p className="text-gray-600 mb-4">
            Vegansku hranu danas možete pronaći u gotovo svakom supermarketu u Hrvatskoj. Ne morate ići u skupe specijalizirane trgovine.
          </p>
          <p className='text-gray-600 mb-2'>Veći trgovački lanci često imaju svoje veganske linije proizvoda (npr. Vemondo u Lidlu, Veggie u Sparu, ...). Ove linije su često povoljnije i lako dostupne, pa su odlična opcija za svakodnevne namirnice.</p>
          <ul className="list-inside list-disc text-gray-600">
            <li>Biljna mlijeka (zobeno, sojino, bademovo, ...)</li>
            <li>Tofu i humusi</li>
            <li>Veganski burgeri i naresci</li>
            <li>Veganski sirevi i jogurti</li>
          </ul>
        </motion.div>

        {/* Shopping Tips */}
        <motion.div {...revealProps} className="mb-6 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Opći savjeti za kupovinu
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <ul className="space-y-3">
              <li className="flex items-start">
                <NotepadText className="h-6 w-6 text-emerald-600 mr-3" />
                <div>
                  <strong>Planiraj obroke</strong> — Napravite popis i kupujte prema planu kako biste izbjegli bacanje hrane.
                </div>
              </li>
              <li className="flex items-start">
                <Leaf className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Biraj sezonsko</strong> — Sezonsko voće i povrće je jeftinije i ukusnije.
                </div>
              </li>
              <li className="flex items-start">
                <Plus className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Kupuj u rinfuzi</strong> — Žitarice, mahunarke i orašasti plodovi često su povoljniji u većim pakiranjima.
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Kupuj smrznuto</strong> — Smrznuto voće i povrće često je jeftinije, praktičnije i nutritivno ravnopravno sa svježim.
                </div>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start">
                <List className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Čitaj deklaracije</strong> — Potražite B12 i obogaćene proizvode, te pazite na dodatne šećere i aditive.
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Traži V-Label i certifikate</strong> — Oznake olakšavaju prepoznavanje pravih veganskih proizvoda.
                </div>
              </li>
              <li className="flex items-start">
                <CircleDivide className="h-6 w-4 text-emerald-600 mr-3" />
                <div>
                  <strong>Provjeri jediničnu cijenu</strong> — Korisno kod usporedbe veličina i ponuda.
                </div>
              </li>
              <li className="flex items-start">
                <SearchCheck className="h-7 w-7 text-emerald-600 mr-3" />
                <div>
                  <strong>Ne vjeruj samo "plant-based"</strong> — Provjerite sastojke jer "plant-based" ne znači uvijek bez mliječnih sastojaka ili meda.
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Provjeri alergene i "može sadržati"</strong> — Važno za stroge vegane i alergičare.
                </div>
              </li>
              <li className="flex items-start">
                <Info className="h-6 w-6 text-emerald-600 mr-3" />
                <div>
                  <strong>Pitaj osoblje i koristite aplikacije</strong> — Ako niste sigurni, pitajte prodavače ili provjerite aplikacije koje pretražuju veganske proizvode.
                </div>
              </li>
              <li className="flex items-start">
                <Archive className="h-6 w-5 text-emerald-600 mr-3" />
                <div>
                  <strong>Pazi na skladištenje</strong> — Ispravno skladištenje produžuje svježinu i smanjuje otpad.
                </div>
              </li>
            </ul>
          </div>
        </motion.div>



        {/* Savings tip */}
        <motion.div {...revealProps} className="mb-16 bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Savjet za uštedu
          </h2>
          <p className="text-gray-600 mb-2">
            Veganstvo ne mora biti skupo! Najjeftinije namirnice su upravo veganske: grah, leća, riža, krumpir, tjestenina, sezonsko voće i povrće.
          </p>
          <p className="text-gray-600">
            Zamjene za meso i sir su "luksuz", a ne nužnost.
          </p>
        </motion.div>

    </main>
        <motion.div {...revealProps}>
          <CTAClean title='Gdje naći veganske restorane' description='Saznajte kako i gdje nabaviti sve potrebne namirnice za zdravu vegansku prehranu.'  buttonLink='/restaurants'/>
        </motion.div>
      </div>
  );
};

export default Shopping;
