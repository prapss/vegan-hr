import React from 'react';
import { Link } from 'react-router-dom';
import agricultureImg from '../assets/img/agriculture.png'
import LinkToHomeCard from '../components/LinkToHomeCard';

const Ethics = () => {
    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Zbog koga?
          </h1>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jedna od glavnih motivacija za veganstvo je etički odnos prema životinjama. Veganski način života nastoji minimizirati patnju životinja u svim aspektima ljudskog života.
          </p> */}
        </div>

        <div className="max-w-4xl mx-auto">

          <h2 className="font-heading text-3xl font-bold mb-6">Životinje u prehrambenoj industriji</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg" 
                alt="Životinje na farmi" 
                className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
              />
              <p>
                U modernoj intenzivnoj poljoprivredi, životinje često žive u skučenim, nehumanim uvjetima. Bez obzira na zakone o dobrobiti životinja, industrijska proizvodnja hrane životinjskog porijekla uključuje prakse koje uzrokuju patnju.
              </p>
            </div>
            <div>
              <img 
                src={agricultureImg} 
                alt="Prirodno stanište" 
                className="rounded-lg shadow-md mb-4 w-full h-64 object-cover"
              />
              <p>
                Veganskim načinom života smanjujemo potražnju za proizvodima životinjskog porijekla, što indirektno vodi do smanjenja broja životinja koje se uzgajaju za prehranu i eventualno do poboljšanja uvjeta uzgoja.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Životinje imaju svijest i osjećaju bol</h2>
            <p className="text-lg mb-4">
              Znanstvena istraživanja sve više potvrđuju da životinje imaju svijest, emocije i mogu osjećati fizičku i psihičku bol. Od sisavaca do riba, životinje pokazuju složena ponašanja koja ukazuju na njihovu sposobnost patnje.
            </p>
            <p className="text-lg mb-4">
              Cambridge deklaracija o svijesti iz 2012. godine, koju je potpisala skupina prominentnih neuroznanstvenika, potvrđuje da "ne-ljudske životinje imaju svijest" i "sisavci i ptice, te mnoga druga bića, uključujući hobotnice" posjeduju neurološke supstrate koji generiraju svijest.
            </p>
            <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500">
              <p className="italic">
                "Životinje nisu strojevi - one su živa bića s vlastitim životima, interesima i kapacitetom za patnju. Ako možemo živjeti zdrav život bez nanošenja nepotrebne štete drugim bićima, zašto to ne bismo učinili?"
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold mb-6">Osim hrane</h2>
            <p className="text-lg mb-6">
              Veganski način života nastoji isključiti sve oblike iskorištavanja životinja, ne samo u prehrani. To uključuje:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Izbjegavanje proizvoda testiranih na životinjama (kozmetika, proizvodi za čišćenje)</li>
              <li>Nekorištenje odjeće i obuće životinjskog porijekla (koža, vuna, svila, perje)</li>
              <li>Izbjegavanje zabave koja uključuje životinje (cirkusi sa životinjama, zoološki vrtovi)</li>
              <li>Podržavanje etičkih alternativa u svim aspektima života</li>
            </ul>
            <p className="text-lg">
              U današnje vrijeme postoje brojne alternative koje omogućuju život bez korištenja životinjskih proizvoda, bez kompromisa u kvaliteti života.
            </p>
          </div>
          
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
        </div>


      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Kako veganstvo utječe na naše zdravlje?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Otkrij zdravstvene koristi veganstva i kako može poboljšati tvoje zdravlje.
          </p>
          <a
            href="/health"
            className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Saznaj više
          </a>
        </div>
      </section>
      
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
        
    </div>
  );
};

export default Ethics;