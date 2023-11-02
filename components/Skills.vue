<script>
const skills = [
  {
    skill: 'JavaScript',
    experience: 4,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/img/js.svg',
  },
  {
    skill: 'CSS(3)',
    experience: 3,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/img/css3.svg',
  },
  {
    skill: 'HTML(5)',
    experience: 4,
    startDate: '07-01-2014',
    endDate: undefined,
    image: '/img/HTML5.svg',
  },
  {
    skill: 'Ruby',
    experience: 3,
    startDate: '07-01-2014',
    endDate: '06-01-2018',
    image: '/img/ruby.svg',
  },
  {
    skill: 'GraphQL',
    experience: 2,
    startDate: '06-01-2017',
    endDate: '06-01-2018',
    image: '/img/graphql.svg',
  },
  {
    skill: 'React',
    experience: 4,
    startDate: '06-01-2017',
    endDate: undefined,
    image: '/img/react.svg',
  },
]

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

export default {
  data() {
    return {
      skills: skills.map((skill) => ({
        ...skill,
        yearsOfExperience: yearsOfExperience(new Date(skill.startDate), skill.endDate ? new Date(skill.endDate) : new Date())
      }))
    }
  }
}
</script>

<template>
  <div class="backdrop-color grid gap-8 md:gap-16 md:grid-cols-2 m-2 rounded p-6">
    <article class="grid grid-cols-2 items-center gap-8" v-for="skill in skills">
      <NuxtImg :src="skill.image" :width="50" :height="90" :alt="skill.skill" v-if="skill.image" />
      <div class="w-24 h-24 bg-black rounded-sm justify-self-end" v-else />

      <div>
        <h4 class="text-white font-bold font-serif">{{ skill.skill }}</h4>
        <p class="font-serif">
          +/- {{ skill.yearsOfExperience }}
        </p>
        <div class="flex">
          <Star v-for="item in 5" :solid="item <= skill.experience"></Star>
        </div>
      </div>
    </article>
  </div>
</template>
