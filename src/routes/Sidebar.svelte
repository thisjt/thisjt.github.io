<script>
	import Socials from './Socials.svelte';
</script>

<div class="flex gap-4 bg-neutral p-4 rounded-2xl w-full lg:flex-col sticky top-4">
	<div class="w-4/12 flex justify-center items-center md:w-1/5 lg:w-full">
		<div class="bg-secondary rounded-2xl p-3 lg:mx-auto lg:w-1/2 lg:mt-12">
			<img class="w-full lg:hidden" src="/branding/me-chill-headonly.png" alt="" />
			<img class="w-full hidden lg:block" src="/branding/me.gif" alt="" />
		</div>
	</div>
	<div class="w-8/12 flex flex-col justify-center lg:w-full lg:text-center">
		<div class="text-2xl font-bold">Joshua Tahanlangit</div>
		<div class="hidden lg:block my-4 mx-4 h-0.5 bg-secondary"></div>
		<div class="text-gray-400 w-full text-left">Software Front-end Developer</div>
		<div class="text-gray-400 w-full text-left">Cebu City, Philippines 6000</div>
	</div>
	<div class="hidden md:flex flex-col pt-2 gap-2 lg:w-full">
		<Socials />
	</div>
</div>
