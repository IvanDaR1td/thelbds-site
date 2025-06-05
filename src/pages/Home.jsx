import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'

function Home() {
  const { t } = useTranslation()
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    // 在组件挂载后开始动画
    setTimeout(() => setIsAnimating(true), 300)
  }, [])

  return (
    <div className={`home-page content-container ${isAnimating ? 'animate-in' : ''}`}>
      <img 
        src={logo} 
        className="logo" 
        alt="The LBDs Logo" 
      />
      <p className="slogan">{t('slogan')}</p>
      <p className="description">{t('description')}</p>
    </div>
  )
}

export default Home