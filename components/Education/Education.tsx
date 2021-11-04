import React from 'react'

import styles from './Education.module.css'

const Education = () => (
  <div
    className={`${styles.backdrop} bg-cover bg-no-repeat bg-center flex flex-col`}
  >
    <span
      className={`${styles.backdropColor} grid auto-cols-auto gap-4 justify-items-center text-white`}
    >
      <h2 className="text-3xl mt-16">Education</h2>

      <section className="items-center justify-center flex flex-col mb-16 md:mb-32">
        <img
          src="./images/hva.png"
          alt="Hogeschool van Amsterdam"
          className="max-w-xs max-h-20 bg-white rounded-full p-2 my-4"
        />
        <h3 className="text-lg text-center">Hogeschool van Amsterdam</h3>
        <h4 className="text-sm">Field of Study: Interaction Design</h4>
        <h5 className="text-sm italic">September 2010 - January 2015</h5>
      </section>
    </span>
  </div>
)

export default Education
