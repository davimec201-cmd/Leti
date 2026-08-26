# Davi está oficialmente em apuros 🐾

Um mini app web feito como pedido de desculpas do **Davi** para a **Letícia**,
supervisionado pelo **Luke**, autoridade máxima desta relação diplomática.

É uma experiência de 1–2 minutos: seis telinhas, tudo numa página só, sem login,
sem banco de dados, sem backend. Abre por um link e funciona bem no celular.

---

## Rodar aqui no seu computador

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Gerar a versão final

```bash
npm run build     # cria a pasta dist/
npm run preview   # espia a versão final antes de publicar
```

## Publicar (Vercel ou Netlify)

O projeto é 100% estático. Nos dois serviços dá para conectar o repositório e
aceitar o que eles sugerirem — ou preencher assim:

| campo               | valor           |
| ------------------- | --------------- |
| Build command       | `npm run build` |
| Output directory    | `dist`          |

Também dá para simplesmente arrastar a pasta `dist/` no Netlify Drop.

---

## Onde mexer em cada coisa

Quase tudo que você vai querer mudar está em **um arquivo só**:

### `src/config/content.js`

- **Nomes** (`pessoas`): Letícia, Lê, Davi, Luke.
  Dentro dos textos, use os atalhos `{ela}`, `{apelido}`, `{ele}` e `{gato}` —
  eles viram os nomes automaticamente. Trocou o nome ali em cima, trocou no app inteiro.
- **Foto do Luke** (`luke`): veja abaixo.
- **Título e subtítulo** (`app`): é o que aparece na aba do navegador e na
  prévia do link no WhatsApp.
- **Todos os textos das telas** (`telas`): convocação, acusações, a carta,
  a deliberação, as condições, a tela final e o segredinho.
- **Opções de indenização** (`telas.condicoes.opcoes`): chocolate, Monster de
  morango, "ainda estou brava". Dá para acrescentar, tirar ou reescrever.
  O campo `perdoa: false` deixa o Luke com uma expressão mais calma no final —
  nenhuma opção força perdão nenhum, e nenhum botão envia dados para lugar algum.

### Trocar a foto do Luke

A imagem oficial dele é `src/assets/luke.webp`.

- **Jeito mais fácil:** substitua esse arquivo por outro com o mesmo nome.
- Se a extensão for diferente (`.jpg`, `.png`), ajuste o `import` da primeira
  linha de `src/config/content.js`.
- Se preferir deixar a imagem em `/public`, escreva o caminho direto:
  `imagem: '/luke.jpg'`.

A moldura recorta com proporção preservada (`object-fit: cover`), então a foto
nunca estica nem achata. Se quiser uma imagem diferente por momento, preencha
`luke.imagensPorHumor`.

### Prévia do link no WhatsApp

`public/og.jpg` é a imagem que aparece quando o link é enviado. Para regerar,
basta trocar o arquivo. Se a prévia não aparecer, edite o `index.html` e troque
`./og.jpg` pela URL completa do site publicado.

---

## Como o código está organizado

```
index.html                 título, prévia do link, ícones
src/
  main.jsx                 ponto de entrada (fontes + estilos + App)
  App.jsx                  troca de telas por estado, sem recarregar a página
  config/content.js        TODO O TEXTO E OS NOMES  ← comece por aqui
  assets/luke.webp         a foto oficial do Luke
  components/
    LukeImage.jsx          o Luke (props: size, shape, mood, poeira)
    Patinha.jsx            a patinha usada em tudo
    Botao.jsx  Balao.jsx  Tela.jsx  Trilha.jsx  Segredo.jsx
  screens/
    TelaConvocacao.jsx     1 — a convocação
    TelaAcusacoes.jsx      2 — as três acusações
    TelaDefesa.jsx         3 — a carta
    TelaDeliberacao.jsx    4 — o veredito
    TelaCondicoes.jsx      5 — as condições e a escolha dela
    TelaFinal.jsx          6 — o pedido de desculpas
  styles/
    tokens.css             cores, sombras, fontes, cantos arredondados
    base.css               fundo, estrutura, trilha de progresso
    animacoes.css          todas as animações num lugar só
    componentes.css        cartões, botões, Luke, balão, popup
    telas.css              o que é específico de cada tela
```

## Detalhes de acabamento

- Fontes (Quicksand, Nunito e Caveat) ficam hospedadas junto com o app:
  nenhuma requisição para o Google, nada quebra sem internet.
- Feito primeiro para celular; no computador o conteúdo fica centralizado
  com largura limitada.
- Quem tiver "reduzir movimento" ligado no celular vê tudo sem animação —
  e sem perder nenhum conteúdo.
- A patinha escondida da tela final é opcional e discreta: se ela não clicar,
  não faz falta nenhuma.
