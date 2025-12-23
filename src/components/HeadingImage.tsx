
import { motion } from "framer-motion";

type HeadingImageProps = {
  image: string;
  title: string;
};

export function HeadingImage({
  image,
  title,
}: HeadingImageProps) {

  return (
    <motion.div
      className="relative w-full lg:max-w-4xl md:max-w-3xl mx-auto mt-0 mb-2 overflow-hidden rounded-t-none rounded-b-2xl md:rounded-b-3xl aspect-video md:aspect-[21/9] shadow-xl ring-1 ring-black/10 bg-white/60 group after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-12 after:bg-gradient-to-b after:from-transparent after:to-black/35"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <h1 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-3xl md:text-5xl font-heading font-bold text-white z-20 drop-shadow-md">
        {title}
      </h1>
    </motion.div>
  );
}
