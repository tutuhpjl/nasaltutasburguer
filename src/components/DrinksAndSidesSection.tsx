import React from 'react';
import {
  type CardapioData,
  formatCurrencyBRL,
} from '../utils/menuData';
import {
  AddonIcon,
  DrinkGroupIcon,
  FruitIcon,
} from './MenuIcons';
import { MenuImage } from './MenuImage';
import { SectionBanner } from './SectionBanner';

interface DrinksAndSidesSectionProps {
  bebidas: CardapioData['bebidas'];
  sucosNaturais: CardapioData['sucosNaturais'];
  adicionais: CardapioData['adicionais'];
  categoriasExtras: CardapioData['categoriasExtras'];
}

export function DrinksAndSidesSection({
  bebidas,
  sucosNaturais,
  adicionais,
  categoriasExtras,
}: DrinksAndSidesSectionProps) {
  return (
    <div className="space-y-8 py-4">
      {/* Seção BEBIDAS */}
      <section
        id="bebidas"
        aria-labelledby="heading-bebidas"
        className="scroll-mt-20 pt-2"
      >
        <SectionBanner
          id="heading-bebidas"
          titulo="BEBIDAS"
          icone="bebidas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {bebidas.map((grupo) => (
            <article
              key={grupo.id}
              className="rounded-2xl bg-[#0E1530]/90 border border-[#F7B500]/25 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="flex-1 w-full">
                <div className="flex items-center gap-2.5 mb-4">
                  <DrinkGroupIcon tipo={grupo.icone} className="w-7 h-7" />
                  <h3 className="font-display text-2xl font-bold tracking-wider uppercase text-white">
                    {grupo.titulo}
                  </h3>
                </div>

                <ul className="space-y-3" role="list">
                  {grupo.opcoes.map((opcao) => {
                    const precoFmt = formatCurrencyBRL(opcao.preco);
                    return (
                      <li
                        key={opcao.id}
                        className="flex items-baseline justify-between gap-2 text-base sm:text-lg"
                      >
                        <span className="font-medium text-[#E8E8E8] shrink-0">
                          {opcao.rotulo}
                        </span>
                        <span
                          className="flex-1 border-b-2 border-dotted border-[#E8E8E8]/35 mx-1"
                          aria-hidden="true"
                        />
                        <span className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums shrink-0">
                          {precoFmt}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Foto ilustrativa da bebida */}
              <div className="w-28 sm:w-32 h-28 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-[#010308] border border-[#F7B500]/20 flex items-center justify-center">
                <MenuImage
                  src={grupo.foto}
                  alt={grupo.altFoto}
                  width={160}
                  height={120}
                  className="w-full h-full object-contain"
                  fallbackTitle={grupo.titulo}
                  fallbackIcon={<DrinkGroupIcon tipo={grupo.icone} className="w-8 h-8" />}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Subseção / Seção SUCOS NATURAIS (300ml) */}
      <section
        id="sucos-naturais"
        aria-labelledby="heading-sucos-naturais"
        className="scroll-mt-20 pt-2"
      >
        <div className="rounded-2xl bg-[#0E1530]/90 border border-[#F7B500]/25 p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <SectionBanner
            id="heading-sucos-naturais"
            titulo={sucosNaturais.titulo}
            subtitulo={sucosNaturais.volume}
            icone="sucos"
            variant="natural-green"
          />

          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Foto de suco no topo no mobile e ao lado no desktop */}
            <div className="w-full md:w-64 md:order-2 shrink-0 overflow-hidden rounded-xl bg-[#010308] border border-[#F7B500]/20">
              <div className="aspect-[4/3] w-full">
                <MenuImage
                  src={sucosNaturais.foto}
                  alt={sucosNaturais.altFoto}
                  width={480}
                  height={360}
                  className="w-full h-full object-contain"
                  fallbackTitle={sucosNaturais.titulo}
                />
              </div>
            </div>

            {/* Lista de sabores de sucos naturais com ícones de cada fruta */}
            <ul
              className="w-full flex-1 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5"
              role="list"
            >
              {sucosNaturais.sabores.map((item) => {
                const precoFmt = formatCurrencyBRL(item.preco);
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between gap-2 min-h-[44px] py-1"
                  >
                    <div className="flex items-center gap-2.5 shrink-0">
                      <FruitIcon tipo={item.icone} className="w-7 h-7" />
                      <span className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                        {item.sabor}
                      </span>
                    </div>
                    <span
                      className="flex-1 border-b-2 border-dotted border-[#E8E8E8]/35 mx-1 translate-y-1"
                      aria-hidden="true"
                    />
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#FFC21A] tabular-nums shrink-0">
                      {precoFmt}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Seção ADICIONAIS */}
      <section
        id="adicionais"
        aria-labelledby="heading-adicionais"
        className="scroll-mt-20 pt-2"
      >
        <SectionBanner
          id="heading-adicionais"
          titulo={adicionais.titulo}
          icone="adicionais"
        />

        <div className="rounded-2xl bg-[#0E1530]/90 border border-[#F7B500]/25 p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center gap-6">
          <ul className="w-full flex-1 space-y-4" role="list">
            {adicionais.itens.map((item) => {
              const precoFmt = formatCurrencyBRL(item.preco);
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2 min-h-[44px]"
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <AddonIcon tipo={item.icone} className="w-8 h-8" />
                    <span className="text-base sm:text-lg font-medium text-[#FFFFFF]">
                      {item.nome}
                    </span>
                  </div>
                  <span
                    className="flex-1 border-b-2 border-dotted border-[#E8E8E8]/35 mx-1 translate-y-1"
                    aria-hidden="true"
                  />
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#FFC21A] tabular-nums shrink-0">
                    {precoFmt}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Foto da porção de batata frita */}
          <div className="w-36 sm:w-40 h-28 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-[#050A14] border border-[#F7B500]/20">
            <MenuImage
              src={adicionais.foto}
              alt={adicionais.altFoto}
              width={240}
              height={180}
              className="w-full h-full object-contain"
              fallbackTitle={adicionais.titulo}
            />
          </div>
        </div>
      </section>

      {/* Seções Extras Dinâmicas (caso adicionadas no JSON futuramente) */}
      {categoriasExtras.map((secao) => (
        <section
          key={secao.id}
          id={secao.id}
          aria-labelledby={`heading-${secao.id}`}
          className="scroll-mt-20 pt-2"
        >
          <SectionBanner
            id={`heading-${secao.id}`}
            titulo={secao.tituloSecao}
            subtitulo={secao.subtitulo}
            icone="adicionais"
          />
          <div className="rounded-2xl bg-[#0E1530]/90 border border-[#F7B500]/25 p-5 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
            <ul className="space-y-3.5" role="list">
              {secao.itens.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-1 border-b border-dotted border-[#F7B500]/25 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-xl uppercase text-white">
                      {item.nome}
                    </span>
                    <span className="font-display text-xl font-bold text-[#FFC21A] tabular-nums">
                      {formatCurrencyBRL(item.preco)}
                    </span>
                  </div>
                  {item.descricao && (
                    <p className="text-sm text-[#E8E8E8]">{item.descricao}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
