import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// 👇 ESTA LÍNEA ES LA CLAVE PARA QUE FUNCIONE EL DISEÑO
import './styles/global.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)