import React from 'react'

const minors = [
  {
    minor: 'Datavisualisation',
    startDate: 'September 2013',
    endDate: 'February 2014',
  },
  {
    minor: 'Mobile Interaction',
    startDate: 'February 2014',
    endDate: 'June 2014',
  },
]

const Minors = () => (
  <section className="text-white font-sans font-normal">
    <h4 className="text-3xl">Minors</h4>
    <ul>
      {minors.map(({ minor, startDate, endDate }) => (
        <li className="py-2 md:max-w-xs" key={minor}>
          {minor}
          <br />({startDate} - {endDate})
        </li>
      ))}
    </ul>
  </section>
)

export default Minors
