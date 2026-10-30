import { useState } from 'react'
import ProfileCard from './ProfileCard'

function Header({ isDarkMode, onToggleTheme }) {
  const [name, setName] = useState('Wongsathon.th')
  const [age, setAge] = useState(20)

  return (
    <header className="page-header" id="home">
      <div className="brand-row">
        <a className="brand" href="/" aria-label="PeopleSpace home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>PeopleSpace</span>
        </a>
        <span className="workspace-label">
          <span className="status-dot" aria-hidden="true" />
          พื้นที่ทำงานของฉัน
        </span>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`เปลี่ยนเป็นโหมด${isDarkMode ? 'สว่าง' : 'มืด'}`}
          title={`เปลี่ยนเป็นโหมด${isDarkMode ? 'สว่าง' : 'มืด'}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {isDarkMode ? (
              <>
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </>
            ) : (
              <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
            )}
          </svg>
          <span>{isDarkMode ? 'โหมดสว่าง' : 'โหมดมืด'}</span>
        </button>
      </div>

      <ProfileCard
        name={name}
        age={age}
        onIncreaseAge={() => setAge((currentAge) => currentAge + 1)}
        onDecreaseAge={() => setAge((currentAge) => currentAge - 1)}
        onChangeName={() => setName((currentName) => currentName === 'Wongsathon.th' ? 'tatar' : 'Wongsathon.th')}
      />
    </header>
  )
}

export default Header
