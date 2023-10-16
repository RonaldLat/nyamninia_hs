<script>
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  //import '@splidejs/svelte-splide/css';
  import '@splidejs/svelte-splide/css/sea-green';

  const carouselImages = [
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
    {
      url: "photo1.jpg",
      alt: "image 1"
    },
  ]
</script>

<Splide
  options={{
    rewind: true,
    width: 800,
    gap: '1rem',
    lazyLoad: 'nearby'
  }}
  aria-label="My Favorite Images"
>
  {#each carouselImages as image}
  <SplideSlide>
    <img src={image.url} alt={image.alt}  />
  </SplideSlide>
  {/each}}
</Splide>
