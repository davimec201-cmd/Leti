import LukeImage from '../components/LukeImage.jsx'
import Patinha from '../components/Patinha.jsx'
import Botao from '../components/Botao.jsx'
import Balao from '../components/Balao.jsx'
import { telas, t } from '../config/content.js'

/* Tela 2 — As acusacoes (os cartoes aparecem um de cada vez) */
export default function TelaAcusacoes({ aoAvancar }) {
  const c = telas.acusacoes
  const inicioCartoes = 200
  const passo = 480
  const depoisDosCartoes = inicioCartoes + passo * c.itens.length

  return (
    <div className="pilha" style={{ '--gap': '14px' }}>
      <span className="etiqueta anima-subir">
        <Patinha className="patinha etiqueta__patinha" style={{ width: '13px' }} />
        {t(c.etiqueta)}
      </span>

      <h1 className="processo anima-subir" style={{ '--atraso': '90ms' }}>
        {t(c.titulo)}
      </h1>

      {c.itens.map((item, i) => (
        <article
          key={item.numero}
          className="cartao acusacao anima-subir"
          style={{ '--atraso': `${inicioCartoes + passo * i}ms` }}
        >
          <span className="acusacao__numero">{t(item.numero)}</span>
          <p className="acusacao__texto">{t(item.texto)}</p>
          <span className="acusacao__status">{t(item.status)}</span>
        </article>
      ))}

      <div
        className="anima-subir"
        style={{ '--atraso': `${depoisDosCartoes + 160}ms`, marginTop: '8px' }}
      >
        <LukeImage shape="redondo" mood="serio" size={116} />
      </div>

      <div className="anima-subir" style={{ '--atraso': `${depoisDosCartoes + 420}ms`, width: '100%' }}>
        <Balao>{t(c.balao)}</Balao>
      </div>

      <div
        className="anima-subir"
        style={{ '--atraso': `${depoisDosCartoes + 640}ms`, width: '100%', marginTop: '4px' }}
      >
        <Botao onClick={aoAvancar}>{t(c.botao)}</Botao>
      </div>
    </div>
  )
}
