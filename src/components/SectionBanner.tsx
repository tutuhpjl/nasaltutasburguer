import React from 'react';
import { SectionBannerIcon } from './MenuIcons';

interface SectionBannerProps {
  id?: string;
  titulo: string;
  subtitulo?: string;
  icone: 'hamburguer' | 'bebidas' | 'sucos' | 'adicionais';
  variant?: 'yellow-brush' | 'natural-green';
}

export function SectionBanner({
  id,
  titulo,
  subtitulo,
  icone,
  variant = 'yellow-brush',
}: SectionBannerProps) {
  if (variant === 'natural-green') {
    return (
      <div className="mb-5 flex items-center gap-2.5 border-b border-[#F7B500]/30 pb-2.5">
        <SectionBannerIcon tipo={icone} className="w-8 h-8 shrink-0" />
        <h2
          id={id}
          className="font-display text-2xl sm:text-3xl tracking-wider uppercase text-white flex items-baseline gap-2"
        >
          <span>{titulo}</span>
          {subtitulo && (
            <span className="font-sans text-sm sm:text-base font-medium text-[#E8E8E8] normal-case">
              {subtitulo}
            </span>
          )}
        </h2>
      </div>
    );
  }

  return (
    <div className="mb-6 flex items-center">
      <div className="brush-banner relative inline-flex items-center gap-3 bg-[#F7B500] text-[#0A0F1F] px-5 py-2.5 rounded-r-xl rounded-l-md shadow-[0_4px_14px_rgba(247,181,0,0.22)]">
        <SectionBannerIcon tipo={icone} className="w-7 h-7 shrink-0" />
        <h2
          id={id}
          className="font-display text-2xl sm:text-3xl font-bold tracking-[0.06em] uppercase text-[#0A0F1F] leading-none"
        >
          {titulo}
        </h2>
        {subtitulo && (
          <span className="font-sans text-xs sm:text-sm font-bold text-[#0A0F1F]/85">
            {subtitulo}
          </span>
        )}
      </div>
    </div>
  );
}
