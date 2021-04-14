<script>
  import Star from './Star.svelte'

  const skills = [
    {
      skill: 'JavaScript',
      experience: 4,
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'CSS(3)',
      experience: 3,
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'HTML(5)',
      experience: 4,
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'Ruby',
      experience: 3,
      startDate: '07-01-2014',
      endDate: '06-01-2018',
    },
    {
      skill: 'GraphQL',
      experience: 2,
      startDate: '06-01-2017',
      endDate: '06-01-2018',
    },
    {
      skill: 'React',
      experience: 4,
      startDate: '06-01-2017',
      endDate: undefined,
    },
  ]

  function monthDiff(d1, d2) {
    var months
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
</script>

<div class="grid gap-8 md:gap-16 md:grid-cols-2">
  {#each skills as { skill, experience, startDate, endDate }}
    <article class="grid grid-cols-2 items-center gap-8">
      <div class="w-24 h-24 bg-black rounded-sm justify-self-end" />

      <div>
        <h4 class="text-white font-bold">{skill}</h4>
        <p>
          +/- {yearsOfExperience(
            new Date(startDate),
            endDate ? new Date(endDate) : new Date()
          )} years
        </p>
        <div class="flex">
          {#each new Array(5) as _item, index}
            <Star solid={index < experience} />
          {/each}
        </div>
      </div>
    </article>
  {/each}
</div>
