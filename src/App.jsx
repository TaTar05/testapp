import { useEffect, useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Personlist from './Component/Personlist'

const navigationItems = [
  { id: 'home', label: 'หน้าหลัก', icon: 'home' },
  { id: 'team', label: 'ทีม', icon: 'team' },
  { id: 'profile', label: 'โปรไฟล์', icon: 'profile' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem('peoplespace-theme') === 'dark',
  )

  useEffect(() => {
    window.localStorage.setItem('peoplespace-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div className="app-root" data-theme={isDarkMode ? 'dark' : 'light'}>
      <main className="app-shell">
        <Header
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((currentMode) => !currentMode)}
        />
        <Personlist />
      </main>
      <nav className="bottom-navigation" aria-label="เมนูหลัก">
        {navigationItems.map((item) => (
          <a
            className={`navigation-item${activeSection === item.id ? ' is-active' : ''}`}
            href={`#${item.id}`}
            key={item.id}
            aria-current={activeSection === item.id ? 'page' : undefined}
            onClick={() => setActiveSection(item.id)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {item.icon === 'home' && (
                <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
              )}
              {item.icon === 'team' && (
                <>
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20v-1a6 6 0 0 1 12 0v1zM16 5.2a3 3 0 0 1 0 5.6M17 14a5 5 0 0 1 4 5v1h-4" />
                </>
              )}
              {item.icon === 'profile' && (
                <>
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </>
              )}
            </svg>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default App
