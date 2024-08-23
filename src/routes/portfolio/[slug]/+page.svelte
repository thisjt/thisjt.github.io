<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';

	export let data;
</script>

<PageTitle text="portfolio" />
<div class="px-4 w-full">
	<PageHeader level="h2" heading="Portfolio" />
	<div class="text-center mb-4 mt-6">
		<h1 class="text-4xl font-bold text-white">{data.title}</h1>
	</div>
	<p class="mb-4">
		title {data.title} description {data.description} date {data.date} categories {JSON.stringify(data.categories)} published {data.published}

		<svelte:component this={data.content} />
	</p>
</div>
