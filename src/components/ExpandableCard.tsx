import { useState } from "react";
import { Lightbulb, Globe, Brain, ChevronDown } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

interface Reference {
  text: string;
  link?: string;
}

interface ExpandableCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  index: number;
  references?: Reference[] | null;
}

export default function ExpandableCard({
  title,
  shortDescription,
  fullDescription,
  icon: Icon,
  color = 'text-primary',
  index,
  references = null,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group border-2 border-border rounded-xl overflow-hidden bg-card hover:border-primary/70 hover:shadow-xl hover:shadow-primary/20 transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:scale-[1.02]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
            <Icon className={`${color} w-6 h-6 group-hover:scale-110 transition-transform duration-300`} />
          </div>

          <div>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>

            {!isOpen && (
              <p className="text-m text-muted-foreground mt-1 line-clamp-2 transition-opacity duration-300">
                {shortDescription}
              </p>
            )}
          </div>
        </div>

        <ChevronDown
          className={`w-5 h-5 min-w-[1.25rem] text-muted-foreground group-hover:text-primary transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Animated expandable area using Framer Motion */}
        {isOpen && (
            <div className="px-6 pb-5 pt-2">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                {fullDescription}
              </p>
              {references && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Reference:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {references.map((ref, refIndex) => (
                      <li key={refIndex}>
                        {ref.link ? (
                          <a
                            href={ref.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            {ref.text}
                          </a>
                        ) : (
                          ref.text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
        )}
    </div>
  );
}
