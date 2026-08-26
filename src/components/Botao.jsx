/* Botao unico do app: variante 'principal' (rosa) ou 'fantasma' (discreto). */
export default function Botao({ children, variante = 'principal', className = '', ...resto }) {
  const classes = ['botao', variante === 'fantasma' ? 'botao--fantasma' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} {...resto}>
      {children}
    </button>
  )
}
