import './LoginPage.css'
import './Edinaipage.css'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import SideMenu from '../components/SideMenu'
import MeetOurFaculties from '../components/MeetOurFaculties'
import EducationPortalSection from '../components/EducationPortalSection'
import StudentExperienceSection from '../components/StudentExperienceSection'
import teachImage from '../assets/Vinai.webp'
import featureCardImage from '../assets/inai.webp'
import LearningModesSection from '../components/LearningModesSection'
import StreamsSection from '../components/StreamsSection'
import VisionSection from '../components/VisionSection'
import AdaptSection from '../components/AdaptSection'
import IntegrationOptionsSection from '../components/IntegrationOptionsSection'
import FaqSection from '../components/FaqSection'

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

const futureHighlights = [
  {
    title: 'AI Teachers that Never Tire',
    description:
      'INAI, VANI, and ARIA deliver consistent, intelligent lectures with human-like interaction and clarity.',
  },
  {
    title: '24/7 Availability',
    description:
      'Students can learn anytime through on-demand sessions, AI-generated notes, and instant Q&A support.',
  },
  {
    title: 'Automation for Institutions',
    description:
      'Simplifies scheduling, tracking, and performance monitoring—reducing manual effort for schools and colleges.',
  },
  {
    title: 'Future-Ready Education',
    description:
      'Keeps curricula aligned with industry trends through continuous AI updates and localized content.',
  },
  {
    title: 'Personalized Learning',
    description:
      'Adapts to every student’s pace with real-time feedback, smart analytics, and multilingual delivery.',
  },
  {
    title: 'Data-Driven Insights',
    description:
      'Provides educators with dashboards that highlight learning gaps, attendance, and engagement in seconds.',
  },
]

const overviewItems = [
  {
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    alt: 'Virtual instructor delivering a lesson on a large screen',
    textLines: [
      'Ed-INAI is an AI-powered education platform',
      'where virtual AI GPT models conduct live and',
      'interactive lectures through smart',
      'interfaces.',
    ],
    centerText: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80',
    alt: 'Students experiencing immersive simulations in a futuristic setting',
    textLines: [
      'Schools and colleges can upload their syllabus,',
      'schedule lectures, and let Ed-INAI handle teaching, explaining, and',
      'student interaction—all powered by AI for teaching',
      'that keeps improving.',
    ],
    variant: 'text-first',
    centerText: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    alt: 'AI assistant collaborating with a professional on a transparent interface',
    textLines: [
      'Our virtual AI mentors BALI, VIMAI, and ARIA bring',
      'storytelling, design, and engineering to life—delivering',
      'immersive, AI-driven lessons tailored for Indian classrooms,inclusive and',
      ' effective.',
    ],
    centerText: true,
  },
]

const EdInaiPage = ({ onBack }) => {
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
          <div className="student-login__breadcrumb">
            <span className="student-login__breadcrumb-text">EdInai</span>
          </div>
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

        <section className="edinai-hero">
          <div className="edinai-hero__top">
            <h1 className="edinai-hero__title">AI That Turns<br/>Education into <br />Fun and Intellectual</h1>
             <button type="button" className="edinai-hero__cta">
              <span className="edinai-hero__cta-label">get started</span>
              <span className="edinai-hero__cta-icon" aria-hidden="true">
                →
              </span>
            </button>
          </div>

          <div className="edinai-hero__middle">
            <h2 className="edinai-hero__subtitle">Jumpstart Your<br /> Education Experience <br />with Ed-INAI </h2>
            <div className="edinai-hero__image" aria-hidden="true" />
          </div>

          <p className="edinai-hero__description">
            Ed-INAI is an advanced AI-powered education platform  where virtual AI teachers conduct live,
            interactive lectures for schools and colleges across India. Experience the next generation of AI
            education built for the classrooms of the future.
          </p>
        </section>

        <section className="edinai-overview" id="what-is-edinai">
          <h2 className="edinai-overview__title">What is Ed-INAI?</h2>
          <div className="edinai-overview__grid">
            {overviewItems.map(({ image, alt, text, textLines, variant, centerText }, index) => {
              const rowClasses = ['edinai-overview__row']
              if (variant === 'text-first') {
                rowClasses.push('edinai-overview__row--text-first')
              }
              if (centerText) {
                rowClasses.push('edinai-overview__row--center-text')
              }

              const descriptionContent = textLines
                ? textLines.map((line, lineIndex) => (
                    <span key={`${index}-${lineIndex}`} className="edinai-overview__line">
                      {line}
                    </span>
                  ))
                : text

              const description = (
                <p className={`edinai-overview__description${centerText ? ' edinai-overview__description--center' : ''}`}>
                  {descriptionContent}
                </p>
              )

              const imageElement = (
                <div className="edinai-overview__image-wrapper">
                  <img src={image} alt={alt} loading="lazy" className="edinai-overview__image" />
                </div>
              )

              return (
                <div key={index} className={rowClasses.join(' ')}>
                  {variant === 'text-first' ? (
                    <>
                      {description}
                      {imageElement}
                    </>
                  ) : (
                    <>
                      {imageElement}
                      {description}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <MeetOurFaculties />

        <EducationPortalSection />
         <StudentExperienceSection />

    

        <section className="edinai-teach" id="teach-in-every-way-your-students-want-to-learn">
          <div className="edinai-teach__inner">
            <div className="edinai-teach__image-wrapper">
              <img src={teachImage} alt="Educator using AI tools to customise lessons" className="edinai-teach__image" loading="lazy" />
            </div>
            <div className="edinai-teach__content">
              <h2 className="edinai-teach__title">Teach in Every Way<br />Students Want<br />to Learn</h2>
            </div>
          </div>
        </section>

        {/* <LearningModesSection /> */}

        <section className="edinai-future" id="why-ed-inai">
          <div className="edinai-future__inner">
            <h2 className="edinai-future__title">Why Ed-INAI Is the Future of AI Education in India</h2>
            <div className="edinai-future__grid">
              {futureHighlights.map(({ title, description }) => (
                <article key={title} className="edinai-future__card">
                  <div className="edinai-future__media">
                    <img src={featureCardImage} alt="AI-powered learning experience" className="edinai-future__image" loading="lazy" />
                  </div>
                  <div className="edinai-future__content">
                    <h3 className="edinai-future__heading">{title}</h3>
                    <p className="edinai-future__description">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>


        </section>
        <VisionSection />
          <IntegrationOptionsSection />
        <StreamsSection />
          <AdaptSection />
          <FaqSection />
      </main>
    </div>
  )
}

export default EdInaiPage
