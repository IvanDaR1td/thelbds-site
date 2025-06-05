import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t } = useTranslation()
  
  const navItems = [
    { path: "/", label: t('nav.home') },
    { path: "/game", label: t('nav.game') },
    { path: "/devlog", label: t('nav.devlog') },
    { path: "/team", label: t('nav.team') }
  ]

  return (
    <nav className="navbar">
      <ul>
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink 
              to={item.path} 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar