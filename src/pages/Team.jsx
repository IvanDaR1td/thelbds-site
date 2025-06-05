import { useTranslation } from 'react-i18next'
import member1Avatar from '../assets/avatars/member1.jpg'
import member2Avatar from '../assets/avatars/member2.jpg'
import member3Avatar from '../assets/avatars/member3.jpg'
import member4Avatar from '../assets/avatars/member4.jpg'

const avatars = {
  member1: member1Avatar,
  member2: member2Avatar,
  member3: member3Avatar,
  member4: member4Avatar
}

function MemberAvatar({ src, name }) {
  if (src) {
    return <img src={src} alt={`${name} avatar`} className="avatar" />
  } else {
    return <div className="avatar-placeholder">{name.charAt(0)}</div>
  }
}

function Team() {
  const { t } = useTranslation()

  return (
    <div className="page team-page content-container">
      <h2>{t('team.title')}</h2>
      <div className="team-members">
        {['member1', 'member2', 'member3', 'member4'].map((member) => {
          const name = t(`team.${member}.name`)
          return (
            <div className="member-card" key={member}>
              <MemberAvatar src={avatars[member]} name={name} />
              <h3>{name}</h3>
              <p>{t(`team.${member}.role`)}</p>
            </div>
          )
        })}
      </div>
      <p className="special-thanks">
        {t('team.specialThanks')}
      </p>
    </div>
  )
}

export default Team
