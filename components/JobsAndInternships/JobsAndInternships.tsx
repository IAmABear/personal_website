import React from 'react'

import Jobs from '../Jobs'
import Internships from '../Internships'

import styles from './JobsAndInternships.module.css'

const JobsAndInternships = () => (
  <div
    className={`${styles.backdrop} bg-black grid text-white bg-cover bg-no-repeat bg-center flex flex-col`}
  >
    <span className={`${styles.backdropColor} `}>
      <Jobs />
      <Internships />
    </span>
  </div>
)

export default JobsAndInternships
