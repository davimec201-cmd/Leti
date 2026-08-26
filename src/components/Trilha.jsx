/* Cinco pontinhos discretos so' para ela sentir que a experiencia e' curtinha. */
export default function Trilha({ total, atual, oculta = false }) {
  return (
    <div className="trilha" data-oculta={oculta ? 'sim' : 'nao'} aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className="trilha__ponto"
          data-estado={i === atual ? 'agora' : i < atual ? 'passou' : 'falta'}
        />
      ))}
    </div>
  )
}
