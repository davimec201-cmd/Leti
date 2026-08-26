import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import LukeImage from './LukeImage.jsx'
import Patinha from './Patinha.jsx'
import Botao from './Botao.jsx'
import { telas, t } from '../config/content.js'

/* ============================================================================
 *  O SEGREDO — patinha quase escondida no canto da tela final.
 *  Se ela clicar, o Luke conta uma coisinha. Totalmente opcional.
 * ========================================================================== */
export default function Segredo() {
  const [aberto, setAberto] = useState(false)
  const s = telas.segredo

  return (
    <>
      <button
        type="button"
        className="segredo__gatilho"
        onClick={() => setAberto(true)}
        aria-label={t(s.aviso)}
      >
        <Patinha style={{ width: '19px' }} />
      </button>
      {aberto && <Popup aoFechar={() => setAberto(false)} />}
    </>
  )
}

function Popup({ aoFechar }) {
  const s = telas.segredo
  const fecharRef = useRef(null)

  useEffect(() => {
    fecharRef.current?.focus()
    const aoTeclar = (e) => { if (e.key === 'Escape') aoFechar() }
    document.addEventListener('keydown', aoTeclar)
    return () => document.removeEventListener('keydown', aoTeclar)
  }, [aoFechar])

  return createPortal(
    <div className="veu" onClick={aoFechar}>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-label={t(s.linhas[0])}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'grid', placeItems: 'center', marginBottom: '10px' }}>
          <LukeImage shape="redondo" mood="desconfiado" size={104} />
        </div>
        {s.linhas.map((linha, i) => (
          <p className="popup__linha" key={i}>{t(linha)}</p>
        ))}
        <span className="popup__emoji" aria-hidden="true">{s.emoji}</span>
        <Botao variante="fantasma" ref={fecharRef} onClick={aoFechar}>
          {t(s.botao)}
        </Botao>
      </div>
    </div>,
    document.body,
  )
}
