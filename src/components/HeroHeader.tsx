import React from 'react';
import type { CardapioData } from '../utils/menuData';
import { MenuImage } from './MenuImage';

interface HeroHeaderProps {
  restaurante: CardapioData['restaurante'];
}

const STARS = [
  { top: '12%', left: '8%', size: 'w-1.5 h-1.5', delay: '0s' },
  { top: '22%', left: '18%', size: 'w-1 h-1', delay: '0.7s' },
  { top: '10%', left: '30%', size: 'w-1.5 h-1.5', delay: '1.3s' },
  { top: '16%', left: '72%', size: 'w-2 h-2', delay: '0.4s' },
  { top: '10%', left: '85%', size: 'w-1 h-1', delay: '1.1s' },
  { top: '28%', left: '91%', size: 'w-1.5 h-1.5', delay: '1.8s' },
  { top: '36%', left: '12%', size: 'w-1 h-1', delay: '2.1s' },
  { top: '34%', left: '80%', size: 'w-1 h-1', delay: '0.9s' },
];

export function HeroHeader({ restaurante }: HeroHeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-[#060A15] via-[#0A0F1F] to-[#0E1530] pt-4 pb-3 px-4 border-b border-[#F7B500]/20">
      {/* Estrelinhas decorativas no céu noturno */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {STARS.map((star, idx) => (
          <span
            key={idx}
            style={{ top: star.top, left: star.left, animationDelay: star.delay }}
            className={`star-twinkle absolute rounded-full bg-[#FFC21A] ${star.size}`}
          />
        ))}
        {/* Estrela dourada maior ao lado do arco, fiel ao cardápio */}
        <svg
          viewBox="0 0 24 24"
          className="star-twinkle absolute top-5 right-[18%] sm:right-[30%] w-4 h-4 text-[#F7B500]"
        >
          <polygon
            points="12,2 14.9,8.6 22,9.3 16.6,14 18.2,21 12,17.3 5.8,21 7.4,14 2,9.3 9.1,8.6"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px] flex flex-col items-center text-center">
        {/* Emblema superior: Arco dourado + Hambúrguer + Silhueta dos Prédios em SVG */}
        <div className="relative w-56 sm:w-64 h-28 sm:h-32 flex items-end justify-center">
          {/* Arco circular dourado ao fundo */}
          <div
            className="absolute inset-x-6 top-1 bottom-0 rounded-t-full border-2 border-b-0 border-[#F7B500]/85 bg-gradient-to-b from-[#131E3A]/60 to-[#0A0F1F]"
            aria-hidden="true"
          />

          {/* Foto do hambúrguer do logo */}
          <div className="relative z-10 w-28 sm:w-32 h-24 sm:h-28 overflow-hidden rounded-t-full flex items-center justify-center">
            <MenuImage
              src={restaurante.logoFoto}
              alt="Hambúrguer artesanal da lanchonete Hambúrguer Nas Alturas"
              width={240}
              height={180}
              priority={false}
              className="w-full h-full object-cover scale-110"
              fallbackTitle="Nas Alturas"
            />
          </div>

          {/* Silhueta da cidade iluminada em SVG na base do emblema */}
          <svg
            viewBox="0 0 320 60"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 w-full h-12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Prédios esquerdistas e direitistas em azul-noite escuro */}
            <path
              d="M0 60V34h16v-8h18v12h10V18h22v14h14V24h18v22h124V22h18v10h14V16h22v20h10V26h18v8h16v26H0z"
              fill="#070B16"
            />
            {/* Janelinhas acesas em amarelo-mostarda */}
            <g fill="#F7B500" opacity="0.9">
              <rect x="20" y="30" width="3" height="3" />
              <rect x="26" y="30" width="3" height="3" />
              <rect x="20" y="36" width="3" height="3" />
              <rect x="26" y="36" width="3" height="3" />
              <rect x="48" y="23" width="3" height="3" />
              <rect x="54" y="23" width="3" height="3" />
              <rect x="60" y="23" width="3" height="3" />
              <rect x="48" y="29" width="3" height="3" />
              <rect x="54" y="29" width="3" height="3" />
              <rect x="48" y="35" width="3" height="3" />
              <rect x="84" y="28" width="3" height="3" />
              <rect x="90" y="28" width="3" height="3" />
              <rect x="84" y="34" width="3" height="3" />

              <rect x="226" y="26" width="3" height="3" />
              <rect x="232" y="26" width="3" height="3" />
              <rect x="226" y="32" width="3" height="3" />
              <rect x="258" y="20" width="3" height="3" />
              <rect x="264" y="20" width="3" height="3" />
              <rect x="270" y="20" width="3" height="3" />
              <rect x="258" y="26" width="3" height="3" />
              <rect x="264" y="26" width="3" height="3" />
              <rect x="270" y="32" width="3" height="3" />
              <rect x="290" y="30" width="3" height="3" />
              <rect x="296" y="30" width="3" height="3" />
              <rect x="290" y="36" width="3" height="3" />
            </g>
          </svg>
        </div>

        {/* Título principal e subtítulo cursivo */}
        <h1 className="mt-0.5 flex flex-col items-center leading-none">
          <span className="font-display text-4xl sm:text-5xl tracking-[0.06em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {restaurante.nome}
          </span>
          <span className="mt-0.5 flex items-center gap-2.5 text-[#F7B500]">
            <span className="h-[2px] w-7 sm:w-10 bg-[#F7B500] rounded-full" aria-hidden="true" />
            <span className="font-script text-2xl sm:text-3xl tracking-wide text-[#FFC21A]">
              {restaurante.subtitulo}
            </span>
            <span className="h-[2px] w-7 sm:w-10 bg-[#F7B500] rounded-full" aria-hidden="true" />
          </span>
        </h1>

        {/* 3 Estrelinhas e Slogan em arco */}
        <div className="mt-1 flex flex-col items-center">
          <div className="flex items-center gap-1.5 text-[#F7B500]" aria-hidden="true">
            <span className="text-xs">★</span>
            <span className="text-sm">★</span>
            <span className="text-xs">★</span>
          </div>
          <p className="mt-0.5 px-4 py-0.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#E8E8E8] border-b-2 border-[#F7B500]/75 rounded-b-2xl">
            {restaurante.slogan}
          </p>
        </div>
      </div>
    </header>
  );
}
