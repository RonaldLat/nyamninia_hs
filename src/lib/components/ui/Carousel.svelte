<script>
import { Splide, SplideSlide } from '@splidejs/svelte-splide';
//import '@splidejs/svelte-splide/css';
import '@splidejs/svelte-splide/css/sea-green';


console.log(Splide)
</script>
<Splide   options={ {
    rewind: true,
    width : 800,
    gap   : '1rem',
    lazyload: 'nearby'
  } }
   aria-label="My Favorite Images">
  <SplideSlide>
    <img src="photo1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="photo2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>