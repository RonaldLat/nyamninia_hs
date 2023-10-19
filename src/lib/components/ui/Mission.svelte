<script>
  import {
    GraduationCap,
    BookOpenCheck,
    CandlestickChart
  } from 'lucide-svelte';
  import { gAnim2 } from '$lib/gsapAnimations/tweenMe';
</script>

<section class="dark:bg-gray-800  dark:text-gray-100 sm:my-18 mt-10">
  <div class="container flex flex-col-reverse mx-auto lg:flex-row">
    <div
      class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900"
    >
      <div
        use:gAnim2={0.6}
        class="flex space-x-2 sm:space-x-4 items-center gap-2"
      >
        <BookOpenCheck color="green" size="30" />
        <div class="space-y-2">
          <p class="text-lg font-medium font-[Play]">Mission</p>
          <p class="text-gray-600">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
      <div
        use:gAnim2={0.9}
        class="flex space-x-2 sm:space-x-4 items-center gap-2"
      >
        <GraduationCap color="green" size="30" />
        <div class="space-y-2">
          <p class="text-lg font-medium font-[Play]">Vision</p>
          <p class="text-gray-600">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
      <div
        use:gAnim2={1.2}
        class="flex space-x-2 sm:space-x-4 items-center gap-2"
      >
        <CandlestickChart color="green" size="30" />
        <div class="space-y-2">
          <p class="text-lg font-medium font-[Play]">Values</p>
          <p class="text-gray-600">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
      <div
        use:gAnim2={0.3}
        class="flex items-center justify-center p-4 md:p-8 lg:p-12"
      >
        <img
          src="photo3.jpg"
          alt=""
          class="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
        />
      </div>
    </div>
  </div>
</section>
