import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Heart,
  Shield,
  Scale as Scales,
  Shrub,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

function Card({ title, value, icon = null }: { title: string; value: string; icon?: any}) {
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
      className={`cursor-pointer flex gap-3 p-4 rounded-xl border border-white/5 bg-secondary-900/40 backdrop-blur-sm shadow-lg transition transform hover:-translate-y-1 hover:shadow-xl ${
        flash ? "shadow-green-500/40" : ""
      }`}
    >
      <div className="flex-1">
        <h2 className="text-sm font-semibold leading-tight mb-1">{title}</h2>
        <p className="text-md">{value}</p>
      </div>
    </div>
  );
}

function ExpandableCard({
  title,
  content,
  icon: Icon,
  index,
  references = null,
}: {
  title: string;
  content: string;
  icon: any;
  index: number;
  references?: { text: string; link?: string }[] | null;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group border-2 border-border rounded-xl overflow-hidden bg-card hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 animate-fade-in-up hover:scale-[1.02]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
            <Icon
              className={
                "w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300 ${principle.color}"
              }
            />
          </div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          {" "}
          {/*bg-gradient-to-br from-primary/5 to-accent/5*/}
          <p className="text-gray-800 leading-relaxed">{content}</p>
          {references && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Reference:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {references.map((ref, refIndex) => (
                  <li key={refIndex}>
                    {ref.link && (
                      <a
                        href={ref.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                      >
                        {ref.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Veganism = () => {
  const definition = `Veganstvo je način života koji nastoji isključiti, koliko god je to moguće i izvedivo, sve oblike iskorištavanja i okrutnosti prema životinjama, bilo za hranu, odjeću ili bilo koju drugu svrhu. To uključuje izbjegavanje konzumacije životinjskih proizvoda poput mesa, mliječnih proizvoda, jaja i meda, kao i izbjegavanje proizvoda testiranih na životinjama ili izrađenih od životinjskih materijala poput kože, krzna i svile. Veganstvo se temelji na etičkim, okolišnim i zdravstvenim razlozima, promovirajući suosjećanje prema svim živim bićima i održiviji način života.`;
  const principles = [
    {
      title: "Poštivanje životinja",
      // description: 'Svaka životinja ima pravo na život bez patnje i eksploatacije.',
      shortDescription:
        "Veganstvo je način života baziran na empatiji, ljubavi i poštivanju svih živih bića...",
      description:
        "Veganstvo je način života baziran na empatiji, ljubavi i poštivanju svih živih bića. Svjestan izbor da živimo tako da ne nanosimo patnju i ne iskorištavamo životinje ni za hranu, ni za odjeću, kozmetiku, zabavu ili bilo koju drugu svrhu. Biti vegan znači gledati svijet očima suosjećanja i prepoznati da svaka životinja ima svoju osobnost, osjećaje i pravo na život bez straha i patnje. Veganstvo nije samo prehrana, nego način života koji uključuje etiku, zdravlje i brigu za planet.",
      icon: Heart,
      color: "text-red-500",
    },
    {
      title: "Zdravlje",
      // description: 'Biljna prehrana može transformirati vaše zdravlje i donijeti vam dugoročne koristi za cijeli organizam.',
      shortDescription:
        "Brojna istraživanja pokazuju da pravilno planirana veganska prehrana može zadovoljiti sve nutritivne potrebe...",
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
          text: "British Dietetic Association: Vegetarian, vegan and plant-based diets",
          link: "https://www.bda.uk.com/resource/vegetarian-vegan-plant-based-diet.html",
        },
      ],
      icon: Shield,
      color: "text-blue-500",
    },
    {
      title: "Okoliš",
      shortDescription: "Veganskim načinom života štitimo šume, oceane...",
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
      title: "Meso",
      fact: "Većina mesa sadrži hormone stresa.",
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

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Što je veganstvo
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Istražite duboke etičke razloge koji pokreću veganski pokret i 
            otkrijte kako možete živjeti u skladu sa svojim vrijednostima.
          </p> */}
        </div>
        <p className="text-l text-gray-800 mx-5 leading-relaxed mb-6">
          {definition}
        </p>

        {/* Hero Section
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Životinje u prirodi"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-blue-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <HandHeart className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Suosjećanje u akciji
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Svaki izbor je prilika za izražavanje naših vrijednosti
              </p>
            </div>
          </div>
        </div> */}

        {/* Ethical Principles Expandable*/}
        <section className="container mx-auto px-4 py-0 md:py-0">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-4 mt-20">
              <h2 className="text-3xl font-bold tracking-tight">
                Dobrobiti veganstva
              </h2>
              {/* <p className="text-lg text-muted-foreground text-pretty">
              Click each card to discover why this moment matters
            </p> */}
            </div>
            <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20">
              <div className="container mx-auto px-1 py-2 ">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  {/* <div className="inline-flex items-center gap-2 px-4 py-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary text-sm font-medium mb-4 animate-fade-in-up shadow-lg shadow-primary/20">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Welcome to Your Journey</span>
            </div>
             */}
                </div>
              </div>

              <div className="absolute top-20 left-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl animate-float [animation-delay:2s]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-glow" />
            </section>

            <div className="space-y-4">
              {principles.map((principle, index) => (
                <ExpandableCard
                  key={index + 1}
                  content={principle.description}
                  references={principle.references}
                  title={principle.title}
                  icon={principle.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Ethical Principles */}
        <div className="mb-16">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Temelji etičkog razmišljanja
          </h2> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-full p-3 mr-4">
                      <IconComponent className={`h-6 w-6 ${principle.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>
                  {principle.references && (
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Reference:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {principle.references.map((ref, refIndex) => (
                          <li key={refIndex}>
                            {ref.link && (
                              <a
                                href={ref.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:underline"
                              >
                                {ref.text}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>*/}
        </div>

        {/* Fun Facts Section */}
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Zanimljive činjenice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {facts.map((fact, index) => (
              <Card key={index} title={fact.title} value={fact.fact} />
            ))}
          </div>
        </div>
        

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl 
          border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/50 backdrop-blur-lg">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">Zbog koga?</h2>
            <p className="text-lg text-pretty leading-relaxed mb-4">
              Sljedeća stranica vodi vas kroz etičke razloge zašto veganstvo ima smisla.
            </p>
            <Link
              to="/ethics"
              className=" inline-flex bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Saznaj više
            </Link>
          </div>
        </section>
    </div>
  </div>
  );
};


  export default Veganism;

