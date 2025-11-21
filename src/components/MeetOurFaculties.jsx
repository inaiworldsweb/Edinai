import './MeetOurFaculties.css'
import facultyImage from '../assets/inai.webp'

const MeetOurFaculties = () => {
  return (
    <section className="meet-faculties" id="meet-our-faculties">
      <div className="meet-faculties__inner">
        <h1 className="meet-faculties__title">Meet our faculties</h1>
        <div className="meet-faculties__image-wrapper">
          <img src={facultyImage} alt="AI-powered faculty mentor" loading="lazy" className="meet-faculties__image" />
        </div>
      </div>
    </section>
  )
}

export default MeetOurFaculties
