import React from 'react';
import { Leaf, Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-emerald-300" />
              <span className="text-2xl font-bold">Vegan.hr</span>
            </div>
            <p className="text-emerald-100 mb-4 max-w-md">
              Vaš pouzdani vodič kroz veganski način života. Otkrijte zdravlje, 
              etiku i održivost kroz biljnu prehranu.
            </p>
            <div className="flex items-center space-x-2 text-emerald-200">
              <Heart className="h-5 w-5" />
              <span>Napravljeno s ljubavlju za životinje i planet</span>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Brzi linkovi</h3>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="/zdravlje" className="hover:text-white transition-colors">Zdravlje</a></li>
              <li><a href="/okolis" className="hover:text-white transition-colors">Okoliš</a></li>
              <li><a href="/etika" className="hover:text-white transition-colors">Etika</a></li>
              <li><a href="/recepti" className="hover:text-white transition-colors">Recepti</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-emerald-100">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@vegan.hr</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Zagreb, Hrvatska</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-200">
          <p>&copy; 2025 Veganski Portal Hrvatska. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;