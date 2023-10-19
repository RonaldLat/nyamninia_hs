<script>
  import { CalendarDays, Medal, GraduationCap, User } from 'lucide-svelte';
  import { gFromDown } from '$lib/gsapAnimations/tweenMe';
</script>

<div class="w-full mx-auto">
  <p class="text-center capitalize mb-4 text-bold text-2xl text-green-600">
    our teachers and students achievements
  </p>
  <div
    class="font-[Caudex] flex flex-col md:flex-row w-5/6 mx-auto max-w-screen-md rounded-md bg-gray-200 gap-8 py-4 px-2 capitalize text-center"
  >
    <div
      use:gFromDown={0.3}
      class=" rounded-md w-full h-auto flex flex-col gap-2 items-center justify-center"
    >
      <CalendarDays />
      <p class="font-bold">1954</p>
      <p class="text-sm">year founded</p>
    </div>
    <div
      use:gFromDown={0.6}
      class=" rounded-md w-full h-auto flex flex-col items-center gap-1 justify-between"
    >
      <User />
      <p class="font-bold">934</p>
      <p class="text-sm">certified teachers</p>
    </div>
    <div
      use:gFromDown={0.9}
      class=" rounded-md w-full h-auto flex flex-col gap-1 items-center justify-center"
    >
      <GraduationCap />
      <p class="font-bold">65,409</p>
      <p class="text-sm">graduated students</p>
    </div>
    <div
      use:gFromDown={1.2}
      class=" rounded-md w-full h-auto flex flex-col gap-1 items-center justify-center"
    >
      <p><Medal /></p>
      <p class="font-bold">289</p>
      <p class="text-sm">award winners</p>
    </div>
  </div>
</div>
