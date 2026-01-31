import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2, Phone, Calendar, Info } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const QUICK_ACTIONS = [
  { label: "Free Consultation", icon: Calendar },
  { label: "What are your fees?", icon: Info },
  { label: "Car Accident help", icon: Phone },
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Hello! I am the Son Law Firm virtual assistant. I can help answer questions about your potential case or schedule a free consultation. How can I assist you today?', 
      timestamp: new Date() 
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (customInput?: string) => {
    const textToSend = customInput || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(messages, textToSend);
      const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { 
        role: 'model', 
        text: "I'm having trouble connecting. Please call us directly at (303) 521-7671 for immediate help.", 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-navy-900 hover:bg-gold-500 text-white hover:text-navy-900 rounded-full w-14 h-14 md:w-16 md:h-16 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
          aria-label="Open legal assistant"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-white animate-pulse"></div>
          <MessageSquare className="h-6 w-6 md:h-8 md:w-8" />
          <span className="absolute right-full mr-4 bg-navy-900 text-white text-xs py-2 px-3 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
            Need legal help? Chat now
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-96 max-h-[600px] flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-navy-900 text-white p-5 flex justify-between items-center shadow-md">
            <div className="flex items-center space-x-3">
              <div className="bg-gold-500 p-2 rounded-lg shadow-glow">
                <Bot size={20} className="text-navy-900" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Son Law Assistant</h3>
                <span className="text-[10px] text-gold-400 uppercase tracking-widest font-bold flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span> Virtual Intake
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <X size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 p-5 bg-gray-50/50 overflow-y-auto min-h-[350px] max-h-[400px] space-y-4 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center mr-2 shrink-0 border border-navy-200">
                    <Bot size={14} className="text-navy-900" />
                  </div>
                )}
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-navy-900 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  <div className={`text-[9px] mt-1 opacity-50 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex justify-start">
                 <div className="w-8 h-8 rounded-full bg-navy-100 flex items-center justify-center mr-2 shrink-0 border border-navy-200">
                    <Bot size={14} className="text-navy-900" />
                  </div>
                 <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-5 py-3 shadow-sm">
                   <div className="flex space-x-1">
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:200ms]"></div>
                     <div className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:400ms]"></div>
                   </div>
                 </div>
               </div>
            )}
          </div>

          {/* Quick Actions */}
          {messages.length < 4 && !isLoading && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {QUICK_ACTIONS.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(action.label)}
                  className="flex items-center space-x-1.5 text-[11px] font-bold bg-white border border-gray-200 hover:border-gold-500 hover:text-gold-600 px-3 py-1.5 rounded-full transition-all shadow-sm"
                >
                  <action.icon size={12} />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about your case..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-gold-500 focus:bg-white transition-all"
                autoFocus
              />
              <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="bg-gold-500 hover:bg-gold-600 disabled:bg-gray-200 text-navy-900 p-3 rounded-full transition-all shadow-md active:scale-95 flex items-center justify-center"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[9px] text-gray-400 text-center mt-3 font-medium uppercase tracking-tighter">
              Virtual Assistant • Not a substitute for legal advice
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default ChatWidget;