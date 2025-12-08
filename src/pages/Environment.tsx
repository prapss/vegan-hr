import React from 'react';
import { Globe, Droplets, TreePine, Recycle, Leaf, TrendingDown } from 'lucide-react';

const Environment = () => {
  const environmentalImpacts = [
    {
      title: 'Smanjenje emisija CO2',
      description: 'Biljni način prehrane može smanjiti vaš ugljični otisak za 50-70%.',
      icon: Globe,
      color: 'text-blue-500',
      stat: '70%',
      statDesc: 'manje CO2 emisija'
    },
    {
      title: 'Uštedjene količine vode',
      description: 'Proizvodnja biljne hrane troši značajno manje vode od stočarstva.',
      icon: Droplets,
      color: 'text-cyan-500',
      stat: '2400L',
      statDesc: 'manje vode dnevno'
    },
    {
      title: 'Zaštita šuma',
      description: 'Smanjuje se potreba za krčenjem šuma za stočarske farme.',
      icon: TreePine,
      color: 'text-green-500',
      stat: '1.5m²',
      statDesc: 'sačuvane zemlje dnevno'
    },
    {
      title: 'Manje zagađenja',
      description: 'Biljni način života smanjuje zagađenje zraka, vode i tla.',
      icon: Recycle,
      color: 'text-purple-500',
      stat: '90%',
      statDesc: 'manje zagađenja'
    }
  ];

  const facts = [
    {
      number: '14.5%',
      text: 'globalnih emisija stakleničkih plinova dolazi iz stočarstva'
    },
    {
      number: '77%',
      text: 'poljoprivredne zemlje se koristi za stočarstvo'
    },
    {
      number: '80%',
      text: 'krčenja amazonske prašume je zbog uzgoja stoke'
    },
    {
      number: '1000L',
      text: 'vode je potrebno za proizvodnju 1kg govedine'
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Veganski način života i okoliš
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Otkrijte kako vaši prehrambeni izbori mogu imati snažan pozitivni utjecaj 
            na planet i buduće generacije.
          </p>
        </div>

        {/* Hero Section */}
        <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Zelena priroda"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-emerald-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <Leaf className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jedan planet, jedna šansa
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Svaki obrok je prilika za pozitivnu promjenu
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Impacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Kako veganski način života štiti planet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {environmentalImpacts.map((impact, index) => {
              const IconComponent = impact.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-gray-100 rounded-full p-3 mr-4">
                        <IconComponent className={`h-6 w-6 ${impact.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {impact.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${impact.color}`}>
                        {impact.stat}
                      </div>
                      <div className="text-sm text-gray-500">
                        {impact.statDesc}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Environmental Facts */}
        <div className="mb-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Činjenice o utjecaju na okoliš
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {fact.number}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Climate Change Impact */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <TrendingDown className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-800">
                Utjecaj na klimatske promjene
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Zašto je to važno?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Stočarstvo je jedan od najvećih izvora metana</li>
                  <li>• Krčenje šuma za pašnjake uništava carbon sinks</li>
                  <li>• Transport stočnih proizvoda povećava emisije</li>
                  <li>• Prekomjerna upotreba fosilnih goriva u stočarstvu</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Kako možete pomoći?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Smanjite ili uklonite životinjske proizvode</li>
                  <li>• Birajte lokalno uzgojenu hranu</li>
                  <li>• Preferirajte organske proizvode</li>
                  <li>• Smanjite razbacivanje hrane</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Budite dio rješenja
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Svaka promjena u vašoj prehrani je korak prema zdravijem planetu. 
            Počnite danas i ostavite pozitivan trag za buduće generacije.
          </p>
          <a
            href="/savjeti"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Počnite svoju promjenu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Environment;