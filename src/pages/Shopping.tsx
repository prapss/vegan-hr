import React from 'react';
import chapterImage from '../assets/img/chapter5.jpg';
import nextChapterImage from '../assets/img/chapter6.jpg';
import { Zap, Shield, Brain, Bone, Heart, Plus, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeadingImage } from '../components/HeadingImage';

const Shopping = () => {
  const title = 'Gdje kupiti vegansku hranu?'
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
    <div className="min-h-screen">
            <header className="p-4 flex justify-between items-center top-0 backdrop-blur-sm z-10 border-b border-border/50 bg-gradient-to-r from-accentnice to-emerald-50 dark:from-emerald-800 dark:via-emerald-600 dark:to-emerald-700/70">
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
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">

            <HeadingImage image={chapterImage} title={title} />
        {/* Header */}
        <div className="text-center mb-16">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Gdje kupiti vegansku hranu
          </h1> */}
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Naučite kako osigurati sve potrebne hranjive tvari kroz raznovrsnu 
            i uravnoteženu biljnu prehranu.
          </p> */}
        </div>

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

        <h2 className='text-center text-3xl font-bold py-4'>Ova stranica nije usklađena</h2>

        {/* Meal Planning */}
        <div className="mb-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
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
        </div>

        {/* Supplementation Guide */}
        <div className="mb-16">
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
        </div>

        {/* Myth Busting */}
        <div className="mb-16 bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Obaranje mitova o veganskoj prehrani
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
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Gdje naći veganske restorane
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Pravilna ishrana je temelj zdravog života. Naučite kako hraniti 
            svoje tijelo najbolje što možete.
          </p>
          <a
            href="/recipes"
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Počnite zdravi plan
          </a>
        </div>
    </main>
      </div>
  );
};

export default Shopping;