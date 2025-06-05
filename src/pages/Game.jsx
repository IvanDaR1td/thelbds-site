import { useTranslation } from 'react-i18next'

function Game() {
  const { t } = useTranslation()
  
  return (
    <div className="page game-page content-container">
      <h2>{t('game.title')}</h2>
      <p>{t('game.description')}</p>
      <div className="placeholder">
        {t('placeholder')}
      </div>
    </div>
  )
}

export default Game