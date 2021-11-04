import React from 'react'

const Languages = () => (
  <section className="text-white font-sans font-normal">
    <h4 className="text-3xl">Languages</h4>
    <ul>
      <li className="py-2 flex items-center">
        <img
          src="./images/netherlands.png"
          alt="Netherlands"
          className="rounded-full w-8 h-8 mr-4"
        />{' '}
        Decent
      </li>
      <li className="py-2 flex items-center">
        <img
          src="./images/english.png"
          alt="English"
          className="rounded-full w-8 h-8 mr-4"
        />{' '}
        Good
      </li>
    </ul>
  </section>
)

export default Languages
