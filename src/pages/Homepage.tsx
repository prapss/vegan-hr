import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Globe, ChefHat, BookOpen, Lightbulb, ArrowRight, Info, Sparkles, Sprout } from 'lucide-react';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/6.jpg';
import img7 from '../assets/img/7.jpg';
import img8 from '../assets/img/8.jpg';

const Homepage = () => {
  const topics = [
    {
      id: 'intro',
      title: 'Zanima te veganstvo?',
      description: 'Bilo da ste znatiželjni, predani ili negdje između, ovdje počinje vaše putovanje na biljnoj bazi.',
      icon: Info,
      image: img1,
      // color: 'from-blue-500 to-indigo-500',
      link: '/intro',
      // color: 'from-emerald-100 to-emerald-100 dark:from-emerald-950 dark:to-teal-950'
    },
    {
      id: 'veganism',
      title: 'Zbog čega',
      description: 'Razumijte etičke aspekte veganstva i kako možete živjeti u skladu sa svojim vrijednostima.',
      icon: Leaf,
      image: img2,
      // color: 'from-blue-500 to-indigo-500',
      link: '/veganism'
    },
    {
      id: 'ethics',
      title: 'Zbog koga',
      description: 'Jedna od glavnih motivacija za veganstvo je etički odnos prema životinjama',
      icon: Leaf,
      image: img3,
      // color: 'from-blue-500 to-indigo-500',
      link: '/ethics'
    },
    {
      id: 'health',
      title: 'Zdravlje, vitalnost, energija',
      description: 'Otkrijte kako biljni način života može poboljšati vaše zdravlje, sniziti rizik od bolesti i povećati energiju.',
      icon: Heart,
      image: img4,
      // color: 'from-red-500 to-pink-500',
      link: '/health'
    },
    {
      id: 'shopping',
      title: 'Gdje kupiti vegansku hranu',
      description: 'Kupovina veganske hrane u lokalnim trgovinama i online.',
      icon: Globe,
      image: img5,
      color: 'from-green-500 to-emerald-500',
      link: '/shopping'
    },
    {
      id: 'restaurants',
      title: 'Gdje naći veganske restorane',
      description: 'Otkrijte ukusne i hranjive veganske recepte koji će zadovoljiti sve vaše kulinarske potrebe.',
      icon: ChefHat,
      image: img6,
      color: 'from-orange-500 to-red-500',
      link: '/restaurants'
    },
      {
      id: 'recipes',
      title: 'Kuhanje',
      description: 'Naučite ukusne i hranjive veganske recepte koji će zadovoljiti sve vaše kulinarske potrebe.',
      icon: Lightbulb,
      image: img7,
      color: 'from-yellow-500 to-orange-500',
      link: '/recipes'
    },
    // {
    //   id: 'nutricija',
    //   title: 'Nutricija',
    //   description: 'Naučite kako osigurati sve potrebne hranjive tvari kroz raznovrsnu biljnu prehranu.',
    //   icon: BookOpen,
    //   image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=500',
    //   color: 'from-purple-500 to-violet-500',
    //   link: '/nutricija'
    // },

    {
      id: 'beginner-tips',
      title: 'Izazovi i rješenja',
      description: 'Otkrijte kako možete doprinijeti stvaranju boljeg svijeta za životinje i ljude.',
      icon: Lightbulb,
      image: img8,
      // color: 'from-yellow-500 to-orange-500',
      link: '/beginner-tips'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        {/* <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 dark:from-emerald-900 dark:via-green-900 dark:to-lime-900 border-b border-green-200/50 dark:border-green-800/50"> */}
        {/* Animated nature elements */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-[10%] w-24 h-24 bg-emerald-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-32 right-[15%] w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-[20%] w-28 h-28 bg-lime-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 right-[25%] w-36 h-36 bg-emerald-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} /> */}
          
          {/* Floating leaves */}
          {/* <Leaf className="absolute top-20 left-[5%] w-8 h-8 text-emerald-400/30 animate-[float_6s_ease-in-out_infinite]" />
          <Leaf className="absolute top-40 right-[8%] w-6 h-6 text-green-400/40 animate-[float_8s_ease-in-out_infinite] rotate-45" style={{ animationDelay: '2s' }} />
          <Leaf className="absolute bottom-40 left-[12%] w-7 h-7 text-lime-400/35 animate-[float_7s_ease-in-out_infinite] -rotate-12" style={{ animationDelay: '4s' }} />
          <Sprout className="absolute bottom-28 right-[10%] w-10 h-10 text-green-400/25 animate-[float_9s_ease-in-out_infinite]" style={{ animationDelay: '3s' }} />
        </div> */}
        
        {/* <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8"> */}
            {/* Logo & Title */}
            {/* <div className="flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="relative group"> */}
                {/* Enhanced leaf logo with layers */}
                {/* <div className="relative w-12 h-12 md:w-16 md:h-16"> */}
                  {/* Shadow layer */}
                  {/* <Leaf className="w-full h-full text-emerald-600/20 dark:text-emerald-400/20 absolute blur-sm scale-110" /> */}
                  {/* Main leaf */}
                  {/* <Leaf className="w-full h-full text-emerald-600 dark:text-emerald-400 absolute animate-[gentlePulse_3s_ease-in-out_infinite] drop-shadow-lg" /> */}
                  {/* Highlight leaf */}
                  {/* <Leaf className="w-full h-full text-green-500/40 dark:text-green-300/40 absolute animate-[gentlePulse_3s_ease-in-out_infinite_0.5s]" style={{ transform: 'scale(0.8) translateX(2px) translateY(-2px)' }} /> */}
                  {/* Sparkle */}
                  {/* <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-lime-500 dark:text-lime-400 absolute -top-1 -right-1 animate-[sparkleRotate_4s_ease-in-out_infinite] drop-shadow-md" /> */}
                {/* </div> */}
              {/* </div> */}

            {/* </div> */}

            {/* Mission Statement */}
            {/* <p className="text-lg md:text-xl text-emerald-800/90 dark:text-emerald-200/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100 font-medium leading-relaxed">
              Otkrijte kako biljni način života može transformirati vaše zdravlje, 
            zaštititi planet i stvoriti etičniji svijet za sva živa bića. 🌱
            </p> */}

            {/* Stats Row */}
            
          {/* </div>
        </div> */}


      {/* </section> */}


      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Dobrodošli u svijet
            <span className="text-emerald-600 block mt-2">veganskog života</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Otkrijte kako biljni način života može transformirati vaše zdravlje, 
            zaštititi planet i stvoriti etičniji svijet za sve žive bića.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/savjeti"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Počnite svoj put
            </Link>
            <Link
              to="/recepti"
              className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Pogledajte recepte
            </Link>
          </div> 
        </div>
      </section> */}
      

{/* Topics Section */}
<section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {topics.map((topic) => {
        const IconComponent = topic.icon;
        return (
          <Link
            key={topic.id}
            to={topic.link}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Image section */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Gradient overlay (for readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Icon (top-left) */}
              {/* <div className="absolute top-4 left-4"> 
              <div className={`
                w-14 h-14 rounded-2xl bg-gradient-to-br ${topic.color}
                flex items-center justify-center mb-4
                transition-transform duration-500
                group-hover:scale-110 group-hover:rotate-12
              `}>
                <IconComponent className='w-7 h-7 text-green-600 dark:text-green-400 transition-colors duration-30' />
              </div></div> */}
              
              {/* <div className="absolute top-4 left-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110" >
                  <IconComponent className="h-6 w-6 text-white text-green-600 dark:text-green-400 transition-colors duration-300" />
                </div>
              </div> */}

              {/* Title (bottom-left over image) */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white drop-shadow-md">
                  {topic.title}
                </h3>
              </div>
            </div>

            {/* Description and link */}
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {topic.description}
              </p>
              <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                <span>Saznajte više</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>

      {/* Call to Action */}
      {/* <section className="bg-emerald-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Spremni za promjenu?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Pridružite se tisućama ljudi koji su već promijenili svoje živote. 
            Počnite danas i osjećajte razliku već sutra.
          </p>
          <Link
            to="/savjeti"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Počnite odmah
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;