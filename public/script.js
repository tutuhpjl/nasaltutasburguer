/**
 * HAMBÚRGUER NAS ALTURAS — Cardápio Digital (script.js)
 * Todos os dados do cardápio ficam centralizados no objeto CARDAPIO_JSON abaixo.
 * Para alterar preços, ingredientes, nomes ou fotos, basta editar este objeto.
 */

const CARDAPIO_JSON = {
  restaurante: {
    nome: 'HAMBÚRGUER',
    subtitulo: 'Nas Alturas',
    slogan: 'O sabor com a melhor vista da cidade!',
    observacaoRodape: 'Preços sujeitos a alteração sem aviso prévio.',
    logoFoto: 'img/logo-burger.webp',
  },
  hamburgueres: [
    {
      id: 'lua',
      nome: 'LUA',
      preco: 22.0,
      ingredientes:
        'Pão brioche, blend bovino 150g, calabresa, bacon, queijo mussarela, cheddar, salada da casa e geleia de pimenta.',
      icone: 'lua',
      foto: 'img/lua.webp',
      fotoSrcSet: 'img/lua-320.webp 320w, img/lua.webp 640w',
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
      foto: 'img/sol.webp',
      fotoSrcSet: 'img/sol-320.webp 320w, img/sol.webp 640w',
      alt: 'Hambúrguer Sol com pão brioche, 2 blends bovinos de 100g, ovo, calabresa, bacon, mussarela, cheddar, salada e cebola caramelizada',
    },
    {
      id: 'ceu',
      nome: 'CÉU',
      preco: 20.0,
      ingredientes:
        'Pão brioche, frango 150g, queijo mussarela, salada da casa e cebola caramelizada.',
      icone: 'ceu',
      foto: 'img/ceu.webp',
      fotoSrcSet: 'img/ceu-320.webp 320w, img/ceu.webp 640w',
      alt: 'Hambúrguer Céu com pão brioche, frango 150g, queijo mussarela, salada da casa e cebola caramelizada',
    },
    {
      id: 'dog-estrela',
      nome: 'DOG ESTRELA',
      preco: 15.5,
      ingredientes: 'Pão brioche, carne, salsicha e salada da casa.',
      icone: 'estrela',
      foto: 'img/dog-estrela.webp',
      fotoSrcSet: 'img/dog-estrela-320.webp 320w, img/dog-estrela.webp 640w',
      alt: 'Dog Estrela no pão brioche com carne, salsicha e salada da casa',
    },
  ],
  bebidas: [
    {
      id: 'agua-mineral',
      titulo: 'ÁGUA MINERAL',
      icone: 'gota',
      foto: 'img/agua.webp',
      opcoes: [
        { rotulo: 'Sem gás', preco: 4.0 },
        { rotulo: 'Com gás', preco: 5.0 },
      ],
    },
    {
      id: 'refrigerantes',
      titulo: 'REFRIGERANTES',
      icone: 'copo-refrigerante',
      foto: 'img/refrigerantes.webp',
      opcoes: [
        { rotulo: 'Refrigerante 300ml', preco: 6.0 },
        { rotulo: 'Refrigerante 1lt', preco: 12.0 },
        { rotulo: 'Refrigerante 2lt', preco: 15.0 },
      ],
    },
  ],
  sucosNaturais: {
    titulo: 'SUCOS NATURAIS',
    volume: '(300ml)',
    foto: 'img/sucos.webp',
    sabores: [
      { sabor: 'Abacaxi', preco: 7.0, icone: 'abacaxi' },
      { sabor: 'Acerola', preco: 7.0, icone: 'acerola' },
      { sabor: 'Cupuaçu', preco: 9.0, icone: 'cupuacu' },
      { sabor: 'Bacuri', preco: 9.0, icone: 'bacuri' },
      { sabor: 'Goiaba', preco: 7.0, icone: 'goiaba' },
      { sabor: 'Graviola', preco: 9.0, icone: 'graviola' },
      { sabor: 'Maracujá', preco: 7.0, icone: 'maracuja' },
    ],
  },
  adicionais: {
    titulo: 'ADICIONAIS',
    foto: 'img/batata-frita.webp',
    itens: [
      { nome: 'Ovo', preco: 3.0, icone: 'ovo' },
      { nome: 'Batata Frita (200g)', preco: 10.0, icone: 'batata' },
    ],
  },
};

const formatadorBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatarPreco(valor) {
  return formatadorBRL.format(valor);
}

window.CARDAPIO_JSON = CARDAPIO_JSON;
window.formatarPreco = formatarPreco;
