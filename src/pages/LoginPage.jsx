import './LoginPage.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import RoleSelector from '../components/RoleSelector'
import SideMenu from '../components/SideMenu'

const navItems = ['EdInai', 'No Code Development', 'INAI For Marketing', 'INAI For Corporate Agent']

const LoginPage = ({
  onBack,
  onStudentLogin,
  onAdminLogin,
  onDeveloperLogin,
  onEdInai,
  onNoCodeDevelopment,
  onInaiMarketing,
  onInaiCorporateAgent,
}) => {
  const handleSelectRole = (role) => {
    if (role === 'Student' && onStudentLogin) {
      onStudentLogin()
    } else if (role === 'Developer' && onDeveloperLogin) {
      onDeveloperLogin()
    } else if (role === 'Admin' && onAdminLogin) {
      onAdminLogin()
    }
  }

  const handleSelectNavItem = (item) => {
    if (item === 'EdInai' && onEdInai) {
      onEdInai()
    } else if (item === 'No Code Development' && onNoCodeDevelopment) {
      onNoCodeDevelopment()
    } else if (item === 'INAI For Marketing' && onInaiMarketing) {
      onInaiMarketing()
    } else if (item === 'INAI For Corporate Agent' && onInaiCorporateAgent) {
      onInaiCorporateAgent()
    }
  }

  return (
    <div className="login-page">
      <aside className="login-sidebar">
        <img src={logoImage} alt="INAI Verse logo" className="login-sidebar__logo" />
        <SideMenu
          className="side-menu"
          items={navItems}
          variant="landing"
          onSelectItem={handleSelectNavItem}
        />
      </aside>

      <main className="login-main">
        <header className="login-main__topbar">
          <button type="button" className="login-main__back" onClick={onBack} aria-label="Go back">
            <span aria-hidden="true">←</span>
          </button>
          <div className="login-main__actions">
            <button type="button" className="icon-button" aria-label="Go to home">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 11.5 12 5l8 6.5V20H4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.5 20v-5.25h5V20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button type="button" className="icon-button" aria-label="Open menu">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1.8" />
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" />
                <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
        </header>

        <h1 className="login-heading">Select Your Login Preference</h1>

        <div className="login-stage">
          <div className="login-illustration" role="img" aria-label="Artificial intelligence handshake illustration" />

          <div className="login-roles-panel">
            <RoleSelector onSelectRole={handleSelectRole} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
