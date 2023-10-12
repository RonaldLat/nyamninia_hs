<script>
  import { gFade } from '$lib/gsapAnimations/tweenMe';
  import Descriptions from '$lib/components/ui/Descriptions.svelte';

</script>

	<nav id="nav" class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent">


		<!-- Nav Items Working on Tablet & Bigger Sceen -->
		<div class="p-4 hidden md:flex flex-row justify-between font-bold">
			<a id="hide-after-click" href="#about" class="mx-4 text-lg  border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">About Us</a>
			<a href="#whyus" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">Admissions</a>
			<a href="#showcase" class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-green-300 transition duration-500">Academics</a>
		</div>

		<!-- Burger Nav Button on Mobile -->
	</nav>

	<!-- Opened Nav in Mobile, you can use javascript/jQuery -->
	<div id="nav-opened" class="fixed left-0 right-0 hidden bg-white mx-2 mt-16 rounded-br rounded-bl shadow z-10">
		<div class="p-2 divide-y divide-gray-600 flex flex-col">
			<a href="/about" class="p-2 font-semibold hover:text-indigo-700">About Us</a>
			<a href="#whyus" class="p-2 font-semibold hover:text-indigo-700">Admissions</a>
			<a href="#showcase" class="p-2 font-semibold hover:text-indigo-700">Academics</a>
		</div>
	</div>

	<header id="up" class="bg-center bg-fixed bg-no-repeat  bg-cover h-screen relative md:mb-16 mb-96">
		<!-- Overlay Background + Center Control -->
		<div class="h-screen bg-opacity-50 bg-black flex items-center justify-center bg-[url('photo1.jpg')] bg-center bg-cover bg-blend-overlay bg-no-repeat " >
			<div class="mx-2 text-center font-[libre]">
				<h1 class="text-white uppercase font-extrabold text-4xl xs:text-5xl md:text-6xl">
					Nyamninia
           </h1>
           <h2 class="text-white uppercase font-[libre] font-extrabold text-3xl xs:text-4xl md:text-5xl leading-tight">
            Secondary School
           </h2>
		   <h2 class="italic font-[libre] text-gray-50 text-2xl capitalize">to server is to rule</h2>
           <div class="inline-flex md:hidden">
           <button class="p-2 my-5 mx-2 bg-green-700 hover:bg-green-800 font-bold text-white rounded border-2 border-transparent hover:border-green-800 shadow-md transition duration-500 md:text-xl">About Us</button>
           <a href="#about"><button class="p-2 my-5 mx-2 bg-transparent border-2 bg-gray-50  hover:bg-green-10100 border-green-700 rounded hover:border-green-800 font-bold text-green-700 shadow-md transition duration-500 md:text-lg">Contact</button></a>
           </div>
        </div>
    </div>
	<div class="h-32 w-5/6 mx-auto  absolute left-0 right-0   -bottom-[10%]">
		<Descriptions/>
	</div>
</header>