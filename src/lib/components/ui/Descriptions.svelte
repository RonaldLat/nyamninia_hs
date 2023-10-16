<script>
	import { onMount } from 'svelte';
  import { gFade, gFromDown, example } from '$lib/gsapAnimations/tweenMe';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bounce from 'gsap/EasePack';

onMount(()=>{
gsap.registerPlugin(ScrollTrigger);
//gsap.to(".box", {duration: 1,  y:100, stagger: 0.5});
})

</script>

<div
  class="w-full gap-5 md:gap-4 h-auto flex flex-col md:flex-row items-center justify-between"
>
  <div use:example={0.5}  class="box bg-gray-100 p-2 flex flex-col gap-2 rounded-md">
    <p class="font-bold">Bright Learning</p>
    <p class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec sem
      ipsum. Duis nec orci efficitur erat.
    </p>
  </div>
  <div use:example={0.8} class="box bg-green-700 p-2 flex flex-col gap-2 rounded-md text-gray-50">
    <p class="font-bold">Quallfied Staff</p>
    <p class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec sem
      ipsum. Duis nec orci efficitur erat.
    </p>
  </div>
  <div use:example={1.1} class="box bg-gray-100 p-2 flex flex-col gap-2 rounded-md">
    <p class="font-bold">Enough Facilities</p>
    <p class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec sem
      ipsum. Duis nec orci efficitur erat.
    </p>
  </div>
</div>
