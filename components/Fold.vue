<template>
  <main class='backdrop-4 bg-cover bg-no-repeat bg-center flex flex-col max-h-screen min-h-screen'>
    <span class='backdrop-color grid grid-flow-col grid-rows-5 grid-col-1 gap-2 max-h-screen min-h-screen'>
      <header class="flex flex-row justify-between items-center max-h-16 mx-6 my-4 md:mx-8">
        <img src="/img/bear_logo_transparant.png" alt="logo" loading="lazy" width="60px" />

        <div
          class="flex flex-col divide-y divide-white text-right md:text-justify md:flex-row md:divide-x md:divide-y-0 ">
          <a href="tel:+31643058239" class="flex items-center justify-end font-sans text-sm
            text-white font-normal no-underline md:mt-0 mb:block mb-2 md:mb-0 sm:text-sm md:text-base items-center md:m-2
            lg:text-lg hover:underline font-serif">
            +31 643058239
          </a>
          <a href="mailto:floyd.van.boksel@gmail.com" class='flex items-center font-sans
            text-sm text-white font-normal mb:block md:pt-0 sm:text-sm md:text-base md:m-2 md:px-4 lg:text-lg
            hover:underline font-serif'>
            floyd.van.boksel@gmail.com
          </a>
        </div>
      </header>

      <article class="row-span-2 mx-auto flex flex-col justify-center md:max-w-3/5">
        <h1 class="text-3xl text-white font-extrabold font-sans uppercase mb-2 md:text-4xl md:mb-4 lg:text-5xl">
          Floyd van Boksel
        </h1>
        <div class="flex flex-row items-center">
          <hr class="w-20 md:w-52 lg:w-72 xl:w-96" />
          <h2 class="text-xl text-white px-4 whitespace-nowrap italic md:text-3xl lg:text-4xl">
            Front-end developer
          </h2>
        </div>
      </article>

      <div class="grid grid-cols-2 gap-2 max-h-12 max-w-xs m-auto md:gap-6 md:max-w-sm">
        <button type="button"
          class="min-button-size bg-blue-400 text-white p-2 rounded-full py-3 px-6 uppercase font-sans md:px-12 text-xs md:text-base hover:bg-blue-500 font-serif">
          View CV
        </button>
        <button type="button"
          class="min-button-size bg-blue-400 text-white p-2 rounded-full py-3 px-6 uppercase font-sans md:px-12 text-xs md:text-base hover:bg-blue-500 font-serif">
          Contact
        </button>
      </div>

      <div
        class="rounded-full h-8 w-8 border-white border-2 text-white flex justify-center items-center m-auto animate-bounce md:text-lg md:h-16 md:w-16 hover:border-black hover:text-black">
        ᐯ
      </div>
    </span>
  </main>
</template>
