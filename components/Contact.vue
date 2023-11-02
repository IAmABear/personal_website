<script>

const phoneNumber = '+316 43058239'
const email = 'floyd.van.boksel@gmail.com'
const residency = 'Zaandam, The Netherlands'

export default {
  data() {
    return {
      phoneNumber,
      email,
      residency
    }
  }
}
</script>

<template>
  <div class="p-2 md:p-8 bg-blue-900" id="contact">
    <div class="flex flex-col justify-center items-center divide-y divide-white md:flex-row md:divide-y-0 md:divide-x">
      <a href="tel:+31643058239" class="font-sans py-2 font-normal text-white md:px-4 md:py-0 hover:underline font-serif">
        {{ phoneNumber }}
      </a>

      <a href="mailto:floyd.van.boksel@gmail.com"
        class="font-sans py-2 font-normal text-white md:px-4 md:py-0 hover:underline font-serif">
        {{ email }}
      </a>
      <p class="font-sans py-2 font-normal text-white md:px-4 md:py-0 font-serif">
        {{ residency }}
      </p>
    </div>
  </div>
</template>
