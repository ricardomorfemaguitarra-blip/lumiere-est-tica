/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Clock,
  Menu,
  X,
  Star,
  ShieldCheck,
  Zap,
  Users
} from "lucide-react";
import { useState } from "react";

const PROCEDURES = [
  {
    id: "harm-facial",
    title: "Harmonização Facial",
    desc: "Realce seus traços com naturalidade e equilíbrio.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "botox",
    title: "Botox (Toxina Botulínica)",
    desc: "Prevenção e suavização de linhas de expressão.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: "preenchimento",
    title: "Preenchimento Labial",
    desc: "Volume e hidratação para lábios perfeitos.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    id: "limpeza",
    title: "Limpeza de Pele Professional",
    desc: "Remoção de impurezas e renovação celular.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "corporal",
    title: "Tratamentos Corporais",
    desc: "Tecnologia para redução de medidas e flacidez.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "rejuvenescimento",
    title: "Rejuvenescimento Facial",
    desc: "Protocolos exclusivos para estímulo de colágeno.",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const TESTIMONIALS = [
  {
    name: "Ana Silveira",
    comment: "A melhor clínica que já frequentei. O atendimento é impecável e os resultados superaram minhas expectativas.",
    stars: 5
  },
  {
    name: "Marina Costa",
    comment: "Finalmente encontrei profissionais que valorizam a beleza natural. Recomendo de olhos fechados!",
    stars: 5
  },
  {
    name: "Beatriz Mello",
    comment: "Ambiente sofisticado e acolhedor. Me sinto cuidada em cada detalhe do tratamento.",
    stars: 5
  }
];

const DIFFERENTIALS = [
  { title: "Atendimento Personalizado", desc: "Cada protocolo é único, desenhado para suas necessidades." },
  { title: "Equipamentos Modernos", desc: "Tecnologia de última geração com registros internacionais." },
  { title: "Protocolos Seguros", desc: "Segurança total em todos os procedimentos realizados." },
  { title: "Resultados Naturais", desc: "Nossa filosofia é realçar, nunca transformar artificialmente." },
  { title: "Avaliação Individualizada", desc: "Diagnóstico preciso antes de qualquer intervenção." }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Procedimentos", href: "#procedures" },
    { name: "Sobre", href: "#about" },
    { name: "Diferenciais", href: "#why-us" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-brand-primary selection:bg-brand-accent/30 selection:text-brand-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 premium-blur border-b border-brand-nude">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="text-2xl font-sans tracking-[4px] uppercase text-brand-ink flex items-center gap-2">
            LUMINA <span className="text-brand-accent font-light">ESTÉTICA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link-polish"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511999999999" 
              className="btn-primary-polish !py-2 !px-6"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-brand-primary border-b border-brand-ink/5 px-6 py-10 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-medium text-center"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-15 grayscale brightness-110"
          >
            <source 
              src="https://assets.mixkit.co/videos/preview/mixkit-dermatologist-applying-a-moisturizing-mask-to-a-patient-inner-face-41551-large.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-semibold flex items-center gap-3">
                <div className="w-10 h-px bg-brand-nude"></div> Procedimentos Avançados
              </span>
              <h1 className="text-[52px] font-light leading-[1.1]">
                Realce sua <span className="italic text-brand-accent">beleza natural</span> com tecnologia e cuidado.
              </h1>
              <p className="text-brand-gray text-lg max-w-md font-light leading-relaxed">
                Tratamentos estéticos avançados em um ambiente exclusivo, focado em resultados reais e segurança absoluta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary-polish flex items-center justify-center gap-2 group shadow-lg shadow-brand-ink/10"
              >
                Agendar Avaliação <Calendar className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://wa.me/5511999999999" 
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary-polish flex items-center justify-center"
              >
                Falar no WhatsApp
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             className="hidden md:flex justify-end items-center"
          >
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <div className="absolute inset-0 border border-brand-accent translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Clínica Moderna" 
                className="w-full h-full object-cover relative z-10 grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
           <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
           <div className="w-px h-12 bg-brand-ink animate-pulse"></div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold italic">Nossos Serviços</span>
            <h2 className="text-4xl md:text-5xl font-light">Procedimentos Exclusivos</h2>
            <div className="w-20 h-px bg-brand-accent mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCEDURES.map((proc, index) => (
              <motion.div 
                key={proc.id} 
                {...fadeIn} 
                transition={{ delay: index * 0.1 }}
                className="card-polish group p-6 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4 text-brand-accent group-hover:scale-115 transition-transform duration-500 inline-block">
                  {proc.icon}
                </div>
                <h3 className="text-[13px] uppercase tracking-wider font-semibold mb-2 text-brand-accent">{proc.title}</h3>
                <p className="text-brand-gray text-[11px] font-light leading-relaxed mb-4">
                  {proc.desc}
                </p>
                <a href="#contact" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-brand-accent group-hover:text-brand-ink transition-all duration-300">
                  Saiba mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative overflow-hidden bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn} className="relative order-2 md:order-1 flex flex-col sm:flex-row gap-6 items-end">
             <div className="w-full sm:w-2/3 aspect-[4/5] relative overflow-hidden oval-image shadow-2xl z-10">
               <img 
                 src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                 alt="Profissional Especialista" 
                 className="w-full h-full object-cover grayscale"
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="w-1/2 hidden sm:block aspect-square relative overflow-hidden rounded-full shadow-xl border-4 border-brand-primary -ml-20 mb-10 z-20">
               <img 
                 src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800" 
                 alt="Sessão de Tratamento" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <div className="absolute -bottom-10 -right-6 bg-brand-nude p-8 md:p-10 border border-brand-ink/5 max-w-[200px] hidden lg:block z-30">
               <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-3 italic">Excelência</p>
               <p className="text-brand-ink font-serif text-sm leading-snug">"O segredo da estética premium está no equilíbrio."</p>
             </div>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-8 order-1 md:order-2">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold italic">Sobre a Clínica</span>
            <h2 className="text-4xl md:text-6xl font-light leading-tight italic-small">
               Inovação e <span className="italic">atendimento humanizado</span> em um só lugar.
            </h2>
            <div className="space-y-6 text-brand-gray font-light text-lg italic-small">
              <p>
                Nossa clínica nasceu do desejo de unir a ciência estética mais avançada com uma experiência de acolhimento verdadeiramente personalizada.
              </p>
              <p>
                Contamos com profissionais altamente qualificados e uma curadoria rigorosa de tecnologias, garantindo que cada cliente receba o que há de melhor no mundo da beleza.
              </p>
            </div>
            
            <ul className="grid grid-cols-2 gap-4 pt-6">
              {[
                "Profissionais Qualificados",
                "Tecnologia de Ponta",
                "Atendimento Individual",
                "Ambiente Confortável"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-brand-ink uppercase tracking-widest font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-brand-ink text-brand-primary">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center space-y-4 mb-20">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold">Prova Social</span>
            <h2 className="text-4xl md:text-5xl font-light">O que dizem nossas clientes</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t, index) => (
              <motion.div 
                key={t.name}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="p-10 border border-brand-primary/10 flex flex-col items-center text-center space-y-6"
              >
                <div className="flex gap-1 text-brand-accent">
                  {[...Array(t.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-brand-accent" />)}
                </div>
                <p className="font-serif italic text-xl leading-relaxed opacity-90 relative pl-6 before:content-['“'] before:absolute before:left-0 before:top-0 before:text-brand-accent before:text-4xl before:leading-none">
                  {t.comment}
                </p>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest font-bold">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Cliente Verificada</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="why-us" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
          <motion.div {...fadeIn} className="lg:w-1/2 space-y-8">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold">Nossos Diferenciais</span>
            <h2 className="text-4xl md:text-5xl font-light">Por que escolher a Lumière?</h2>
            <p className="text-brand-gray text-lg font-light leading-relaxed">
              Nosso compromisso vai além do espelho. Buscamos elevar sua autoestima com um atendimento que respeita sua individualidade.
            </p>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6 w-full">
            {DIFFERENTIALS.map((diff, index) => (
              <motion.div 
                key={diff.title}
                {...fadeIn}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 p-6 border border-brand-ink/5 hover:border-brand-accent transition-all group"
              >
                <div className="text-brand-accent font-serif text-3xl opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                <div className="space-y-1">
                  <h4 className="text-lg uppercase tracking-widest font-semibold">{diff.title}</h4>
                  <p className="text-brand-gray text-sm font-light">{diff.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-32 bg-brand-nude">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold">Onde Estamos</span>
              <h2 className="text-4xl md:text-5xl font-light leading-tight">Venha nos visitar em um espaço planejado para você.</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest font-bold">Endereço</p>
                  <p className="text-brand-gray text-sm font-light">Av. Ana Costa, 146 - conj. 512<br/>Vila Matias, Santos - SP, 11060-002</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-brand-accent shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest font-bold">Horário de Funcionamento</p>
                  <p className="text-brand-gray text-sm font-light">Segunda à Sexta: 09h às 19h<br/>Sábados: 09h às 13h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest font-bold">Telefone</p>
                  <p className="text-brand-gray text-sm font-light">(11) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/5511999999999" 
                className="bg-brand-ink text-brand-primary px-10 py-5 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-brand-gray transition-all inline-block w-full sm:w-auto text-center"
              >
                Como Chegar
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="w-full aspect-square md:aspect-auto md:h-full min-h-[400px] bg-brand-primary border border-brand-ink/10 relative overflow-hidden group">
             {/* Google Maps Real Integration */}
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade"
               src="https://maps.google.com/maps?q=Av.%20Ana%20Costa,%20146%20-%20conj.%20512%20-%20Vila%20Matias,%20Santos%20-%20SP,%2011060-002&t=&z=15&ie=UTF8&iwloc=&output=embed"
               className="grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 h-full w-full"
             ></iframe>
             
             {/* Fallback pattern in case Google Maps key is not set or to maintain aesthetic */}
             <div className="absolute inset-0 pointer-events-none border border-brand-ink/10 z-10"></div>
             
             <div className="absolute bottom-6 left-6 right-6 p-6 premium-blur border border-brand-ink/5 flex items-center justify-between z-20">
                <p className="text-[10px] uppercase tracking-widest font-bold">Localização Premium</p>
                <div className="w-10 h-10 border border-brand-ink/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <motion.div {...fadeIn} className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-semibold italic">Transformação</span>
            <h2 className="text-4xl md:text-6xl font-light">Pronta para transformar sua autoestima?</h2>
            <p className="text-brand-gray text-lg font-light max-w-2xl mx-auto italic-small">
              A jornada para sua melhor versão começa com uma conversa. Agende sua avaliação personalizada hoje mesmo.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <motion.a 
              href="https://wa.me/5511999999999" 
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary-polish !px-10 !py-5 shadow-xl shadow-brand-ink/10"
            >
              Agendar Avaliação Agora
            </motion.a>
            <motion.a 
              href="https://wa.me/5511999999999" 
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary-polish !px-10 !py-5 flex items-center justify-center gap-3"
            >
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-40 h-[1px] bg-brand-ink/10 hidden lg:block"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-40 h-[1px] bg-brand-ink/10 hidden lg:block"></div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-white border-t border-brand-nude py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <a href="#home" className="text-xl font-sans tracking-[4px] uppercase text-brand-ink flex items-center gap-2">
              LUMINA <span className="text-brand-accent font-light">ESTÉTICA</span>
            </a>
            <p className="text-brand-gray text-xs font-light leading-relaxed max-w-[200px]">
              Especialistas em dermatologia estética funcional com foco em resultados naturais.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <div className="text-[10px] uppercase tracking-widest text-brand-gray border-l-2 border-brand-nude pl-3">Equipamentos Modernos</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-gray border-l-2 border-brand-nude pl-3">Resultados Naturais</div>
              <div className="text-[10px] uppercase tracking-widest text-brand-gray border-l-2 border-brand-nude pl-3">Atendimento VIP</div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Links Rápidos</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-gray text-[10px] uppercase tracking-widest hover:text-brand-accent transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
             <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Jurídico</p>
             <ul className="space-y-3">
               <li><a href="#" className="text-brand-gray text-[10px] uppercase tracking-widest hover:text-brand-accent transition-colors underline underline-offset-4 decoration-brand-nude">Políticas de Privacidade</a></li>
               <li><a href="#" className="text-brand-gray text-[10px] uppercase tracking-widest hover:text-brand-accent transition-colors underline underline-offset-4 decoration-brand-nude">Termos de Uso</a></li>
               <li><a href="#" className="text-brand-gray text-[10px] uppercase tracking-widest hover:text-brand-accent transition-colors underline underline-offset-4 decoration-brand-nude">Aviso Responsabilidade</a></li>
             </ul>
          </div>

          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Novidades</p>
            <p className="text-brand-gray text-[10px] uppercase tracking-widest leading-relaxed">Assine para receber convites para eventos exclusivos da clínica.</p>
            <div className="flex border-b border-brand-nude pb-2">
              <input 
                type="email" 
                placeholder="SEU EMAIL" 
                className="bg-transparent text-[10px] uppercase tracking-widest w-full outline-none placeholder:text-brand-gray/50"
              />
              <button className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">Enviar</button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-brand-ink/5 flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[9px] uppercase tracking-[0.3em] text-brand-gray">© 2026 Clínica Lumière. Todos os direitos reservados.</p>
          <p className="text-[9px] uppercase tracking-[0.3em] text-brand-gray">RT: Dra. Mariana Valente • CRM/SP 000000</p>
        </div>
      </footer>
    </div>
  );
}

