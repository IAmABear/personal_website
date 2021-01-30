<!-- App.svelte -->
<script>
  /* component logic will go here */
  import Contact from './Contact.svelte'
  import Jobs from './Jobs.svelte'
  import Skills from './Skills.svelte'
</script>

<div class="App">
  <header class="App-header">
    <a
      class="App-link"
      href="https://svelte.dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn Svelte
    </a>
  </header>
  <Skills />
  <Jobs />
  <Contact />
</div>

<style>
  /* css will go here */
</style>
