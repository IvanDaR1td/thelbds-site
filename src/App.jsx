import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import i18n from './i18n'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const { t } = useTranslation()
  const [lang, setLang] = useState('en')
  const location = useLocation()
  
  // 页面切换时滚动到顶部
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleLangChange = (e) => {
    const selected = e.target.value
    setLang(selected)
    i18n.changeLanguage(selected)
  }

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <h1>{t('title')}</h1>
          <select 
            className="lang-selector" 
            value={lang} 
            onChange={handleLangChange}
            aria-label="Select language"
          >
            <option value="en">EN</option>
            <option value="zh">中文</option>
            <option value="jp">日本語</option>
          </select>
        </div>
        <Navbar />
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer>
        <p>{t('slogan')}</p>
        <p className="copyright">&copy; {new Date().getFullYear()} The LBDs</p>
      </footer>
    </div>
  )
}

export default App
