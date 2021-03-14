<script>
  import Languages from './Languages.svelte'
  import Minors from './Minors.svelte'
</script>

<div
  class="grid gap-8 p-4 grid-rows-2 mx-auto bg-gray-900 md:grid-cols-2 md:mx-auto md:flex md:p-16 md:justify-center md:space-x-8 lg:space-x-20"
>
  <Minors />
  <Languages />
</div>
