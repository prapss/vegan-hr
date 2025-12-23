import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Shield,
  Scale,
  Shrub,
  ChevronDown,
  ArrowRight,
  Sparkles,
  HandHeart,
  Leaf,
  EyeOff,
  Layers,
  Eye,
} from "lucide-react";
import ExpandableCard from "../components/ExpandableCard";
import UltraModernCTA, {
  CTASectionGlass,
  CTASectionNeon,
  CTASectionSplit,
  CTASectionUltraFlat,
} from "../components/UltraCTA";
import headingImage from "../assets/img/chapter2.jpg";
import nextChapterImage from "../assets/img/chapter3.jpg";
import { StoryLayout } from "../components/StoryLayout";
import { HeadingImage } from "../components/HeadingImage";

function Card({
  title,
  value,
  icon = null,
}: {
  title: string;
  value: string;
  icon?: any;
}) {
  const [flash, setFlash] = useState(false);

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setFlash(true);
      setTimeout(() => setFlash(false), 300);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div
      onClick={copyValue}
      className={`break-inside-avoid p-4 rounded-xl border border-white/5 bg-card backdrop-blur-sm shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl shadow-green-500/40"
      }`}
    >
      <div className="flex-1">
        {/* <h2 className="text-sm font-semibold leading-tight mb-1">{title}</h2> */}
        <p className="text-md">{value}</p>
      </div>
    </div>
  );
}

const Veganism = () => {
  // const definition = `Veganstvo je način života koji nastoji isključiti, koliko god je to moguće i izvedivo, sve oblike iskorištavanja i okrutnosti prema životinjama, bilo za hranu, odjeću ili bilo koju drugu svrhu. To uključuje izbjegavanje konzumacije životinjskih proizvoda poput mesa, mliječnih proizvoda, jaja i meda, kao i izbjegavanje proizvoda testiranih na životinjama ili izrađenih od životinjskih materijala poput kože, krzna i svile. Veganstvo se temelji na etičkim, okolišnim i zdravstvenim razlozima, promovirajući suosjećanje prema svim živim bićima i održiviji način života.`;
  const definitionPartOne = `Veganstvo je način života baziran na empatiji, pravdi i poštivanju životinja... svjestan izbor da živimo tako da ne nanosimo patnju i ne iskorištavamo životinje ni za hranu, ni za odjeću, kozmetiku, zabavu ili bilo koju drugu svrhu.`;
  const definitionPartTwo =
    "Biti vegan znači gledati svijet očima suosjećanja i prepoznati da svaka životinja ima svoju osobnost, osjećaje i pravo na život bez straha i patnje. Veganstvo nije samo prehrana, nego način života koji uključuje etiku, zdravlje i brigu za planet.";
  const principles = [
    {
      title: "Poštivanje životinja",
      // description: 'Svaka životinja ima pravo na život bez patnje i eksploatacije.',
      shortDescription:
        "Veganstvo je način života baziran na empatiji, ljubavi i poštivanju svih bića.",
      description:
        // "Veganstvo je način života baziran na empatiji, ljubavi i poštivanju svih živih bića. Svjestan izbor da živimo tako da ne nanosimo patnju i ne iskorištavamo životinje ni za hranu, ni za odjeću, kozmetiku, zabavu ili bilo koju drugu svrhu. Biti vegan znači gledati svijet očima suosjećanja i prepoznati da svaka životinja ima svoju osobnost, osjećaje i pravo na život bez straha i patnje. Veganstvo nije samo prehrana, nego način života koji uključuje etiku, zdravlje i brigu za planet.",
        "Veganski način života temelji se na suosjećanju, pravdi i poštovanju prema životinjama. Kada biramo ne koristiti životinje za hranu, odjeću ili zabavu, zapravo biramo ne sudjelovati u njihovoj patnji i iskorištavanju. Svaka životinja ima svoj život, svoje osjećaje, strahove i želje, baš kao i mi. Biti vegan znači prepoznati da život drugih živih bića ima vrijednost neovisno o našim potrebama. To je čin ljubavi, svijesti i odgovornosti.",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Zdravlje",
      // description: 'Biljna prehrana može transformirati vaše zdravlje i donijeti vam dugoročne koristi za cijeli organizam.',
      shortDescription:
        "Brojna istraživanja pokazuju da pravilno planirana veganska prehrana može zadovoljiti sve nutritivne potrebe.",
      description:
        "Biljna prehrana je bogata vitaminima, mineralima, vlaknima i antioksidansima koji čiste organizam i jačaju naš imunološki sustav. Brojna istraživanja pokazuju da veganska prehrana može smanjiti rizik od srčanih bolesti, dijabetesa tipa 2, pretilosti i određenih vrsta raka. Mnogi vegani primjećuju da imaju više energije, bolju probavu, čišću kožu i osjećaj lakoće u tijelu. Vodeće svjetske nutricionističke organizacije (Academy of Nutrition and Dietetics, British Dietetic Association, German Nutrition Society, Italian Society of Human Nutrition, Association Végétarienne de France) smatraju da su pravilno planirane vegetarijanske i veganske prehrane zdrave, nutritivno adekvatne i mogu pružiti zdravstvene dobrobiti u prevenciji i tretmanu određenih bolesti.",
      references: [
        {
          text: "Dr Shireen Kassam rates her top science papers supporting plant-based nutrition",
          link: "https://www.vegansociety.com/get-involved/research/research-news/opinion-top-science-papers-2020-supporting-plant-based-nutrition",
        },
        {
          text: "Physicians Committee for Responsible Medicine (PCRM): Plant-Based Diets",
          link: "https://www.pcrm.org/good-nutrition/plant-based-diets",
        },
        {
          text: "Cardiometabolic Effects of Omnivorous vs Vegan Diets in Identical Twins",
          link: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2812392?utm_source=chatgpt.com",
        },
        {
          text: "PubMed: Health outcomes of shifting from a traditional to a vegan Mediterranean diet in healthy men",
          link: "https://pubmed.ncbi.nlm.nih.gov/39358106/",
        },
        {
          text: "PubMed: Position paper on vegetarian diets from the working group of the Italian Society of Human Nutrition",
          link: "https://pubmed.ncbi.nlm.nih.gov/29174030/",
        },
        {
          text: "PubMed: Health outcomes of shifting from a traditional to a vegan Mediterranean diet in healthy men",
          link: "https://pubmed.ncbi.nlm.nih.gov/39358106",
        },
      ],
      icon: Shield,
      color: "text-blue-500",
    },
    {
      title: "Okoliš",
      shortDescription:
        "Prelaskom na vegansku prehranu smanjujemo naš ekološki otisak, čuvamo prirodne resurse i pomažemo u borbi protiv klimatskih promjena.",
      description:
        "Mesna i mliječna industrija je jedna od glavnih uzroka krčenja šuma, gubitka bioraznolikosti, zagađenja voda i emisija stakleničkih plinova. Prelaskom na vegansku prehranu smanjujemo naš ekološki otisak, čuvamo prirodne resurse i pomažemo u borbi protiv klimatskih promjena. Veganstvo nije samo osobni izbor, već i čin odgovornosti prema planetu i budućim generacijama.",
      // description: 'Mesna i mliječna industrija je jedna od glavnih uzroka krčenja šuma, emisija stakleničkih plinova i onečišćenja vode. Biljna prehrana koristi znatno manje zemlje, vode i energije, te stvara znatno manje štetnih ugljičnih emisija. Veganskim lifestyleom štitimo šume, oceane i zrak koji svi dišemo. To je najjednostavniji i  najmoćniji način na koji možemo doprinijeti održivoj budućnosti.',
      icon: Shrub,
      color: "text-green-500",
    },
  ];

  const facts = [
    {
      title: "Krave",
      fact: "Kravlje mlijeko je namijenjeno za bebe od krave, ne ljude.",
    },
    {
      title: "Krave",
      fact: "Kravlje mlijeko prirodno sadrži hormone i faktore rasta koji su dizajnirani da tele od 30 kg naraste u kravu od 300 kg u manje od godinu dana.",
    },
    {
      title: "Krave",
      fact: "Krave se moraju oploditi da bi davale mlijeko. One se umjetno oplođuju (siluju), a njihove bebe (telići) im se oduzimaju kako bi se moglo uzeti njihovo mlijeko. Krave majke pate i traže svoju djecu danima.",
    },
    {
      title: "Svinje",
      fact: "Svinje su izuzetno inteligentne životinje, pametnije od pasa i mačaka.",
    },
    {
      title: "Svinje",
      fact: "Svinje imaju dobro pamćenje, mogu razumjeti simbole, igrati jednostavne video igre i pokazivati empatiju.",
    },
    {
      title: "Svinje",
      fact: "Radnici u klaonicama imaju visok postotak PTSD-a. Stalna izloženost ubijanju može izazvati ozbiljnu psihološku traumu.",
    },
    {
      title: "Krave",
      fact: "Krave muzare često završavaju kao meso. Kada im proizvodnja mlijeka padne (oko 5. godine), šalju se na klanje, iako bi mogle prirodno živjeti više od 20 godina.",
    },
    {
      title: "Genericno",
      fact: "Većina mesa sadrži hormone stresa.",
    },
    {
      title: "Genericno",
      fact: "Kada životinje osjete strah prije klanja, njihova tijela se preplave kortizolom i adrenalinom, koji ostaju u njihovim tijelima.",
    },
    {
      title: "Kokoši",
      fact: "Kokoši u industrijskom uzgoju su genetski modificirane da polažu jaja gotovo svakodnevno.",
    },
    {
      title: "Ribe",
      fact: "Osjećaju bol i stres jednako kao i ostale kralježnjake.",
    },
  ];

  const title = "Što je veganstvo?";
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
        <HeadingImage image={headingImage} title={title} />

      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Definition Section */}
          <div className="break-inside-avoid p-4  mt-6 bg-white/60 rounded-xl border border-white/5 backdrop-blur-sm shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl">
            {/* <h2 className="text-3xl font-bold tracking-tight text-center mb-2">Definicija</h2>  */}
            <p className="text-lg  max-w-4xl mx-auto leading-relaxed">
              {definitionPartOne}
            </p>
            <p className="text-lg  max-w-4xl mx-auto leading-relaxed mt-6">
              {definitionPartTwo}
            </p>
          </div>

          {/* Ethical Principles Expandable*/}
          <section className="container mx-auto px-4 py-0 md:py-0 mb-22 mt-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Dobrobiti veganstva
                </h2>
                {/* 
                <p className="text-lg text-muted-foreground text-pretty">
                Click each card to discover why this moment matters
                </p> */}
              </div>
              {/* 
              <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
                <div className="container mx-auto px-1 py-2 ">
                  <div className="max-w-4xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium mb-4 animate-fade-in-up shadow-lg shadow-primary/20">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>Welcome to Your Journey</span>
              </div>
              
                  </div>
                </div>

                <div className="absolute top-20 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float [animation-delay:2s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow" />
              </section> */}

              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <ExpandableCard
                    key={index + 1}
                    index={index}
                    fullDescription={principle.description}
                    shortDescription={principle.shortDescription}
                    references={principle.references}
                    title={principle.title}
                    icon={principle.icon}
                    color={principle.color}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Key Definitions Section */}
          <section className="container mx-auto px-4 py-0 md:py-0 mb-8 mt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                  Dva pojma za koja bi se trebalo znati
                </h2>
                <p className="text-sm text-muted-foreground">
                  {/* Kratke definicije ključnih termina povezanih s veganstvom. */}
                </p>
              </div>

              <div className="grid grid-cols-1  gap-4">
                <ExpandableCard
                  key="def-carnism"
                  index={100}
                  title="Karnizam"
                  shortDescription="Ideologija koja normalizira i opravdava konzumaciju određenih životinja."
                  // fullDescription="Karnizam je termin koji je skovala psihologinja Melanie Joy i opisuje nevidljivu ideologiju zbog koje ljudi smatraju normalnim, prirodnim i nužnim jesti određene životinje. Karnizam objašnjava kako kulturni, institucionalni i emocionalni faktori oblikuju naše prehrambene navike te kako taj sustav omogućava i skriva patnju životinja."
                  fullDescription="Karnizam je društveno uvjetovana ideologija koja opravdava i normalizira iskorištavanje i konzumaciju određenih životinja, dok se druge štite, i to kroz uvjerenja da je takva praksa prirodna, nužna i normalna."
                  // Djeluje uglavnom nevidljivo, oblikujući navike, moralne stavove i emocionalne reakcije ljudi prema životinjama.
                  icon={EyeOff}
                  color="text-pink-500"
                />

                <ExpandableCard
                  key="def-speciesism"
                  index={101}
                  title="Specizam"
                  shortDescription="Vjerovanje da su interesi jedne vrste važniji od interesa drugih vrsta."
                  // fullDescription="Specizam je oblik pristranosti u kojem se ljudska bića smatraju superiornima u odnosu na druge vrste, često opravdavajući iskorištavanje životinja. Slično rasizmu i seksizmu, specizam odbacuje moralnu jednaku vrijednost interesa drugih vrsta i omogućava diskriminaciju i eksploataciju."
                  // Specizam je diskriminacija živih bića na temelju njihove pripadnosti određenoj vrsti, najčešće davanje veće vrijednosti ljudima nego životinjama.
                  fullDescription="Specizam je oblik diskriminacije ili predrasude prema bićima na temelju njihove pripadnosti određenoj vrsti. Najčešće se odnosi na uvjerenje da su ljudi inherentno vrjedniji od ostalih životinja, pa se interesi životinja zanemaruju ili smatraju manje važnima."
                  icon={Scale}
                  color="text-yellow-500"
                />
              </div>
            </div>
          </section>
            

          
          {/* Fun Facts Section */}
          <h2 className="text-3xl font-bold mb-8 text-center pt-16">
            Zanimljive činjenice
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-2">
            {facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card key={index} title={fact.title} value={fact.fact} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* <CTASectionUltraFlat
        title={"Pridruži se zajednici!"}
        description={
          "Postani dio pokreta za bolje sutra. Pronađi podršku, resurse i inspiraciju na svom veganskom putu."
        }
        buttonText="Saznaj više ➔"
        buttonLink={"/community"}
      /> */}
      {/* <CTASectionSplit
        title={"Spremni za sljedeći korak?"}
        description={
          "Istraži zdravstvene aspekte veganstva i kako možeš poboljšati svoje zdravlje."
        }
        buttonText="Dalje ➔"
        buttonLink={"/recipes"}
        image={nextChapterImage}  
      /> */}
      {/* <CTASectionGlass
        title={"Nastavi svoje putovanje"}
        description={
          "Zaroni dublje u etičke temelje veganstva."
        }
        buttonText="Dalje ➔"
        buttonLink={"/ethics"}

      /> */}

      <section className=" space-y-6 mx-auto mt-16 ">
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Doznaj zbog koga?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Doznaj zbog koga je ovo važno?
          </p>
          <Link
            to="/ethics"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Dalje
            <ArrowRight className="inline text-xl text-primary h-5 w-5 ml-1" />
          </Link>
        </div>
      </section>
      {/* 
      <CTASectionNeon
        title={"Istraži više o veganstvu"}
        description={
          "Nastavi svoje putovanje i otkrij etičke razloge veganstva."
        }
        buttonText="Započni ➔"
        buttonLink={"/ethics"}
      /> */}
    </div>
  );
};

export default Veganism;
