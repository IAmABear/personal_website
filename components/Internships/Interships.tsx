import React from 'react'
import Image from 'next/image'

import styles from './Intership.module.css'

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

const Interships = () => (
  <section className={`${styles.widthForce} p4`}>
    <h2 className="text-3xl mt-16 text-center mb-4 text-white">Internships</h2>
    <div className={`${styles.backdropColor} grid gap-4 p-6 pt-10 m-4 md:grid-cols-2 md:m-auto md:max-w-lg lg:max-w-3xl`}>
      {internships.map(({ company, startDate, endDate, image }) => (
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
            <h4 className="text-white font-bold">{company}</h4>
            <p>
              {startDate} - {endDate ? endDate : 'present'}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Interships
