import './LandingPage.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import SideMenu from '../components/SideMenu'

const LandingPage = ({
  onLogin,
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
    <div className="landing-page">
      <header className="landing-header">
        <div className="logo">
          <img src={logoImage} alt="INAI Verse logo" className="logo-image" />
        </div>
        <div className="header-actions">
          <button type="button" className="login-button" onClick={onLogin}>
            login
          </button>
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

      <div className="landing-body">
        <SideMenu
          className="side-menu"
          items={['EdInai', 'No Code Development', 'INAI For Marketing', 'INAI For Corporate Agent']}
          variant="landing"
          onSelectItem={handleSelectNavItem}
        />

        <main className="hero">
          <h1 className="hero-title">Welcome to INAI Verse</h1>
          <p className="hero-subtitle">
            We are for people , We are for new{' '}
            <span className="text-india">
              <span className="text-india--saffron">IN</span>
              <span className="text-india--white">D</span>
              <span className="text-india--green">IA</span>
            </span>
          </p>
          <div className="hero-divider" />
          <p className="hero-description">
            INAI Worlds is proudly recognized among the best AI companies building India's next<br />
            generation of AI tech. We build innovative AI solutions powered by machine learning,<br />
            deep learning, generative AI and NLP creating AI products that<br /> deliver real-world impact.
          </p>
        </main>
      </div>

      <footer className="landing-footer">
        <p className="footer-text">
          INAI Worlds is proudly recognized among the best AI companies building India's next generation of AI tech.
        </p>
        <button type="button" className="cta-button">
          <span className="cta-label">get started</span>
          <span className="cta-arrow-circle" aria-hidden="true">
            <span className="cta-arrow">→</span>
          </span>
        </button>
      </footer>
    </div>
  )
}

export default LandingPage
