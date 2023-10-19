<script>
  import { fade } from 'svelte/transition';
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  //import '@splidejs/svelte-splide/css/sea-green';

  const carouselImages = [
    {
      url: 'photo1.jpg',
      alt: 'image 1'
    },
    {
      url: 'photo2.jpg',
      alt: 'image 1'
    },
    {
      url: 'photo4.jpg',
      alt: 'image 1'
    }
  ];
</script>

<Splide
  class=" max-h-full"
  options={{
    rewind: true,
    gap: '1rem',
    autoplay: true,
    height: '70vh',
    lazyLoad: 'nearby',
    //autoWidth: true,
    arrows: false,
    type: 'fade',
    speed: 1500
    //cover:true
  }}
  aria-label="My Favorite Images"
>
  {#each carouselImages as image}
    <SplideSlide>
      <img
        class="rounded-sm md:rounded-md w-full h-full object-cover object-center"
        src={image.url}
        alt={image.alt}
      />
    </SplideSlide>
  {/each}}
</Splide>
