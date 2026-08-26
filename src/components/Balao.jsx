/* Balaozinho de fala do Luke (a setinha aponta para ele, que fica em cima). */
export default function Balao({ children, style, className = '' }) {
  return (
    <p className={`balao ${className}`.trim()} style={style}>
      {children}
    </p>
  )
}
