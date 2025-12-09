import React from 'react';
import { Link } from 'react-router-dom';
import agricultureImg from '../assets/img/agriculture.png'
import LinkToHomeCard from '../components/LinkToHomeCard';
import pigletsImg from '../assets/img/piglets.jpg';
import animalEmotionsImage from '../assets/img/animal-emotions-640.jpg';
import polutionImg from '../assets/img/pollution_1280.jpg';
import fieldsImg from '../assets/img/fields.jpg';
import pigMarkedImg from '../assets/img/pig-marked_1280.jpg';

const Ethics = () => {
  const animalsAndEmotions = [
    'Životinje imaju svijest i osjećaju bol',
    'Znanstvena istraživanja jasno potvrđuju da mnoge vrste, uključujući domaće i divlje životinje, posjeduju emocije, svijest i sposobnost doživljavanja boli. One osjećaju strah, tugu, radost i stres — baš kao i ljudi. Razumijevanje ovih činjenica mijenja način na koji gledamo na njihove živote i prava.',
  ];
  const animalsInAgriculture = [
    'Životinje u prehrambenoj industriji',
    'U industrijskoj poljoprivredi životinje su često izložene ekstremno lošim uvjetima: pretrpanim prostorima, ograničenom kretanju, bolnim zahvatima bez anestezije i kratkom životnom vijeku. Sustav je organiziran da maksimizira profit, a minimizira dobrobit životinja, što dovodi do sustavnog zanemarivanja njihovih osnovnih potreba.'
  ];
  const beyondFood = [
    'Korištenje životinja izvan prehrane',
    'Veganstvo nije samo prehrambeni izbor; to je etički stav koji se proteže na sve aspekte života. Vegani izbjegavaju proizvode testirane na životinjama, odjeću i obuću životinjskog porijekla, te zabavu koja uključuje iskorištavanje životinja. Ovaj pristup promovira poštovanje prema svim živim bićima i nastoji minimizirati njihovu patnju u svakodnevnom životu.'
  ];
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
          <h2 className='font-heading text-3xl font-bold mb-6'>Životinje</h2>
          
          <h3 className="font-heading text-2xl font-bold mb-3">{animalsAndEmotions[0]}</h3>
          <p className="text-lg mb-4">{animalsAndEmotions[1]}</p>
          <img src={animalEmotionsImage} alt='' className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"/>
          <p className="text-lg mb-4">
            Cambridge deklaracija o svijesti iz 2012. godine, koju je potpisala skupina prominentnih neuroznanstvenika, potvrđuje da "ne-ljudske životinje imaju svijest" i "sisavci i ptice, te mnoga druga bića, uključujući hobotnice" posjeduju neurološke supstrate koji generiraju svijest.
          </p>
          <div className="bg-secondary-50 p-6 rounded-lg border-l-4 border-secondary-500 mb-12">
            <p className="italic">
              "Životinje nisu strojevi - one su živa bića s vlastitim životima, interesima i kapacitetom za patnju. Ako možemo živjeti zdrav život bez nanošenja nepotrebne štete drugim bićima, zašto to ne bismo učinili?"
            </p>
          </div>

          <h3 className="font-heading text-2xl font-bold mb-3">{animalsInAgriculture[0]}</h3>
          <p className="text-lg mb-6">{animalsInAgriculture[1]}</p>
          <div className="mb-12">
            <div className="mb-6">
              <img 
                src={agricultureImg} 
                alt="Prirodno stanište" 
                className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
              />
              <p>
                Veganskim načinom života smanjujemo potražnju za proizvodima životinjskog porijekla, što indirektno vodi do smanjenja broja životinja koje se uzgajaju za prehranu i eventualno do poboljšanja uvjeta uzgoja.
              </p>
            </div>
          </div>

          {/* <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">{beyondFood[0]}</h3>
            <p className="text-lg mb-6">{beyondFood[1]}</p>
          </div> */}

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Korištenje životinja izvan prehrane</h3>
            <p className="text-lg mb-3">
              Veganski način života nastoji isključiti sve oblike iskorištavanja životinja, ne samo u prehrani. To uključuje:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Izbjegavanje proizvoda testiranih na životinjama (kozmetika, proizvodi za čišćenje)</li>
              <li>Nekorištenje odjeće i obuće životinjskog porijekla (koža, vuna, svila, perje)</li>
              <li>Izbjegavanje zabave koja uključuje životinje (cirkusi sa životinjama, zoološki vrtovi)</li>
              <li>Podržavanje etičkih alternativa u svim aspektima života</li>
            </ul>
            <p className="text-lg">
              U današnje vrijeme postoje brojne alternative koje omogućuju život bez korištenja životinjskih proizvoda, bez kompromisa u kvaliteti života.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Životinje u utočištima</h3>
            <img 
              src={pigletsImg} 
              alt="Prirodno stanište" 
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">
              Mnoge organizacije diljem svijeta pružaju utočište životinjama spašenim iz okrutnih uvjeta. Utočišta služe i kao edukacijski centri, gdje ljudi mogu upoznati životinje kao pojedince, a ne proizvode. 
            </p>
          </div>


          <h2 className='font-heading text-3xl font-bold mb-6'>Ljudi</h2>
          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Glad u svijetu</h3>
            <p className="text-lg mb-6">
              Proizvodnja hrane životinjskog porijekla zahtijeva znatno više resursa u usporedbi s biljnom hranom. Preusmjeravanjem žitarica i drugih usjeva koji se koriste za hranu životinja prema ljudskoj prehrani, mogli bismo značajno smanjiti globalnu glad i poboljšati sigurnost hrane.
            </p>
            <img 
              src={fieldsImg} 
              alt="Polja usjeva" 
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">Veliki udio globalno uzgojenih usjeva koristi se za hranjenje životinja u industrijskom uzgoju, umjesto direktne prehrane ljudi. Prelazak prema biljnoj prehrani mogao bi osloboditi velike količine žitarica, vode i zemlje te doprinijeti smanjenju gladi u svijetu.</p>
          </div>

          <div className="mb-12">

            <h3 className="font-heading text-2xl font-bold mb-3">Problematika radnika klaonica</h3>
            <p className="text-lg mb-6">
              Radnici u klaonicama često su izloženi teškim psihičkim i fizičkim uvjetima rada. Mnogi izvještaji govore o visokoj prevalenciji depresije, PTSP-a i dehumanizacije na radnom mjestu. Ključni razlog je izloženost nasilju i strahotama koje su dio svakodnevice klaonice.
            </p>
            <img 
              src={pigMarkedImg}
              alt="Radnici klaonice" 
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-6">
              Istraživanja pokazuju da radnici klaonica imaju veću stopu samoubojstava u usporedbi s općom populacijom, što ukazuje na ozbiljan utjecaj koji ovaj posao može imati na mentalno zdravlje.
            </p>
            
          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Zagađenje</h3>
            <p className="text-lg mb-6">
              Industrijsko stočarstvo značajan je izvor zagađenja zraka, vode i tla. Emisije stakleničkih plinova iz poljoprivrednog sektora, uključujući metan iz stoke, doprinose klimatskim promjenama. Prelazak na biljnu prehranu može smanjiti ekološki otisak hrane i pomoći u očuvanju okoliša za buduće generacije.
            </p>
            <img 
              src={polutionImg} 
              alt="Zagađenje okoliša" 
              className="rounded-lg shadow-md mb-2 w-full h-64 object-cover"
            />
            <p className="text-lg mb-3">Industrijski uzgoj životinja jedan je od najvećih uzroka:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Emisija stakleničkih plinova, uključujući metan i dušikov oksid.</li>
              <li>Onečišćenja voda: Otpadne vode iz farmi i klaonica često zagađuju lokalne vodne tokove, ugrožavajući ekosustave i ljudsko zdravlje.</li>
              <li>Deforestacije i degradacije tla: Proizvodnja stočne hrane doprinosi deforestaciji i degradaciji tla.</li>
            </ul> 
            <p className='text-lg mb-6'>
              Prema izvješću UN-ove Organizacije za hranu i poljoprivredu (FAO), stočarstvo je odgovorno za oko 14,5% globalnih emisija stakleničkih plinova, što je više nego sve emisije iz transportnog sektora zajedno.
            </p>
            <p className='text-lg mb-6'>
              Klaonice i farme često se nalaze blizu siromašnijih zajednica, stvarajući nejednakosti u izloženosti zagađenju.
            </p>

          </div>

          <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Utjecaj na agresivnost</h3>
            <p className="text-lg mb-6">
              Kontakt s nasiljem, bilo direktan (rad u klaonici) ili indirektan (normalizacija nasilja nad životinjama), može povećati toleranciju prema agresiji. Neka istraživanja ukazuju da radnici klaonica statistički imaju višu stopu nasilnih incidenata u zajednici, što pokazuje kompleksnu povezanost između nasilja nad životinjama i društvene agresivnosti.
            </p>
          </div>

          {/* <div className="mb-12">
            <h3 className="font-heading text-2xl font-bold mb-3">Zaključak</h3>
            <p className="text-lg mb-6">
              Veganstvo predstavlja etički odgovor na patnju životinja, ali i priliku za stvaranje pravednijeg i održivijeg svijeta za sve nas. Kroz informirane izbore i aktivizam, možemo zajedno raditi na izgradnji budućnosti u kojoj su prava i dobrobit svih živih bića poštovana.
            </p>
          </div> */}
        


{/* Industrijski uzgoj životinja jedan je od najvećih izvora:

emisija stakleničkih plinova,

onečišćenja voda (otpadne vode iz farmi i klaonica),

degradacije tla,

deforestacije zbog stvaranja pašnjaka ili polja za uzgoj stočne hrane. */}



          
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