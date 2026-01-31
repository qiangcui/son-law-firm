import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const testimonials = TESTIMONIALS[language];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-navy-900 mb-4">{t('clientTestimonials')}</h2>
            <div className="h-1.5 w-24 bg-gold-500 mx-auto md:mx-0 rounded-full"></div>
          </div>
          <div className="flex items-center justify-center space-x-2 w-full md:w-auto bg-gray-50 px-6 py-3 rounded-lg border border-gray-100 shadow-sm">
             <div className="flex text-gold-500">
               {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
             </div>
             <span className="font-bold text-navy-900 text-xl">5.0/5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all relative group flex flex-col">
              <div className="absolute top-6 right-8 text-gold-500 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Quote size={48} />
              </div>
              <div className="flex text-gold-500 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-navy-900 font-medium italic mb-8 leading-relaxed relative z-10 text-xl md:text-2xl flex-grow">"{t.text}"</p>
              <div className="flex items-center mt-auto">
                <div className="h-12 w-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xl mr-4 shrink-0">
                  {t.author.charAt(0)}
                </div>
                <span className="font-display font-bold text-navy-900 text-lg tracking-wide">{t.author}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
             <a 
                href="https://www.google.com/search?q=son+law+firm" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-navy-900 text-white border-2 border-transparent hover:bg-gold-500 hover:text-white font-bold py-4 px-10 rounded-full transition-all shadow-sm hover:shadow-md w-full sm:w-auto text-xl"
             >
                <span className="mr-2">{t('writeReview')}</span>
                <ExternalLink size={20} />
             </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;