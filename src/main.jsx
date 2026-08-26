import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Fontes hospedadas junto com o app (nao dependem de internet nem do Google) */
import '@fontsource-variable/quicksand/wght.css'
import '@fontsource-variable/nunito/wght.css'
import '@fontsource-variable/caveat/wght.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/animacoes.css'
import './styles/componentes.css'
import './styles/telas.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
