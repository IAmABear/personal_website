<script>
  import Skills from './Skills.svelte'
</script>

<div class="backdrop bg-cover bg-no-repeat bg-center flex flex-col">
  <span
    class="backdrop-color grid auto-cols-auto gap-4 justify-items-center text-white"
  >
    <h2 class="text-2xl mt-16 italic">Curriculum Vitae</h2>

    <section class="md:max-w-lg lg:max-w-3xl p-8 m-4 bg-gray-800 md:p-16">
      <h3 class="text-2xl text-center mb-4">Profile</h3>
      <p class="text-base md:text-lg">
        Hi, my name is Floyd van Boksel, a <s class="underline">UX-designer</s>
        and a
        <s class="underline">self-taught front-end developer</s>; always looking
        to expand my programming knowledge and how to support all kind of
        devices without a hitch. Apart from that, I am always looking for a
        challange both in and outside of work hours so hit me up for a chat over
        a beer or two.
      </p>
    </section>

    <section class="w-full md:max-w-lg lg:max-w-3xl p-4 m-4 md:pb-16">
      <h3 class="text-2xl text-center mb-4">Skills</h3>
      <Skills />
    </section>
  </span>
</div>

<style>
  .backdrop {
    background-image: url('./images/man_code.jpg');
  }

  .backdrop-color {
    background-color: rgba(6, 52, 70, 0.6);
  }

  .underline {
    text-decoration-thickness: 3px;
    /* bg-blue-400 */
    text-decoration-color: rgba(96, 165, 250, 1);
  }
</style>
