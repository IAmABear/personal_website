<script>
const internships = [
  {
    company: 'GridLine',
    role: 'Junior Front-end developer',
    startDate: '01-07-2014',
    endDate: '31-01-2015',
    image: '/img/gridline.svg',
  },
  {
    company: 'Werf3',
    role: 'UX designer',
    startDate: '01-02-2013',
    endDate: '31-07-2013',
    image: '/img/werf3.svg',
  },
]

export default {
  data() {
    return {
      internships
    }
  }
}
</script>

<template>
  <section class="width-force p4">
    <h2 class="text-3xl mt-16 text-center mb-4 text-white">Internships</h2>
    <div class="backdrop-color grid gap-4 p-6 pt-10 m-4 md:grid-cols-2 md:m-auto md:max-w-lg lg:max-w-3xl">
      <article class="grid grid-cols-2 items-center gap-4 pt-4" v-for="internship in internships">
        <NuxtImg :src="internship.image" class="px-8" :alt="internship.company" v-if="internship.image" />
        <div class="w-24 h-24 bg-black rounded-sm justify-self-end" v-else />

        <div>
          <h4 class="text-white font-bold">{{ internship.company }}</h4>
          <p>
            {{ internship.startDate }} - {{ internship.endDate ? internship.endDate : 'present' }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

