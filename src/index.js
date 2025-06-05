import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import './index.css'  // 你可以改成你的样式入口文件

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
