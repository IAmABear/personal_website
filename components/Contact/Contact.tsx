import React from 'react'

const phoneNumber = '+316 43058239'
const email = 'floyd.van.boksel@gmail.com'
const residency = 'Zaandam, The Netherlands'

const Contact = () => (
  <div className="p-2 md:p-8 bg-blue-900 ">
    <div className="flex flex-col justify-center items-center divide-y divide-white md:flex-row md:divide-y-0 md:divide-x">
      <p className="font-sans py-2 font-normal text-white md:px-4 md:py-0">
        {phoneNumber}
      </p>
      <p className="font-sans py-2 font-normal text-white md:px-4 md:py-0">
        {email}
      </p>
      <p className="font-sans py-2 font-normal text-white md:px-4 md:py-0">
        {residency}
      </p>
    </div>
  </div>
)

export default Contact
