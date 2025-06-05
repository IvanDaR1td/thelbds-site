import { useTranslation } from 'react-i18next'

function Devlog() {
  const { t } = useTranslation()
  
  return (
    <div className="page devlog-page content-container">
      <h2>{t('devlog.title')}</h2>
      <ul className="devlog-list">
        {[1, 2, 3].map((item) => (
          <li key={item}>
            <h3>{t('devlog.entryTitle', { number: item })}</h3>
            <p>{t('placeholder')}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Devlog