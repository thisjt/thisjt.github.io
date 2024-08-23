<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import { onMount } from 'svelte';

	export let data;
</script>

<PageTitle text="portfolio" />
<div class="px-4 w-full">
	<PageHeader level="h2" heading="Portfolio" />
	{#if data.post}
		<div class="flex gap-3 mb-4 justify-end">
			<a href="/portfolio" class="rounded-lg px-3 py-1.5 bg-secondary transition hover:bg-primary cursor-pointer">Go Back</a>
		</div>
		<div class="text-center mb-4 mt-6">
			<h1 class="text-4xl font-bold text-white">{data.post.title}</h1>
		</div>
		<p class="mb-4 portfolioBody">{@html data.post.content}</p>
	{:else}
		<p class="pt-4">An error has occurred.</p>
		<p class="pt-4">
			This portfolio entry does not exist anymore. If you followed a legit link, please do tell me along with the URL you are trying to go to and I'll try to sort it out.
		</p>
	{/if}
</div>
