
import React, { useRef, useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Instagram,
  GlassWater,
  Zap,
  Truck,
  Settings,
  Sparkles
} from 'lucide-react';
import { LeadData } from './types';

const WA_NUMBER = '5544998633217';
const waLink = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Componentes Reutilizáveis
const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; text: string; number: string }> = ({ icon, title, text, number }) => (
  <div className="relative p-8 rounded-[2.5rem] bg-stone-900/30 border border-stone-800/50 hover:border-amber-500/30 transition-all group">
    <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold text-sm shadow-lg z-10">
      {number}
    </span>
    <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">{title}</h3>
    <p className="text-stone-400 text-sm leading-relaxed font-light">{text}</p>
  </div>
);

const MenuCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  text: string;
  items: string[];
  note?: string;
  cta: string;
  message: string;
  highlight?: boolean;
}> = ({ icon, title, text, items, note, cta, message, highlight }) => (
  <div className={`flex flex-col justify-between rounded-[2.5rem] p-8 transition-all duration-500 h-full ${highlight ? 'bg-stone-900/60 border-2 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.1)]' : 'bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/30'}`}>
    <div>
      <div className="mb-6">
        <div className={`inline-flex items-center justify-center p-2.5 rounded-xl mb-4 ${highlight ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-amber-500'}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">{title}</h3>
        <p className="text-stone-400 text-xs font-light leading-relaxed">{text}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {items.map((drink) => (
          <li key={drink} className="flex items-center gap-2.5 text-stone-300">
            <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full shrink-0"></div>
            <span className="text-xs font-medium tracking-wide">{drink}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto space-y-4">
      {note && <p className="text-[9px] text-amber-500/70 uppercase tracking-[0.2em] font-bold text-center">{note}</p>}
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 ${highlight ? 'bg-amber-500 hover:bg-amber-600 text-stone-950' : 'bg-stone-800 hover:bg-white text-white hover:text-stone-950'}`}
      >
        {cta}
      </a>
    </div>
  </div>
);

const BALogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="relative w-16 h-16 mb-2">
      <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
        <path d="M60 10 L85 35 L65 40 Z" fill="#4ade80" />
        <line x1="68" y1="28" x2="62" y2="45" stroke="#fbbf24" strokeWidth="2" />
        <circle cx="65" cy="45" r="12" fill="#fbbf24" />
        <circle cx="65" cy="45" r="9" fill="none" stroke="#92400e" strokeWidth="0.5" />
        <path d="M25 35 L75 35 L50 65 Z" fill="#67e8f9" opacity="0.8" />
        <path d="M40 45 L60 45 L50 58 Z" fill="#ef4444" />
        <line x1="50" y1="65" x2="50" y2="85" stroke="#67e8f9" strokeWidth="3" />
        <path d="M35 85 L65 85" stroke="#67e8f9" strokeWidth="3" strokeLinecap="round" />
        <path d="M25 30 L45 50" stroke="#fbbf24" strokeWidth="3" fill="none" />
        <path d="M25 30 L15 35" stroke="#fbbf24" strokeWidth="3" fill="none" />
      </svg>
    </div>
    <div className="text-center">
      <div className="flex items-center justify-center gap-2">
        <span className="text-xl font-bold text-white tracking-tighter">BA</span>
        <div className="h-6 w-px bg-amber-500 mx-1"></div>
        <span className="text-xl font-serif font-bold text-amber-500 uppercase tracking-widest">Eventos</span>
      </div>
      <p className="text-[8px] uppercase tracking-[0.2em] text-amber-400 mt-1 font-bold">Bar e Coquetelaria</p>
    </div>
  </div>
);

const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-stone-900 border border-stone-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2.5rem] p-8 sm:p-12 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-stone-500 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <Zap size={24} className="rotate-45" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-tighter">Política de Privacidade</h2>

        <div className="space-y-6 text-stone-300 font-light leading-relaxed">
          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">1. Coleta de Dados</h3>
            <p>Coletamos informações que você nos fornece voluntariamente pelo formulário de orçamento, incluindo nome, número de WhatsApp, tipo de evento, data prevista e número de convidados.</p>
          </section>

          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">2. Uso das Informações</h3>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Elaborar propostas personalizadas para o seu evento.</li>
              <li>Entrar em contato via WhatsApp para detalhes do serviço.</li>
              <li>Melhorar nossa experiência de atendimento.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">3. Proteção e LGPD</h3>
            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), seus dados não são vendidos nem compartilhados com terceiros para fins de marketing. Adotamos medidas de segurança técnicas para proteger suas informações contra acessos não autorizados.</p>
          </section>

          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">4. Seus Direitos</h3>
            <p>Você tem o direito de solicitar a correção ou exclusão definitiva de seus dados a qualquer momento. Para isso, basta entrar em contato pelo nosso WhatsApp oficial.</p>
          </section>

          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">5. Cookies</h3>
            <p>Utilizamos cookies básicos para melhorar a navegação e entender o desempenho da nossa página.</p>
          </section>
        </div>

        <button
          onClick={onClose}
          className="mt-10 w-full bg-white text-stone-950 py-4 rounded-2xl font-bold hover:bg-amber-500 transition-all"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

const DRINKS_SHOWCASE = [
  { name: 'Caipirinha', slug: 'caipirinha' },
  { name: 'Aperol Spritz', slug: 'aperol-spritz' },
  { name: 'Gin Tônica', slug: 'gin-tonica' },
  { name: 'Piña Colada', slug: 'pina-colada' },
  { name: 'Moscow Mule', slug: 'moscow-mule' },
  { name: 'Negroni', slug: 'negroni' },
  { name: 'Whisky Sour', slug: 'whisky-sour' }
];
const DRINKS_ESSENCIAL = ['Caipirinha / Caipiroska', 'Saquerita', 'Mojito', 'Piña Colada', 'Brisa do Cerrado', 'Maracujá Tropical', 'Soda Italiana'];
const DRINKS_DESTAQUE = ['Caipirinha / Caipiroska com até 3 frutas', 'Gin & Tônica', 'Gin com chá de frutas vermelhas', 'Sex on the Beach', 'Cosmopolitan', 'Moscow Mule artesanal'];
const SIGNATURE = ['Negroni', 'Aperol Spritz', 'Penicillin', 'Old Fashioned', 'Manhattan', 'Fitzgerald', 'Whisky Sour'];
const SEM_ALCOOL = ['Sex on the Beach', 'Mojito', 'Soda Italiana', 'Moscow Mule', 'Piña Colada'];

const App: React.FC = () => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    whatsapp: '',
    location: '',
    guests: 0,
    date: '',
    eventType: '',
    packageSelection: ''
  });
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value) || 0 : value
    }));
  };

  // Guarda os dados fundamentais no navegador e leva o cliente à página de obrigado,
  // onde o evento de Lead é disparado e o WhatsApp é aberto com o pedido.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      sessionStorage.setItem('ba-lead', JSON.stringify({
        name: formData.name,
        whatsapp: formData.whatsapp,
        eventType: formData.eventType,
        guests: formData.guests,
        date: formData.date
      }));
    } catch (err) {
      // Sem armazenamento disponível, a página de obrigado mostra a versão genérica.
    }
    window.location.href = '/obrigado.html';
  };

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-stone-950 bg-stone-950 overflow-x-hidden font-sans text-stone-100">
      {/* Navegação */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/98 backdrop-blur-md border-b border-stone-900/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-3 items-center">
          <div className="hidden md:flex items-center gap-10 text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">
            <a href="#drinks" className="hover:text-amber-500 transition-colors">Drinks</a>
            <a href="#menus" className="hover:text-amber-500 transition-colors">Menus</a>
            <a href="#cardapio" className="hover:text-amber-500 transition-colors">Como funciona</a>
          </div>

          <div className="flex justify-center">
            <BALogo className="scale-75" />
          </div>

          <div className="flex justify-end">
            <button
              onClick={scrollToForm}
              className="bg-white text-stone-950 px-8 py-3 rounded-full hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg font-bold"
            >
              Orçamento
            </button>
          </div>
        </div>
      </nav>

      {/* Seção Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=85&w=1600"
            className="w-full h-full object-cover opacity-30"
            alt=""
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">
              <Zap size={14} /> Bar para eventos · Maringá e região
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tighter">
              Drinks preparados na hora <br />
              <span className="text-amber-500 italic">para o seu evento</span>
            </h1>

            <p className="text-xl sm:text-2xl text-stone-200 max-w-xl mx-auto leading-relaxed font-light">
              Equipe, estrutura e coquetelaria clássica e moderna, com até 5 horas de atendimento.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button
                onClick={scrollToForm}
                className="group bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-amber-600/30 flex items-center justify-center gap-3"
              >
                <span>Fazer Orçamento</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <ul className="flex flex-wrap justify-center gap-3 text-xs text-stone-300">
              <li className="px-4 py-2 rounded-full bg-stone-900/60 border border-stone-800">Até 5 horas de atendimento</li>
              <li className="px-4 py-2 rounded-full bg-stone-900/60 border border-stone-800">Contrato incluso</li>
              <li className="px-4 py-2 rounded-full bg-stone-900/60 border border-stone-800">+300 eventos atendidos</li>
            </ul>
          </div>

          {/* Caixa do Formulário */}
          <div ref={formRef} className="bg-stone-900/60 backdrop-blur-3xl p-10 lg:p-14 rounded-[3.5rem] border border-stone-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-white mb-3 uppercase tracking-tighter">Peça seu orçamento</h2>
                <p className="text-stone-400 font-medium">Preencha os dados e continue pelo WhatsApp.</p>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    name="name"
                    aria-label="Seu nome"
                    placeholder="Seu nome"
                    autoComplete="name"
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <input
                    required
                    type="tel"
                    name="whatsapp"
                    aria-label="Seu WhatsApp com DDD"
                    placeholder="WhatsApp (com DDD)"
                    autoComplete="tel"
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    required
                    name="eventType"
                    aria-label="Tipo de evento"
                    className={`w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer ${formData.eventType ? 'text-stone-100' : 'text-stone-600'}`}
                    value={formData.eventType}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Tipo de evento</option>
                    <option value="Casamento" className="bg-stone-900">Casamento</option>
                    <option value="Aniversário" className="bg-stone-900">Aniversário</option>
                    <option value="Corporativo" className="bg-stone-900">Corporativo</option>
                    <option value="Confraternização" className="bg-stone-900">Confraternização</option>
                    <option value="Outro" className="bg-stone-900">Outro</option>
                  </select>

                  <input
                    required
                    type="number"
                    name="guests"
                    aria-label="Número de convidados"
                    placeholder="Número de convidados"
                    min="1"
                    inputMode="numeric"
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                    value={formData.guests || ''}
                    onChange={handleInputChange}
                  />
                </div>

                <input
                  type="date"
                  name="date"
                  aria-label="Data prevista"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>

              <div className="text-center pt-2 pb-1 px-4">
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  Experiência completa a partir de <span className="font-semibold text-amber-500/90">R$ 1.600</span>. O valor final depende do número de convidados e do menu.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-amber-500 text-stone-950 py-6 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Continuar no WhatsApp</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Carrossel de drinks: animação contínua, sem botões */}
      <section id="drinks" className="py-32 bg-stone-950 overflow-hidden">
        <style>{`
          @keyframes drinks-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .drinks-track { animation: drinks-scroll 45s linear infinite; }
          .drinks-marquee:hover .drinks-track { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) { .drinks-track { animation: none; } }
        `}</style>
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter uppercase">Os <span className="text-amber-500 italic">drinks</span></h2>
            <p className="text-stone-400 text-xl max-w-2xl font-light">Alguns dos drinks que preparamos nos seus eventos.</p>
          </div>
        </div>
        <div className="drinks-marquee overflow-hidden">
          <div className="drinks-track flex gap-6 pr-6 w-max">
            {[...DRINKS_SHOWCASE, ...DRINKS_SHOWCASE].map((d, i) => {
              const isCopy = i >= DRINKS_SHOWCASE.length;
              return (
                <figure
                  key={`${d.slug}-${i}`}
                  aria-hidden={isCopy ? true : undefined}
                  className="relative shrink-0 w-[260px] h-[340px] sm:w-[300px] sm:h-[380px] rounded-[2.5rem] overflow-hidden border border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 m-0"
                >
                  <img
                    src={`/drinks/${d.slug}.jpg`}
                    alt={isCopy ? '' : d.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-stone-950/90 to-transparent">
                    <span className="text-2xl font-bold text-white uppercase tracking-tight">{d.name}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
              Escolha o menu <br />
              <span className="text-amber-500 italic">ideal para o seu evento</span>
            </h2>
            <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Experiência completa a partir de R$ 1.600, com equipe, estrutura, insumos e contrato incluso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <MenuCard
              icon={<GlassWater size={20} />}
              title="Essencial"
              text="Clássicos e tropicais, para eventos descontraídos."
              items={DRINKS_ESSENCIAL}
              note="Versão Fresh com gás disponível"
              cta="Quero esse menu"
              message="Olá! Quero um orçamento com o menu Essencial para o meu evento."
            />
            <MenuCard
              icon={<Sparkles size={20} />}
              title="Destaque"
              text="Drinks modernos e refrescantes, com apresentação diferenciada."
              items={DRINKS_DESTAQUE}
              note="Recomendado para casamentos"
              cta="Quero esse menu"
              message="Olá! Quero um orçamento com o menu Destaque para o meu evento."
              highlight
            />
            <MenuCard
              icon={<Sparkles size={20} />}
              title="Signature Selection"
              text="Clássicos refinados, adicionados ao seu menu principal."
              items={SIGNATURE}
              note="Adicional"
              cta="Quero adicionar"
              message="Olá! Tenho interesse na Signature Selection como adicional para o meu evento."
            />
            <MenuCard
              icon={<GlassWater size={20} />}
              title="Sem Álcool"
              text="Drinks leves para todos os convidados brindarem."
              items={SEM_ALCOOL}
              note="Para incluir todos os convidados"
              cta="Quero esse menu"
              message="Olá! Quero um orçamento com drinks sem álcool para o meu evento."
            />
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="cardapio" className="py-24 px-6 bg-stone-950 relative overflow-hidden border-y border-stone-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase">
              Sua única tarefa é <span className="text-amber-500 italic">brindar</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Cuidamos de toda a parte operacional para que você aproveite o evento com tranquilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              icon={<Sparkles size={32} />}
              title="Curadoria"
              text="Definimos juntos o menu ideal, de acordo com o perfil dos seus convidados e o estilo do evento."
            />
            <ProcessStep
              number="02"
              icon={<Truck size={32} />}
              title="Estrutura completa"
              text="Levamos o bar, os balcões e os equipamentos. Você não precisa se preocupar com transporte ou montagem."
            />
            <ProcessStep
              number="03"
              icon={<Settings size={32} />}
              title="Insumos frescos"
              text="Trabalhamos com frutas selecionadas e ingredientes frescos em cada drink."
            />
            <ProcessStep
              number="04"
              icon={<CheckCircle2 size={32} />}
              title="Atendimento"
              text="Equipe no bar por até 5 horas, do início ao fim do serviço, com contrato incluso."
            />
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-stone-950 border-t border-stone-900 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-24 text-center md:text-left">
            <BALogo className="scale-125" />
            <div className="flex gap-12 text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px]">
              <a href="https://www.instagram.com/baeventosbar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors group" aria-label="Siga-nos no Instagram">
                <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 pt-24 border-t border-stone-900">
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Atendimento</h4>
              <p className="text-stone-400 leading-relaxed text-sm">Maringá e região.</p>
              <a href="https://g.page/r/CZh84xBNpNAVEBE/review" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-500 underline underline-offset-4 text-sm transition-colors">Ver avaliações no Google</a>
            </div>
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Orçamentos</h4>
              <p className="text-stone-400 text-sm">Pelo formulário ou direto no WhatsApp: 44 99863-3217.</p>
            </div>
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest text-amber-500">A nossa essência</h4>
              <p className="text-stone-400 text-sm italic leading-relaxed">Criamos o cenário para que a sua única tarefa seja celebrar.</p>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-stone-600 uppercase tracking-[0.2em] font-bold text-center">
            <p>© 2026 BA Eventos. Bar e coquetelaria para eventos.</p>
            <div className="flex gap-10">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-stone-400 transition-colors"
              >
                Privacidade
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Atalho para o orçamento no celular */}
      <div className="fixed bottom-8 right-6 z-50 md:hidden">
        <button
          onClick={scrollToForm}
          className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl"
          aria-label="Ir para o formulário de orçamento"
        >
          <Calendar size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
