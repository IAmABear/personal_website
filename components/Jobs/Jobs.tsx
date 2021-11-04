import React from 'react'
import Image from 'next/image'

import Carousel from 'react-multi-carousel'

import styles from './Jobs.module.css'
import 'react-multi-carousel/lib/styles.css'

const jobs = [
  {
    company: 'ANWB',
    role: 'Front-end developer',
    startDate: '01-04-2020',
    endDate: undefined,
    image: '/images/anwb.svg',
  },
  {
    company: 'Nationale Nederlanden',
    role: 'Front-end developer',
    startDate: '01-11-2019',
    endDate: '31-03-2020',
    image: '/images/nn.svg',
  },
  {
    company: 'Transvia',
    role: 'Front-end developer',
    startDate: '01-06-2018',
    endDate: '31-10-2019',
    image: '/images/transvia.svg',
  },
  {
    company: 'Saxum',
    role: 'Front-end developer',
    startDate: '01-06-2018',
    endDate: undefined,
    image: '/images/saxum.svg',
  },
  {
    company: 'GridLine',
    role: 'Junior Front-end developer',
    startDate: '01-03-2015',
    endDate: '31-05-2018',
    image: '/images/gridline.svg',
  },
  {
    company: 'Werf3',
    role: 'UX designer',
    startDate: '01-06-2013',
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

const Jobs = () => (
  <section className={`${styles.widthForce} p4`}>
    <h2 className="text-2xl mt-10 text-center mb-4 text-white">Jobs</h2>
    <div className="bg-gray-800 p-6 pt-10 m-4 md:m-auto md:max-w-lg lg:max-w-3xl">
      <Carousel responsive={responsive}>
        {jobs.map(({ company, role, startDate, endDate, image }) => (
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
              <i>{role}</i>
            </div>
          </article>
        ))}
      </Carousel>
    </div>
  </section>
)

export default Jobs
