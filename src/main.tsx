import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import ProductContextProvider from './context/ProductContextProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProductContextProvider>
      <React.StrictMode>
          <App/>
      </React.StrictMode>,
  </ProductContextProvider>
)
