import React, { useState, useEffect } from 'react';
import { PRACTICE_AREAS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Phone, CheckCircle } from 'lucide-react';
import { PracticeArea } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const CaseResults: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<PracticeArea | null>(null);
  const { language, t } = useLanguage();
  const areas = PRACTICE_AREAS[language];

  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedCase]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCase(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="case-results" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-navy-900 leading-tight tracking-tight mb-6 md:mb-8">
                <span className="block text-sm md:text-lg font-bold text-gold-500 tracking-[0.2em] uppercase mb-4">{t('ourExpertise')}</span>
                {t('weCanHelp')}
            </h2>
            <div className="h-1.5 w-24 bg-gold-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
                {t('expertiseIntro')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {areas.map((area) => (
              <div 
                key={area.id} 
                onClick={() => setSelectedCase(area)}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer"
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-all duration-500 z-10"></div>
                    <img 
                        src={area.imageUrl} 
                        alt={area.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                        {area.title}
                    </h3>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {area.description}
                    </p>
                    
                    <div className="flex items-center text-gold-500 font-bold text-lg tracking-wide group-hover:text-gold-600 transition-colors">
                        <span>{t('viewDetails')}</span>
                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center">
             <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-navy-900 text-white text-xl font-semibold py-4 px-8 md:py-5 md:px-12 rounded-full hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
             >
              {t('getConsultation')}
             </Link>
        </div>
      </div>

      {selectedCase && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedCase(null)}
          ></div>
          
          <div className="relative bg-white rounded-2xl w-full max-w-5xl shadow-2xl animate-fade-in-up flex flex-col md:flex-row">
            <button 
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-white/50 hover:bg-white rounded-full text-navy-900 hover:text-red-500 transition-all backdrop-blur-md"
            >
                <X size={24} />
            </button>

            <div className="md:w-1/2 relative min-h-[250px] md:min-h-full">
                {selectedCase.imageUrl && (
                    <img 
                        src={selectedCase.imageUrl} 
                        alt={selectedCase.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                    <div className="inline-flex p-3 bg-gold-500 rounded-lg mb-4 shadow-lg">
                        <selectedCase.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight mb-2">
                        {selectedCase.title}
                    </h3>
                </div>
            </div>

            <div className="md:w-1/2 p-8 md:p-10 bg-white flex flex-col">
                <div className="mb-6">
                    <span className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2 block">{t('overview')}</span>
                    <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                        {selectedCase.fullDescription || selectedCase.description}
                    </p>
                </div>

                {selectedCase.topics && selectedCase.topics.length > 0 && (
                    <div className="mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h4 className="font-bold text-navy-900 mb-4 text-lg flex items-center">
                            {t('relatedTopics')}
                        </h4>
                        <ul className="space-y-3">
                            {selectedCase.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-start text-gray-700">
                                    <CheckCircle size={18} className="text-gold-500 mr-3 mt-0.5 shrink-0" />
                                    <span className="text-lg">{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-auto pt-6 border-t border-gray-100">
                    <h4 className="font-bold text-navy-900 mb-2">{t('needAssistance')}</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link 
                            to="/contact" 
                            className="flex-1 bg-navy-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gold-500 transition-colors text-center shadow-lg text-lg flex items-center justify-center"
                        >
                            {t('scheduleConsultation')}
                        </Link>
                        <a 
                            href="tel:303-521-7671"
                            className="flex-1 border-2 border-navy-900 text-navy-900 font-bold py-3 px-6 rounded-lg hover:bg-navy-50 transition-colors text-center flex items-center justify-center gap-2 text-lg"
                        >
                            <Phone size={18} />
                            <span>{t('callNow')}</span>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseResults;