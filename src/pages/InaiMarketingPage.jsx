import './LoginPage.css'
import './studentlogin.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import SideMenu from '../components/SideMenu'

const navItems = ['EdInai', 'No Code Development', 'INAI For Marketing', 'INAI For Corporate Agent']

const InaiMarketingPage = ({ onBack }) => {
  return (
    <div className="login-page">
      <aside className="login-sidebar">
        <img src={logoImage} alt="INAI Verse logo" className="login-sidebar__logo" />
        <SideMenu className="side-menu" items={navItems} variant="landing" />
      </aside>

      <main className="login-main">
        <header className="login-main__topbar">
          <button type="button" className="login-main__back" onClick={onBack} aria-label="Go back">
            <span aria-hidden="true">←</span>
          </button>
          <div className="student-login__breadcrumb">
            <span className="student-login__breadcrumb-text">INAI For Marketing</span>
          </div>
        </header>

        <p className="login-subheading">Welcome to INAI For Marketing</p>

        <div className="login-card">
          <h1 className="login-heading">About INAI For Marketing</h1>
          <p className="student-login-label">INAI For Marketing Overview</p>
          <p style={{ lineHeight: 1.6, fontSize: '0.95rem' }}>
            This is the INAI For Marketing information page. You can customize this content with your own
            description, features, and links related to INAI For Marketing.
          </p>
        </div>
      </main>
    </div>
  )
}

export default InaiMarketingPage
