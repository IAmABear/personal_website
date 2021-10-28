import React from 'react'
import Image from 'next/image'

import Star from '../Star'

const skills = [
  {
    skill: 'JavaScript',
    experience: 4,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/images/js.svg',
  },
  {
    skill: 'CSS(3)',
    experience: 3,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/images/css3.svg',
  },
  {
    skill: 'HTML(5)',
    experience: 4,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/images/HTML5.svg',
  },
  {
    skill: 'Ruby',
    experience: 3,
    startDate: '07-01-2014',
    endDate: '06-01-2018',
    image: '/images/ruby.svg',
  },
  {
    skill: 'GraphQL',
    experience: 2,
    startDate: '06-01-2017',
    endDate: '06-01-2018',
    image: '/images/graphql.svg',
  },
  {
    skill: 'React',
    experience: 4,
    startDate: '06-01-2017',
    endDate: undefined,
    image: '/images/react.svg',
  },
]

const Skills = () => {
  function monthDiff(d1, d2) {
    let months
    months = (d2.getFullYear() - d1.getFullYear()) * 12
    months -= d1.getMonth()
    months += d2.getMonth()
    return months <= 0 ? 0 : months
  }

  function yearsOfExperience(d1, d2) {
    const monthsOfExperience = monthDiff(d1, d2)
    const years = monthsOfExperience / 12
    return Math.ceil(years)
  }

  return (
    <div className="grid gap-8 md:gap-16 md:grid-cols-2">
      {skills.map(({ skill, experience, startDate, endDate, image }) => (
        <article className="grid grid-cols-2 items-center gap-8" key={skill}>
          {image ? (
            <Image src={image} width={50} height={90} />
          ) : (
            <div className="w-24 h-24 bg-black rounded-sm justify-self-end" />
          )}

          <div>
            <h4 className="text-white font-bold">{skill}</h4>
            <p>
              +/-{' '}
              {yearsOfExperience(
                new Date(startDate),
                endDate ? new Date(endDate) : new Date()
              )}{' '}
              years
            </p>
            <div className="flex">
              {[...Array(5)].map((_item, index) => (
                <Star key={index} solid={index < experience} />
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Skills
