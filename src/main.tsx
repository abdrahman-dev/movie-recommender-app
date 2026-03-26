import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './style/index.css'
import App from './App.tsx'
import { MovieProvider } from './contexts/MovieContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <MovieProvider>
        <App />
      </MovieProvider>
    </Router>
  </StrictMode>,
)
