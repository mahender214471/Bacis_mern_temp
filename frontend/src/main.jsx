import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebLayout from './Layout/WebLayout.jsx';
import { BrowserRouter } from "react-router-dom"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <WebLayout>
        <App />
      </WebLayout>
    </BrowserRouter>
  </StrictMode>,
)
