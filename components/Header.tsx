import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, ChevronRight, Globe, ChevronDown, Check } from 'lucide-react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Click outside handler for language dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMenuClosing(true);
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        setIsMenuClosing(false);
      }, 500); // Matches transition duration
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;
  
  // Logic to determine if we should show the "Dark" theme (solid white header, dark text)
  // This is true if we are NOT on the transparent home header, OR if the mobile menu is open/closing.
  const shouldUseDarkTheme = !isTransparent || isMobileMenuOpen || isMenuClosing;

  const headerClass = (() => {
    if (isMobileMenuOpen || isMenuClosing) {
      // Force solid white background with no border/shadow when menu is open or closing
      // Maintain padding consistency with the current state (py-6 for top-home, py-4 for others)
      return `${isTransparent ? 'py-6' : 'py-4'} bg-white`;
    }
    if (isTransparent) {
      return 'bg-transparent py-6';
    }
    // Default scrolled/internal page state
    return 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-md';
  })();

  const navLinkBaseClass = isTransparent 
    ? 'text-white/90 hover:text-gold-400' 
    : 'text-navy-900 hover:text-gold-600';

  const mobileButtonClass = !shouldUseDarkTheme ? 'text-white' : 'text-navy-900';
  
  // Update logo logic: 
  // If we are on the transparent header (Dark BG), use 'brightness-0 invert' to make logo White.
  // If we are on the white header (Light BG), use 'brightness-0' to make logo Black.
  // This ensures visibility regardless of the original logo color (assuming it's a monochrome compatible logo).
  const logoClass = !shouldUseDarkTheme 
    ? 'brightness-0 invert opacity-100' 
    : 'brightness-0 opacity-100';

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ko', label: '한국어' },
    { code: 'zh', label: '中文' },
    { code: 'es', label: 'Español' },
  ];

  const currentLanguageLabel = languages.find(l => l.code === language)?.label || 'English';

  return (
    <header className={`fixed top-0 w-full z-50 ${isMobileMenuOpen ? '' : 'transition-all duration-500'} ${headerClass}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-50">
        <Link 
          to="/" 
          className="flex items-center group"
          onClick={closeMobileMenu}
        >
           <img 
             src="https://sonlawfirmco.com/wp-content/uploads/2024/03/logo_02.png" 
             alt="Son Law Firm" 
             className={`h-24 md:h-32 w-auto object-contain transition-all duration-300 ${logoClass}`}
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {NAV_ITEMS[language].map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => 
                `relative text-base lg:text-lg font-medium tracking-wider uppercase transition-colors duration-300 py-2 group ${
                  isActive ? 'text-gold-500' : navLinkBaseClass
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </>
              )}
            </NavLink>
          ))}
          
          {/* Language Switcher */}
          <div className="relative" ref={dropdownRef}>
            <button 
              className={`flex items-center gap-2 font-medium py-2 px-4 rounded-full transition-all duration-300 border backdrop-blur-sm ${
                 !shouldUseDarkTheme 
                   ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                   : 'bg-gray-50 border-gray-200 text-navy-900 hover:border-gold-500 hover:text-gold-600'
              }`}
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              aria-label="Select Language"
              aria-expanded={isLangMenuOpen}
            >
              <Globe size={18} />
              <span className="text-sm tracking-wide hidden xl:inline-block">{currentLanguageLabel}</span>
              <span className="text-sm tracking-wide xl:hidden uppercase">{language}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 z-50 animate-fade-in-up origin-top-right">
                <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Select Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm flex items-center justify-between transition-colors ${
                        language === lang.code 
                        ? 'bg-gold-50 text-gold-600 font-bold' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-navy-900'
                    }`}
                  >
                    <span>{lang.label}</span>
                    {language === lang.code && <Check size={16} className="text-gold-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-none tracking-wide text-base lg:text-lg ${
                isTransparent 
                ? 'bg-white text-navy-900 hover:bg-gold-500 hover:text-white' 
                : 'bg-gold-500 text-white hover:bg-navy-900'
            }`}
          >
            {t('freeConsultation')}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
             <button 
              className={`flex items-center gap-1.5 p-2 px-3 rounded-full transition-colors relative z-50 border border-current ${mobileButtonClass}`}
              onClick={() => {
                 const langs: Language[] = ['en', 'ko', 'zh', 'es'];
                 const nextIdx = (langs.indexOf(language) + 1) % langs.length;
                 setLanguage(langs[nextIdx]);
              }}
            >
              <Globe size={16} />
              <span className="font-bold uppercase text-xs">{language}</span>
            </button>

            <button 
              className={`p-2 hover:text-gold-500 transition-colors relative z-50 ${mobileButtonClass}`}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={32} className="text-navy-900" /> : <Menu size={32} />}
            </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-500 ease-in-out flex flex-col pt-28 pb-8 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <div className="flex flex-col h-full relative z-10">
            <nav className="flex flex-col space-y-2 mt-4">
              {NAV_ITEMS[language].map((item, idx) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `group flex items-center justify-between p-4 rounded-lg transition-all duration-300 border border-transparent ${
                        isActive 
                        ? 'bg-gold-50 border-gold-100 text-gold-600' 
                        : 'text-navy-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <span className="text-xl md:text-2xl font-display font-medium">{item.label}</span>
                  <ChevronRight size={24} className="text-gray-400 group-hover:text-gold-500 transition-colors" />
                </NavLink>
              ))}
            </nav>
            
            <div className="mt-auto space-y-4 pt-8 border-t border-gray-100">
                <a 
                  href="tel:303-521-7671"
                  className="flex items-center justify-center space-x-3 w-full py-5 rounded-full border border-gray-200 text-navy-900 hover:bg-gray-50 transition-colors group"
                >
                    <div className="bg-gray-100 p-2 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors">
                        <Phone size={20} />
                    </div>
                    <span className="font-medium tracking-wide text-lg md:text-xl">303-521-7671</span>
                </a>

                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full bg-gold-500 text-white py-5 font-bold rounded-full text-lg md:text-xl shadow-lg hover:bg-navy-900 transition-colors"
                >
                  {t('getConsultation')}
                </Link>
            </div>
         </div>
      </div>
    </header>
  );
};

export default Header;