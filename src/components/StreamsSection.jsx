import './StreamsSection.css'

const streamRows = [
  {
    id: 'streams-top',
    items: ['Secondary Education', 'Higher Secondary', 'Science', 'Commerce'],
  },
  {
    id: 'streams-middle',
    items: ['Arts & Humanities', 'Engineering', 'Medical Preparation'],
    offset: true,
  },
  {
    id: 'streams-bottom',
    items: ['Technology & Coding', 'Competitive Exams', 'Professional Upskilling', 'Language Learning'],
  },
]

const StreamsSection = () => {
  return (
    <section className="streams" id="streams">
      <div className="streams__inner">
        <h2 className="streams__title">Streams We Cover</h2>

        <div className="streams__rows">
          {streamRows.map(({ id, items, offset }) => (
            <div key={id} className={`streams__row${offset ? ' streams__row--offset' : ''}`}>
              {items.map((label) => (
                <span key={label} className="streams__chip">
                  {label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StreamsSection
