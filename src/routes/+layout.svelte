<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import '../app.postcss';
  import { fade, fly } from 'svelte/transition';
  import { onNavigate } from '$app/navigation';
  import { page } from '$app/stores';
  import { Bounce } from 'gsap/gsap-core';

  import {
    Menu,
    Linkedin,
    Github,
    Newspaper,
    ChevronFirst
  } from 'lucide-svelte';
  import TheFooter from '$lib/components/TheFooter.svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { onMount } from 'svelte';
  export let data;

  let topBar;

  $: onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap
      .from(topBar, {
        yPercent: -100,
        opacity: 0,
        paused: true,
        ease: 'elastic',
        duration: 0.2
      })
      .progress(1);

    ScrollTrigger.create({
      trigger: topBar,
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? tl.play() : tl.reverse();
      }
    });
  });

  const route = $page.route;

  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;

  const toggleSideNav = () => (showSideNav = !showSideNav);
</script>

<div
  class="fixed z-20 top-0 left-0 h-full w-full md:w-1/2 bg-green-800 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300"
  class:translate-x-0={showSideNav}
  class:-translate-x-full={!showSideNav}
>
  <!-- Your side navigation content goes here -->
  <button
    class="p-2 text-3xl text-white fixed bottom-1 right-1"
    on:click={toggleSideNav}
  >
    <ChevronFirst />
  </button>
  <!-- Add other side navigation content -->
  <Sidebar {route} />
  <!-- Toggle button within the side navigation menu -->
</div>
<div
  bind:this={topBar}
  class="bg-transparent bg-blend-hard-light opacity-85 h-12 w-full justify-between cursor-pointer flex flex-row hover:bg-green-600 z-20 transition ease-in duration-150 delay-150 text-2xl fixed top-0 left-0 text-green-400 md:hidden"
>
  <button on:click={toggleSideNav}><Menu /></button>
  
</div>

{#key data.currentRoute}
  <main
    in:fade={{ duration: 200, delay: 200 }}
    out:fade={{ duration: 200 }}
    class="   w-full min-h-screen font-[Poppins]  lg:px-0  overflow-hidden"
  >
    <slot />
  </main>
{/key}

<nav
  class="fixed hidden bottom-0 left-0 px-5 py-2.5 bg-gradient-to-b from-green-500 to-black h-13 text-gray-100 flex flex-row items-center w-full justify-between transition ease-in"
  class:bg-gray-900={showSideNav}
>
  <button on:click={toggleSideNav}><Menu /></button>
  <Linkedin />
  <a href="https://github.com/RonaldLat"><Github /></a>
  <a href="/blog" class="flex items-center"
    ><Newspaper /><span class="text-xs">Blog</span></a
  >
</nav>
<TheFooter />
