<script>
	import '@fontsource/open-sans';
	import '../styles/tailwind.css';
	import '../styles/main.scss';
	import Sidebar from './Sidebar.svelte';
	import Socials from './Socials.svelte';
</script>

<div class="flex flex-col lg:flex-row m-4 gap-4 lg:w-[1024px] lg:mx-auto lg:mt-4">
	<div class="flex flex-col lg:w-4/12">
		<Sidebar />
	</div>
	<div class="flex flex-col bg-neutral p-4 rounded-2xl lg:w-8/12">
		<slot />
	</div>
	<div class="md:hidden">
		<Socials />
	</div>
</div>
<!-- <div class="lg:w-[1024px] lg:mx-auto lg:mt-4 m-4 gap-4">&copy 2024 thisjt.me</div> -->
