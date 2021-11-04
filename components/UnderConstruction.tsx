import React from 'react'
import Image from 'next/image'

const ListItem = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-xl sm:text-3xl md:text-3xl">
      This website is under construction
    </h1>
    <Image
      src="/images/bear_logo_transparant.png"
      alt="logo"
      width="360px"
      height="360px"
    />
    <h2 className="text-lg sm:text-xl md:text-3xl">Please bear with it</h2>
  </div>
)

export default ListItem
