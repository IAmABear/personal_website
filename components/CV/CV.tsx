import React from 'react'

import Skills from '../Skills'

import styles from './CV.module.css'

const CV = () => (
  <div
    className={`${styles.backdrop} bg-cover bg-no-repeat bg-center flex flex-col`}
    id="cv"
  >
    <span
      className={`${styles.backdropColor} grid auto-cols-auto gap-4 justify-items-center text-white`}
    >
      <h2 className="text-4xl mt-16 italic">Curriculum Vitae</h2>

      <section className="md:max-w-lg lg:max-w-3xl p-8 m-4 bg-gray-800 md:p-16 font-serif">
        <h3 className="text-3xl text-center mb-4">Profile</h3>
        <p className="text-base md:text-lg">
          Hi, my name is Floyd van Boksel, a{' '}
          <s className={styles.underline}>UX-designer</s> and a{' '}
          <s className="underline">self-taught front-end developer</s>; always
          looking to expand my programming knowledge and how to support all kind
          of devices without a hitch. Apart from that, I am always looking for a
          challange both in and outside of work hours so hit me up for a chat
          over a beer or two.
        </p>
      </section>

      <section className="w-full md:max-w-lg lg:max-w-3xl p-4 m-4 md:pb-16">
        <h3 className="text-3xl text-center mb-4">Skills</h3>
        <Skills />
      </section>
    </span>
  </div>
)

export default CV
