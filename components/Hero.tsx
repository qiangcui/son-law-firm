import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1495511303866-2244bbd910dc?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=2069",
  "https://images.unsplash.com/photo-1598418701078-654db4015697?auto=format&fit=crop&q=80&w=2070"
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-navy-900">
      {HERO_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 0 }}
        >
          <img
            src={img}
            alt={`Legal Background ${index + 1}`}
            className="w-full h-full object-cover object-center transform scale-105"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-neutral-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 md:pt-24">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          <h1 className="mb-8 animate-fade-in-up [animation-delay:400ms] opacity-0 text-center">
             <span className="block text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight shadow-sm">
               {t('heroTitle')}
             </span>
          </h1>
          
          <div className="animate-fade-in-up [animation-delay:600ms] opacity-0 px-2 mb-12 space-y-6">
            <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed max-w-4xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
              {t('heroText')}
            </p>
          </div>

          <div className="animate-fade-in-up [animation-delay:800ms] opacity-0 w-full flex flex-col items-center">
             <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
                {t('scheduleFree')}
             </h2>
             
             <a 
              href="tel:303-521-7671" 
              className="group flex items-center justify-center space-x-3 transition-all transform hover:scale-105"
             >
                <span className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white group-hover:text-gold-400 transition-colors border-b-2 border-gold-500/0 group-hover:border-gold-500 pb-2">
                    303-521-7671
                </span>
                <Phone className="text-gold-500 h-8 w-8 md:h-12 md:w-12 animate-pulse hidden sm:block" />
             </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {HERO_IMAGES.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gold-500 w-6 md:w-8' : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
    </section>
  );
};

export default Hero;