<script>
  import { gFade } from '$lib/gsapAnimations/tweenMe';
  import Carousel from '$lib/components/ui/Carousel.svelte';
</script>


<header
  id="up"
  class="w-screen h-screen  md:mb-16 mb-16"
>
  <!-- Overlay Background + Center Control -->
  <div
    class="h-full bg-green-800 bg-fixed flex items-center justify-center bg-center bg-cover bg-blend-overlay "
  >
    <div class=" text-center font-[libre]">
      <h1
        class="md:hidden px-2 h-full pb-4 text-white uppercase font-extrabold text-3xl md:text-4xl xs:text-5xl md:text-6xl"
      >
        Nyamninia Secondary School
      </h1>
      <h2
        class="hidden text-white uppercase font-[libre] font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight"
      >
        Secondary School
      </h2>
      <div class=" h-full w-full">
      <Carousel/>
      <h2 class="md:hidden px-2  pt-4 italic font-[libre] text-gray-50 text-3xl md:text-2xl capitalize">
        to server is to rule
      </h2>
      </div>
    </div>
  </div>
</header>
