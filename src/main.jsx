import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getAssetPath } from './utils/assetPath'

// Preload priority videos — starts browser download before React mounts
;['videos/intro/GettyImages-1444535963.mp4', 'videos/ch1/ch1_1.mp4'].forEach(
    (path) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'fetch'
        link.crossOrigin = 'anonymous'
        link.href = getAssetPath(path)
        document.head.appendChild(link)
    }
)

createRoot(document.getElementById('react-root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
