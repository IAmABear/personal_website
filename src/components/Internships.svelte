<script>
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

<ul>
  {#each internships as { company, role, startDate, endDate }}
    <li>
      {company} as a {role} from {startDate} till {endDate
        ? endDate
        : 'present'}
    </li>
  {/each}
</ul>
