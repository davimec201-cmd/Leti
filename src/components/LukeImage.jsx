import { luke as configLuke, t } from '../config/content.js'

/* ============================================================================
 *  LUKE — a cara oficial do app.
 *  ---------------------------------------------------------------------------
 *  A foto dele vem de src/config/content.js (campo `luke.imagem`).
 *  Para trocar a imagem, nao mexa aqui: troque o arquivo src/assets/luke.webp.
 *
 *  Props:
 *    size   -> largura em px (retrato) ou diametro em px (redondo).
 *              Em telas pequenas ele encolhe sozinho, sem distorcer nada.
 *    shape  -> 'retrato' (moldura arredondada, corpo inteiro)
 *              'redondo' (moldura circular, enquadrando o rostinho)
 *    mood   -> 'serio' | 'analisando' | 'feliz' | 'desconfiado' | 'neutro'
 *              A imagem e' sempre a mesma: o humor so' muda o clima em volta
 *              (o anel de "analisando", o brilho quentinho do final...).
 *    poeira -> particulazinhas discretas flutuando ao redor.
 * ========================================================================== */
export default function LukeImage({
  size = 200,
  shape = 'retrato',
  mood = 'neutro',
  poeira = false,
  className = '',
  style,
}) {
  const imagem = configLuke.imagensPorHumor?.[mood] || configLuke.imagem
  const classes = ['luke-img', `luke-img--${shape}`, className].filter(Boolean).join(' ')

  return (
    <div
      className={classes}
      data-mood={mood}
      style={{ '--tamanho': `${size}px`, ...style }}
    >
      <div className="luke-img__moldura">
        <img
          className="luke-img__foto"
          src={imagem}
          alt={t(configLuke.alt)}
          width="760"
          height="1055"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {mood === 'analisando' && <span className="luke-img__aro" aria-hidden="true" />}
      <span className="luke-img__chao" aria-hidden="true" />

      {poeira && (
        <>
          <span className="particula" style={{ left: '-6%', bottom: '30%', animationDelay: '0s' }} aria-hidden="true" />
          <span className="particula" style={{ left: '104%', bottom: '46%', animationDelay: '1.9s' }} aria-hidden="true" />
          <span className="particula" style={{ left: '96%', bottom: '12%', animationDelay: '3.6s' }} aria-hidden="true" />
        </>
      )}
    </div>
  )
}
