<script>
  import Carousel from '@beyonk/svelte-carousel'

  const internships = [
    {
      company: 'GridLine',
      role: 'Junior Front-end developer',
      startDate: '01-07-2014',
      endDate: '31-01-2015',
    },
    {
      company: 'Werf3',
      role: 'UX designer',
      startDate: '01-02-2013',
      endDate: '31-07-2013',
    },
  ]
</script>

<section class="width-force p-4">
  <h2 class="text-2xl mt-16 text-center mb-4 text-white">Internships</h2>
  <div class="bg-blue-800 p-6 pt-10 m-auto md:max-w-lg lg:max-w-3xl">
    <Carousel perPage={{ 639: 1, 640: 2 }}>
      {#each internships as { company, startDate, endDate }}
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
