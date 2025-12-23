import React from "react";
import { Link } from "react-router-dom";
import { HeadingImage } from "../components/HeadingImage";
import chapterImage from "../assets/img/chapter3.jpg";
import { Leaf } from "lucide-react";
import { motion, type Transition } from "framer-motion";
import { CTAClean } from "../components/UltraCTA";

function EthicsCard({
  title,
  description,
  icon = null,
}: {
  title: string;
  description: string;
  icon?: any;
}) {
  const IconComponent = icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="bg-gray-100 rounded-full p-3 mr-4">
            <IconComponent className={`h-6 w-6 ${"text-accentnice"}`} />
          </div>
        )}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

const Ethics = () => {
  const title = "Zbog koga?";
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
  
  const animalsAndEmotions = [
    "Životinje imaju svijest i osjećaju bol",
    "Znanstvena istraživanja jasno potvrđuju da mnoge vrste, uključujući domaće i divlje životinje, posjeduju emocije, svijest i sposobnost doživljavanja boli. One osjećaju strah, tugu, radost i stres — baš kao i ljudi. Razumijevanje ovih činjenica mijenja način na koji gledamo na njihove živote i prava.",
  ];
  const animalsInAgriculture = [
    "Životinje u prehrambenoj industriji",
    "U industrijskoj poljoprivredi životinje su često izložene ekstremno lošim uvjetima: pretrpanim prostorima, ograničenom kretanju, bolnim zahvatima bez anestezije i kratkom životnom vijeku. Sustav je organiziran da maksimizira profit, a minimizira dobrobit životinja, što dovodi do sustavnog zanemarivanja njihovih osnovnih potreba.",
  ];
  const beyondFood = [
    "Korištenje životinja izvan prehrane",
    "Veganstvo nije samo prehrambeni izbor; to je etički stav koji se proteže na sve aspekte života. Vegani izbjegavaju proizvode testirane na životinjama, odjeću i obuću životinjskog porijekla, te zabavu koja uključuje iskorištavanje životinja. Ovaj pristup promovira poštovanje prema svim živim bićima i nastoji minimizirati njihovu patnju u svakodnevnom životu.",
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <header className="">
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
        <HeadingImage image={chapterImage} title={title} />

      </header>


 

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <h2 className="font-heading text-3xl font-bold text-center mt-12 mb-4">
            Zbog životinja
          </h2> */}

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              {animalsAndEmotions[0]}
            </h3>
            <p className="text-lg mb-4">{animalsAndEmotions[1]}</p>
            <p className="text-lg mb-4">
              Cambridge deklaracija o svijesti iz 2012. godine, koju je
              potpisala skupina prominentnih neuroznanstvenika, potvrđuje da
              "ne-ljudske životinje imaju svijest" i "sisavci i ptice, te mnoga
              druga bića, uključujući hobotnice" posjeduju neurološke supstrate
              koji generiraju svijest.
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500 mb-12">
              <p className="italic">
                "Životinje nisu strojevi - one su živa bića s vlastitim
                životima, interesima i kapacitetom za patnju. Ako možemo živjeti
                zdrav život bez nanošenja nepotrebne štete drugim bićima, zašto
                to ne bismo učinili?"
              </p>
            </div>
          </motion.div>

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              {animalsInAgriculture[0]}
            </h3>
            <p className="text-lg mb-6">{animalsInAgriculture[1]}</p>
            <div className="mb-6">
            <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
              <p>
                Veganskim načinom života smanjujemo potražnju za proizvodima
                životinjskog porijekla, što indirektno vodi do smanjenja broja
                životinja koje se uzgajaju za prehranu i eventualno do
                poboljšanja uvjeta uzgoja.
              </p>
            </div>
          </motion.div>

          {/* <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">{beyondFood[0]}</h3>
            <p className="text-lg mb-6">{beyondFood[1]}</p>
          </div> */}

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Korištenje životinja izvan prehrane
            </h3>
            <p className="text-lg mb-3">
              Veganski način života nastoji isključiti sve oblike iskorištavanja
              životinja, ne samo u prehrani. To uključuje:
            </p>
            <ul className="list-disc text-lg pl-6 space-y-2 mb-6">
              <li>
                Izbjegavanje proizvoda testiranih na životinjama (kozmetika,
                proizvodi za čišćenje)
              </li>
              <li>
                Nekorištenje odjeće i obuće životinjskog porijekla (koža, vuna,
                svila, perje)
              </li>
              <li>
                Izbjegavanje zabave koja uključuje životinje (cirkusi sa
                životinjama, zoološki vrtovi)
              </li>
              <li>Podržavanje etičkih alternativa u svim aspektima života</li>
            </ul>
                        <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg">
              U današnje vrijeme postoje brojne alternative koje omogućuju život
              bez korištenja životinjskih proizvoda, bez kompromisa u kvaliteti
              života.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Životinje u utočištima
            </h3>
            <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">
              Mnoge organizacije diljem svijeta pružaju utočište životinjama
              spašenim iz okrutnih uvjeta. Utočišta služe i kao edukacijski
              centri, gdje ljudi mogu upoznati životinje kao pojedince, a ne
              proizvode.
            </p>
          </motion.div>

          {/* <h2 className="font-heading text-3xl font-bold mb-6 text-center">
            Zbog ljudi
          </h2> */}
          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Glad u svijetu
            </h3>
            <p className="text-lg mb-6">
              Proizvodnja hrane životinjskog porijekla zahtijeva znatno više
              resursa u usporedbi s biljnom hranom. Preusmjeravanjem žitarica i
              drugih usjeva koji se koriste za hranu životinja prema ljudskoj
              prehrani, mogli bismo značajno smanjiti globalnu glad i poboljšati
              sigurnost hrane.
            </p>
            <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">
              Veliki udio globalno uzgojenih usjeva koristi se za hranjenje
              životinja u industrijskom uzgoju, umjesto direktne prehrane ljudi.
              Prelazak prema biljnoj prehrani mogao bi osloboditi velike
              količine žitarica, vode i zemlje te doprinijeti smanjenju gladi u
              svijetu.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              I radnici u klaonicama su žrtve
            </h3>
            <p className="text-lg mb-6">
              Radnici u klaonicama često su izloženi teškim psihičkim i fizičkim
              uvjetima rada. Mnogi izvještaji govore o visokoj prevalenciji
              depresije, PTSP-a i dehumanizacije na radnom mjestu. Ključni
              razlog je izloženost nasilju i strahotama koje su dio svakodnevice
              klaonice.
            </p>
            <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">
              Istraživanja pokazuju da radnici klaonica imaju veću stopu
              samoubojstava u usporedbi s općom populacijom, što ukazuje na
              ozbiljan utjecaj koji ovaj posao može imati na mentalno zdravlje.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">Zagađenje</h3>
            <p className="text-lg mb-6">
              Stočarstvo je značajan izvor zagađenja zraka, vode i tla. Emisije
              stakleničkih plinova iz poljoprivrednog sektora, uključujući metan
              iz stoke, doprinose klimatskim promjenama. Prelazak na biljnu
              prehranu može smanjiti ekološki otisak hrane i pomoći u očuvanju
              okoliša za buduće generacije.
            </p>
            <img
              src={'#'}
              alt="Ubaciti sliku"
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-3">
              Industrijski uzgoj životinja jedan je od najvećih uzroka:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Emisija stakleničkih plinova, uključujući metan i dušikov oksid.
              </li>
              <li>
                Onečišćenja voda: Otpadne vode iz farmi i klaonica često
                zagađuju lokalne vodne tokove, ugrožavajući ekosustave i ljudsko
                zdravlje.
              </li>
              <li>
                Deforestacije i degradacije tla: Proizvodnja stočne hrane
                doprinosi deforestaciji i degradaciji tla.
              </li>
            </ul>
            <p className="text-lg mb-6">
              Prema izvješću UN-ove Organizacije za hranu i poljoprivredu (FAO),
              stočarstvo je odgovorno za oko 14,5% globalnih emisija
              stakleničkih plinova, što je više nego sve emisije iz transportnog
              sektora zajedno.
            </p>
            <p className="text-lg mb-6">
              Klaonice i farme često se nalaze blizu siromašnijih zajednica,
              stvarajući nejednakosti u izloženosti zagađenju.
            </p>
          </motion.div>

          <motion.div {...revealProps} className="mb-12 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-heading text-2xl font-bold mb-3">
              Normalizacija nasilja
            </h3>
            <p className="text-lg mb-6">
              Kontakt s nasiljem, bilo direktan (rad u klaonici) ili indirektan
              (normalizacija nasilja nad životinjama), može povećati toleranciju
              prema agresiji.
            </p>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ENp6z_33HSM?si=-c6r7yy6oz_pNjFO"
                title="Video: Zašto veganstvo?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Zaključak</h3>
            <p className="text-lg mb-6">
              Veganstvo predstavlja etički odgovor na patnju životinja, ali i priliku za stvaranje pravednijeg i održivijeg svijeta za sve nas. Kroz informirane izbore i aktivizam, možemo zajedno raditi na izgradnji budućnosti u kojoj su prava i dobrobit svih živih bića poštovana.
            </p>
          </div> */}

          {/* Industrijski uzgoj životinja jedan je od najvećih izvora:

emisija stakleničkih plinova,

onečišćenja voda (otpadne vode iz farmi i klaonica),

degradacije tla,

deforestacije zbog stvaranja pašnjaka ili polja za uzgoj stočne hrane. */}

          {/* KAKO MOZETE POMOCI 
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Kako možete pomoći?</h2>
            <p className="text-lg mb-6">
              Osim osobnog odabira veganskog načina života, postoje mnogi načini na koje možete doprinijeti dobrobiti životinja:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Informirajte se i educirajte druge o uvjetima u kojima žive životinje u intenzivnom uzgoju</li>
              <li>Podržavajte lokalne i nacionalne organizacije za zaštitu životinja</li>
              <li>Zagovarajte za bolje zakone o dobrobiti životinja</li>
              <li>Birajte proizvode koji nisu testirani na životinjama i ne sadrže sastojke životinjskog porijekla</li>
              <li>Dijelite veganske recepte i informacije s prijateljima i obitelji</li>
            </ul>
          </div> */}

          {/* CTA Section */}

          {/* <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold mb-6">Želite aktivno pomoći životinjama?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
        Otkrijte kako se uključiti u aktivizam za prava životinja i pomoći stvarati bolji svijet za sva bića.
        </p>
        <Link
        to="/health"
        className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >Kako mogu pomoći?</Link>
        </div>
        </section> */}
        </motion.div>
      </main>
      
      <CTAClean
        title="Kako hrana utječe na naše zdravlje?"
        description="Otkrij zdravstvene koristi biljne prehrane."
        buttonLink="/health"
      />
    </div>
  );
};

export default Ethics;
