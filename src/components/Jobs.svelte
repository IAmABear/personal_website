<script>
  import Carousel from '@beyonk/svelte-carousel'

  const jobs = [
    {
      company: 'ANWB',
      role: 'Front-end developer',
      startDate: '01-04-2020',
      endDate: undefined,
    },
    {
      company: 'Nationale Nederlanden',
      role: 'Front-end developer',
      startDate: '01-11-2019',
      endDate: '31-03-2020',
    },
    {
      company: 'Transvia',
      role: 'Front-end developer',
      startDate: '01-06-2018',
      endDate: '31-10-2019',
    },
    {
      company: 'Saxum',
      role: 'Front-end developer',
      startDate: '01-06-2018',
      endDate: undefined,
    },
    {
      company: 'GridLine',
      role: 'Junior Front-end developer',
      startDate: '01-03-2015',
      endDate: '31-05-2018',
    },
    {
      company: 'Werf3',
      role: 'UX designer',
      startDate: '01-06-2013',
      endDate: '31-07-2013',
    },
  ]
</script>

<section class="width-force p-4">
  <h2 class="text-2xl mt-10 text-center mb-4 text-white">Jobs</h2>
  <div class="bg-blue-800 p-6 pt-10 m-auto md:max-w-lg lg:max-w-3xl">
    <Carousel perPage={{ 639: 1, 640: 2 }}>
      {#each jobs as { company, role, startDate, endDate }}
        <article class="grid grid-cols-2 items-center gap-4">
          <div class="w-24 h-24 bg-white rounded-sm justify-self-end" />

          <div>
            <h4 class="text-white font-bold">{company}</h4>
            <p>
              {startDate} - {endDate ? endDate : 'present'}
            </p>
          </div>
        </article>
      {/each}
    </Carousel>
  </div>
</section>

<style global>
  .carousel > ul {
    position: relative !important;
    margin-top: 1rem !important;
  }

  .carousel > ul > li:first-child:nth-last-child(1):nth-last-child(1) {
    display: none !important;
  }

  .width-force {
    max-width: 100vw;
  }
</style>
