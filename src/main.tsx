import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Leva } from 'leva'
import Overlay from './components/Overlay.tsx'

createRoot(document.getElementById('root')!).render(
  <div className='main'>
    <Leva
      collapsed={false}
      oneLineLabels={false}
      flat={true}
      theme={{
        sizes: {
          titleBarHeight: '28px',
        },
        fontSizes: {
          root: '10px',
        },
      }}
    />
    <App />
    <Overlay />
  </div>,
)
