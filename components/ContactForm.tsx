import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactFormProps {
  title?: string;
  description?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title, 
  subtitle,
  description 
}) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('successMessage'));
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="pt-[150px] pb-16 md:pb-24 bg-gray-50 relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
          
          <div className="lg:w-5/12 bg-navy-900 text-white p-10 md:p-16 flex flex-col justify-center relative">
            
            <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">{t('contactUs')}</h2>
                <p className="text-gray-300 mb-12 text-xl md:text-2xl leading-relaxed">
                   {t('committedText')}
                </p>

                <div className="space-y-10">
                    <div className="flex items-start space-x-6 group">
                        <div className="p-4 bg-white/10 rounded-lg group-hover:bg-gold-500 text-gold-500 group-hover:text-white transition-all duration-300 shrink-0">
                            <Phone size={26} />
                        </div>
                        <div>
                            <h4 className="text-gold-500 font-bold uppercase text-base tracking-widest mb-2">{t('call247')}</h4>
                            <a href="tel:303-521-7671" className="text-2xl font-display font-semibold hover:text-gold-400 transition-colors">303-521-7671</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                        <div className="p-4 bg-white/10 rounded-lg group-hover:bg-gold-500 text-gold-500 group-hover:text-white transition-all duration-300 shrink-0">
                            <Mail size={26} />
                        </div>
                        <div>
                            <h4 className="text-gold-500 font-bold uppercase text-base tracking-widest mb-2">{t('emailUs')}</h4>
                            <a href="mailto:eyson.law@gmail.com" className="text-2xl font-display font-medium hover:text-gold-400 transition-colors break-all">eyson.law@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                        <div className="p-4 bg-white/10 rounded-lg group-hover:bg-gold-500 text-gold-500 group-hover:text-white transition-all duration-300 shrink-0">
                            <MapPin size={26} />
                        </div>
                        <div>
                            <h4 className="text-gold-500 font-bold uppercase text-base tracking-widest mb-2">{t('visitOffice')}</h4>
                            <p className="text-2xl text-gray-300 leading-snug font-display">
                                3025 S. Parker Rd., Suite 705<br/>
                                Aurora, CO 80014
                            </p>
                            <a 
                              href="https://maps.google.com/?q=3025+S+Parker+Rd+Suite+705+Aurora+CO" 
                              target="_blank" 
                              rel="noreferrer"
                              className="inline-flex items-center mt-3 text-lg text-gold-500 font-medium hover:text-gold-400"
                            >
                              {t('getDirections')} <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400 italic">
                "We provide personal attention to every stage of a case."
              </p>
            </div>
          </div>

          <div className="lg:w-7/12 p-8 md:p-14 bg-white">
            <div className="mb-10">
               <span className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2 block">{subtitle || t('freeConsultation')}</span>
               <h3 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">{title || t('sendMessage')}</h3>
               {description && <p className="text-gray-600 text-xl md:text-2xl">{description}</p>}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-lg font-semibold text-navy-900 mb-3">{t('name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-xl text-navy-900 focus:bg-white focus:border-gold-500 outline-none transition-all duration-300 font-medium"
                    placeholder={t('name')}
                  />
                </div>
                <div className="group">
                  <label className="block text-lg font-semibold text-navy-900 mb-3">{t('phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-xl text-navy-900 focus:bg-white focus:border-gold-500 outline-none transition-all duration-300 font-medium"
                    placeholder="(303) 555-0123"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-lg font-semibold text-navy-900 mb-3">{t('email')}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-xl text-navy-900 focus:bg-white focus:border-gold-500 outline-none transition-all duration-300 font-medium"
                  placeholder="name@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-lg font-semibold text-navy-900 mb-3">{t('message')}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-5 py-4 text-xl text-navy-900 focus:bg-white focus:border-gold-500 outline-none transition-all duration-300 resize-none font-medium"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <div className="pt-6">
                <button
                    type="submit"
                    className="w-full bg-navy-900 text-white font-bold py-5 rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group text-xl"
                >
                    <span className="tracking-wide uppercase">{t('sendBtn')}</span>
                    <Send size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;