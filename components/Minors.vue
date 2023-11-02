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

export default {
  data() {
    return {
      minors
    }
  }
}
</script>

<template>
  <section class="text-white font-sans font-normal">
    <h4 class="text-3xl">Minors</h4>
    <ul>
      <li class="py-2 md:max-w-xs font-serif" key={minor} v-for="minor in minors">
        {{ minor.minor }}
        <br />({{ minor.startDate }} - {{ minor.endDate }})
      </li>
    </ul>
  </section>
</template>
