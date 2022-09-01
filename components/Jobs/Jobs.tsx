import React from 'react'
import Image from 'next/image'

import styles from './Jobs.module.css'

const jobs = [
  {
    company: 'Saxum',
    role: 'Front-end developer',
    startDate: '01-06-2018',
    endDate: undefined,
    image: '/images/saxum.svg',
  },
  {
    company: 'Nationale Nederlanden',
    role: 'Front-end developer',
    startDate: '20-02-2022',
    endDate: '01-05-2022',
    image: '/images/nn.svg',
  },
  {
    company: 'ANWB',
    role: 'Front-end developer',
    startDate: '01-04-2020',
    endDate: '19-02-2022',
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

const Jobs = () => (
  <section className={`${styles.widthForce} p4`}>
    <h2 className="text-3xl mt-10 text-center mb-4 text-white">Jobs</h2>
    <div
      className={`${styles.backdropColor} grid p-6 pt-10 m-4 gap-4 md:grid-cols-2 md:m-auto md:max-w-lg lg:max-w-3xl`}
    >
      {jobs.map(({ company, role, startDate, endDate, image }) => (
        <article
          className="grid grid-cols-2 items-center gap-4 pt-4"
          key={company}
        >
          {image ? (
            <Image src={image} width={10} height={50} alt={company} />
          ) : (
            <div className="w-24 h-24 bg-black rounded-sm justify-self-end" />
          )}

          <div>
            <h4 className="text-white font-bold font-serif">{company}</h4>
            <p className="font-serif">
              {startDate} - <br /> {endDate ? endDate : 'present'}
            </p>
            <i>{role}</i>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Jobs
