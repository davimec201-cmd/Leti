import Patinha from '../components/Patinha.jsx'
import Botao from '../components/Botao.jsx'
import { telas, t } from '../config/content.js'

/* Tela 3 — A defesa. Sem piada aqui. */
export default function TelaDefesa({ aoAvancar }) {
  const c = telas.defesa
  const fimDaCarta = 420 + c.paragrafos.length * 90

  return (
    <div className="pilha" style={{ '--gap': '18px' }}>
      <span className="etiqueta anima-subir">
        <Patinha className="patinha etiqueta__patinha" style={{ width: '13px' }} />
        {t(c.etiqueta)}
      </span>

      <article className="cartao carta anima-subir" style={{ '--atraso': '140ms' }}>
        <p className="carta__saudacao anima-aparecer" style={{ '--atraso': '380ms' }}>
          {t(c.saudacao)}
        </p>

        {c.paragrafos.map((paragrafo, i) => (
          <p
            key={i}
            className="carta__paragrafo anima-aparecer"
            style={{ '--atraso': `${420 + i * 90}ms` }}
          >
            {t(paragrafo)}
          </p>
        ))}

        <span className="carta__assinatura anima-aparecer" style={{ '--atraso': `${fimDaCarta + 120}ms` }}>
          {t(c.assinatura)}
        </span>

        <Patinha className="patinha carta__marca" />
      </article>

      <div
        className="anima-subir"
        style={{ '--atraso': `${fimDaCarta + 320}ms`, width: '100%', marginTop: '2px' }}
      >
        <Botao variante="fantasma" onClick={aoAvancar}>{t(c.botao)}</Botao>
      </div>
    </div>
  )
}
