// import React from 'react';
import { Link } from 'react-router-dom';
import chapterImage from '../assets/img/chapter6.jpg';
import nextChapterImage from '../assets/img/chapter7.jpg';
import { 
  // ChefHat,
   Clock, Users, Star, Heart, 
   Leaf} from 'lucide-react';
import { HeadingImage } from '../components/HeadingImage';

const Recipes = () => {
  const title = 'Kuhanje'
  const featuredRecipes = [
    {
      title: 'Veganska ragu pasta',
      description: 'Bogata i kremasta pasta s veganskim ragom od leće i povrća.',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=500',
      time: '45 min',
      servings: 4,
      difficulty: 'Srednje',
      ingredients: [
        '300g paste po izboru',
        '1 šalica crvene leće',
        '1 velika mrkva',
        '2 stabljike celera',
        '1 luk',
        '3 češnja češnjaka',
        '400g mljevenih rajčica',
        '2 žlice maslinovog ulja',
        'Sol, papar, začini'
      ],
      instructions: [
        'Sitno nasjeckajte luk, mrkvu i celer.',
        'Zagrijte ulje i propržite povrće 5 minuta.',
        'Dodajte češnjak i kuhajte minutu.',
        'Ubacite leću i rajčice, začinite.',
        'Kuhajte 20 minuta na laganoj vatri.',
        'Skuhajte pastu prema uputama.',
        'Pomiješajte i poslužite.'
      ]
    },
    {
      title: 'Energetski smoothie bowl',
      description: 'Nutritivan i ukusan smoothie bowl pun vitamina i minerala.',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
      time: '10 min',
      servings: 2,
      difficulty: 'Lako',
      ingredients: [
        '2 zamrznute banane',
        '1 šalica borovnica',
        '1 šalica biljnog mlijeka',
        '2 žlice chia sjemenki',
        '1 žlica badema',
        '1 žlica kokosa',
        'Sezonsko voće za ukrašavanje'
      ],
      instructions: [
        'Pomiješajte sve sastojke u blenderu.',
        'Blendajte do glatke konzistencije.',
        'Ulijte u zdjele.',
        'Ukrastite voćem i sjemenkama.',
        'Odmah poslužite.'
      ]
    },
    {
      title: 'Veganski burger',
      description: 'Sočan i hranjiv veganski burger s crnim grahom i povrćem.',
      image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=500',
      time: '30 min',
      servings: 4,
      difficulty: 'Srednje',
      ingredients: [
        '1 šalica kuhanog crnog graha',
        '1/2 šalice zobenih pahuljica',
        '1 mrkva',
        '1 luk',
        '2 češnja češnjaka',
        '1 žlica laninog sjemena',
        '4 lepinje za burger',
        'Salata, rajčice, avokado'
      ],
      instructions: [
        'Izmrvite grah u velikoj zdjeli.',
        'Nasjeckajte i dodajte povrće.',
        'Pomiješajte s pahuljicama i sjemenom.',
        'Oblikujte burgere i počekajte 15 min.',
        'Pecite na tavi 5 min po strani.',
        'Složite burger s dodatcima.',
        'Poslužite odmah.'
      ]
    }
  ];

  const quickMeals = [
    {
      name: 'Avokado toast',
      time: '5 min',
      description: 'Zdrav i brz doručak'
    },
    {
      name: 'Veganska quesadilla',
      time: '15 min',
      description: 'Ukusna i zasitna'
    },
    {
      name: 'Salata s quinoam',
      time: '20 min',
      description: 'Nutitivna i svježa'
    },
    {
      name: 'Veganski tacos',
      time: '25 min',
      description: 'Začinjeno i ukusno'
    }
  ];

  return (
    <div className="min-h-screen">
        {/* Header */}
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

        {/* Hero Section */}
        {/* <div className="mb-16 relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Veganski recepti"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-red-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <ChefHat className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Kuhajte s ljubavlju
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Svaki obrok je prilika za kreativnost i užitak
              </p>
            </div>
          </div>
        </div> */}

        {/* Featured Recipes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Istaknuti recepti
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {recipe.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {recipe.servings} osoba
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {recipe.difficulty}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Sastojci:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {recipe.ingredients.slice(0, 5).map((ingredient, i) => (
                        <li key={i}>• {ingredient}</li>
                      ))}
                      {recipe.ingredients.length > 5 && (
                        <li className="text-emerald-600">• i još {recipe.ingredients.length - 5}...</li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                    Pogledaj potpuni recept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Meals */}
        <div className="mb-16 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Brzi obroci
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickMeals.map((meal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">{meal.name}</h3>
                  <span className="text-sm text-emerald-600 font-medium">{meal.time}</span>
                </div>
                <p className="text-gray-600 text-sm">{meal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cooking Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Kulinarski savjeti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Zamjene za jaja
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 1 žlica laninog sjemena + 3 žlice vode</li>
                <li>• 1/4 šalice jabučnog pirea</li>
                <li>• 1 žlica chia sjemenki + 3 žlice vode</li>
                <li>• Tofu </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Veganski izvori proteina
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mahunarke (grah, leća, grašak)</li>
                <li>• Orašasti plodovi i sjemenke</li>
                <li>• Quinoa i amarant</li>
                <li>• Tofu, tempeh i seitan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          <Heart className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Počnite svoju kulinarsku avanturu
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Kuhanje je čin ljubavi prema sebi, drugima i planetu. 
            Svaki obrok je prilika za stvaranje nečeg prekrasnog.
          </p>
          <a
            href="/beginner-tips"
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Započnite veganski put
          </a>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-center text-white">
          {/* <Heart className="h-12 w-12 mx-auto mb-4" /> */}
          <h2 className="text-3xl font-bold mb-4">
            Izazovi i rješenja
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Saznajte kako možete doprinijeti stvaranju boljeg svijeta za životinje i ljude.
          </p>
          <a
            href="/beginner-tips"
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Pročitaj više
          </a>
        </div>

    </main>
    </div>
  );
};

export default Recipes;