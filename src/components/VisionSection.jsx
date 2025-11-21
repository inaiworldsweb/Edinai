import './VisionSection.css'
import stepImage from '../assets/2.jpg'

const implementationSteps = [
  {
    id: 'register-institution',
    title: 'Register your institution and create an admin profile.',
  },
  {
    id: 'upload-syllabus',
    title: 'Upload your syllabus or academic modules.',
  },
  {
    id: 'schedule-lectures',
    title: 'Schedule AI-led lectures and assign topics.',
  },
  {
    id: 'run-classes',
    title: 'Let Ed-INAI conduct classes, handle Q&A, and generate analytics.',
  },
]

const VisionSection = () => {
  return (
    <section className="vision" id="vision">
      <div className="vision__inner">
        <header className="vision__header">
          <h2 className="vision__title">Our Vision</h2>
          <p className="vision__lead">We don’t want India to be left behind</p>
          <p className="vision__description">
            At INAI Worlds, we are shaping the next generation of education through AI innovation, accessibility, and empowerment
            for every learner.
          </p>
          <p className="vision__description vision__description--bold">We are for people. We are for New India.</p>
        </header>

        <div className="vision__implementation">
          <h3 className="vision__implementation-title">How to Implement Ed-INAI?</h3>
          <p className="vision__implementation-subtitle">Implementation Steps</p>

          <div className="vision__grid">
            {implementationSteps.map(({ id, title }, index) => (
              <div key={id} className="vision__step">
                <figure className="vision__media">
                  <img src={stepImage} alt="Students learning with AI guidance" className="vision__image" loading="lazy" />
                </figure>
                <p className="vision__step-title">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="vision__cta">
          <button type="button" className="vision__cta-button">learn more</button>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
