<script>
  import { CalendarDays, Medal, GraduationCap, User } from 'lucide-svelte';
</script>

<div class="w-full mx-auto">
  <p class="text-center capitalize mb-4 text-lg">our teachers and students achievements</p>
  <div class="flex flex-col md:flex-row w-5/6 mx-auto max-w-screen-md rounded-md bg-gray-200 gap-2 py-4 px-2 capitalize text-center">

    <div class=" rounded-md w-full h-auto flex-col   gap-1 items-center justify-center">
      <p class="font-bold">1954</p>
      <p class="text-sm">year founded</p>
      <CalendarDays />
    </div>
    <div class=" rounded-md w-full h-auto flex-col   gap-1 items-start justify-between">
      <p class="font-bold">934</p>
      <p class="text-sm">certified teachers</p>
      <User />
    </div>
    <div class=" rounded-md w-full h-auto flex-col   gap-1 items-start justify-between">
      <p class="font-bold">65,409</p>
      <p class="text-sm">graduated students</p>
      <GraduationCap />
    </div>
    <div class=" rounded-md w-full h-auto flex-col   gap-1 items-center justify-center">
      <p class="font-bold">289</p>
      <p class="text-sm">award winners</p>
      <Medal />
    </div>
  </div>
</div>
