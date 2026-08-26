import LukeImage from '../components/LukeImage.jsx'
import Patinha from '../components/Patinha.jsx'
import Botao from '../components/Botao.jsx'
import { telas, t } from '../config/content.js'

/* Tela 5 — As condicoes e a escolha da indenizacao.
 * Nenhum botao envia nada para lugar nenhum: e' so' entre ela e o Luke. */
export default function TelaCondicoes({ escolha, aoEscolher, aoAvancar }) {
  const c = telas.condicoes
  const inicioLista = 520
  const fimDaLista = inicioLista + c.itens.length * 190
  /* depois da escolha ele reage — sem cobrar perdao nenhum */
  const humor = !escolha ? 'neutro' : escolha.perdoa ? 'feliz' : 'neutro'

  return (
    <div className="pilha" style={{ '--gap': '18px' }}>
      <span className="etiqueta anima-subir">
        <Patinha className="patinha etiqueta__patinha" style={{ width: '13px' }} />
        {t(c.etiqueta)}
      </span>

      <div className="anima-subir" style={{ '--atraso': '80ms' }}>
        <LukeImage shape="redondo" mood={humor} size={124} />
      </div>

      <h1 className="titulo titulo--menor anima-subir" style={{ '--atraso': '230ms' }}>
        {t(c.titulo)}
      </h1>

      <div className="cartao anima-subir" style={{ '--atraso': '340ms' }}>
        <ul className="condicoes__lista">
          {c.itens.map((item, i) => (
            <li key={i} className="condicao" style={{ '--atraso': `${inicioLista + i * 190}ms` }}>
              <span className="condicao__marca" aria-hidden="true">✓</span>
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      </div>

      {!escolha ? (
        <>
          <p
            className="texto anima-subir"
            style={{ '--atraso': `${fimDaLista + 120}ms`, maxWidth: '19.5rem' }}
          >
            {t(c.chamadaEscolha)}
          </p>

          <ul className="opcoes">
            {c.opcoes.map((opcao, i) => (
              <li key={opcao.id}>
                <button
                  type="button"
                  className="opcao"
                  style={{ '--atraso': `${fimDaLista + 260 + i * 150}ms` }}
                  onClick={() => aoEscolher(opcao)}
                >
                  <span className="opcao__emoji" aria-hidden="true">{opcao.emoji}</span>
                  <span>{t(opcao.rotulo)}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="cartao resultado anima-subir" aria-live="polite">
            <span className="resultado__emoji" aria-hidden="true">{escolha.emoji}</span>
            <p className="resultado__titulo">{t(escolha.resultado.titulo)}</p>
            <p className="resultado__texto">{t(escolha.resultado.texto)}</p>
          </div>

          <div className="anima-subir" style={{ '--atraso': '300ms', width: '100%' }}>
            <Botao variante="fantasma" onClick={aoAvancar}>{t(c.botao)}</Botao>
          </div>
        </>
      )}
    </div>
  )
}
