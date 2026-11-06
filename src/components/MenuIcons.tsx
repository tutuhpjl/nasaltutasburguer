import React from 'react';
import type { AddonIconType, BurgerIconType, FruitIconType } from '../utils/menuData';

export function BurgerThemeIcon({
  tipo,
  className = 'w-8 h-8 shrink-0',
}: {
  tipo: BurgerIconType;
  className?: string;
}) {
  switch (tipo) {
    case 'lua':
      return (
        <svg
          viewBox="0 0 40 40"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="20" cy="20" r="18" fill="#1D5B9E" />
          <path
            d="M23.5 10.5A10.5 10.5 0 1 0 30 25.2a8.8 8.8 0 0 1-11.2-11.2 10.2 10.2 0 0 1 4.7-3.5z"
            fill="#FFFFFF"
          />
          <circle cx="27" cy="14" r="1.3" fill="#FFFFFF" />
          <circle cx="30" cy="19" r="1" fill="#FFFFFF" />
          <circle cx="13" cy="28" r="1" fill="#FFFFFF" />
        </svg>
      );
    case 'sol':
      return (
        <svg
          viewBox="0 0 40 40"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="20" cy="20" r="9.5" fill="#F7B500" />
          {/* 8 raios triangulares como no cardápio original */}
          <polygon points="20,2 17.5,8.5 22.5,8.5" fill="#F7B500" />
          <polygon points="20,38 17.5,31.5 22.5,31.5" fill="#F7B500" />
          <polygon points="2,20 8.5,17.5 8.5,22.5" fill="#F7B500" />
          <polygon points="38,20 31.5,17.5 31.5,22.5" fill="#F7B500" />
          <polygon points="7.3,7.3 13.2,10.2 10.2,13.2" fill="#F7B500" />
          <polygon points="32.7,7.3 26.8,10.2 29.8,13.2" fill="#F7B500" />
          <polygon points="7.3,32.7 13.2,29.8 10.2,26.8" fill="#F7B500" />
          <polygon points="32.7,32.7 26.8,29.8 29.8,26.8" fill="#F7B500" />
        </svg>
      );
    case 'ceu':
      return (
        <svg
          viewBox="0 0 40 40"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <circle cx="20" cy="20" r="18" fill="#38BDF8" />
          <path
            d="M12.5 25.5h15.5a4.5 4.5 0 0 0 .6-8.96A6.5 6.5 0 0 0 16 15.2a5.2 5.2 0 0 0-3.5 10.3z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'estrela':
      return (
        <svg
          viewBox="0 0 40 40"
          className={className}
          aria-hidden="true"
          focusable="false"
        >
          <polygon
            points="20,3 24.9,13.6 36.5,15.1 27.9,23.1 30.1,34.6 20,28.9 9.9,34.6 12.1,23.1 3.5,15.1 15.1,13.6"
            fill="#F7B500"
          />
        </svg>
      );
  }
}

export function SectionBannerIcon({
  tipo,
  className = 'w-7 h-7 shrink-0',
}: {
  tipo: 'hamburguer' | 'bebidas' | 'sucos' | 'adicionais';
  className?: string;
}) {
  switch (tipo) {
    case 'hamburguer':
      return (
        <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
          <path
            d="M6 16c0-6 5.4-10 12-10s12 4 12 10H6z"
            fill="#0A0F1F"
          />
          <ellipse cx="14" cy="11" rx="1.3" ry="0.7" fill="#F7B500" />
          <ellipse cx="18" cy="9.5" rx="1.3" ry="0.7" fill="#F7B500" />
          <ellipse cx="22" cy="11" rx="1.3" ry="0.7" fill="#F7B500" />
          <rect x="5" y="18.5" width="26" height="4.5" rx="2.2" fill="#0A0F1F" />
          <path
            d="M6 25.5h24c0 3-2.5 5-6 5H12c-3.5 0-6-2-6-5z"
            fill="#0A0F1F"
          />
        </svg>
      );
    case 'bebidas':
      return (
        <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
          {/* Canudo */}
          <path
            d="M20 3l-2.5 9"
            stroke="#0A0F1F"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* Tampa */}
          <rect x="9" y="11" width="18" height="3.2" rx="1.5" fill="#0A0F1F" />
          {/* Copo */}
          <path d="M11 15.5h14l-1.8 16.5H12.8L11 15.5z" fill="#0A0F1F" />
        </svg>
      );
    case 'sucos':
      return (
        <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
          <path
            d="M8 26C8 14 18 8 28 8c0 10-6 18-18 18z"
            fill="#4ADE80"
          />
          <path
            d="M8 26c6-6 12-10 20-18"
            stroke="#0A0F1F"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 20c0-7 6-11 12-11 0 6-4 11-12 11z"
            fill="#86EFAC"
          />
        </svg>
      );
    case 'adicionais':
      return (
        <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
          <circle cx="18" cy="18" r="14" fill="#0A0F1F" />
          <path
            d="M18 11v14M11 18h14"
            stroke="#F7B500"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function DrinkGroupIcon({
  tipo,
  className = 'w-6 h-6 shrink-0',
}: {
  tipo: 'gota' | 'copo-refrigerante';
  className?: string;
}) {
  if (tipo === 'gota') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path
          d="M16 3C16 3 6 14.2 6 20.5A10 10 0 0 0 26 20.5C26 14.2 16 3 16 3z"
          fill="#38BDF8"
        />
        <path
          d="M11.5 19.5c0 2.8 1.8 5 4 5.5"
          stroke="#BAE6FD"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M18 3l3-1v8"
        stroke="#F87171"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="8" y="9" width="16" height="2.5" rx="1.2" fill="#F1F5F9" />
      <path d="M9.5 12h13l-1.5 16.5h-10L9.5 12z" fill="#EF4444" />
      <path d="M10.2 18h11.6l-.4 4.5H10.6L10.2 18z" fill="#FCA5A5" opacity="0.4" />
    </svg>
  );
}

export function FruitIcon({
  tipo,
  className = 'w-6 h-6 shrink-0',
}: {
  tipo: FruitIconType;
  className?: string;
}) {
  switch (tipo) {
    case 'abacaxi':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          {/* Coroa verde */}
          <path d="M16 3l-4 7h8l-4-7zM11 5l2 5h6l2-5-5 2-5-2z" fill="#22C55E" />
          {/* Corpo do abacaxi */}
          <ellipse cx="16" cy="20" rx="7.5" ry="9" fill="#F59E0B" />
          <path
            d="M11 15l10 10M21 15L11 25M13 12l8 8M19 12l-8 8"
            stroke="#FEF3C7"
            strokeWidth="1.2"
            opacity="0.65"
          />
        </svg>
      );
    case 'acerola':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <path
            d="M12 16c1-6 5-9 10-10M21 17c0-5 1-8 3-11"
            stroke="#4ADE80"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="11.5" cy="21" r="6.5" fill="#DC2626" />
          <circle cx="21.5" cy="21.5" r="6" fill="#EF4444" />
          <circle cx="9.5" cy="19" r="1.5" fill="#FCA5A5" />
          <circle cx="19.5" cy="19.5" r="1.3" fill="#FCA5A5" />
        </svg>
      );
    case 'cupuacu':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <ellipse cx="14" cy="17" rx="9" ry="6.5" transform="rotate(-20 14 17)" fill="#78350F" />
          <circle cx="21" cy="21" r="6.5" fill="#92400E" />
          <circle cx="21" cy="21" r="4.5" fill="#FEF3C7" />
        </svg>
      );
    case 'bacuri':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <circle cx="13" cy="17" r="7.5" fill="#D97706" />
          <circle cx="21" cy="20" r="6.5" fill="#B45309" />
          <circle cx="21" cy="20" r="4.8" fill="#FFFBEB" />
          <circle cx="19.5" cy="19" r="1.3" fill="#FDE68A" />
          <circle cx="22.5" cy="21" r="1.3" fill="#FDE68A" />
        </svg>
      );
    case 'goiaba':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <circle cx="13" cy="16" r="7.5" fill="#4ADE80" />
          <circle cx="20" cy="19.5" r="7" fill="#22C55E" />
          <circle cx="20" cy="19.5" r="5.3" fill="#FB7185" />
          <circle cx="18.5" cy="18.5" r="0.8" fill="#FEF08A" />
          <circle cx="21.5" cy="18.5" r="0.8" fill="#FEF08A" />
          <circle cx="20" cy="21" r="0.8" fill="#FEF08A" />
        </svg>
      );
    case 'graviola':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <ellipse cx="15" cy="17" rx="8.5" ry="9.5" transform="rotate(15 15 17)" fill="#15803D" />
          <circle cx="21" cy="21" r="5.8" fill="#166534" />
          <circle cx="21" cy="21" r="4.3" fill="#F8FAFC" />
          <circle cx="20" cy="20.5" r="1" fill="#0F172A" />
          <circle cx="22.2" cy="21.8" r="1" fill="#0F172A" />
        </svg>
      );
    case 'maracuja':
      return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
          <circle cx="16" cy="16" r="10.5" fill="#EAB308" />
          <circle cx="16" cy="16" r="8.2" fill="#FEF9C3" />
          <circle cx="16" cy="16" r="6.4" fill="#F59E0B" />
          <circle cx="14" cy="14" r="1.1" fill="#1C1917" />
          <circle cx="18" cy="14.5" r="1.1" fill="#1C1917" />
          <circle cx="15.5" cy="17.5" r="1.1" fill="#1C1917" />
          <circle cx="18.5" cy="18" r="1.1" fill="#1C1917" />
          <circle cx="13.5" cy="17" r="1.1" fill="#1C1917" />
        </svg>
      );
  }
}

export function AddonIcon({
  tipo,
  className = 'w-7 h-7 shrink-0',
}: {
  tipo: AddonIconType;
  className?: string;
}) {
  if (tipo === 'ovo') {
    return (
      <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
        <path
          d="M6 17c0-6 5-11 11.5-10.5S28 11 27.5 17.5 22 27 15 26.5 6 23 6 17z"
          fill="#FFFFFF"
        />
        <circle cx="16.5" cy="16.5" r="5.2" fill="#F59E0B" />
        <circle cx="15" cy="15" r="1.5" fill="#FDE68A" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {/* Palitos de batata frita */}
      <rect x="9" y="5" width="3.2" height="14" rx="1" fill="#FACC15" transform="rotate(-10 9 5)" />
      <rect x="13" y="3" width="3.2" height="15" rx="1" fill="#EAB308" />
      <rect x="17" y="4" width="3.2" height="15" rx="1" fill="#FACC15" transform="rotate(6 17 4)" />
      <rect x="20.5" y="6" width="3.2" height="13" rx="1" fill="#F59E0B" transform="rotate(14 20.5 6)" />
      {/* Caixinha vermelha */}
      <path d="M8 14h16l-2 14H10L8 14z" fill="#DC2626" />
      <path d="M11 17h10l-1 8h-8l-1-8z" fill="#FACC15" opacity="0.25" />
    </svg>
  );
}
