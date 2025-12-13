
export function HeadingImage({ image, title }: { image: string, title: string }) {
  return (
        <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] shadow-xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <h1 className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-3xl md:text-5xl font-heading font-bold text-white z-20 drop-shadow-md">
            {title}
          </h1>
        </div>
    );
}