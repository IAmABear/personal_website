<script>
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

<ul>
  {#each jobs as { company, role, startDate, endDate }}
    <li>
      {company} as a {role} from {startDate} till {endDate
        ? endDate
        : 'present'}
    </li>
  {/each}
</ul>
