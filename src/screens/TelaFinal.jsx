import LukeImage from '../components/LukeImage.jsx'
import Patinha from '../components/Patinha.jsx'
import { telas, t } from '../config/content.js'

/* Tela final — as patinhas vao surgindo devagarinho ao redor do Luke. */
const PATINHAS = [
  { left: '4%',  top: '10%', tam: 20, giro: '-18deg', atraso: 900,  opacidade: .5 },
  { left: '86%', top: '16%', tam: 16, giro: '15deg',  atraso: 1350, opacidade: .42 },
  { left: '-1%', top: '58%', tam: 14, giro: '-7deg',  atraso: 1800, opacidade: .38 },
  { left: '90%', top: '62%', tam: 22, giro: '23deg',  atraso: 2250, opacidade: .45 },
  { left: '16%', top: '84%', tam: 12, giro: '9deg',   atraso: 2700, opacidade: .3 },
  { left: '72%', top: '88%', tam: 15, giro: '-13deg', atraso: 3150, opacidade: .34 },
]

export default function TelaFinal({ escolha }) {
  const c = telas.final
  const humor = escolha && escolha.perdoa === false ? 'neutro' : 'feliz'

  return (
    <div className="pilha" style={{ '--gap': '16px' }}>
      <div className="final__cena">
        <div className="final__patinhas" aria-hidden="true">
          {PATINHAS.map((p, i) => (
            <Patinha
              key={i}
              style={{
                left: p.left,
                top: p.top,
                '--tam': `${p.tam}px`,
                '--giro': p.giro,
                '--atraso': `${p.atraso}ms`,
                '--opacidade': p.opacidade,
              }}
            />
          ))}
        </div>

        <div className="anima-subir" style={{ '--atraso': '120ms' }}>
          <LukeImage shape="retrato" mood={humor} size={196} poeira />
        </div>
      </div>

      <h1 className="final__titulo anima-subir" style={{ '--atraso': '380ms', marginTop: '8px' }}>
        {t(c.titulo)}
      </h1>

      {c.linhas.map((linha, i) => (
        <p
          key={i}
          className="final__linha anima-subir"
          style={{ '--atraso': `${520 + i * 180}ms`, maxWidth: '19.5rem' }}
        >
          {t(linha)}
        </p>
      ))}

      <span className="final__assinatura anima-subir" style={{ '--atraso': '980ms' }}>
        {t(c.assinatura)}
      </span>

      <p className="final__rodape anima-aparecer" style={{ '--atraso': '1400ms' }}>
        {t(c.rodape)}
      </p>
    </div>
  )
}
