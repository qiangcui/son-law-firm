import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 text-black pt-16 md:pt-24 pb-8 md:pb-12 border-t border-gray-200 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 mb-14 md:mb-24">
          
          <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-center">
             <Link to="/" className="inline-block mb-8 group">
                <img 
                  src="https://sonlawfirmco.com/wp-content/uploads/2024/03/logo_02.png" 
                  alt="Son Law Firm" 
                  className="h-40 w-auto object-contain brightness-0 opacity-100"
                />
             </Link>
             
             <div className="flex space-x-5 justify-center">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="h-14 w-14 flex items-center justify-center rounded-full bg-white border border-gray-200 text-black hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300 shadow-sm">
                      <Icon size={24} />
                    </a>
                  ))}
             </div>
          </div>

          <div>
            <h4 className="text-2xl font-display font-bold text-black mb-6 md:mb-8">{t('quickLinks')}</h4>
            <ul className="space-y-4 md:space-y-5">
                {NAV_ITEMS[language].map((item) => (
                    <li key={item.label}>
                        <Link to={item.href} className="text-black hover:text-gold-600 transition-colors text-lg md:text-xl flex items-center group">
                            <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
          </div>

          <div>
             <h4 className="text-2xl font-display font-bold text-black mb-6 md:mb-8">{t('promiseTitle')}</h4>
             <p className="text-black text-lg md:text-xl leading-relaxed">
                {t('promiseText')}
             </p>
          </div>

          <div>
            <h4 className="text-2xl font-display font-bold text-black mb-6 md:mb-8">{t('importantNotice')}</h4>
             <p className="text-black text-lg md:text-xl leading-relaxed">
                {t('noticeText')}
             </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center text-lg md:text-xl text-black space-y-6 md:space-y-0 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {t('allRightsReserved')}</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
             <Link to="/privacy" className="hover:text-gold-600">{t('privacyPolicy')}</Link>
             <Link to="/terms" className="hover:text-gold-600">{t('termsOfService')}</Link>
             <button onClick={scrollToTop} className="flex items-center text-gold-600 hover:text-black transition-colors font-medium">
                {t('backToTop')} <ArrowUp size={20} className="ml-2" />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;