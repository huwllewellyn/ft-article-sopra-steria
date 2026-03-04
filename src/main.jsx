import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { getAssetPath } from './utils/assetPath'

// TEST: block all scroll listeners on mobile to isolate crash
if (window.innerWidth < 768) {
    const _orig = window.addEventListener;
    window.addEventListener = function (type, ...args) {
        if (type === 'scroll') return;
        return _orig.call(this, type, ...args);
    };
}

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
