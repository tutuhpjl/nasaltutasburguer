import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CARDAPIO_DATA,
  formatCurrencyBRL,
  getNavigationTabs,
  validateMenuIntegrity,
} from './menuData';

test('formatCurrencyBRL formata preços exatamente no padrão brasileiro R$ X,XX', () => {
  assert.equal(formatCurrencyBRL(22), 'R$ 22,00');
  assert.equal(formatCurrencyBRL(28), 'R$ 28,00');
  assert.equal(formatCurrencyBRL(20), 'R$ 20,00');
  assert.equal(formatCurrencyBRL(15.5), 'R$ 15,50');
  assert.equal(formatCurrencyBRL(4), 'R$ 4,00');
  assert.equal(formatCurrencyBRL(5), 'R$ 5,00');
  assert.equal(formatCurrencyBRL(6), 'R$ 6,00');
  assert.equal(formatCurrencyBRL(12), 'R$ 12,00');
  assert.equal(formatCurrencyBRL(15), 'R$ 15,00');
  assert.equal(formatCurrencyBRL(7), 'R$ 7,00');
  assert.equal(formatCurrencyBRL(9), 'R$ 9,00');
  assert.equal(formatCurrencyBRL(3), 'R$ 3,00');
  assert.equal(formatCurrencyBRL(10), 'R$ 10,00');
});

test('validateMenuIntegrity confirma integridade de todos os 18 itens do cardápio original', () => {
  const result = validateMenuIntegrity(CARDAPIO_DATA);
  assert.equal(result.valid, true);
  // 4 hambúrgueres + 5 opções de bebidas + 7 sucos naturais + 2 adicionais = 18 itens
  assert.equal(result.totalItems, 18);
});

test('Hambúrgueres conferem exatamente com o cardápio original (Lua, Sol, Céu, Dog Estrela)', () => {
  const [lua, sol, ceu, dogEstrela] = CARDAPIO_DATA.hamburgueres;

  assert.equal(lua.nome, 'LUA');
  assert.equal(lua.preco, 22.0);
  assert.equal(lua.destaquePrioridade, true);
  assert.ok(lua.ingredientes.includes('geleia de pimenta'));

  assert.equal(sol.nome, 'SOL');
  assert.equal(sol.preco, 28.0);
  assert.ok(sol.ingredientes.includes('2 blends bovinos de 100g'));

  assert.equal(ceu.nome, 'CÉU');
  assert.equal(ceu.preco, 20.0);
  assert.ok(ceu.ingredientes.includes('frango 150g'));

  assert.equal(dogEstrela.nome, 'DOG ESTRELA');
  assert.equal(dogEstrela.preco, 15.5);
  assert.ok(dogEstrela.ingredientes.includes('salsicha'));
});

test('Bebidas, Sucos Naturais (300ml) e Adicionais conferem exatamente com os preços originais', () => {
  const agua = CARDAPIO_DATA.bebidas[0];
  assert.equal(agua.opcoes[0].rotulo, 'Sem gás');
  assert.equal(agua.opcoes[0].preco, 4.0);
  assert.equal(agua.opcoes[1].rotulo, 'Com gás');
  assert.equal(agua.opcoes[1].preco, 5.0);

  const refri = CARDAPIO_DATA.bebidas[1];
  assert.equal(refri.opcoes[0].preco, 6.0);
  assert.equal(refri.opcoes[1].preco, 12.0);
  assert.equal(refri.opcoes[2].preco, 15.0);

  const sucos = CARDAPIO_DATA.sucosNaturais.sabores;
  assert.equal(sucos.length, 7);
  const precosSucos = Object.fromEntries(sucos.map((s) => [s.sabor, s.preco]));
  assert.deepEqual(precosSucos, {
    Abacaxi: 7.0,
    Acerola: 7.0,
    Cupuaçu: 9.0,
    Bacuri: 9.0,
    Goiaba: 7.0,
    Graviola: 9.0,
    Maracujá: 7.0,
  });

  const adicionais = CARDAPIO_DATA.adicionais.itens;
  assert.equal(adicionais[0].nome, 'Ovo');
  assert.equal(adicionais[0].preco, 3.0);
  assert.equal(adicionais[1].nome, 'Batata Frita (200g)');
  assert.equal(adicionais[1].preco, 10.0);
});

test('getNavigationTabs retorna as 4 categorias principais na ordem correta', () => {
  const tabs = getNavigationTabs(CARDAPIO_DATA);
  assert.deepEqual(
    tabs.map((t) => t.id),
    ['hamburgueres', 'bebidas', 'sucos-naturais', 'adicionais']
  );
});
