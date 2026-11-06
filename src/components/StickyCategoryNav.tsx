import React, { useEffect, useRef } from 'react';

interface StickyCategoryNavProps {
  abas: Array<{ id: string; rotulo: string }>;
  activeTabId: string;
  onSelectTab: (id: string) => void;
}

export function StickyCategoryNav({
  abas,
  activeTabId,
  onSelectTab,
}: StickyCategoryNavProps) {
  const navListRef = useRef<HTMLDivElement>(null);

  // Mantém a aba ativa visível na barra horizontal ao rolar a página
  useEffect(() => {
    const container = navListRef.current;
    if (!container) return;
    const activeEl = container.querySelector<HTMLElement>(
      `[data-tab-id="${activeTabId}"]`
    );
    if (!activeEl) return;

    const containerRect = container.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const offset =
      activeRect.left -
      containerRect.left -
      containerRect.width / 2 +
      activeRect.width / 2;

    container.scrollBy({ left: offset, behavior: 'smooth' });
  }, [activeTabId]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    onSelectTab(id);
  };

  return (
    <nav
      aria-label="Categorias do cardápio"
      className="sticky top-0 z-40 bg-[#0A0F1F]/95 backdrop-blur-md border-b border-[#F7B500]/30 shadow-[0_6px_20px_rgba(0,0,0,0.65)]"
    >
      <div
        ref={navListRef}
        className="mx-auto max-w-[1100px] flex items-center gap-2 overflow-x-auto px-4 py-2 no-scrollbar snap-x snap-mandatory md:justify-center"
      >
        {abas.map((aba) => {
          const isActive = aba.id === activeTabId;
          return (
            <a
              key={aba.id}
              href={`#${aba.id}`}
              data-tab-id={aba.id}
              aria-current={isActive ? 'true' : undefined}
              onClick={(e) => handleClick(e, aba.id)}
              className={`snap-start min-h-[44px] px-4 py-2 rounded-lg font-display text-lg tracking-wider uppercase whitespace-nowrap shrink-0 flex items-center justify-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC21A] ${
                isActive
                  ? 'bg-[#F7B500] text-[#0A0F1F] font-bold shadow-[0_2px_10px_rgba(247,181,0,0.35)]'
                  : 'bg-[#121A33] text-[#FFFFFF] hover:bg-[#192445] hover:text-[#FFC21A] border border-[#F7B500]/20'
              }`}
            >
              {aba.rotulo}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
