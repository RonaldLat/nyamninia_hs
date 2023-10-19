<script>
  import Directions from './../lib/components/ui/Directions.svelte';
  import ContactForm from './../lib/components/ui/ContactForm.svelte';
  import Home from '$lib/components/ui/Home.svelte';
  import Misssion from '$lib/components/ui/Mission.svelte';
  import Achievements from '$lib/components/ui/Achievements.svelte';
  import Carousel from '$lib/components/ui/Carousel.svelte';
  import Descriptions from '$lib/components/ui/Descriptions.svelte';
  export let data;

  const {} = data;
</script>

<div
  class="min-h-screen font-[Ubuntu] px-0 flex flex-col gap-8 items-center w-full"
>
  <Home />

  <div class="h-auto w-5/6 mx-auto">
    <Descriptions />
  </div>

  <Misssion />

  <section class=" w-full">
    <Achievements />
  </section>
  <section class=" w-full">
    <ContactForm />
  </section>
  <section class=" w-full ">
    <Directions />
  </section>
</div>
