import imagemDoLuke from '../assets/luke.webp'

/* ============================================================================
 *  CONTEUDO
 *  ---------------------------------------------------------------------------
 *  Tudo que e' texto no app mora neste arquivo. Nao precisa mexer em mais nada
 *  para trocar nomes, frases, botoes, opcoes de indenizacao ou a foto do Luke.
 *
 *  Dentro dos textos voce pode usar estes atalhos, que sao trocados
 *  automaticamente pelos nomes definidos em `pessoas`:
 *
 *      {ela}      ->  Leticia
 *      {apelido}  ->  Le
 *      {ele}      ->  Davi
 *      {gato}     ->  Luke
 *
 *  Ex.: '{gato} chamou {ela}.'  vira  'Luke chamou Leticia.'
 * ========================================================================== */

/* --- 1. Os nomes ---------------------------------------------------------- */
export const pessoas = {
  ela: 'Letícia',
  apelido: 'Lê',
  ele: 'Davi',
  gato: 'Luke',
}

/* --- 2. O Luke ------------------------------------------------------------
 *  A imagem oficial do Luke vive em  src/assets/luke.webp
 *
 *  PARA TROCAR A FOTO DELE:
 *    jeito mais facil  -> substitua o arquivo src/assets/luke.webp por outro
 *                         com o MESMO nome (pode ser .webp, .jpg ou .png,
 *                         so' ajuste a extensao no import da linha 1 deste arquivo)
 *    outro jeito       -> coloque a imagem em /public e escreva aqui:
 *                         imagem: '/luke.jpg'
 *
 *  Se um dia voce quiser uma foto diferente para cada momento, preencha
 *  `imagensPorHumor` — o que ficar em branco usa a imagem principal.
 *  Humores usados pelo app: 'serio' | 'analisando' | 'feliz' | 'desconfiado' | 'neutro'
 * ------------------------------------------------------------------------- */
export const luke = {
  imagem: imagemDoLuke,
  alt: '{gato}, o gato da {ela}',
  imagensPorHumor: {
    serio: null,
    analisando: null,
    feliz: null,
    desconfiado: null,
  },
}

/* --- 3. Nome da experiencia (aba do navegador + previa do link no WhatsApp) */
export const app = {
  titulo: '{ele} está oficialmente em apuros 🐾',
  subtitulo: '{gato} foi convocado para analisar um caso gravíssimo.',
}

/* --- 4. As telas ---------------------------------------------------------- */
export const telas = {
  /* Tela 1 — A convocacao */
  convocacao: {
    etiqueta: 'Tribunal Felino',
    titulo: '{ela}…',
    texto: '{gato} solicitou sua presença para analisar um caso extremamente sério.',
    reu: 'Réu: {ele}',
    acusacao: 'Acusação: ter sido um completo vacilão.',
    botao: 'Ver o processo 🐾',
  },

  /* Tela 2 — As acusacoes */
  acusacoes: {
    etiqueta: 'As acusações',
    titulo: 'Processo nº 30-MINUTOS-DE-ATRASO',
    itens: [
      {
        numero: 'Acusação 01',
        texto: 'Chegar 30 minutos atrasado.',
        status: 'Culpado. 😿',
      },
      {
        numero: 'Acusação 02',
        texto: 'Fazer vocês terem que enrolar a professora.',
        status: 'Culpado.',
      },
      {
        numero: 'Acusação 03',
        texto: 'Deixar vocês ansiosos sem saber se eu ia chegar.',
        status: 'Infelizmente, muito culpado.',
      },
    ],
    balao: '{ele}… a situação não está boa para você.',
    botao: 'Ouvir a defesa do réu',
  },

  /* Tela 3 — A defesa (a carta) */
  defesa: {
    etiqueta: 'A defesa do réu',
    saudacao: '{apelido},',
    paragrafos: [
      'eu sei que não foi simplesmente “chegar atrasado”.',
      'Enquanto eu não aparecia, vocês ficaram tendo que resolver uma situação que eu causei, enrolar a professora e ainda lidar com a ansiedade de não saber se eu realmente chegaria.',
      'Eu coloquei vocês em uma situação completamente desnecessária.',
      'E principalmente: eu sei que você ficou muito chateada comigo, e eu entendo o motivo.',
      'Não quero inventar desculpa nem diminuir o que aconteceu.',
      'Eu vacilei.',
      'Desculpa de verdade.',
      'Você é uma pessoa que eu gosto muito e a última coisa que eu queria era ter causado esse estresse em você.',
    ],
    assinatura: '— {ele}',
    botao: 'Entregar ao {gato}',
  },

  /* Tela 4 — Deliberacao do Luke */
  deliberacao: {
    etiqueta: 'Deliberação',
    titulo: '{gato} está analisando a defesa…',
    passos: [
      'analisando provas…',
      'consultando documentos…',
      'considerando a quantidade de vacilo…',
    ],
    veredito: 'VEREDITO',
    chamada: '{ele} foi considerado…',
    sentenca: 'CULPADO.',
    ressalva: 'Mas talvez exista possibilidade de redução da pena.',
    botao: 'Consultar condições',
  },

  /* Tela 5 — Condicoes para o perdao */
  condicoes: {
    etiqueta: 'Condições',
    titulo: 'Segundo determinação do Tribunal Felino:',
    itens: [
      '{ele} deve aprender a não fazer isso novamente.',
      '{ele} deve reconhecer que vacilou.',
      '{ele} deve uma compensação oficialmente determinada pela {ela}.',
    ],
    chamadaEscolha: '{ela} tem direito de escolher a indenização.',
    /* Para mudar as opcoes, edite / adicione / remova itens desta lista.
     * `perdoa: false` deixa o Luke com uma expressao mais calma no final. */
    opcoes: [
      {
        id: 'chocolate',
        emoji: '🍫',
        rotulo: 'Chocolate',
        perdoa: true,
        resultado: {
          titulo: 'Decisão registrada pelo Tribunal Felino.',
          texto: '{ele} agora está oficialmente te devendo um chocolate.',
        },
      },
      {
        id: 'monster',
        emoji: '🍓',
        rotulo: 'Monster de morango',
        perdoa: true,
        resultado: {
          titulo: 'Decisão registrada pelo Tribunal Felino.',
          texto: '{ele} agora está oficialmente te devendo uma Monster de morango.',
        },
      },
      {
        id: 'brava',
        emoji: '😾',
        rotulo: 'Ainda estou brava.',
        perdoa: false,
        resultado: {
          titulo: 'Compreensível.',
          texto: '{gato} determinou que {ele} continuará no período de reflexão.',
        },
      },
    ],
    botao: 'Continuar',
  },

  /* Tela final */
  final: {
    titulo: 'Desculpa, {apelido}.',
    linhas: [
      'Eu realmente gosto muito de você.',
      'E prometo tentar ser um amigo melhor do que fui naquele dia.',
    ],
    assinatura: '{ele}',
    rodape: 'Supervisionado por {gato}, autoridade máxima desta relação diplomática. 🐾',
  },

  /* Patinha escondida no cantinho da tela final */
  segredo: {
    aviso: 'Tem uma patinha escondida aqui.',
    linhas: ['Entre nós…', 'Eu acho que ele gosta bastante de você.'],
    emoji: '🐱',
    botao: 'Eu não ouvi nada.',
  },
}

/* --- 5. Ajudante que troca {ela}, {ele}, {gato}, {apelido} pelos nomes ----- */
const atalhos = {
  ela: pessoas.ela,
  apelido: pessoas.apelido,
  ele: pessoas.ele,
  gato: pessoas.gato,
}

export function t(texto) {
  if (typeof texto !== 'string') return texto
  return texto.replace(/\{(ela|apelido|ele|gato)\}/g, (_, chave) => atalhos[chave])
}
