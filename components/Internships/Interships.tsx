import React from 'react'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'

import styles from './Intership.module.css'
import 'react-multi-carousel/lib/styles.css'

const internships = [
  {
    company: 'GridLine',
    role: 'Junior Front-end developer',
    startDate: '01-07-2014',
    endDate: '31-01-2015',
    image: '/images/gridline.svg',
  },
  {
    company: 'Werf3',
    role: 'UX designer',
    startDate: '01-02-2013',
    endDate: '31-07-2013',
    image: '/images/werf3.svg',
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
  <section className={`${styles.widthForce} p4`}>
    <h2 className="text-2xl mt-16 text-center mb-4 text-white">Internships</h2>
    <div className="bg-gray-800 p-6 pt-10 m-4 md:m-auto md:max-w-lg lg:max-w-3xl">
      <Carousel responsive={responsive}>
        {internships.map(({ company, startDate, endDate, image }) => (
          <article
            className="grid grid-rows-2 items-center gap-4"
            key={company}
          >
            {image ? (
              <Image src={image} width={10} height={50} alt={company} />
            ) : (
              <div className="w-24 h-24 bg-black rounded-sm justify-self-end" />
            )}

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
