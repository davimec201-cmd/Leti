import { useEffect, useRef } from 'react'

/* Embrulho de cada etapa: cuida da transicao de entrada/saida e do foco,
 * para que quem usa leitor de tela tambem acompanhe a mudanca. */
export default function Tela({ fase, rotulo, children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (fase === 'entrando' && ref.current) {
      ref.current.focus({ preventScroll: true })
    }
  }, [fase])

  return (
    <section
      ref={ref}
      className="tela"
      data-fase={fase}
      aria-label={rotulo}
      tabIndex={-1}
      style={{ outline: 'none' }}
    >
      {children}
    </section>
  )
}
