<script>
	import  Achievements  from '$lib/components/ui/Achievements.svelte';
  import { gFade } from '$lib/gsapAnimations/tweenMe';
  import Descriptions from '$lib/components/ui/Descriptions.svelte';
</script>

<!-- Opened Nav in Mobile, you can use javascript/jQuery -->
<div
  id="nav-opened"
  class="fixed left-0 right-0 hidden mx-2 mt-16 rounded-br rounded-bl shadow z-10"
>
  <div class="p-2 divide-y divide-gray-600 flex flex-col">
    <a href="/about" class="p-2 font-semibold hover:text-indigo-700">About Us</a
    >
    <a href="/admission" class="p-2 font-semibold hover:text-indigo-700"
      >Admissions</a
    >
    <a href="/academics" class="p-2 font-semibold hover:text-indigo-700"
      >Academics</a
    >
  </div>
</div>

<header
  id="up"
  class="w-screen bg-center bg-no-repeat bg-contain h-screen relative md:mb-16 mb-96"
>
  <!-- Overlay Background + Center Control -->
  <div
    style="background-image: url(photo2.jpg)"
    class="h-screen bg-opacity-50 flex items-center justify-center bg-center bg-cover bg-blend-overlay bg-black"
  >
    <div class="mx-2 text-center font-[libre]">
      <h1
        class="text-white uppercase font-extrabold text-4xl xs:text-5xl md:text-6xl"
      >
        Nyamninia
      </h1>
      <h2
        class="text-white uppercase font-[libre] font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
      >
        Secondary School
      </h2>
      <h2 class="italic font-[libre] text-gray-50 text-2xl capitalize">
        to server is to rule
      </h2>
      <div class="inline-flex md:hidden">
        <button
          class="p-2 my-5 mx-2 bg-green-700 hover:bg-green-800 font-bold text-white rounded border-2 border-transparent hover:border-green-800 shadow-md transition duration-500 md:text-xl"
          >About Us</button
        >
        <a href="/contact"
          ><button
            class="p-2 my-5 mx-2 bg-transparent border-2 bg-gray-50 hover:bg-green-10100 border-green-700 rounded hover:border-green-800 font-bold text-green-700 shadow-md transition duration-500 md:text-lg"
            >Contact</button
          ></a
        >
      </div>
    </div>
  </div>
  <div class="h-32 w-5/6 mx-auto absolute left-0 right-0 -bottom-[10%]">
    <Descriptions />
  </div>
</header>
