<script>
  import {
    GraduationCap,
    BookOpenCheck,
    CandlestickChart
  } from 'lucide-svelte';
</script>

<section class="dark:bg-gray-800 dark:text-gray-100 my-14">
  <div class="container flex flex-col-reverse mx-auto lg:flex-row">
    <div
      class="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-400 dark:text-gray-900"
    >
      <div class="flex space-x-2 sm:space-x-4">
        <BookOpenCheck />
        <div class="space-y-2">
          <p class="text-lg font-medium leadi">Mission</p>
          <p class="leadi">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
      <div class="flex space-x-2 sm:space-x-4">
        <GraduationCap />
        <div class="space-y-2">
          <p class="text-lg font-medium leadi">Vision</p>
          <p class="leadi">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
      <div class="flex space-x-2 sm:space-x-4">
        <CandlestickChart />
        <div class="space-y-2">
          <p class="text-lg font-medium leadi">Values</p>
          <p class="leadi">
            Praesentium ea et neque distinctio quas eius repudiandae quaerat
            obcaecati voluptatem similique!
          </p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/2 xl:w-3/5 dark:bg-gray-800">
      <div class="flex items-center justify-center p-4 md:p-8 lg:p-12">
        <img
          src="photo3.jpg"
          alt=""
          class="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
        />
      </div>
    </div>
  </div>
</section>
