/* Patinha reutilizavel: bullet, particula, marca d'agua e o segredo do final. */
export default function Patinha({ className = 'patinha', style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="12" cy="16.2" rx="6.2" ry="5.1" />
      <ellipse cx="4.8" cy="9.6" rx="2.45" ry="3" transform="rotate(-20 4.8 9.6)" />
      <ellipse cx="9.7" cy="6.1" rx="2.55" ry="3.2" transform="rotate(-8 9.7 6.1)" />
      <ellipse cx="15.1" cy="6.1" rx="2.55" ry="3.2" transform="rotate(8 15.1 6.1)" />
      <ellipse cx="19.6" cy="9.7" rx="2.45" ry="3" transform="rotate(20 19.6 9.7)" />
    </svg>
  )
}
