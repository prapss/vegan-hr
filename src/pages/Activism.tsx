import React from 'react';
import { Link } from 'react-router-dom';
import chapterImage from '../assets/img/chapter7.jpg';
import nextChapterImage from '../assets/img/chapter8.jpg';

import agricultureImg from '../assets/img/agriculture.png'
import LinkToHomeCard from '../components/LinkToHomeCard';

interface Organization {
  id: number;
  name: string;
  description: string;
  websiteUrl: string;
  image: string;
  category: 'Udruge' | 'Sklonište' | 'Aktivizam' | 'Edukacija';
}

const Activism = () => {
  const organizations: Organization[] = [
    {
      id: 1,
      name: "Prijatelji životinja",
      description: "Udruga koja se bori za prava životinja i promoviranje veganstva kroz različite kampanje i edukaciju.",
      websiteUrl: "https://www.prijatelji-zivotinja.hr",
      image: "https://images.pexels.com/photos/1350584/pexels-photo-1350584.jpeg",
      category: "Udruge"
    },
    {
      id: 3,
      name: "Sklonište Dumovec",
      description: "Sklonište za nezbrinute životinje koje pruža privremeni dom napuštenim životinjama.",
      websiteUrl: "https://www.azilzagreb.com",
      image: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg",
      category: "Sklonište"
    },
    {
      id: 5,
      name: "Zelena akcija",
      description: "Udruga za zaštitu okoliša koja također promovira održivu prehranu i načine života.",
      websiteUrl: "https://zelena-akcija.hr",
      image: "https://images.pexels.com/photos/3698534/pexels-photo-3698534.jpeg",
      category: "Aktivizam"
    },
    {
      id: 6,
      name: "Oslobođenje životinja",
      description: "Skupina aktivista koja se fokusira na edukaciju o pravima životinja i veganstvu.",
      websiteUrl: "https://www.oslobodjenje-zivotinja.hr",
      image: "https://images.pexels.com/photos/886651/pexels-photo-886651.jpeg",
      category: "Aktivizam"
    }
  ];

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Želiš pomoći?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Postoji mnogo načina na koje možete pomoći u promociji veganstva i stvaranju boljeg svijeta za životinje. Bez obzira imate li malo ili puno vremena, možete napraviti razliku!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          <h2 className="font-heading text-3xl font-bold mb-6">Životinje u prehrambenoj industriji</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-red-50 text-red-500 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Svakodnevni aktivizam</h3>
              <p className="mb-4">
                Malim svakodnevnim odlukama možete imati velik utjecaj na promociju veganstva:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dijelite ukusna veganska jela s prijateljima i obitelji</li>
                <li>Razgovarajte o veganstvu na pozitivan i informativan način</li>
                <li>Podržavajte veganske restorane i proizvođače</li>
                <li>Dijelite informacije i recepte na društvenim mrežama</li>
                <li>Nosite majice ili bedževe s veganskim porukama</li>
                <li>Birajte kozmetiku i proizvode za kućanstvo koji nisu testirani na životinjama</li>
              </ul>
            </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-green-50 text-green-500 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">Volontiranje</h3>
              <p className="mb-4">
                Poklonite svoje vrijeme kako biste pomogli životinjama i promovirali veganstvo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Volontirajte u lokalnom skloništu za životinje</li>
                <li>Pomažite kod organizacije veganskih događaja</li>
                <li>Uključite se u rad lokalnih udruga za prava životinja</li>
                <li>Sudjelujte u javnim akcijama osvještavanja</li>
                <li>Pomozite kod organiziranja veganskih degustracija</li>
                <li>Mentor/ica za nove vegane u svojoj zajednici</li>
              </ul>
            </div>
          </div>

         <div className="bg-secondary-50 p-8 rounded-xl shadow-md mb-16">
            <div className="bg-blue-50 text-blue-500 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
            </div>
            <h3 className="font-heading text-2xl font-bold mb-3">Donacije i podrška</h3>
            <p className="mb-4">
              Ako nemate vremena za volontiranje, financijska podrška organizacijama koje se bore za prava životinja i promoviraju veganstvo također je od velike pomoći:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Donirajte novac udrugama za zaštitu životinja</li>
              <li>Sponzorirajte veganske događaje i festivale</li>
              <li>Poklonite hranu i potrepštine skloništima za životinje</li>
              <li>Uplatite članarinu u organizacijama za prava životinja</li>
              <li>Financirajte veganske edukativne materijale</li>
              <li>Sponzorirajte životinje u skloništima</li>
            </ul>
          </div>
          
<h2 className="font-heading text-3xl font-bold mb-6">Organizacije kojima se možete priključiti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {organizations.map((org) => (
              <div key={org.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                <img 
                  src={org.image} 
                  alt={org.name} 
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-bold">{org.name}</h3>
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                      {org.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{org.description}</p>
                  <a 
                    href={org.websiteUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-500 hover:text-primary-700 transition-colors font-medium"
                  >
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 p-8 rounded-xl shadow-md">
            <h3 className="font-heading text-2xl font-bold mb-4">Želite organizirati vlastitu akciju?</h3>
            <p className="mb-6">
              Ako imate ideju za vlastitu akciju ili događaj kojim biste promovirali veganstvo, javite nam se! Rado ćemo vam pružiti savjete, resurse i pomoći u organizaciji.
            </p>

          </div>
        </div>
      
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">Želite aktivno pomoći životinjama?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Otkrijte kako se uključiti u aktivizam za prava životinja i pomoći stvarati bolji svijet za sva bića.
          </p>
                      <Link
                        to="/"
                        className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >Kako mogu pomoći?</Link>
        </div>
      </section>
        </div>
  );
};

export default Activism;