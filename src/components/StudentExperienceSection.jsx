import './StudentExperienceSection.css'

const StudentExperienceSection = () => {
  const dots = Array.from({ length: 5 })

  return (
    <section className="student-experience" id="student-view">
      <div className="student-experience__inner">
        <h2 className="student-experience__title">Student View – For Learners</h2>

        <figure className="student-experience__figure">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80"
            alt="AI teacher guiding students in a digital classroom"
            className="student-experience__image"
            loading="lazy"
          />
          <figcaption className="student-experience__caption">Attend Live &amp; Recorded Lectures</figcaption>
        </figure>

        <div className="student-experience__dots" role="presentation">
          {dots.map((_, index) => (
            <span
              key={index}
              className={`student-experience__dot${index === 0 ? ' student-experience__dot--active' : ''}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="student-experience__description">
          <span className="student-experience__bullet" aria-hidden="true" />
          <p>
            This is AI for teaching that adapts to every learning style from visual to verbal—making lessons clear, fun, and
            unforgettable.
          </p>
        </div>

        <button type="button" className="student-experience__cta">learn more</button>
      </div>
    </section>
  )
}

export default StudentExperienceSection
