<script>
  const skills = [
    {
      skill: 'JavaScript',
      experience: '4/5',
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'CSS(3)',
      experience: '3/5',
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'HTML(5)',
      experience: '4/5',
      startDate: '07-01-2014',
      endDate: undefined,
    },
    {
      skill: 'Ruby',
      experience: '3/5',
      startDate: '07-01-2014',
      endDate: '06-01-2018',
    },
    {
      skill: 'GraphQL',
      experience: '2/5',
      startDate: '06-01-2017',
      endDate: '06-01-2018',
    },
    {
      skill: 'React',
      experience: '4/5',
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

<ul>
  {#each skills as { skill, experience, startDate, endDate }}
    <li>
      {skill} ({experience}) with +- {yearsOfExperience(
        new Date(startDate),
        endDate ? new Date(endDate) : new Date()
      )} years of experience
    </li>
  {/each}
</ul>
