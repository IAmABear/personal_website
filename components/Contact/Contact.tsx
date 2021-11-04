import React from 'react'

const phoneNumber = '+316 43058239'
const email = 'floyd.van.boksel@gmail.com'
const residency = 'Zaandam, The Netherlands'

const Contact = () => (
  <div className="p-2 md:p-8 bg-blue-900" id="contact">
    <div className="flex flex-col justify-center items-center divide-y divide-white md:flex-row md:divide-y-0 md:divide-x">
      <a
        href="tel:+31643058239"
        className="font-sans py-2 font-normal text-white md:px-4 md:py-0 hover:underline"
      >
        {phoneNumber}
      </a>

      <a
        href="mailto:floyd.van.boksel@gmail.com"
        className="font-sans py-2 font-normal text-white md:px-4 md:py-0 hover:underline"
      >
        {email}
      </a>
      <p className="font-sans py-2 font-normal text-white md:px-4 md:py-0">
        {residency}
      </p>
    </div>
  </div>
)

export default Contact
