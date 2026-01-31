import React from 'react';
import { ATTORNEYS } from '../constants';
import { BookOpen, Scale, Phone, Quote, Briefcase, Award, GraduationCap, Gavel } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Attorneys: React.FC = () => {
  const { language, t } = useLanguage();
  const attorney = ATTORNEYS[language][0];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Mobile Header */}
        <div className="lg:hidden mb-12 text-center">
             <span className="text-gold-500 font-bold tracking-widest uppercase text-xs mb-3 block">{t('attorneyProfile')}</span>
             <h1 className="text-4xl font-serif font-bold text-navy-900 mb-2">{attorney.name}</h1>
             <p className="text-xl text-slate-500 font-medium font-display">{t('foundingPartner')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column - Image & Quick Facts */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-24">
                <div className="relative group">
                    <div className="absolute inset-0 bg-navy-900 rounded-2xl rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                        <img 
                            src={attorney.imageUrl} 
                            alt={attorney.name} 
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                {/* Credentials Card */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold-500"></div>
                    
                    <div className="mb-8">
                        <div className="flex items-center space-x-3 mb-4">
                            <GraduationCap className="text-gold-500" size={24} />
                            <h3 className="font-bold text-navy-900 text-xl font-display uppercase tracking-wide">{t('education')}</h3>
                        </div>
                        <ul className="space-y-4">
                            {attorney.education.map((edu, idx) => (
                                <li key={idx} className="group">
                                    <div className="font-bold text-navy-900 text-xl group-hover:text-gold-600 transition-colors">{edu.degree}</div>
                                    <div className="text-slate-500 text-lg mt-1">{edu.school}</div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center space-x-3 mb-4">
                            <Gavel className="text-gold-500" size={24} />
                            <h3 className="font-bold text-navy-900 text-xl font-display uppercase tracking-wide">{t('admissions')}</h3>
                        </div>
                        <ul className="space-y-2">
                            {attorney.admissions.map((adm, idx) => (
                                <li key={idx} className="flex items-center text-slate-600 text-xl">
                                    <span className="w-1.5 h-1.5 bg-navy-900 rounded-full mr-3"></span>
                                    {adm}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Right Column - Bio & Detail */}
            <div className="lg:col-span-7">
                {/* Desktop Header */}
                <div className="hidden lg:block mb-12">
                    <div className="flex items-center space-x-4 mb-4">
                        <span className="h-px w-8 bg-gold-500"></span>
                        <span className="text-gold-500 font-bold uppercase tracking-widest text-sm">{t('attorneyProfile')}</span>
                    </div>
                    <h1 className="text-6xl font-serif font-bold text-navy-900 mb-4 leading-tight">{attorney.name}</h1>
                    <p className="text-2xl text-slate-500 font-light font-display">{t('foundingPartner')}</p>
                </div>

                <div className="text-slate-600 mb-12 max-w-none">
                    <p className="leading-relaxed text-xl md:text-2xl">
                        {attorney.bio}
                    </p>
                </div>

                {/* Featured Quote - Unchanged Size */}
                <div className="my-12 relative">
                     <Quote className="absolute -top-4 -left-4 text-gold-500/20" size={64} />
                     <blockquote className="relative z-10 pl-8 border-l-4 border-gold-500 py-2">
                        <p className="text-2xl md:text-3xl font-serif text-navy-900 italic leading-relaxed">
                            {attorney.quote}
                        </p>
                     </blockquote>
                </div>

                {/* Experience Highlights */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-navy-900 mb-8 font-display flex items-center">
                        Experience & Focus
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {attorney.highlights.map((highlight, idx) => (
                             <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-gold-500 hover:shadow-md transition-all duration-300 group">
                                <div className="mb-4 text-navy-900 group-hover:text-gold-500 transition-colors">
                                    {idx === 0 ? <Scale size={32} /> : <Briefcase size={32} />}
                                </div>
                                <h4 className="font-bold text-navy-900 text-2xl mb-2 font-display">{highlight.title}</h4>
                                <p className="text-slate-600 text-xl leading-relaxed">
                                    {highlight.text}
                                </p>
                             </div>
                         ))}
                    </div>
                </div>
                
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-16 border-b border-slate-100 pb-12">
                    {attorney.closing}
                </p>

                {/* Personal Note Card */}
                <div className="bg-navy-900 rounded-2xl overflow-hidden shadow-2xl mb-16">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
                            <img 
                                src="https://sonlawfirmco.com/wp-content/uploads/2024/03/u3.jpg" 
                                alt="Personal" 
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gold-500/20 mix-blend-overlay"></div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative">
                            <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                            
                            <h3 className="text-white text-2xl font-bold mb-4 font-display flex items-center">
                                <span className="w-8 h-px bg-gold-500 mr-3"></span>
                                {t('personalNoteTitle')}
                            </h3>
                            <p className="text-slate-200 text-2xl leading-relaxed italic font-serif">
                                {attorney.personalNote}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gold-50 border border-gold-100 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
                     <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold-200/50 rounded-full blur-3xl"></div>
                     <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gold-200/50 rounded-full blur-3xl"></div>
                     
                     <div className="relative z-10">
                         <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
                            {t('dontHesitate')}
                         </h2>
                         <p className="text-slate-600 mb-8 max-w-xl mx-auto text-xl md:text-2xl">
                            {t('committedText')}
                         </p>

                         <a 
                            href="tel:303-521-7671" 
                            className="inline-flex items-center justify-center space-x-3 bg-navy-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gold-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                         >
                            <Phone size={20} />
                            <span>303-521-7671</span>
                         </a>
                         
                         <div className="mt-8 pt-6 border-t border-gold-200/60">
                            <p className="text-lg text-slate-500 font-medium">
                                {t('promiseTitle')}: {t('promiseText')}
                            </p>
                         </div>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;