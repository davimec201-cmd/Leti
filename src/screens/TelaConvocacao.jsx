import LukeImage from '../components/LukeImage.jsx'
import Patinha from '../components/Patinha.jsx'
import Botao from '../components/Botao.jsx'
import { telas, t } from '../config/content.js'

/* Tela 1 — A convocacao */
export default function TelaConvocacao({ aoAvancar }) {
  const c = telas.convocacao

  return (
    <div className="pilha" style={{ '--gap': '20px' }}>
      <span className="etiqueta anima-subir">
        <Patinha className="patinha etiqueta__patinha" style={{ width: '13px' }} />
        {t(c.etiqueta)}
      </span>

      <div className="anima-subir" style={{ '--atraso': '90ms' }}>
        <LukeImage shape="retrato" mood="serio" size={206} poeira />
      </div>

      <h1 className="titulo anima-subir" style={{ '--atraso': '300ms' }}>
        {t(c.titulo)}
      </h1>

      <p className="texto anima-subir" style={{ '--atraso': '420ms', maxWidth: '20.5rem' }}>
        {t(c.texto)}
      </p>

      <div className="convocacao__ficha anima-subir" style={{ '--atraso': '560ms' }}>
        <span><strong>{t(c.reu)}</strong></span>
        <span>{t(c.acusacao)}</span>
      </div>

      <div className="anima-subir" style={{ '--atraso': '700ms', width: '100%', marginTop: '4px' }}>
        <Botao onClick={aoAvancar}>{t(c.botao)}</Botao>
      </div>
    </div>
  )
}
