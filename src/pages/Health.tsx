import React from 'react';
import { Brain, Bone, Heart, Activity, Shield, Zap, CheckCircle } from 'lucide-react';

const Health = () => {
  const healthBenefits = [
    {
      title: 'Zdravlje srca',
      description: 'Veganska prehrana može značajno smanjiti rizik od srčanih bolesti i poboljšati cirkulaciju.',
      icon: Heart,
      color: 'text-red-500'
    },
    {
      title: 'Kontrola težine',
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
    }
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
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Zdravlje, vitalnost, energija
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Otkrijte kako biljni način života može transformirati vaše zdravlje i 
            donijeti vam dugoročne koristi za cijeli organizam.
          </p> */}
        </div>

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
        <div className="mb-16">
          {/* <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Glavne zdravstvene koristi
          </h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 rounded-full p-3 mr-4">
                      <IconComponent className={`h-6 w-6 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scientific Evidence */}
        <div className="mb-16 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Što kaže znanost?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">25%</div>
              <p className="text-gray-700">manji rizik od srčanih bolesti</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">35%</div>
              <p className="text-gray-700">manji rizik od dijabetesa tipa 2</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15%</div>
              <p className="text-gray-700">manji rizik od nekih vrsta raka</p>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-6 italic">
            *Prema studijama objavljenim u prestižnim medicinskim časopisima
          </p>
        </div>

        
        {/* Key Nutrients */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Ključni hranjivi sastojci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nutrients.map((nutrient, index) => {
              const IconComponent = nutrient.icon;
              return (
                <div
                  key={index}
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
                </div>
              );
            })}
          </div>
        </div>


        {/* Nutrition Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Osnovni nutricijski savjeti
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
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Krenite na put prema boljem zdravlju
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Svaki dan je nova prilika za donošenje zdravijih izbora. 
            Počnite s malim promjenama i osjećajte veliku razliku.
          </p>
          <a
            href="/shopping"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Saznajte kako početi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Health;