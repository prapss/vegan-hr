import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Heart, ArrowLeft } from "lucide-react";
import { CTASectionGlass } from "./UltraCTA";

interface StoryLayoutProps {
  children: React.ReactNode;
  title: string;
  nextLink?: string;
  prevLink?: string;
  image?: string;
  nextPageTitle?: string;
  nextPageDescription?: string;
}

export function StoryLayout({ children, title, nextLink, prevLink, image, nextPageTitle, nextPageDescription }: StoryLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <header className="p-4 flex justify-between items-center top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-border/50">
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <Leaf className="h-6 w-6 text-primary" />
                    <span>
                      <h1 className="font-heading text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 dark:from-emerald-400 dark:via-green-400 dark:to-lime-400 bg-clip-text text-transparent drop-shadow-sm">
                        Vegan.hr
                      </h1>
                      </span>          
          </div>
        </Link>
        <div className="flex gap-2 align-items-center justify-center">
          {prevLink && (
            <Link to={prevLink} className='text-primary px-4 py-2 text-m font-semibold inline-block'>
                <ArrowLeft className="inline h-4 w-4" /> Natrag
             </Link>
          )}
          {nextLink && (
            <Link to={nextLink} className='bg-emerald-600 text-white px-8 py-2 rounded-full text-l font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block'>
                Dalje
                <ArrowRight className="inline text-xl text-white h-4 w-4 ml-1" />
            </Link>
          )}
        </div>
      </header>

      <main className="flex-1 container max-w-4xl mx-auto p-4 md:p-8 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] shadow-xl mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <h1 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-3xl md:text-5xl font-heading font-bold text-white z-20 drop-shadow-md">
              {title}
            </h1>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-sm border border-border/50 space-y-6 text-lg leading-relaxed text-muted-foreground">
            {children}
          </div>
        </motion.div>
      </main>

      <CTASectionGlass 
        title={nextPageTitle || "Nastavi svoje putovanje"}
        description={nextPageDescription || "Istraži dalje i saznaj više o veganstvu i njegovim prednostima."}
        buttonText="Dalje ➔"
        buttonLink={nextLink || "/"}
      />
      
      {/* <footer className="p-8 text-center text-muted-foreground text-sm border-t border-border/50 bg-card/50">
        <p>© 2025 Vegan Portal Hrvatska. Made with ❤️ for all beings.</p>
      </footer> */}
    </div>
  );
}
