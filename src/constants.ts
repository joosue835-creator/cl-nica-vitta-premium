/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Calendar, Clock, MapPin, Phone, Award, Users, Stethoscope, HeartPulse, Sparkles, Microscope } from 'lucide-react';

export const CLINIC_DATA = {
  name: "Clínica Vitta Premium",
  tagline: "Sua saúde sob o cuidado de quem entende.",
  phone: "(11) 98765-4321",
  email: "contato@vittapremium.com.br",
  address: "Av. Brigadeiro Faria Lima, 2000 - Itaim Bibi, São Paulo - SP",
  hours: "Segunda a Sexta: 08h às 20h | Sábado: 08h às 13h",
  googleMapsUrl: "https://www.google.com/maps",
};

export const SERVICES = [
  {
    id: 'checkup',
    title: "Check-up Executivo",
    description: "Avaliação completa e integrada para quem busca prevenção com agilidade e precisão técnica.",
    benefit: "Prevenção precoce e diagnóstico detalhado.",
    icon: Stethoscope,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'especialidades',
    title: "Consultas Especializadas",
    description: "Corpo clínico experiente em Cardiologia, Dermatologia, Ginecologia e Medicina Interna.",
    benefit: "Atendimento focado na sua individualidade.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'estetica',
    title: "Estética Avançada",
    description: "Protocolos seguros e minimamente invasivos para rejuvenescimento e saúde da pele.",
    benefit: "Resultados naturais com segurança clínica.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 'exames',
    title: "Exames Laboratoriais",
    description: "Coleta rápida no local com entrega de resultados online e integração com o prontuário.",
    benefit: "Conforto e rapidez no diagnóstico.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1579154281624-861163e401c7?auto=format&fit=crop&q=80&w=800",
  },
];

export const TEAM = [
  {
    name: "Dra. Helena Martins",
    role: "Diretora Clínica & Cardiologista",
    reg: "CRM-SP 123.456",
    description: "Especialista pela USP com 15 anos de atuação em medicina preventiva e cardiologia de alta complexidade.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dr. Ricardo Santos",
    role: "Dermatologista",
    reg: "CRM-SP 234.567",
    description: "Referência em tecnologias a laser e tratamentos estéticos avançados, com foco em rejuvenescimento natural.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
  },
];

export const TESTIMONIALS = [
  {
    text: "O atendimento é impecável. A sensação de segurança desde a recepção até a consulta é o que me faz recomendar a clínica para toda a minha família.",
    author: "Marcelo Oliveira",
    location: "São Paulo, SP",
  },
  {
    text: "Excelente estrutura. Estive lá para um check-up e fiquei impressionada com a pontualidade e a clareza nas explicações dos médicos.",
    author: "Patrícia Souza",
    location: "Consultora de Vendas",
  },
];

export const STEPS = [
  { title: "Agendamento", description: "Escolha o melhor horário via WhatsApp ou site." },
  { title: "Avaliação", description: "Consulta detalhada para entender seu histórico." },
  { title: "Diagnóstico", description: "Realização de exames com tecnologia de ponta." },
  { title: "Tratamento", description: "Protocolo personalizado focado em resultados." },
];

export const TRUST_INDICATORS = [
  { label: "Anos de Confiança", value: "12+" },
  { label: "Pacientes Atendidos", value: "15k+" },
  { label: "Certificações", value: "8" },
  { label: "Especialistas", value: "14" },
];
