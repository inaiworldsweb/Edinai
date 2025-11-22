import './LoginPage.css'
import './EdInaiPricePage.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import SideMenu from '../components/SideMenu'
import SiteFooter from '../components/SiteFooter'

const navItems = [
  'What is edinai?',
  'Meet our faculties',
  'Admin View  For Education Centres',
  'Student View  For Learners',
  'Teach in Every Way Your Students Want to Learn',
  'Learning Modes',
  'Why Ed-INAI Is the Future',
  'Streams We Cover',
  'Our Vision',
  'Adapt and Evolve',
  'Integration Options',
  'FAQ',
]

const pricingPlans = [
  {
    name: 'Easy to In',
    subtitle: 'Affordable package to start teaching easily',
    price: '20K',
    cadence: '/workspace',
    features: [
      '45 videos (1 year duration)',
      '720p max quality',
      '60 min maximum lecture length',
      'AI generated videos per lecture',
      '7 topics added every lecture',
      'Basic level Q&A with AI',
      'Normal teacher visuals (INAI, ARRA, VIMAI)',
      'Unlimited student browsing',
      'Support 6 languages',
      'iOS & Android student apps',
      '0% transaction fee',
      'Global payments & taxes included',
      '24/7 email technical support',
      'Extra credits: 1200 per lecture',
      'Extra AI-generated videos: 120 per video',
    ],
  },
  {
    name: 'Education Ride',
    subtitle: 'More features for better teaching and learning',
    price: '50K',
    cadence: '/workspace',
    featured: true,
    features: [
      '120 videos (1 year duration)',
      '4K 60 min maximum lecture length',
      'AI generated videos per lecture',
      '8 topics added per lecture',
      'AI moderated lecture notes (basic level)',
      'Free coding bootcamps (C, C++, ReactJs, HTML)',
      '200+ book suggestions',
      '90% lecture downloadable offline',
      'Advanced level Q&A with AI',
      '10% discount on student charges',
      'Support 18 languages',
      'Semi-realistic teacher visuals (INAI, ARRA, VIMAI)',
      'Unlimited student browsing',
      'iOS & Android student apps',
      '0% transaction fee',
      'Global payments & taxes included',
      '24/7 email & chat technical support',
      'Extra credits: 1800 per lecture',
      'Extra AI-generated videos: 125 per video',
    ],
  },
  {
    name: 'Deep learning',
    subtitle: 'For deep learning and classic lecture design',
    price: '100K',
    cadence: '/workspace',
    features: [
      '230 videos (1 year duration)',
      '1440p max quality',
      '90 min maximum lecture length',
      'AI generated videos per lecture',
      '10 topics added per lecture',
      'Deep analytic lectures with examples',
      'Captions in English & Hindi',
      'Add Q&A to every lecture',
      'AI technical lectures (research level)',
      'Free coding bootcamps (C, C++, HTML, CSS, Java, Python, ReactJs)',
      '300 book suggestions',
      '95% lecture downloadable offline',
      'Research-level Q&A with AI',
      '15% discount on student charges',
      'Supports all languages',
      'Hyper-realistic teacher visuals (INAI, ARRA, VIMAI)',
      'Access to property-stage new updates',
      'Unlimited student browsing',
      'iOS & Android student apps',
      'Global payments & taxes included',
      '24/7 email, chat & call support',
      'Extra credits: 2100 per lecture',
      'Extra AI-generated videos: 150 per video',
    ],
  },
]

const EdInaiPricePage = ({ onBack, onGoToEdInai }) => {
  return (
    <div className="login-page edinai-page">
      <aside className="login-sidebar">
        <img src={logoImage} alt="INAI Verse logo" className="login-sidebar__logo" />
        <SideMenu className="side-menu" items={navItems} variant="login" />
      </aside>

      <main className="login-main edinai-main">
        <header className="login-main__topbar">
          <button type="button" className="login-main__back" onClick={onBack} aria-label="Go back">
            <span aria-hidden="true">←</span>
          </button>
          <nav className="student-login__breadcrumb" aria-label="Breadcrumb">
            <span className="student-login__breadcrumb-prefix" aria-hidden="true">
              ›
            </span>
            <button
              type="button"
              className="student-login__breadcrumb-button student-login__breadcrumb-text student-login__breadcrumb-text--link"
              onClick={() => (onGoToEdInai ? onGoToEdInai() : onBack?.())}
            >
              EdInai
            </button>
            <span className="student-login__breadcrumb-separator" aria-hidden="true">
              ›
            </span>
            <span className="student-login__breadcrumb-text student-login__breadcrumb-text--current">Price</span>
          </nav>
        </header>

        <section className="edinai-price">
          <div className="edinai-price__intro">
            <h1 className="edinai-price__title">Pricing</h1>
            <p className="edinai-price__subtitle">See pricing for private education center</p>
          </div>

          <div className="edinai-price__plans">
            {pricingPlans.map(({ name, subtitle, price, cadence, features, featured }) => (
              <article
                key={name}
                className={`edinai-price-card${featured ? ' edinai-price-card--featured' : ''}`}
              >
                <header className="edinai-price-card__header">
                  <h2 className="edinai-price-card__title">{name}</h2>
                  <p className="edinai-price-card__subtitle">{subtitle}</p>
                </header>
                <ul className="edinai-price-card__features">
                  {features.map((feature) => (
                    <li key={feature} className="edinai-price-card__feature">
                      {feature}
                    </li>
                  ))}
                </ul>
                <footer className="edinai-price-card__footer">
                  <p className="edinai-price-card__price">
                    {price}
                    <span className="edinai-price-card__cadence">{cadence}</span>
                  </p>
                  <button type="button" className="edinai-price-card__cta">
                    Buy now
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    </div>
  )
}

export default EdInaiPricePage
