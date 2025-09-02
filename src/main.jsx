import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './common/Stair.jsx'
import Navcontext from './context/Navcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stair>
     <Navcontext>
      <App />
     </Navcontext>
     </Stair>
    </BrowserRouter>
   
  </StrictMode>,
)
