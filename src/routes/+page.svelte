<script>
  import Home from '$lib/components/ui/Home.svelte';
  import Misssion from '$lib/components/ui/Mission.svelte';
  import Achievements from '$lib/components/ui/Achievements.svelte';
  import Carousel from '$lib/components/ui/Carousel.svelte';
  export let data;

  const {} = data;
</script>

<div class="min-h-screen font-[Ubuntu]  px-2 lg:px-4">
  <Home />
  <Misssion/>
  <Achievements/>
  <Carousel/>
</div>
