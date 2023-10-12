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
  class="   h-12 w-auto justify-between cursor-pointer flex flex-row  z-20 transition ease-in duration-150 delay-150 text-2xl fixed top-0 left-3 text-green-400 md:hidden"
>
  <button class="hover:scale-75 transition delay-75 ease-in duration-100 fill-white" on:click={toggleSideNav}><Menu color="white"/></button>
  
</div>

	<nav id="nav" class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">


		<!-- Nav Items Working on Tablet & Bigger Sceen -->
		<div class="p-4 hidden md:flex flex-row justify-between font-bold">
			<a id="hide-after-click" href="#about" class="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">About Us</a>
			<a href="#whyus" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">Admissions</a>
			<a href="#showcase" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">Academics</a>
		</div>

	</nav>

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
