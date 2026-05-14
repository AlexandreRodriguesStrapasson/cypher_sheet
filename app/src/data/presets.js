export const TYPES = {
  Guerreiro: {
    label: 'Guerreiro',
    pools: { might: 11, speed: 10, intellect: 7 },
    edges: { might: 1, speed: 0, intellect: 0 },
    description: 'Combatente versátil, treinado em armas e armaduras.',
  },
  Explorador: {
    label: 'Explorador',
    pools: { might: 10, speed: 11, intellect: 8 },
    edges: { might: 0, speed: 1, intellect: 0 },
    description: 'Aventureiro resiliente, especialista em sobreviver no desconhecido.',
  },
  Adepto: {
    label: 'Adepto',
    pools: { might: 7, speed: 9, intellect: 12 },
    edges: { might: 0, speed: 0, intellect: 1 },
    description: 'Usuário de poderes esotéricos e manipulação da realidade.',
  },
  Orador: {
    label: 'Orador',
    pools: { might: 8, speed: 9, intellect: 11 },
    edges: { might: 0, speed: 0, intellect: 1 },
    description: 'Líder carismático que influencia mentes e inspira aliados.',
  },
};

export const DESCRIPTORS = {
  Beneficente: {
    label: 'Beneficente',
    pools: {},
    description: 'Treinado em interações sociais. Aliados próximos ganham +1 em recuperações.',
  },
  Calmo: {
    label: 'Calmo',
    pools: { intellect: 2 },
    description: 'Estudioso. +2 no Pool de Intelecto e treinado em 4 perícias não físicas.',
  },
  Caótico: {
    label: 'Caótico',
    pools: { speed: 4 },
    description: '+4 no Pool de Velocidade. Treinado em defesa de Intelecto.',
  },
  Criativo: {
    label: 'Criativo',
    pools: { intellect: 2 },
    description: '+2 no Pool de Intelecto. Treinado em ofícios artísticos.',
  },
  Cruel: {
    label: 'Cruel',
    pools: { might: 2 },
    description: '+2 no Pool de Força. Treinado em intimidação.',
  },
  Louco: {
    label: 'Louco',
    pools: { intellect: 4 },
    description: '+4 no Pool de Intelecto. Imprevisível e treinado em defesa de Intelecto.',
  },
};

export const FOCI = {
  'Permanece na Pedra': {
    label: 'Permanece na Pedra',
    description: 'Sua carne é feita de mineral duro, fazendo de você corpulento e difícil de ferir.',
    abilities: [
      { tier: 1, name: 'Corpo de Golem' },
      { tier: 1, name: 'Cura Golem' },
      { tier: 2, name: 'Aperto Golem' },
      { tier: 4, name: 'Resistência de Pedra' },
      { tier: 5, name: 'Força de Golem' },
      { tier: 6, name: 'Invocação de Golem' },
    ],
  },
  'Mestre das Sombras': {
    label: 'Mestre das Sombras',
    description: 'Move-se silenciosamente e ataca sem ser visto.',
    abilities: [
      { tier: 1, name: 'Sombra Passiva' },
      { tier: 1, name: 'Passos Silenciosos' },
      { tier: 2, name: 'Ataque Surpresa' },
      { tier: 4, name: 'Invisibilidade' },
      { tier: 5, name: 'Sombra Assassinato' },
      { tier: 6, name: 'Controle das Sombras' },
    ],
  },
  'Senhor das Feras': {
    label: 'Senhor das Feras',
    description: 'Conexão profunda com animais; comanda-os e luta ao lado deles.',
    abilities: [
      { tier: 1, name: 'Empatia Animal' },
      { tier: 1, name: 'Chamado das Feras' },
      { tier: 2, name: 'Domínio Animal' },
      { tier: 4, name: 'Amigo dos Animais' },
      { tier: 5, name: 'Invocação de Besta' },
      { tier: 6, name: 'Mestre das Feras' },
    ],
  },
  'Mente Brilhante': {
    label: 'Mente Brilhante',
    description: 'Mente excepcional com habilidades de manipulação mental.',
    abilities: [
      { tier: 1, name: 'Memória Fotográfica' },
      { tier: 1, name: 'Análise Rápida' },
      { tier: 2, name: 'Manipulação Mental' },
      { tier: 4, name: 'Telepatia' },
      { tier: 5, name: 'Ilusão Mental' },
      { tier: 6, name: 'Controle Mental' },
    ],
  },
  'Mestre do Tempo': {
    label: 'Mestre do Tempo',
    description: 'Controla o fluxo do tempo para obter vantagens.',
    abilities: [
      { tier: 1, name: 'Reflexos Rápidos' },
      { tier: 1, name: 'Vislumbre do Futuro' },
      { tier: 2, name: 'Aceleração Temporal' },
      { tier: 4, name: 'Reversão Temporal' },
      { tier: 5, name: 'Parada Temporal' },
      { tier: 6, name: 'Controle Total do Tempo' },
    ],
  },
};

export function buildPools(typeKey, descriptorKey) {
  const type = TYPES[typeKey];
  const descriptor = DESCRIPTORS[descriptorKey];
  if (!type) return { might: 0, speed: 0, intellect: 0 };

  const base = { ...type.pools };
  if (descriptor?.pools) {
    for (const k of Object.keys(descriptor.pools)) {
      base[k] = (base[k] || 0) + descriptor.pools[k];
    }
  }
  return base;
}

export function buildEdges(typeKey) {
  const type = TYPES[typeKey];
  return type ? { ...type.edges } : { might: 0, speed: 0, intellect: 0 };
}

export function buildSpecialAbilities(typeKey, descriptorKey, focusKey) {
  const lines = [];
  if (TYPES[typeKey]) lines.push(`Tipo — ${TYPES[typeKey].description}`);
  if (DESCRIPTORS[descriptorKey]) lines.push(`Descritor — ${DESCRIPTORS[descriptorKey].description}`);
  if (FOCI[focusKey]) {
    lines.push(`Foco — ${FOCI[focusKey].description}`);
    FOCI[focusKey].abilities.forEach((a) => lines.push(`  • Tier ${a.tier}: ${a.name}`));
  }
  return lines.join('\n');
}
