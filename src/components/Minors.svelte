<script>
  const minors = [
    {
      minor: 'Datavisualisation',
      startDate: 'September 2013',
      endDate: 'February 2014',
    },
    {
      minor: 'Mobile Interaction',
      startDate: 'February 2014',
      endDate: 'June 2014',
    },
  ]
</script>

<section class="text-white font-sans font-normal">
  <h4 class="text-2xl">Minors</h4>
  <ul>
    {#each minors as { minor, startDate, endDate }}
      <li class="py-2 md:max-w-xs">
        {minor}
        <br />
        ({startDate} - {endDate})
      </li>
    {/each}
  </ul>
</section>
