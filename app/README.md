# Cypher Sheet

Ficha digital editável para o RPG **Cypher System** (Monte Cook Games), construída em **React 18**. Tela única no estilo da ficha oficial, com tema escuro e detalhes em bordô.

> Projeto iniciado em atividades escolares e modernizado para servir como referência técnica.

## Stack

- **React 18** + Create React App
- **Context API** + hook customizado de persistência (`useLocalStorage`)
- **CSS Modules** com variáveis CSS para tematização
- **html2canvas** + **jsPDF** para exportar a ficha em PDF
- Tipografia: Rajdhani (títulos), Inter (corpo), Share Tech Mono (números)

## Funcionalidades

- Ficha completa em **tela única**: identidade, atributos (Pool/Edge/Máximo), Tier/Effort/XP, recuperação, trilha de dano, perícias com níveis (Treinado / Especializado / Inabilidade), avanços, habilidades especiais, ataques, cyphers e equipamento.
- **Persistência automática** em `localStorage`: feche o navegador e sua ficha continua lá.
- **Presets** de Tipo (Guerreiro, Explorador, Adepto, Orador), Descritor e Foco que preenchem Pools, Edges e descrição das habilidades com um clique.
- **Upload de retrato** do personagem com pré-visualização (base64 persistido junto com a ficha).
- **Exportação para PDF** em A4 com layout preservado.
- Layout responsivo (3 colunas em desktop, 2 em tablet, 1 em mobile).

## Estrutura

```
src/
├── components/        # Componentes da UI (Sheet, Identity, Stats, etc.)
├── context/           # SheetContext + Provider com persistência
├── data/              # Presets do sistema (tipos, descritores, focos)
├── hooks/             # useLocalStorage
├── styles/            # CSS Modules da ficha
├── utils/             # Helpers (exportPdf)
└── index.css          # Variáveis CSS e tema global
```

## Como rodar

```bash
cd app
npm install
npm start
```

Abre em [http://localhost:3000](http://localhost:3000).

Para gerar build de produção:

```bash
npm run build
```

## Próximos passos

- Validação numérica nos campos de Pool/Edge.
- Importação/exportação da ficha em JSON.
- Catálogo expandido de Tipos, Descritores e Focos do livro base.
