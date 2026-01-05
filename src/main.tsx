import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import QualquerCoisa from './App'
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QualquerCoisa /> */}
    <App />
    {/* <h1> Olá Mundo</h1> */}
  </StrictMode>,
)
