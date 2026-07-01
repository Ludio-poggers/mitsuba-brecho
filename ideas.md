# Estratégia de Design - Mitsuba Brechó

## Referência Visual Fornecida

O PDF do projeto apresenta uma identidade visual bem definida que será replicada fielmente nesta landing page.

**Elementos principais:**
- Nome: Mitsuba
- Slogan: "Garimpe sua identidade"
- Mascote: Gato estilizado (amarelo, roxo, preto, branco)
- Estética: Jovem, alternativa, urbana, pop/anime/kawaii

## Abordagem de Design Escolhida

**Tema: Alternativa Urbana Curada**

Esta landing page adota a identidade visual do brechó de forma fiel, mantendo a essência jovem, criativa e autoral da marca Mitsuba.

### Design Movement

Fusão de **Cyberpunk Pop** com **Economia Circular**: cores vibrantes (roxo/amarelo), tipografia bold e display, contrastes altos, e uma narrativa centrada em sustentabilidade e moda acessível.

### Core Principles

1. **Alto Contraste Intencional**: Roxo escuro vs. amarelo neon criam impacto visual e legibilidade imediata.
2. **Tipografia Expressiva**: Títulos em caixa alta, bold, display—lembrando cartazes e identidade retrô/gamer.
3. **Curadoria Visual**: Cada elemento (imagem, card, botão) reforça a noção de brechó curado e sustentável.
4. **Acessibilidade Jovem**: Design que fala a linguagem do público (classes C/D, jovens e adultos), sem parecer condescendente.

### Color Philosophy

- **Roxo Escuro (#4A1A5C ou similar)**: Cor de fundo dominante, transmite sofisticação alternativa e mistério.
- **Amarelo Neon (#FFFF00 ou #F0FF00)**: Destaque absoluto para títulos, CTAs e elementos-chave. Energia e otimismo.
- **Lilás/Roxo Médio (#B24BF3 ou similar)**: Cards, blocos de conteúdo, detalhes secundários.
- **Preto (#000000)**: Contornos, cartões de fundo, áreas de alto contraste.
- **Branco (#FFFFFF)**: Textos corridos, áreas de respiro, garantindo legibilidade.

**Intenção emocional**: Jovem, criativa, confiante, inclusiva. Roxo = alternativa; Amarelo = esperança e acessibilidade.

### Layout Paradigm

- **Hero Section Assimétrica**: Mascote à direita, slogan e CTA à esquerda. Fundo com gradiente roxo e sobreposição de imagem da loja.
- **Seções em Blocos**: Cada seção (Proposta, Público, Diferenciais, etc.) é um bloco visual distinto com cards ou imagens.
- **Grid Flexível**: Uso de CSS Grid e Flexbox para criar layouts dinâmicos que se adaptam a mobile sem perder a essência.
- **Divisores Visuais**: Bordas finas claras, linhas horizontais, e espaçamento generoso entre seções.

### Signature Elements

1. **Mascote Mitsuba**: Gato estilizado em amarelo/roxo/preto, presente no header e em seções-chave.
2. **Cápsulas de Subtítulo**: Fundo amarelo com texto roxo, arredondadas, para destacar seções.
3. **Cards Escuros com Cantos Arredondados**: Padrão visual para conteúdo, com bordas finas claras.

### Interaction Philosophy

- **Botões Destacados**: Fundo amarelo, texto roxo, com hover que muda para roxo com texto amarelo.
- **Transições Suaves**: Hover effects em cards, botões e links com duração ~200ms.
- **Feedback Visual**: Cliques e interações confirmam ação (scale, opacity, cor).

### Animation

- **Entrance Animations**: Elementos entram com fade-in + slide-up (200-300ms).
- **Hover Effects**: Cards levantam com sombra suave, botões mudam cor e escala.
- **Scroll Animations**: Seções podem revelar-se com parallax leve ou fade conforme o usuário desce.
- **Respeito a prefers-reduced-motion**: Animações desabilitadas para usuários que preferem.

### Typography System

- **Display/Títulos**: Fonte bold, caixa alta, tamanho grande (48px+). Cor: Amarelo neon.
- **Subtítulos**: Fonte bold, tamanho médio (24-32px), cor: Roxo ou branco.
- **Body Text**: Fonte limpa (sans-serif), tamanho 16-18px, cor: Branco ou roxo claro, boa legibilidade.
- **Captions/Labels**: Fonte smaller (12-14px), cor: Roxo médio ou branco com opacidade.

**Fontes sugeridas:**
- Display: Poppins Bold, Space Grotesk Bold, ou similar (impactante).
- Body: Inter, Roboto, ou similar (legível).

### Brand Essence

**Posicionamento**: O brechó de referência para o público jovem de Joinville que busca moda sustentável, acessível e curada, com identidade autoral.

**Personalidade**: Criativo, Confiante, Inclusivo.

**Brand Voice**: Direto, descontraído, empoderador. Evita clichês como "Bem-vindo" ou "Comece hoje". Fala sobre **garimpar identidade**, **economia circular**, **curadoria**.

**Exemplos de microcopy:**
- "Garimpe sua identidade" (slogan)
- "Moda seminova com qualidade garantida"
- "Sustentabilidade que faz sentido"
- "Sua história, nosso cuidado"

### Wordmark & Logo

O mascote Mitsuba (gato amarelo/roxo/preto) é o logotipo. Será usado no header, footer e em seções-chave. Nunca será substituído por texto simples.

### Signature Brand Color

**Roxo Profundo (#4A1A5C)** é a cor primária inconfundível do Mitsuba. Toda comunicação visual reforça esse roxo como identidade.

---

## Estrutura da Landing Page

1. **Header**: Logo Mitsuba, navegação simples, CTA principal.
2. **Hero Section**: Slogan, mascote, CTA, fundo com imagem da loja.
3. **Seção "Para Quem é o Mitsuba?"**: Descrição do público, imagens de clientes/loja.
4. **Seção "Nosso Diferencial"**: Ramo de atividade, produtos, serviços (cards com ícones/imagens).
5. **Seção "Análise Competitiva"**: Comparação com concorrentes (opcional, pode ser resumida).
6. **Seção "Missão & Visão"**: Propósito e visão do brechó.
7. **Seção "Contato"**: Localização (Joinville, SC), redes sociais, formulário simples.
8. **Footer**: Links, créditos, logo.

---

## Notas Técnicas

- **Tema**: Dark (fundo roxo escuro, texto claro).
- **Tipografia**: Google Fonts (Poppins para títulos, Inter para body).
- **Componentes**: Uso de shadcn/ui onde apropriado, customização com Tailwind 4.
- **Responsividade**: Mobile-first, adaptado para tablets e desktop.
- **Acessibilidade**: Contraste WCAG AA+, navegação por teclado, alt-text em imagens.

---

## Decisões de Estilo

- Roxo escuro como fundo padrão em todas as seções principais.
- Amarelo neon para todos os títulos e CTAs.
- Cards pretos/lilases com bordas finas claras.
- Mascote Mitsuba em destaque visual (header, hero, footer).
- Tipografia bold e expressiva, evitando Inter padrão.
- Espaçamento generoso (padding/margin) para respiro visual.
