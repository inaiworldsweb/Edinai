import './IntegrationOptionsSection.css'
import integrationImage from '../assets/1.jpg'

const integrationOptions = [
  {
    id: 'cloud-platform',
    title: '100% Cloud-Based Platform',
  },
  {
    id: 'multi-device',
    title: 'Accessible via smart TV, web app, or projector',
  },
  {
    id: 'system-integration',
    title: 'Seamlessly integrates with existing systems',
  },
]

const IntegrationOptionsSection = () => {
  return (
    <section className="integration" id="integration-options">
      <div className="integration__inner">
        <h3 className="integration__title">Integration Options</h3>

        <div className="integration__grid">
          {integrationOptions.map(({ id, title }) => (
            <div key={id} className="integration__item">
              <figure className="integration__media">
                <img src={integrationImage} alt={title} className="integration__image" loading="lazy" />
              </figure>
              <p className="integration__caption">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IntegrationOptionsSection
