
import React, { useState, useRef } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  CheckCircle2, 
  ChevronRight, 
  Star,
  Quote,
  Instagram,
  Facebook,
  GlassWater,
  Award,
  Zap,
  Truck,
  Settings,
  Sparkles
} from 'lucide-react';
import { LeadData } from './types';

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

const TestimonialCard: React.FC<{ name: string; event: string; text: string }> = ({ name, event, text }) => (
  <div className="bg-stone-900/50 p-8 rounded-[2rem] border border-stone-800 relative transition-all hover:border-amber-500/30 hover:bg-stone-900 group">
    <div className="flex items-center gap-1 text-amber-500 mb-4">
      {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-stone-300 mb-6 italic leading-relaxed text-lg font-light">"{text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-stone-950 font-bold shadow-lg">
        {name[0]}
      </div>
      <div>
        <h4 className="text-white font-bold">{name}</h4>
        <p className="text-amber-500/70 text-[10px] uppercase tracking-widest font-bold">{event}</p>
      </div>
    </div>
  </div>
);

const ExperienceCard: React.FC<{ name: string; img: string; desc: string }> = ({ name, img, desc }) => (
  <div className="group relative overflow-hidden rounded-[2.5rem] bg-stone-900 border border-stone-800 aspect-[4/5]">
    <img 
      src={`${img}?auto=format&fit=crop&q=80&w=600`} 
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" 
      alt={`Bartender uniformizado preparando ${name}`} 
      loading="lazy"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-amber-500 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">A Experiência</p>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed font-light">
        {desc}
      </p>
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
        >
          <Zap size={24} className="rotate-45" />
        </button>
        
        <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-tighter">Política de Privacidade</h2>
        
        <div className="space-y-6 text-stone-300 font-light leading-relaxed">
          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">1. Coleta de Dados</h3>
            <p>Coletamos informações que você nos fornece voluntariamente através do nosso formulário de orçamento, incluindo nome, número de WhatsApp, localização do evento, tipo de evento, data e número de convidados.</p>
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
            <p>Em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantimos que seus dados não serão vendidos ou compartilhados com terceiros para fins de marketing. Adotamos medidas de segurança técnicas para proteger suas informações contra acessos não autorizados.</p>
          </section>

          <section>
            <h3 className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-3">4. Seus Direitos</h3>
            <p>Você tem o direito de solicitar a correção ou exclusão definitiva de seus dados de nossa base a qualquer momento. Para isso, basta entrar em contato através do nosso WhatsApp oficial.</p>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio (sem IA conforme solicitado)
    setTimeout(() => {
      setAiResponse("Recebemos seu pedido com sucesso! Nossa equipe já está polindo os cristais para o seu grande dia. Clique no botão abaixo para finalizarmos os detalhes via WhatsApp.");
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppRedirect = () => {
    const ownerNumber = "5544998633217";
    const message = encodeURIComponent(
      `Olá! Acabei de solicitar um orçamento no site e estou ansioso por um brinde épico!\n\n` +
      `*Meus dados:* \n` +
      `- *Nome:* ${formData.name}\n` +
      `- *Tipo de Evento:* ${formData.eventType}\n` +
      `- *Pacote Escolhido:* ${formData.packageSelection || 'Não selecionado'}\n` +
      `- *Local:* ${formData.location}\n` +
      `- *Convidados:* ${formData.guests}\n` +
      `- *Data:* ${formData.date}\n` +
      `- *Contato:* ${formData.whatsapp}\n\n` +
      `Podemos conversar sobre a proposta?`
    );
    window.open(`https://wa.me/${ownerNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen selection:bg-amber-500 selection:text-stone-950 bg-stone-950 overflow-x-hidden font-sans text-stone-100">
      {/* Navegação */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/98 backdrop-blur-md border-b border-stone-900/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-3 items-center">
          <div className="hidden md:flex items-center gap-10 text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">
            <a href="#experiencia" className="hover:text-amber-500 transition-colors">A Arte</a>
            <a href="#menus" className="hover:text-amber-500 transition-colors">Menus</a>
            <a href="#cardapio" className="hover:text-amber-500 transition-colors">O Bar</a>
            <a href="#provas" className="hover:text-amber-500 transition-colors">Relatos</a>
          </div>
          
          <div className="flex justify-center">
            <BALogo className="scale-75" />
          </div>

          <div className="flex justify-end">
            <button 
              onClick={scrollToForm}
              className="bg-white text-stone-950 px-8 py-3 rounded-full hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-lg font-bold"
            >
              Pedir Proposta
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
            alt="Bartender profissional em Maringá"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 text-center flex flex-col items-center">
            <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">
              <Zap size={14} /> Mixologia de Elite em Maringá
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.2] text-white tracking-tighter">
              Redescubra o prazer <br />
              <span className="text-amber-500 italic">de beber</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-stone-200 max-w-xl mx-auto leading-relaxed font-light">
              Transformamos seu evento com um bar de alto padrão, estrutura própria e drinks autorais impecáveis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <button 
                onClick={scrollToForm}
                className="group bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all shadow-2xl shadow-amber-600/30 flex items-center justify-center gap-3"
              >
                <span>Fazer Orçamento</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-4 bg-stone-900/40 p-4 rounded-2xl border border-stone-800">
                <div className="flex -space-x-2">
                  {[10,20,30,40].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} className="w-10 h-10 rounded-full border-2 border-stone-950" alt="Cliente satisfeito" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Favorito de</p>
                  <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">+1.200 Anfitriões</p>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa do Formulário */}
          <div ref={formRef} className="bg-stone-900/60 backdrop-blur-3xl p-10 lg:p-14 rounded-[3.5rem] border border-stone-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]"></div>
            
            {isSuccess ? (
              <div className="text-center py-10 space-y-8 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30 shadow-2xl">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">VAI SER ÉPICO!</h2>
                <div className="bg-stone-950/80 p-8 rounded-[2rem] border border-stone-800 text-stone-200 italic text-lg leading-relaxed text-left relative shadow-inner">
                  <Quote className="absolute -top-4 -left-4 text-amber-500/20" size={40} />
                  {aiResponse}
                </div>
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl shadow-green-900/20"
                >
                  <MessageSquare /> Finalizar via WhatsApp
                </button>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-bold">Clique no botão para nos enviar os detalhes!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-white mb-3 uppercase tracking-tighter">Inicie seu brinde</h2>
                  <p className="text-stone-400 font-medium italic">O bar que Maringá sempre sonhou.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Seu Nome" 
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <input 
                      required
                      type="tel" 
                      name="whatsapp"
                      placeholder="Seu Whats (DDD)" 
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                    />
                  </div>

                  <input 
                    required
                    type="text" 
                    name="location"
                    placeholder="Cidade do Evento" 
                    className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                    value={formData.location}
                    onChange={handleInputChange}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <select
                      required
                      name="eventType"
                      className={`w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer ${formData.eventType ? 'text-stone-100' : 'text-stone-600'}`}
                      value={formData.eventType}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled className="text-stone-600">Tipo de Evento</option>
                      <option value="Casamento" className="bg-stone-900">Casamento</option>
                      <option value="Aniversário" className="bg-stone-900">Aniversário</option>
                      <option value="Corporativo" className="bg-stone-900">Corporativo</option>
                      <option value="Formatura" className="bg-stone-900">Formatura</option>
                      <option value="Outros" className="bg-stone-900">Outros</option>
                    </select>

                    <select
                      required
                      name="packageSelection"
                      className={`w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 focus:outline-none focus:border-amber-500 transition-all appearance-none cursor-pointer ${formData.packageSelection ? 'text-stone-100' : 'text-stone-600'}`}
                      value={formData.packageSelection}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled className="text-stone-600">Escolha seu Menu</option>
                      <option value="Pacote Essencial" className="bg-stone-900">🟢 Pacote Essencial</option>
                      <option value="Pacote Destaque" className="bg-stone-900">🟡 Pacote Destaque</option>
                      <option value="Pacote Premium" className="bg-stone-900">🔴 Adicional: Drinks Premium (Personalização Extra)</option>
                      <option value="Opções Sem Álcool" className="bg-stone-900">⚪ Opções Sem Álcool (com Maracujá Tropical)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      required
                      type="number" 
                      name="guests"
                      placeholder="Convidados" 
                      min="1"
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all placeholder:text-stone-600"
                      value={formData.guests || ''}
                      onChange={handleInputChange}
                    />
                    <input 
                      required
                      type="date" 
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-stone-950/50 border border-stone-800 rounded-2xl py-5 px-6 text-stone-100 focus:outline-none focus:border-amber-500 transition-all text-stone-400"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-white hover:bg-amber-500 text-stone-950 py-6 rounded-2xl font-bold text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-stone-200 border-t-stone-950 rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>SOLICITAR ORÇAMENTO</span>
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Grid de Experiência */}
      <section id="experiencia" className="py-32 bg-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-5xl sm:text-7xl font-bold text-white tracking-tighter uppercase">Nossa <span className="text-amber-500 italic">Arte</span></h2>
            <p className="text-stone-400 text-xl max-w-2xl mx-auto font-light">Equipe uniformizada e estrutura modular que se adapta perfeitamente ao seu cenário.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ExperienceCard 
              name="O Preparo" 
              img="https://i.pinimg.com/736x/61/a3/ac/61a3ace90e82c2f8bc08d5f15608b184.jpg"
              desc="Mixologia técnica executada por profissionais que entendem de sabor e equilíbrio em cada gota."
            />
            <ExperienceCard 
              name="O Agito" 
              img="https://i.pinimg.com/1200x/eb/a8/0e/eba80e92d129875bcf2ee4802a040af3.jpg"
              desc="A vibração do preparo ao vivo. Nossos bartenders trazem dinamismo e entretenimento para o seu bar."
            />
            <ExperienceCard 
              name="A Elegância" 
              img="https://lh3.googleusercontent.com/d/1Jk_Xvtwztiurhi8bKmZpTvXILBtNHzM4"
              desc="Bartenders rigorosamente uniformizados e treinados para um serviço de classe mundial em qualquer ocasião."
            />
            <ExperienceCard 
              name="A Guarnição" 
              img="https://i.pinimg.com/736x/7c/b8/9c/7cb89cf145822c47473cf2ea7ad27dd1.jpg"
              desc="Estética impecável. Utilizamos insumos selecionados e finalizações que tornam cada drink uma obra de arte."
            />
            <ExperienceCard 
              name="A Chama" 
              img="https://i.pinimg.com/736x/f9/91/63/f99163e7d15a43fee1a90fe9ea03ea46.jpg"
              desc="Técnicas avançadas de aromatização e defumação para surpreender os paladares mais exigentes."
            />
            <ExperienceCard 
              name="O Visual" 
              img="https://i.pinimg.com/736x/88/a7/30/88a73088d335ad1508ccda5215a8b548.jpg"
              desc="Mobiliário e decoração própria. Montamos um bar completo que complementa a estética do seu evento."
            />
             <ExperienceCard 
              name="A Atitude" 
              img="https://lh3.googleusercontent.com/d/1nx3cIVMWvTzygmO3xNxdaaOQV20k5OJk"
              desc="Hospitalidade é o nosso DNA. Atendimento focado no acolhimento e na satisfação total de cada convidado."
            />
            <ExperienceCard 
              name="O Brinde" 
              img="https://i.pinimg.com/1200x/98/7c/75/987c75629b9b90d24e7b89240a02d886.jpg"
              desc="Excelência do início ao fim. Sua única preocupação será aproveitar a festa e celebrar os bons momentos."
            />
          </div>
        </div>
      </section>

      {/* Seção de Menus - Reformulada para Conversão */}
      <section id="menus" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
              Escolha o estilo de bar <br />
              <span className="text-amber-500 italic">ideal para o seu evento</span>
            </h2>
            <p className="text-stone-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Drinks preparados na hora, com estrutura completa e atendimento profissional. 
              Garantimos sofisticação em cada detalhe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Pacote Essencial */}
            <div className="flex flex-col justify-between bg-stone-900/40 border border-stone-800/80 rounded-[2.5rem] p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] group relative overflow-hidden h-full">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-stone-850 text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-500">
                    <GlassWater size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">Essencial</h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    "Clássicos e tropicais, perfeitos para eventos leves e descontraídos."
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Caipirinha / Caipiroska',
                    'Saquerita',
                    'Mojito',
                    'Piña Colada',
                    'Brisa do Cerrado',
                    'Maracujá Tropical',
                    'Soda Italiana'
                  ].map((drink) => (
                    <li key={drink} className="flex items-center gap-2.5 text-stone-300">
                      <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full shrink-0"></div>
                      <span className="text-xs font-medium tracking-wide">{drink}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mt-auto">
                <p className="text-[9px] text-amber-500/60 uppercase tracking-[0.2em] font-bold text-center">
                  ✨ Opção Fresh disponível
                </p>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, packageSelection: 'Pacote Essencial' }));
                    scrollToForm();
                  }}
                  className="w-full bg-stone-800 hover:bg-white text-white hover:text-stone-950 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Quero esse menu
                </button>
              </div>
            </div>

            {/* Pacote Destaque */}
            <div className="flex flex-col justify-between bg-stone-900/60 border-2 border-amber-500 rounded-[2.5rem] p-8 relative transform hover:scale-[1.02] transition-all duration-500 shadow-[0_0_50px_rgba(245,158,11,0.1)] group h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                Mais Escolhido
              </div>
              
              <div>
                <div className="mb-6 mt-2">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-amber-500 text-stone-950 mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">Destaque</h3>
                  <p className="text-stone-300 text-xs font-light leading-relaxed">
                    "Drinks modernos e mais sofisticados para uma experiência diferenciada."
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Caipirinha / Caipiroska (3 frutas)',
                    'Gin & Tônica Clássica',
                    'Gin com Chá de Vermelhas',
                    'Sex on the Beach',
                    'Cosmopolitan',
                    'Moscow Mule'
                  ].map((drink) => (
                    <li key={drink} className="flex items-center gap-2.5 text-white">
                      <CheckCircle2 size={14} className="text-amber-500 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide">{drink}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, packageSelection: 'Pacote Destaque' }));
                    scrollToForm();
                  }}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-stone-950 py-3.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-amber-900/20 cursor-pointer"
                >
                  Quero esse menu
                </button>
              </div>
            </div>

            {/* Upgrade Premium */}
            <div className="flex flex-col justify-between bg-stone-900/40 border border-stone-800/80 rounded-[2.5rem] p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] group relative overflow-hidden h-full">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-stone-850 text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-500">
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Premium</h3>
                    <span className="text-[8px] px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold uppercase tracking-wider">
                      Adicional
                    </span>
                  </div>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    "Upgrade sofisticado para personalização extra do seu evento."
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Negroni',
                    'Aperol Spritz',
                    'Penicillin',
                    'Old Fashioned',
                    'Manhattan',
                    'Fitzgerald',
                    'Whisky Sour'
                  ].map((drink) => (
                    <li key={drink} className="flex items-center gap-2.5 text-stone-300">
                      <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full shrink-0"></div>
                      <span className="text-xs font-medium tracking-wide">{drink}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mt-auto">
                <p className="text-[9px] text-stone-500 uppercase tracking-widest font-bold text-center italic">
                  * Personalização opcional sob medida
                </p>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, packageSelection: 'Pacote Premium' }));
                    scrollToForm();
                  }}
                  className="w-full bg-stone-800 hover:bg-white text-white hover:text-stone-950 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Adicionar Premium
                </button>
              </div>
            </div>

            {/* Sem Álcool */}
            <div className="flex flex-col justify-between bg-stone-900/40 border border-stone-800/80 rounded-[2.5rem] p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] group relative overflow-hidden h-full">
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-stone-850 text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors duration-500">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-2">Sem Álcool</h3>
                  <p className="text-stone-400 text-xs font-light leading-relaxed">
                    "Misturas requintadas e refrescantes para todos os convidados brindarem."
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Sex on the Beach Zero',
                    'Mojito Zero',
                    'Soda Italiana',
                    'Moscow Mule Zero',
                    'Piña Colada Zero',
                    'Maracujá Tropical'
                  ].map((drink) => (
                    <li key={drink} className="flex items-center gap-2.5 text-stone-300">
                      <div className="w-1.5 h-1.5 bg-amber-500/50 rounded-full shrink-0"></div>
                      <span className="text-xs font-medium tracking-wide">{drink}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mt-auto">
                <p className="text-[9px] text-stone-500 uppercase tracking-widest font-bold text-center italic">
                  * Inclusão livre de restrições
                </p>
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, packageSelection: 'Opções Sem Álcool' }));
                    scrollToForm();
                  }}
                  className="w-full bg-stone-800 hover:bg-white text-white hover:text-stone-950 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Quero esse menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona - Estratégico */}
      <section id="cardapio" className="py-24 px-6 bg-stone-950 relative overflow-hidden border-y border-stone-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter uppercase">
              Sua Única Tarefa é <span className="text-amber-500 italic">Brindar</span>
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light text-lg leading-relaxed">
              Cuidamos de toda a complexidade operacional para que você desfrute do evento com a mesma tranquilidade de um convidado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="01"
              icon={<Sparkles size={32} />}
              title="Curadoria"
              text="Definimos juntos o menu ideal, harmonizando os drinks com o perfil dos seus convidados e o estilo do seu evento."
            />
            <ProcessStep 
              number="02"
              icon={<Truck size={32} />}
              title="Logística Total"
              text="Levamos toda a estrutura de bar, balcões modulares e equipamentos. Você não precisa se preocupar com transporte ou montagem."
            />
            <ProcessStep 
              number="03"
              icon={<Settings size={32} />}
              title="Insumos Premium"
              text="Trabalhamos apenas com frutas selecionadas e ingredientes frescos, garantindo o padrão de alta coquetelaria em cada copo."
            />
            <ProcessStep 
              number="04"
              icon={<CheckCircle2 size={32} />}
              title="Paz de Espírito"
              text="Nossa equipe assume o controle total do bar do início ao fim, garantindo um serviço fluido, limpo e impecável."
            />
          </div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section id="relatos" className="py-32 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 text-center md:text-left">
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-5xl sm:text-6xl font-bold uppercase tracking-tighter text-white">Relatos de <span className="text-amber-500 italic">Brindes Épicos</span></h2>
              <p className="text-stone-400 text-xl font-light italic">O que Maringá e região comentam após uma noite com a BA Eventos.</p>
            </div>
            <div className="bg-stone-950 p-8 rounded-3xl border border-stone-800 text-center mx-auto md:mx-0 min-w-[200px] shadow-2xl">
              <p className="text-6xl font-bold text-amber-500 tracking-tighter">4.9</p>
              <div className="flex justify-center text-amber-500 my-2"><Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /></div>
              <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-bold">Nota nas Avaliações</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <TestimonialCard 
              name="Vanessa Oliveira"
              event="Casamento no Luz de Lua"
              text="Gente, o que foi aquele bar? Meu casamento parou pra ver os meninos preparando os drinks. Os bartenders uniformizados trouxeram uma sofisticação incrível. Atendimento nota mil!"
            />
            <TestimonialCard 
              name="Davi Camargo"
              event="Aniversário de 30 Anos"
              text="Chamei pro meu niver e foi a melhor coisa que fiz. A estrutura de decoração própria deles é linda e chamou muito a atenção. Equipe nota 10, energia lá no teto!"
            />
            <TestimonialCard 
              name="Priscila M."
              event="Noivado em Maringá"
              text="Fiquei chocada com a beleza do bar. Os copos de cristal, a decoração impecável... parecia coisa de filme. Meus convidados amaram o atendimento e os drinks impecáveis."
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
              <a href="https://www.instagram.com/baeventosbar/?hl=pt-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-amber-500 transition-colors group" aria-label="Siga-nos no Instagram">
                <Instagram size={20} className="group-hover:rotate-12 transition-transform" /> 
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-amber-500 transition-colors group" aria-label="Curta-nos no Facebook">
                <Facebook size={20} className="group-hover:rotate-12 transition-transform" /> 
                <span>Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 pt-24 border-t border-stone-900">
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Localização</h4>
              <p className="text-stone-400 leading-relaxed text-sm">Base Central: Maringá - PR<br />Atendimento exclusivo em todo o Norte Paranaense.</p>
            </div>
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest">Datas & Orçamentos</h4>
              <p className="text-stone-400 text-sm">Propostas via WhatsApp em até 24h.</p>
            </div>
            <div className="space-y-8 text-center sm:text-left">
              <h4 className="text-white font-bold text-lg uppercase tracking-widest text-amber-500">A Nossa Essência</h4>
              <p className="text-stone-400 text-sm italic leading-relaxed">"Criamos o cenário perfeito para que sua única tarefa seja celebrar. Estrutura própria e arte coqueteleira de alto nível."</p>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-stone-700 uppercase tracking-[0.2em] font-bold text-center">
            <p>© 2024 BA Eventos. Elevando o padrão de brindes em Maringá.</p>
            <div className="flex gap-10">
              <button 
                onClick={() => setIsPrivacyOpen(true)} 
                className="hover:text-stone-400 transition-colors"
              >
                Privacidade
              </button>
              <a href="#" className="hover:text-stone-400 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* CTA Mobile */}
      <div className="fixed bottom-10 right-8 z-50 md:hidden">
        <button 
          onClick={scrollToForm}
          className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
          aria-label="Solicitar orçamento agora"
        >
          <Calendar size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
