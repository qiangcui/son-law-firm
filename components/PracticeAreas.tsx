import React from 'react';
import { PRACTICE_AREAS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const PracticeAreas: React.FC = () => {
  const { language, t } = useLanguage();
  const areas = PRACTICE_AREAS[language];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-navy-900 mb-6">{t('areasOfPractice')}</h2>
          <div className="h-1.5 w-24 bg-gold-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
            {t('practiceIntro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area) => (
            <div 
              key={area.id}
              className="group relative p-8 bg-white border border-gray-100 hover:border-gold-500 transition-all duration-300 hover:shadow-xl rounded-xl flex flex-col"
            >
              <div className="mb-6 inline-flex p-4 bg-gray-50 rounded-2xl text-gold-500 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors w-fit">
                <area.icon size={32} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg md:text-xl flex-grow">
                {area.description}
              </p>
              
              <Link to="/contact" className="inline-flex items-center text-navy-900 font-semibold text-lg hover:text-gold-500 transition-colors mt-auto">
                {t('learnMore')} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;