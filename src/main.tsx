import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css' // Estilos globales (Fondo rosa)
import './App.css'   // Estilos específicos (Contenedor blanco y centrado)
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Esto registra el Service Worker para el modo Offline y el Criterio PWA
registerSW()