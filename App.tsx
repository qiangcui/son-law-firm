import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Attorneys from './components/Attorneys';
import CaseResults from './components/CaseResults';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

// Get basename from Vite's base config (for GitHub Pages)
const basename = import.meta.env.BASE_URL;

// Scroll to top on route change with smooth behavior
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timer = setTimeout(handleScroll, 10);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <CaseResults />
    <Testimonials />
    <ContactForm isHomePage />
  </>
);

const AboutPage = () => (
  <div className="pt-20">
    <Attorneys />
  </div>
);

const ContactPage = () => (
  <div className="pt-20">
    <ContactForm />
  </div>
);

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router basename={basename}>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 text-slate-900 flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;