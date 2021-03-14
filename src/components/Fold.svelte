<script>
</script>

<main
  class="backdrop bg-cover bg-no-repeat bg-center flex flex-col max-h-screen min-h-screen"
>
  <span
    class="backdrop-color grid grid-flow-col grid-rows-5 grid-col-1 gap-2 max-h-screen min-h-screen"
  >
    <header
      class="flex flex-row justify-between items-center max-h-16 mx-6 my-4 md:mx-8"
    >
      <img
        src="./images/bear_logo_transparant.png"
        alt="logo"
        loading="lazy"
        width="60px"
      />

      <div
        class="flex flex-col divide-y divide-white text-right md:text-justify md:flex-row md:divide-x md:divide-y-0 "
      >
        <a
          href="to:+31643058239"
          class="font-sans text-xs text-white font-normal sm:text-sm md:text-base items-center md:m-2 lg:text-lg"
          >+31 643058239</a
        >
        <a
          href="mailto:floyd.van.boksel@gmail.com"
          class="font-sans text-xs text-white font-normal sm:text-sm md:text-base md:m-2 md:px-4 lg:text-lg"
          >floyd.van.boksel@gmail.com</a
        >
      </div>
    </header>

    <article
      class="row-span-2 mx-auto flex flex-col justify-center md:max-w-3/5"
    >
      <h1
        class="text-2xl text-white font-extrabold font-sans uppercase mb-2 md:text-4xl md:mb-4 lg:text-5xl"
      >
        Floyd van Boksel
      </h1>
      <div class="flex flex-row items-center">
        <hr class="w-20 md:w-52 lg:w-72 xl:w-96" />
        <h2
          class="text-xl text-white px-4 whitespace-nowrap italic md:text-3xl lg:text-4xl"
        >
          Front-end developer
        </h2>
      </div>
    </article>

    <div
      class="grid grid-cols-2 gap-2 max-h-12 max-w-xs m-auto md:gap-6 md:max-w-sm"
    >
      <button
        type="text"
        class="bg-blue-400 text-white p-2 rounded-full py-3 px-6 uppercase font-sans md:px-12 text-xs md:text-base"
        >View CV</button
      >
      <button
        type="text"
        class="bg-blue-400 text-white p-2 rounded-full py-3 px-6 uppercase font-sans md:px-12 text-xs md:text-base"
        >Contact</button
      >
    </div>

    <div
      class="rounded-full h-8 w-8 border-white border-2 text-white flex justify-center items-center m-auto animate-bounce md:text-lg md:h-16 md:w-16"
    >
      ᐯ
    </div>
  </span>
</main>

<style>
  .backdrop {
    background-image: url('./images/laptop.jpg');
  }

  .backdrop-color {
    background-color: rgba(6, 52, 70, 0.6);
  }
</style>
