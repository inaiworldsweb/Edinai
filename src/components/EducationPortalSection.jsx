import { useState } from 'react'
import './EducationPortalSection.css'
import adminImage from '../assets/Vinai.webp'
import studentImage from '../assets/stu.svg'
import developerImage from '../assets/dev.svg'
import mentorImage from '../assets/Aera.webp'

const slides = [
  {
    id: 'admin-view',
    title: 'Admin View – For Education Centres',
    image: adminImage,
    caption: 'Upload & Organize Curriculum',
    description:
      'From scheduling to tracking, everything runs seamlessly powered by automation that reduces manual work and increases teaching efficiency.',
  },
  {
    id: 'student-view',
    title: 'Student View – For Learners',
    image: studentImage,
    caption: 'Attend Live & Recorded Lectures',
    description:
      'This is AI for teaching that adapts to every learning style from visual to verbal—making lessons clear, fun, and unforgettable.',
  },
  {
    id: 'developer-view',
    title: 'Developer Studio – For Instructors',
    image: developerImage,
    caption: 'Create Immersive Lessons',
    description:
      'Teachers assemble multimedia lectures, assessments, and lab demos with drag-and-drop ease, powered by Ed-INAI’s content studio.',
  },
  {
    id: 'mentor-view',
    title: 'Mentor Hub – For Virtual AI Guides',
    image: mentorImage,
    caption: 'Deliver AI-Led Coaching',
    description:
      'AI mentors collaborate with institutions to host live sessions, answer questions, and keep batches on track across every learning mode.',
  },
]

const EducationPortalSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(slides.length - 1)
      return
    }

    if (index >= slides.length) {
      setCurrentIndex(0)
      return
    }

    setCurrentIndex(index)
  }

  const currentSlide = slides[currentIndex]

  return (
    <section className="portal-section" id="admin-view">
      <div className="portal-section__inner">
        <header className="portal-section__header">
          <h2 className="portal-section__title">Inside the Ed-INAI AI Education Portal</h2>
          <p className="portal-section__subtitle">
            From administration to learning, Ed-INAI brings automation, precision, and personalization to every level of education.
          </p>
        </header>

        <div className="portal-section__slide" aria-live="polite">
          <h3 className="portal-section__slide-title">{currentSlide.title}</h3>
          <button
            type="button"
            className="portal-section__image-wrapper"
            onClick={() => goToSlide(currentIndex + 1)}
            aria-label="Show next portal view"
          >
            <img src={currentSlide.image} alt={currentSlide.title} className="portal-section__image" loading="lazy" />
          </button>
          <div className="portal-section__controls">
            <div className="portal-section__dots" role="tablist" aria-label="Portal views">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={`portal-section__dot${index === currentIndex ? ' portal-section__dot--active' : ''}`}
                  aria-label={`Show ${slide.title}`}
                  aria-selected={index === currentIndex}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
          <p className="portal-section__caption">{currentSlide.caption}</p>
          <p className="portal-section__description">{currentSlide.description}</p>
        </div>
      </div>
    </section>
  )
}

export default EducationPortalSection
