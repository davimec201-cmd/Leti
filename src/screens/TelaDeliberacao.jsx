import { useEffect, useState } from 'react'
import LukeImage from '../components/LukeImage.jsx'
import Patinha from '../components/Patinha.jsx'
import Botao from '../components/Botao.jsx'
import { telas, t } from '../config/content.js'

/* Tela 4 — Luke delibera. ~2s analisando, pausinha dramatica, veredito. */
const DURACAO_PASSO = 660

export default function TelaDeliberacao({ aoAvancar }) {
  const c = telas.deliberacao
  const total = c.passos.length
  const [visiveis, setVisiveis] = useState(1)
  const [prontos, setProntos] = useState(0)
  const [fase, setFase] = useState('analisando')

  useEffect(() => {
    const relogios = []

    for (let i = 1; i <= total; i += 1) {
      relogios.push(setTimeout(() => {
        setProntos(i)
        setVisiveis(Math.min(i + 1, total))
      }, DURACAO_PASSO * i))
    }

    const fimDaAnalise = DURACAO_PASSO * total + 240
    relogios.push(setTimeout(() => setFase('veredito'), fimDaAnalise))
    relogios.push(setTimeout(() => setFase('sentenca'), fimDaAnalise + 1000))
    relogios.push(setTimeout(() => setFase('fim'), fimDaAnalise + 1720))

    return () => relogios.forEach(clearTimeout)
  }, [total])

  const analisando = fase === 'analisando'

  return (
    <div className="pilha" style={{ '--gap': '18px' }}>
      <span className="etiqueta anima-subir">
        <Patinha className="patinha etiqueta__patinha" style={{ width: '13px' }} />
        {t(c.etiqueta)}
      </span>

      <div className="anima-subir" style={{ '--atraso': '80ms' }}>
        <LukeImage shape="redondo" mood={analisando ? 'analisando' : 'serio'} size={152} poeira />
      </div>

      {analisando ? (
        <>
          <h1 className="titulo titulo--menor anima-subir" style={{ '--atraso': '240ms' }}>
            {t(c.titulo)}
          </h1>

          <ul className="passos">
            {c.passos.slice(0, visiveis).map((passo, i) => (
              <li key={i} className="passo" data-pronto={i < prontos ? 'sim' : 'nao'}>
                <Patinha className="patinha passo__patinha" />
                {t(passo)}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className="pilha" style={{ '--gap': '13px' }} aria-live="polite">
          <span className="veredito__selo anima-aparecer">{t(c.veredito)}</span>
          <p className="veredito__chamada anima-subir" style={{ '--atraso': '140ms' }}>
            {t(c.chamada)}
          </p>

          {fase !== 'veredito' && (
            <p className="veredito__sentenca">{t(c.sentenca)}</p>
          )}

          {fase === 'fim' && (
            <>
              <p className="texto anima-subir" style={{ maxWidth: '19.5rem', marginTop: '2px' }}>
                {t(c.ressalva)}
              </p>
              <div className="anima-subir" style={{ '--atraso': '180ms', width: '100%', marginTop: '4px' }}>
                <Botao onClick={aoAvancar}>{t(c.botao)}</Botao>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
