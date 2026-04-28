/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Award, 
  Users, 
  MessageCircle, 
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Star,
  Microscope
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { CLINIC_DATA, SERVICES, TEAM, TESTIMONIALS, STEPS, TRUST_INDICATORS } from './constants';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-secondary selection:text-brand-primary">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-md">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-display font-semibold transition-colors ${isScrolled ? 'text-brand-text' : 'text-brand-text'}`}>
              Vitta<span className="text-brand-primary">Premium</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Especialidades', 'Corpo Clínico', 'Estrutura', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-brand-text hover:text-brand-primary transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`, '_blank')}
              className="btn-primary py-2 text-sm"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-text" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col gap-4 border-t border-gray-100"
          >
             {['Especialidades', 'Corpo Clínico', 'Estrutura', 'Localização'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left py-2 border-b border-gray-50 font-medium"
              >
                {item}
              </button>
            ))}
            <button className="btn-primary w-full mt-2">Agendar Agora</button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/30 rounded-bl-[100px] -z-10 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" />
              Referência em Performance e Bem-Estar
            </div>
            <h1 className="text-5xl lg:text-8xl mb-8 leading-[1.05] font-serif font-light text-brand-text">
              Excelência <br />
              médica para uma <br />
              <span className="text-brand-primary italic font-medium">vida premium.</span>
            </h1>
            <p className="text-brand-muted text-lg mb-10 max-w-lg">
              Oferecemos atendimento médico de alta precisão com infraestrutura moderna, unindo ciência e humanização para sua total segurança.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`, '_blank')}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Agendar Consulta
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('especialidades')}
                className="btn-outline"
              >
                Ver Especialidades
              </button>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
              {TRUST_INDICATORS.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-brand-text">{stat.value}</div>
                  <div className="text-xs text-brand-muted uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200&h=800" 
                alt="Clínica Moderna" 
                className="w-full h-auto object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold">Segurança Garantida</h4>
                    <p className="text-xs text-brand-muted">Protocolos sanitários nível hospitalar.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Float Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" className="bg-brand-secondary/20 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl mb-6 tracking-tight">Especialidades e Serviços</h2>
            <p className="text-brand-muted leading-relaxed">
              Tratamentos integrados com o que há de mais moderno na medicina. Tecnologia de ponta aliada a um atendimento acolhedor.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-brand-primary transition-colors">
                    <service.icon className="text-brand-primary group-hover:text-white transition-colors w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-brand-text">{service.title}</h3>
                  <p className="text-sm text-brand-muted mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest border-t border-gray-50 pt-4 cursor-pointer hover:gap-3 transition-all mt-auto"
                    onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}?text=Olá, gostaria de saber mais sobre ${service.title}`, '_blank')}
                  >
                    Saiba mais <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="corpo-clínico" className="section-padding">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl mb-6">Excelência <br />que cuida de você.</h2>
            <p className="text-brand-muted mb-8 italic">
              "Nossa missão é oferecer uma medicina baseada em evidências, com olhar cuidadoso sobre cada paciente."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span className="text-sm font-medium">Médicos titulados e experientes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span className="text-sm font-medium">Atualização acadêmica constante</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-brand-accent w-5 h-5" />
                <span className="text-sm font-medium">Registro profissional verificado</span>
              </div>
            </div>
            <button className="btn-primary mt-10 w-full lg:w-auto">Conhecer Equipe Completa</button>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {TEAM.map((doc, index) => (
              <motion.div 
                key={doc.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-3xl shadow-lg border border-gray-50">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end text-white">
                    <p className="text-xs uppercase tracking-widest font-bold mb-2">Resumo</p>
                    <p className="text-sm leading-relaxed">{doc.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold">{doc.name}</h4>
                  <p className="text-brand-primary text-sm font-semibold">{doc.role}</p>
                  <p className="text-brand-muted text-xs mt-1 uppercase tracking-tighter">{doc.reg}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure Section */}
      <section id="estrutura" className="bg-brand-text py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[600px]">
                <div className="col-span-8 row-span-7 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                    alt="Instalações" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-4 row-span-5 rounded-3xl overflow-hidden shadow-2xl mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" 
                    alt="Equipamentos" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-4 row-span-5 rounded-3xl overflow-hidden shadow-2xl -mt-12">
                  <img 
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" 
                    alt="Higiene" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="col-span-8 row-span-5 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-217359f4b14d?auto=format&fit=crop&q=80&w=800" 
                    alt="Staff" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary p-8 rounded-full border-[12px] border-brand-text shadow-2xl">
                 <ShieldCheck className="w-12 h-12 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-5xl mb-12 leading-tight font-serif">Tecnologia de ponta <br />e ambiente acolhedor.</h2>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <div className="text-brand-primary p-4 bg-white/10 rounded-2xl h-fit group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Microscope size={28} />
                  </div>
                  <div>
                    <h5 className="text-2xl mb-3 font-semibold">Diagnóstico por Imagem</h5>
                    <p className="text-brand-secondary/60 text-lg leading-relaxed">Equipamentos de última geração para exames precisos e diagnósticos precoces, garantindo agilidade no início do tratamento.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-brand-primary p-4 bg-white/10 rounded-2xl h-fit group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h5 className="text-2xl mb-3 font-semibold">Biossegurança Hospitalar</h5>
                    <p className="text-brand-secondary/60 text-lg leading-relaxed">Protocolos rigorosos de esterilização e filtragem de ar, superando as exigências regulatórias para sua total tranquilidade.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="text-brand-primary p-4 bg-white/10 rounded-2xl h-fit group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Users size={28} />
                  </div>
                  <div>
                    <h5 className="text-2xl mb-3 font-semibold">Design Terapêutico</h5>
                    <p className="text-brand-secondary/60 text-lg leading-relaxed">Ambientes planejados para proporcionar conforto sensorial, reduzindo o estresse e promovendo o bem-estar desde a chegada.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl mb-4">Sua Jornada Conosco</h2>
          <p className="text-brand-muted">Processo simplificado para focar o que importa: sua saúde.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 relative">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary font-bold text-xl border-4 border-white shadow-sm">
                0{index + 1}
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-xs text-brand-muted px-4 leading-relaxed">{step.description}</p>
              {index < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] border-t-2 border-dashed border-brand-secondary -z-10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-secondary/30 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-lg">
              <h2 className="text-4xl mb-6">O que nossos pacientes <br />dizem sobre nós.</h2>
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
                <span className="ml-2 text-brand-text font-bold">4.9/5</span>
              </div>
              <p className="text-sm text-brand-muted uppercase tracking-widest">Baseado em +500 avaliações no Google</p>
            </div>
            <button className="btn-outline flex items-center gap-2">
              Ver Todas Avaliações <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[40px] shadow-sm relative italic"
              >
                <div className="text-brand-primary/10 absolute top-8 left-8">
                  <MessageCircle size={80} fill="currentColor" />
                </div>
                <p className="text-lg relative z-10 leading-relaxed text-brand-text mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center font-bold text-brand-primary">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-text leading-none mb-1">{t.author}</h5>
                    <p className="text-xs text-brand-muted">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 font-serif">Perguntas Frequentes</h2>
            <p className="text-brand-muted">Tire suas principais dúvidas sobre nossos atendimentos.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "A clínica aceita convênios?", a: "Trabalhamos predominantemente com atendimento particular e sistema de reembolso. Entre em contato para verificar se seu plano possui essa modalidade." },
              { q: "Como funciona o Check-up Executivo?", a: "É um protocolo de um único dia onde realizamos todos os exames e consultas necessárias, otimizando seu tempo com máxima precisão." },
              { q: "Onde posso estacionar?", a: "Possuímos estacionamento privativo com manobrista no local para sua total conveniência e segurança." },
              { q: "Quais são os horários de coleta de exames?", a: "Nossa coleta laboratorial funciona de segunda a sexta, das 07h às 12h, e aos sábados das 08h às 11h." }
            ].map((item, i) => (
              <details key={i} className="group bg-brand-secondary/30 rounded-2xl p-6 cursor-pointer border border-transparent hover:border-brand-primary/20 transition-all">
                <summary className="flex items-center justify-between font-bold text-brand-text list-none">
                  {item.q}
                  <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-brand-muted leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localização" className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-8">Onde Estamos</h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <MapPin className="text-brand-primary flex-shrink-0" />
                <div>
                  <h6 className="font-bold mb-1">Endereço</h6>
                  <p className="text-brand-muted text-sm">{CLINIC_DATA.address}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="text-brand-primary flex-shrink-0" />
                <div>
                  <h6 className="font-bold mb-1">Horário de Atendimento</h6>
                  <p className="text-brand-muted text-sm">{CLINIC_DATA.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-brand-primary flex-shrink-0" />
                <div>
                  <h6 className="font-bold mb-1">Telefone & WhatsApp</h6>
                  <p className="text-brand-muted text-sm">{CLINIC_DATA.phone}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(CLINIC_DATA.googleMapsUrl, '_blank')}
                className="btn-primary"
              >
                Ver no Google Maps
              </button>
              <button 
                onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`, '_blank')}
                className="btn-outline flex items-center justify-center gap-2"
              >
                Conversar Agora <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-[500px] bg-brand-secondary rounded-[40px] overflow-hidden shadow-inner border border-gray-100 flex items-center justify-center text-brand-muted flex-col p-10 text-center">
             <MapPin size={48} className="mb-4 opacity-20" />
             <p className="max-w-xs">Mapa interativo será renderizado aqui com o endereço {CLINIC_DATA.address}</p>
             <div className="mt-8 p-4 bg-white/50 rounded-xl border border-white/20 text-xs italic">
                Próximo ao Metrô e com Estacionamento no Local.
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Pronto para dar o próximo passo <br />pela sua saúde?</h2>
          <p className="text-brand-secondary/70 mb-12 text-lg">Nossa equipe está pronta para te receber com exclusividade e segurança.</p>
          <button 
            onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`, '_blank')}
            className="bg-white text-brand-primary px-12 py-5 rounded-full font-bold text-lg hover:bg-brand-secondary transition-all active:scale-95 shadow-2xl flex items-center gap-3 mx-auto"
          >
            Falar com a Clínica <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </section>

      <footer className="bg-brand-text text-white/90 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                  <ShieldCheck className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-display font-semibold tracking-tight text-white">
                  Vitta<span className="text-brand-primary">Premium</span>
                </span>
              </div>
              <p className="text-brand-secondary/60 leading-relaxed mb-8 max-w-xs">
                Referência em medicina de precisão e atendimento personalizado. Nosso compromisso é com a sua saúde em cada detalhe.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-brand-primary hover:text-white transition-all border border-white/10">
                    <span className="sr-only">{social}</span>
                    <Users size={18} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Acesso Rápido</h6>
              <ul className="space-y-4">
                {['Especialidades', 'Corpo Clínico', 'Estrutura', 'Localização'].map(item => (
                  <li key={item}>
                    <button 
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                      className="hover:text-brand-primary transition-colors text-brand-secondary/60"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Unidade Itaim</h6>
              <ul className="space-y-4 text-brand-secondary/60 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-brand-primary shrink-0" />
                  <span>{CLINIC_DATA.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-brand-primary shrink-0" />
                  <span>{CLINIC_DATA.phone}</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="text-brand-primary shrink-0" />
                  <span>{CLINIC_DATA.hours}</span>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Institucional</h6>
              <ul className="space-y-4 text-brand-secondary/60 text-sm">
                <li>Diretor Técnico: Dra. Helena Martins</li>
                <li>CRM-SP: 123.456</li>
                <li>Política de Privacidade</li>
                <li>Termos de Uso</li>
                <li className="pt-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider border border-brand-primary/30">
                    Selo ANVISA 2024
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-brand-secondary/40">
            <p>© 2024 {CLINIC_DATA.name}. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <span>Saúde</span>
              <span>•</span>
              <span>Bem-estar</span>
              <span>•</span>
              <span>Excelência</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => window.open(`https://wa.me/${CLINIC_DATA.phone.replace(/\D/g, '')}`, '_blank')}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-brand-accent text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.button>
    </div>
  );
}
