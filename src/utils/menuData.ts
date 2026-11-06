export type BurgerIconType = 'lua' | 'sol' | 'ceu' | 'estrela';

export type FruitIconType =
  | 'abacaxi'
  | 'acerola'
  | 'cupuacu'
  | 'bacuri'
  | 'goiaba'
  | 'graviola'
  | 'maracuja';

export type AddonIconType = 'ovo' | 'batata';

export interface BurgerItem {
  id: string;
  nome: string;
  preco: number;
  ingredientes: string;
  icone: BurgerIconType;
  foto: string;
  fotoSrcSet?: string;
  alt: string;
  destaquePrioridade?: boolean;
}

export interface DrinkOption {
  id: string;
  rotulo: string;
  preco: number;
}

export interface DrinkGroup {
  id: string;
  titulo: string;
  icone: 'gota' | 'copo-refrigerante';
  foto: string;
  altFoto: string;
  opcoes: DrinkOption[];
}

export interface JuiceItem {
  id: string;
  sabor: string;
  preco: number;
  icone: FruitIconType;
}

export interface AddonItem {
  id: string;
  nome: string;
  preco: number;
  icone: AddonIconType;
}

export interface ExtraListItem {
  id: string;
  nome: string;
  descricao?: string;
  preco: number;
}

export interface ExtraCategorySection {
  id: string;
  abaTitulo: string;
  tituloSecao: string;
  subtitulo?: string;
  fotoTopo?: string;
  altFotoTopo?: string;
  itens: ExtraListItem[];
}

export interface CardapioData {
  restaurante: {
    nome: string;
    subtitulo: string;
    slogan: string;
    observacaoRodape: string;
    logoFoto: string;
  };
  abas: Array<{
    id: string;
    rotulo: string;
  }>;
  hamburgueres: BurgerItem[];
  bebidas: DrinkGroup[];
  sucosNaturais: {
    titulo: string;
    volume: string;
    foto: string;
    altFoto: string;
    sabores: JuiceItem[];
  };
  adicionais: {
    titulo: string;
    foto: string;
    altFoto: string;
    itens: AddonItem[];
  };
  /**
   * Caso o proprietário deseje adicionar novas categorias de outras fotos/páginas
   * no futuro, basta inserir objetos aqui e eles serão renderizados automaticamente
   * com abas na navegação fixa e o mesmo padrão visual.
   */
  categoriasExtras: ExtraCategorySection[];
}

const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/**
 * Formata um valor numérico em Reais (R$ X,XX) usando Intl.NumberFormat('pt-BR').
 * Normaliza espaços não-quebráveis para facilitar leitura consistente.
 */
export function formatCurrencyBRL(valor: number): string {
  if (!Number.isFinite(valor) || valor < 0) {
    throw new Error(`Valor de preço inválido: ${valor}`);
  }
  return brlFormatter.format(valor).replace(/\u00A0/g, ' ');
}

export const CARDAPIO_DATA: CardapioData = {
  restaurante: {
    nome: 'HAMBÚRGUER',
    subtitulo: 'Nas Alturas',
    slogan: 'O sabor com a melhor vista da cidade!',
    observacaoRodape: 'Preços sujeitos a alteração sem aviso prévio.',
    logoFoto: '/img/logo-burger.webp',
  },
  abas: [
    { id: 'hamburgueres', rotulo: 'Hambúrgueres' },
    { id: 'bebidas', rotulo: 'Bebidas' },
    { id: 'sucos-naturais', rotulo: 'Sucos Naturais' },
    { id: 'adicionais', rotulo: 'Adicionais' },
  ],
  hamburgueres: [
    {
      id: 'lua',
      nome: 'LUA',
      preco: 22.0,
      ingredientes:
        'Pão brioche, blend bovino 150g, calabresa, bacon, queijo mussarela, cheddar, salada da casa e geleia de pimenta.',
      icone: 'lua',
      foto: '/img/lua.webp',
      fotoSrcSet: '/img/lua-320.webp 320w, /img/lua.webp 640w',
      alt: 'Hambúrguer Lua com pão brioche, blend bovino 150g, calabresa, bacon, queijo mussarela, cheddar, salada da casa e geleia de pimenta',
      destaquePrioridade: true,
    },
    {
      id: 'sol',
      nome: 'SOL',
      preco: 28.0,
      ingredientes:
        'Pão brioche, 2 blends bovinos de 100g, ovo, calabresa, bacon, queijo mussarela, cheddar, salada da casa e cebola caramelizada.',
      icone: 'sol',
      foto: '/img/sol.webp',
      fotoSrcSet: '/img/sol-320.webp 320w, /img/sol.webp 640w',
      alt: 'Hambúrguer Sol com pão brioche, 2 blends bovinos de 100g, ovo frito, calabresa, bacon, mussarela, cheddar, salada e cebola caramelizada',
    },
    {
      id: 'ceu',
      nome: 'CÉU',
      preco: 20.0,
      ingredientes:
        'Pão brioche, frango 150g, queijo mussarela, salada da casa e cebola caramelizada.',
      icone: 'ceu',
      foto: '/img/ceu.webp',
      fotoSrcSet: '/img/ceu-320.webp 320w, /img/ceu.webp 640w',
      alt: 'Hambúrguer Céu com pão brioche, filé de frango 150g, queijo mussarela, salada da casa e cebola caramelizada',
    },
    {
      id: 'dog-estrela',
      nome: 'DOG ESTRELA',
      preco: 15.5,
      ingredientes: 'Pão brioche, carne, salsicha e salada da casa.',
      icone: 'estrela',
      foto: '/img/dog-estrela.webp',
      fotoSrcSet: '/img/dog-estrela-320.webp 320w, /img/dog-estrela.webp 640w',
      alt: 'Dog Estrela no pão brioche com carne, salsicha, batata palha e salada da casa',
    },
  ],
  bebidas: [
    {
      id: 'agua-mineral',
      titulo: 'ÁGUA MINERAL',
      icone: 'gota',
      foto: '/img/agua.webp',
      altFoto: 'Garrafa de água mineral gelada',
      opcoes: [
        { id: 'agua-sem-gas', rotulo: 'Sem gás', preco: 4.0 },
        { id: 'agua-com-gas', rotulo: 'Com gás', preco: 5.0 },
      ],
    },
    {
      id: 'refrigerantes',
      titulo: 'REFRIGERANTES',
      icone: 'copo-refrigerante',
      foto: '/img/refrigerantes.webp',
      altFoto: 'Garrafas de refrigerantes variados (Coca-Cola, Sprite e Fanta)',
      opcoes: [
        { id: 'refri-300ml', rotulo: 'Refrigerante 300ml', preco: 6.0 },
        { id: 'refri-1lt', rotulo: 'Refrigerante 1lt', preco: 12.0 },
        { id: 'refri-2lt', rotulo: 'Refrigerante 2lt', preco: 15.0 },
      ],
    },
  ],
  sucosNaturais: {
    titulo: 'SUCOS NATURAIS',
    volume: '(300ml)',
    foto: '/img/sucos.webp',
    altFoto: 'Copo de suco natural gelado de 300ml com frutas frescas',
    sabores: [
      { id: 'suco-abacaxi', sabor: 'Abacaxi', preco: 7.0, icone: 'abacaxi' },
      { id: 'suco-acerola', sabor: 'Acerola', preco: 7.0, icone: 'acerola' },
      { id: 'suco-cupuacu', sabor: 'Cupuaçu', preco: 9.0, icone: 'cupuacu' },
      { id: 'suco-bacuri', sabor: 'Bacuri', preco: 9.0, icone: 'bacuri' },
      { id: 'suco-goiaba', sabor: 'Goiaba', preco: 7.0, icone: 'goiaba' },
      { id: 'suco-graviola', sabor: 'Graviola', preco: 9.0, icone: 'graviola' },
      { id: 'suco-maracuja', sabor: 'Maracujá', preco: 7.0, icone: 'maracuja' },
    ],
  },
  adicionais: {
    titulo: 'ADICIONAIS',
    foto: '/img/batata-frita.webp',
    altFoto: 'Porção crocante de batata frita',
    itens: [
      { id: 'adicional-ovo', nome: 'Ovo', preco: 3.0, icone: 'ovo' },
      {
        id: 'adicional-batata-frita',
        nome: 'Batata Frita (200g)',
        preco: 10.0,
        icone: 'batata',
      },
    ],
  },
  categoriasExtras: [],
};

/**
 * Retorna a lista completa de abas de navegação (incluindo categorias extras, se houver).
 */
export function getNavigationTabs(
  data: CardapioData = CARDAPIO_DATA
): Array<{ id: string; rotulo: string }> {
  const baseTabs = [...data.abas];
  for (const extra of data.categoriasExtras) {
    baseTabs.push({ id: extra.id, rotulo: extra.abaTitulo });
  }
  return baseTabs;
}

/**
 * Valida que todos os itens do cardápio possuem nome, preço positivo e dados obrigatórios.
 */
export function validateMenuIntegrity(data: CardapioData = CARDAPIO_DATA): {
  valid: boolean;
  totalItems: number;
} {
  let count = 0;
  for (const b of data.hamburgueres) {
    if (!b.nome || b.preco <= 0 || !b.ingredientes || !b.foto) {
      return { valid: false, totalItems: count };
    }
    count++;
  }
  for (const group of data.bebidas) {
    for (const opt of group.opcoes) {
      if (!opt.rotulo || opt.preco <= 0) {
        return { valid: false, totalItems: count };
      }
      count++;
    }
  }
  for (const suco of data.sucosNaturais.sabores) {
    if (!suco.sabor || suco.preco <= 0) {
      return { valid: false, totalItems: count };
    }
    count++;
  }
  for (const add of data.adicionais.itens) {
    if (!add.nome || add.preco <= 0) {
      return { valid: false, totalItems: count };
    }
    count++;
  }
  return { valid: true, totalItems: count };
}
