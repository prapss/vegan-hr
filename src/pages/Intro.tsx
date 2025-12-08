import React from 'react';
import { useState } from "react"

import { Link } from 'react-router-dom';

import { ChevronDown, Sparkles, Heart, Leaf, Users, ArrowRight, Info, ShieldCheck, FileText } from "lucide-react"
import LinkToHomeCard from '../components/LinkToHomeCard';

const Intro = () => {

  const welcomeCards = [
      {
        id: '1',
            icon: Sparkles,

        title: 'Na pravom si mjestu u pravo vrijeme',
        content: 'Ovdje smo da ti pomognemo upoznati se sa zdravim, easy-to-do veganskim stilom života. Ne moraš više sam(a) kopati po internetu za informacije o veganstvu – sve dobivaš na dlanu. Enjoy the ride !',
      },
      {
        id: '2',
            icon: Heart,

        title: 'Moderna, suosjećajna generacija',
        content: 'Biti vegan/ka u Hrvatskoj danas nije teško. Svake godine sve više ljudi, i u svijetu i kod nas, izbacuje životinjske proizvode iz svog života – iz zdravstvenih, etičkih i ekoloških razloga. Sve više ljudi se okreće od zastarjelih, okrutnih tradicija i odabire susjećajniju, zdravu tradiciju. Nije teško postati dio te priče. Pokazat ćemo ti kako.',
      },
      {
        id: '3',
            icon: FileText,

        title: 'Linkovi + istraživanja + činjenice',
        content: 'Uložili smo puno truda kako bi ti dali samo provjerene činjenice i korisne informacije. Ti odlučuješ što ćeš napraviti s njima. Klikni na početnu stranicu i nađi informacije koje te interesiraju.',
      },
      {
        id: '4',
        icon: ShieldCheck,
        title: 'Svatko može biti heroj',
        content: 'Naš životni stil utječe ne samo na nas, već i na živote drugih. Veganski stil života može znatno pomoći tebi, životinjama koje svakodnevno pate i planeti Zemlji. Svatko ima priliku postati nečiji heroj.',
      },
    ];

    function ExpandableCard({
  id = null,
  title,
  content,
  icon: Icon,
  index,
}: {
  id?: string | null
  title: string
  content: string
  icon: any
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)

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
            <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2"> {/*bg-gradient-to-br from-primary/5 to-accent/5*/}
          <p className="text-muted-foreground leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  )
}


    
    return (
    <div className="min-h-screen">
      {/* Hero Section */}
     
      {/* Expandable Cards Section */}
      <section className="container mx-auto px-4 py-0 md:py-0">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-4 mt-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Na pravom si mjestu.</h2>
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
            {welcomeCards.map((card, index) => (
              <ExpandableCard key={card.id} {...card} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* <LinkToHomeCard path='/etika' /> */}
      
      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Što je veganstvo?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Uđi dublje u dobrobiti koje veganstvo donosi tebi i svijetu oko tebe.
          </p>
          <a
            href="/veganism"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Saznaj više
          </a>
        </div>
      </section>
        

      {/* <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-2xl 
        border-2 border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/50 backdrop-blur-lg">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-balance">Što je veganstvo?</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Uđi dublje u dobrobiti koje veganstvo donosi tebi i svijetu oko tebe.
          </p>
          <Link
            to="/veganism"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
       bg-green-100 text-green-700 font-semibold
       hover:bg-green-200
       transition-all duration-300"
          >
            Saznaj više
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section> */}
    </div>
  )
};

export default Intro;