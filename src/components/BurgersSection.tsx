import React from 'react';
import { type BurgerItem, formatCurrencyBRL } from '../utils/menuData';
import { BurgerThemeIcon } from './MenuIcons';
import { MenuImage } from './MenuImage';
import { SectionBanner } from './SectionBanner';

interface BurgersSectionProps {
  hamburgueres: BurgerItem[];
}

export function BurgersSection({ hamburgueres }: BurgersSectionProps) {
  return (
    <section
      id="hamburgueres"
      aria-labelledby="heading-hamburgueres"
      className="scroll-mt-20 py-6"
    >
      <SectionBanner
        id="heading-hamburgueres"
        titulo="HAMBÚRGUERES"
        icone="hamburguer"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {hamburgueres.map((lanche) => {
          const precoFormatado = formatCurrencyBRL(lanche.preco);
          return (
            <article
              key={lanche.id}
              className="menu-card group relative flex flex-col overflow-hidden rounded-2xl bg-[#0E1530]/90 border border-[#F7B500]/25 shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-150 hover:-translate-y-0.5 active:scale-[0.99]"
            >
              {/* Foto em destaque proporção 4:3 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#010308]">
                <MenuImage
                  src={lanche.foto}
                  srcSet={lanche.fotoSrcSet}
                  sizes="(max-width: 767px) 100vw, 520px"
                  alt={lanche.alt}
                  width={640}
                  height={480}
                  priority={Boolean(lanche.destaquePrioridade)}
                  className="h-full w-full object-contain sm:object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                  fallbackTitle={lanche.nome}
                  fallbackIcon={
                    <BurgerThemeIcon tipo={lanche.icone} className="w-12 h-12" />
                  }
                />
                {/* Vinheta suave na base da foto para transição perfeita com o card */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0E1530] to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Corpo do card: Ícone + Nome + Etiqueta de Preço Amarela + Ingredientes */}
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <BurgerThemeIcon
                        tipo={lanche.icone}
                        className="w-8 h-8 sm:w-9 sm:h-9 shrink-0"
                      />
                      <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white truncate">
                        {lanche.nome}
                      </h3>
                    </div>

                    {/* Etiqueta de preço em amarelo-mostarda com texto preto */}
                    <span
                      aria-label={`Preço: ${precoFormatado}`}
                      className="price-badge shrink-0 bg-[#F7B500] text-[#0A0F1F] font-display text-xl sm:text-2xl font-bold px-3.5 py-1 rounded-md tabular-nums tracking-wide shadow-[0_2px_8px_rgba(247,181,0,0.3)]"
                    >
                      {precoFormatado}
                    </span>
                  </div>

                  {/* Linha pontilhada amarela sutil inspirada no cardápio original */}
                  <div
                    className="my-3 border-b border-dotted border-[#F7B500]/35"
                    aria-hidden="true"
                  />

                  <p className="text-[15px] sm:text-base leading-relaxed text-[#E8E8E8]">
                    {lanche.ingredientes}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
