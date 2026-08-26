import { useCallback, useEffect, useRef, useState } from 'react'
import Tela from './components/Tela.jsx'
import Trilha from './components/Trilha.jsx'
import Segredo from './components/Segredo.jsx'
import TelaConvocacao from './screens/TelaConvocacao.jsx'
import TelaAcusacoes from './screens/TelaAcusacoes.jsx'
import TelaDefesa from './screens/TelaDefesa.jsx'
import TelaDeliberacao from './screens/TelaDeliberacao.jsx'
import TelaCondicoes from './screens/TelaCondicoes.jsx'
import TelaFinal from './screens/TelaFinal.jsx'
import { app, telas, t } from './config/content.js'

/* ============================================================================
 *  A experiencia inteira e' uma pagina so'.
 *  Trocar de tela e' so' trocar de estado — nada de recarregar nada.
 * ========================================================================== */
const ETAPAS = ['convocacao', 'acusacoes', 'defesa', 'deliberacao', 'condicoes', 'final']
const TEMPO_DE_SAIDA = 280

const ROTULOS = {
  convocacao: telas.convocacao.etiqueta,
  acusacoes: telas.acusacoes.etiqueta,
  defesa: telas.defesa.etiqueta,
  deliberacao: telas.deliberacao.etiqueta,
  condicoes: telas.condicoes.etiqueta,
  final: telas.final.titulo,
}

export default function App() {
  const [indice, setIndice] = useState(0)
  const [fase, setFase] = useState('entrando')
  const [escolha, setEscolha] = useState(null)
  const relogio = useRef(null)

  useEffect(() => {
    document.title = t(app.titulo)
    return () => clearTimeout(relogio.current)
  }, [])

  const avancar = useCallback(() => {
    setFase((faseAtual) => {
      if (faseAtual === 'saindo') return faseAtual
      relogio.current = setTimeout(() => {
        setIndice((i) => Math.min(i + 1, ETAPAS.length - 1))
        setFase('entrando')
        window.scrollTo({ top: 0, behavior: 'auto' })
      }, TEMPO_DE_SAIDA)
      return 'saindo'
    })
  }, [])

  const etapa = ETAPAS[indice]
  const ehFinal = etapa === 'final'

  return (
    <main className={ehFinal ? 'palco palco--final' : 'palco'}>
      <Trilha total={ETAPAS.length - 1} atual={indice} oculta={ehFinal} />

      <div className="palco__conteudo">
        <Tela key={etapa} fase={fase} rotulo={t(ROTULOS[etapa])}>
          {etapa === 'convocacao' && <TelaConvocacao aoAvancar={avancar} />}
          {etapa === 'acusacoes' && <TelaAcusacoes aoAvancar={avancar} />}
          {etapa === 'defesa' && <TelaDefesa aoAvancar={avancar} />}
          {etapa === 'deliberacao' && <TelaDeliberacao aoAvancar={avancar} />}
          {etapa === 'condicoes' && (
            <TelaCondicoes escolha={escolha} aoEscolher={setEscolha} aoAvancar={avancar} />
          )}
          {etapa === 'final' && <TelaFinal escolha={escolha} />}
        </Tela>
      </div>

      {/* a patinha escondida so' existe na ultima tela */}
      {ehFinal && <Segredo />}
    </main>
  )
}
