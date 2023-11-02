
<script>
const jobs = [
  {
    company: 'Saxum',
    role: 'Front-end developer',
    startDate: '01-06-2018',
    endDate: undefined,
    image: '/img/saxum.svg',
  },
  {
    company: 'Nationale Nederlanden',
    role: 'Front-end developer',
    startDate: '20-02-2022',
    endDate: '01-05-2022',
    image: '/img/nn.svg',
  },
  {
    company: 'ANWB',
    role: 'Front-end developer',
    startDate: '01-04-2020',
    endDate: '19-02-2022',
    image: '/img/anwb.svg',
  },
  {
    company: 'Nationale Nederlanden',
    role: 'Front-end developer',
    startDate: '01-11-2019',
    endDate: '31-03-2020',
    image: '/img/nn.svg',
  },
  {
    company: 'Transvia',
    role: 'Front-end developer',
    startDate: '01-06-2018',
    endDate: '31-10-2019',
    image: '/img/transvia.svg',
  },
  {
    company: 'GridLine',
    role: 'Junior Front-end developer',
    startDate: '01-03-2015',
    endDate: '31-05-2018',
    image: '/img/gridline.svg',
  },
  {
    company: 'Werf3',
    role: 'UX designer',
    startDate: '01-06-2013',
    endDate: '31-07-2013',
    image: '/img/werf3.svg',
  },
]

export default {
  data() {
    return {
      jobs
    }
  }
}
</script>

<template>
  <section class="width-force p4">
    <h2 class="text-3xl mt-10 text-center mb-4 text-white">Jobs</h2>
    <div class="backdrop-color grid p-6 pt-10 m-4 gap-4 md:grid-cols-2 md:m-auto md:max-w-lg lg:max-w-3xl">
      <article class="grid grid-cols-2 items-center gap-4 pt-4" v-for="job in jobs">
        <NuxtImg :src="job.image" :alt="job.company" v-if="job.image" class="px-8" />
        <div class="w-24 h-24 bg-black rounded-sm justify-self-end" v-else />

        <div>
          <h4 class="text-white font-bold font-serif">{{ job.company }}</h4>
          <p class="font-serif">
            {{ job.startDate }} - <br /> {{ job.endDate ? job.endDate : 'present' }}
          </p>
          <i>{{ job.role }}</i>
        </div>
      </article>
    </div>
  </section>
</template>
