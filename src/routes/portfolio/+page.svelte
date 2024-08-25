<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';

	export let data;
</script>

<svelte:head>
	<meta property="og:url" content="https://thisjt.me/portfolio" />
	<meta property="og:image" content="https://thisjt.me/social2.png" />
	<meta property="og:title" content="portfolio - thisjt.me personal website" />
	<meta
		property="og:description"
		content={'In this page you will see my work as a portfolio that clearly highlights my skills, experience, and expertise. ' +
			'It includes a variety of projects across different disciplines, demonstrating my ability to deliver quality results.'} />
</svelte:head>
<PageTitle text="portfolio" />
<div class="px-4 w-full">
	<PageHeader heading="Portfolio" />
	{#if data.error}
		<div class="text-center mb-4 mt-6">
			<h1 class="text-4xl font-bold text-white">Ooops.</h1>
		</div>
		<p class="mb-4">We are unable to show the portfolio at this time. Please try again in a few minutes.</p>
	{:else}
		<div class="flex gap-3 mb-4">
			{#each data.tags as tag}
				<div class="rounded-lg px-3 py-1.5 bg-secondary transition hover:bg-primary cursor-pointer">{tag}</div>
			{/each}
		</div>
		<div class="flex gap-3 flex-wrap mb-4">
			{#each data.posts as post}
				<a href="/portfolio/{post.slug}" class="group | first:w-full sm:w-1/3 grow flex flex-col bg-base-100 rounded-lg transition hover:bg-secondary pb-3">
					<div class="p-2">
						<img class="rounded-md" src={post.cover} alt="" />
					</div>
					<div class="flex flex-col m-2 gap-2">
						<div class="text-white font-bold text-xl">{post.title}</div>
						<div class="text-sm text-gray-500">
							{new Date(post.published).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
							<span class="text-gray-600"> ({new Date(post.updated).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}) </span>
						</div>
						<div class="line-clamp-2 group-first:line-clamp-3 text-xs text-gray-400">{post.content}</div>
					</div>
				</a>
			{/each}
		</div>
	{/if}
</div>
