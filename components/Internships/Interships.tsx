import React from 'react'

import Carousel from 'react-multi-carousel'

import 'react-multi-carousel/lib/styles.css'

const internships = [
  {
    company: 'GridLine',
    role: 'Junior Front-end developer',
    startDate: '01-07-2014',
    endDate: '31-01-2015',
  },
  {
    company: 'Werf3',
    role: 'UX designer',
    startDate: '01-02-2013',
    endDate: '31-07-2013',
  },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Interships = () => (
  <section className="width-force p-4">
    <h2 className="text-2xl mt-16 text-center mb-4 text-white">Internships</h2>
    <div className="bg-blue-800 p-6 pt-10 m-auto md:max-w-lg lg:max-w-3xl">
      <Carousel responsive={responsive}>
        {internships.map(({ company, startDate, endDate }) => (
          <article
            className="grid grid-cols-2 items-center gap-4"
            key={company}
          >
            <div className="w-24 h-24 bg-white rounded-sm justify-self-end" />

            <div>
              <h4 className="text-white font-bold">{company}</h4>
              <p>
                {startDate} - {endDate ? endDate : 'present'}
              </p>
            </div>
          </article>
        ))}
      </Carousel>
    </div>
  </section>
)

export default Interships
