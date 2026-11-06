/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BurgersSection } from './components/BurgersSection';
import { DrinksAndSidesSection } from './components/DrinksAndSidesSection';
import { HeroHeader } from './components/HeroHeader';
import { StickyCategoryNav } from './components/StickyCategoryNav';
import { CARDAPIO_DATA, getNavigationTabs } from './utils/menuData';

export default function App() {
  const abas = useMemo(() => getNavigationTabs(CARDAPIO_DATA), []);
  const [activeTabId, setActiveTabId] = useState<string>(
    abas[0]?.id ?? 'hamburgueres'
  );
  const manualScrollUntilRef = useRef<number>(0);

  // Scrollspy com IntersectionObserver para destacar a aba da seção visível
  useEffect(() => {
    const sectionElements = abas
      .map((aba) => document.getElementById(aba.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() < manualScrollUntilRef.current) return;

        // Seleciona a seção que está cruzando o topo/centro da tela
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleEntries.length > 0) {
          const targetId = visibleEntries[0].target.id;
          if (targetId) {
            setActiveTabId(targetId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-84px 0px -55% 0px',
        threshold: [0.05, 0.25, 0.5],
      }
    );

    for (const el of sectionElements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [abas]);

  const handleSelectTab = useCallback((id: string) => {
    setActiveTabId(id);
    // Bloqueia temporariamente o observer durante a rolagem suave iniciada pelo clique
    manualScrollUntilRef.current = Date.now() + 700;

    const target = document.getElementById(id);
    if (!target) return;

    const stickyNavHeight = 68;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = Math.max(0, elementPosition - stickyNavHeight);

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: offsetPosition,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0F1F] via-[#0E1530] to-[#0A0F1F] text-white">
      {/* 1. Cabeçalho (Hero) enxuto com céu estrelado, silhueta da cidade e logo */}
      <HeroHeader restaurante={CARDAPIO_DATA.restaurante} />

      {/* 2. Navegação por abas fixa (Sticky) */}
      <StickyCategoryNav
        abas={abas}
        activeTabId={activeTabId}
        onSelectTab={handleSelectTab}
      />

      {/* 3 a 7. Conteúdo Principal do Cardápio */}
      <main
        id="conteudo-cardapio"
        className="flex-1 mx-auto w-full max-w-[1100px] px-4 sm:px-6 pb-10"
      >
        <BurgersSection hamburgueres={CARDAPIO_DATA.hamburgueres} />

        <DrinksAndSidesSection
          bebidas={CARDAPIO_DATA.bebidas}
          sucosNaturais={CARDAPIO_DATA.sucosNaturais}
          adicionais={CARDAPIO_DATA.adicionais}
          categoriasExtras={CARDAPIO_DATA.categoriasExtras}
        />
      </main>

      {/* 8. Rodapé mínimo conforme escopo */}
      <footer className="border-t border-[#F7B500]/20 bg-[#070B16] py-5 px-4 text-center">
        <div className="mx-auto max-w-[1100px] flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#E8E8E8] text-balance">
          <p className="font-medium text-white text-balance">
            Hambúrguer Nas Alturas — {CARDAPIO_DATA.restaurante.slogan}
          </p>
          <span className="hidden sm:inline text-[#F7B500]" aria-hidden="true">
            ·
          </span>
          <p className="text-xs text-[#E8E8E8]/80">
            {CARDAPIO_DATA.restaurante.observacaoRodape}
          </p>
        </div>
      </footer>
    </div>
  );
}
