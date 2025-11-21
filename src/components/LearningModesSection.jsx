import './LearningModesSection.css'
import featureImage from '../assets/stu.svg'
import liveImage from '../assets/Vinai.webp'
import recordedImage from '../assets/stu.svg'
import quizImage from '../assets/Aera.webp'

const modeCards = [
  {
    id: 'live-lectures',
    image: liveImage,
    title: 'Live Lectures via AI',
    description:
      'Experience real-time, interactive teaching with virtual AI teachers like INAI, VIMAI, and ARIA. Visual explanations keep every concept engaging and personalised.',
  },
  {
    id: 'recorded-revisions',
    image: recordedImage,
    title: 'Recorded Revisions',
    description:
      'Access AI-led lessons anytime for quick revisions and deeper understanding. Learners revisit topics at their own pace for flexible, self-directed study.',
  },
  {
    id: 'interactive-quizzes',
    image: quizImage,
    title: 'Interactive Quizzes and Challenges',
    description:
      'AI-generated quizzes and challenges test understanding in the moment, reinforcing memory with tailored feedback and immersive practice.',
  },
]

const LearningModesSection = () => {
  return (
    <section className="learning-modes" id="learning-modes">
      <div className="learning-modes__inner">
        <h2 className="learning-modes__heading">Learning Modes</h2>

        <div className="learning-modes__layout">
          <div className="learning-modes__feature">
            <figure className="learning-modes__figure">
              <img src={featureImage} alt="Student learning alongside an AI mentor" className="learning-modes__image" loading="lazy" />
            </figure>
            <div className="learning-modes__feature-content">
              <h3 className="learning-modes__title">Introducing learning mode for students</h3>
              <span className="learning-modes__eyebrow">Product Video</span>
              <button type="button" className="learning-modes__cta">learn more</button>
            </div>
          </div>

          <div className="learning-modes__cards" role="list">
            {modeCards.map(({ id, image, title, description }) => (
              <article key={id} className="learning-modes__card" role="listitem">
                <figure className="learning-modes__card-figure">
                  <img src={image} alt={title} className="learning-modes__card-image" loading="lazy" />
                </figure>
                <div className="learning-modes__card-content">
                  <h4 className="learning-modes__card-title">{title}</h4>
                  <p className="learning-modes__card-description">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearningModesSection
