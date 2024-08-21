<script>
	import '@fontsource/open-sans';
	import '../styles/tailwind.css';
	import '../styles/main.scss';
	import Sidebar from './Sidebar.svelte';
</script>

<div class="flex flex-col m-4 gap-4">
	<div class="flex bg-neutral p-4">
		<Sidebar />
	</div>
	<div class="bg-gray-800">
		<slot />
	</div>
</div>
