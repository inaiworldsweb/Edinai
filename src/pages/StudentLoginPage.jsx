import './LoginPage.css'
import './studentlogin.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import studentLoginIcon from '../assets/stu.svg'
import SideMenu from '../components/SideMenu'

const navItems = ['EdInai', 'No Code Development', 'INAI For Marketing', 'INAI For Corporate Agent']

const StudentLoginPage = ({
  onBack,
  onAdminLogin,
  onEdInai,
  onNoCodeDevelopment,
  onInaiMarketing,
  onInaiCorporateAgent,
}) => {
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
          <div className="student-login__breadcrumb">
            <span className="student-login__breadcrumb-text">EdInai</span>
          </div>
          <div className="login-main__actions">
            <button type="button" className="icon-button" aria-label="Go to home">
              <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 11.5 12 5l8 6.5V20H4z"
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

        <p className="login-subheading">Login Here With Your Creds</p>

        <div className="login-card">
          <h1 className="login-heading">Enter your details</h1>
          <div className="icon-placeholder">
            <img src={studentLoginIcon} alt="Student login icon" className="icon-placeholder__img" />
          </div>
          <p className="student-login-label">Student Login</p>
          <form className="student-login__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="student-login__input"
              placeholder="Username"
            />
            <div className="student-login__password-row">
              <input
                type="password"
                className="student-login__input student-login__input--password"
                placeholder="Password"
              />
              <button
                type="button"
                className="student-login__password-toggle"
                aria-label="Toggle password visibility"
              >
                👁
              </button>
            </div>
          </form>
          <button
            type="button"
            className="admin-button"
            onClick={onAdminLogin}
          >
            Admin
          </button>
        </div>
      </main>
    </div>
  )
}

export default StudentLoginPage
