<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import { loadArticles } from '$lib/postfetcher.js';
	import { onMount } from 'svelte';
	import SvelteSEO from 'svelte-seo';

	export let data;

	let { tags, posts, error } = data;

	onMount(async () => {
		if (!data.clientFetch) return;

		const clientData = await loadArticles('/blog');
		tags = clientData.tags;
		posts = clientData.posts;
		error = clientData.error;
	});
</script>

<SvelteSEO
	title="blog - thisjt.me personal website"
	description={"In this blog, I share my thoughts, ideas, and insights on various programming topics. It's a space where" +
		'I explore different aspects of coding, from practical tips to personal reflections, offering a glimpse into my journey' +
		'and the things that inspire me in the tech world.'}
	canonical="https://thisjt.me/blog"
	keywords="thisjt, thisjtme, personal website, personal, github, software developer"
	openGraph={{
		title: 'blog - thisjt.me personal website',
		description:
			"In this blog, I share my thoughts, ideas, and insights on various programming topics. It's a space where" +
			'I explore different aspects of coding, from practical tips to personal reflections, offering a glimpse into my journey' +
			'and the things that inspire me in the tech world.',
		url: 'https://thisjt.me/blog',
		type: 'website',
		images: [
			{
				url: 'https://thisjt.me/social2.png',
				width: 762,
				height: 400,
				alt: "thisjt's social banner with address and social media links",
			},
		],
	}} />
<PageTitle text="blog" />
<div class="px-4 w-full">
	<PageHeader
		heading="Blog"
		description="In this blog, I share my thoughts, ideas, and insights on various programming topics. It's a space where I explore different aspects of coding, from practical tips to
			personal reflections, offering a glimpse into my journey and the things that inspire me in the tech world." />
	{#if error}
		<div class="text-center mb-4 mt-6">
			<h1 class="text-4xl font-bold text-white">Ooops.</h1>
		</div>
		<p class="mb-4">We are unable to show blog articles at this time. Please try again in a few minutes.</p>
	{:else}
		<div class="flex gap-3 mb-4">
			{#each tags as tag}
				<div class="rounded-lg px-3 py-1.5 bg-secondary transition hover:bg-primary cursor-pointer">{tag}</div>
			{/each}
		</div>
		<div class="flex gap-3 flex-wrap mb-4">
			{#each posts as post}
				<a href="/blog/{post.slug}" class="group | sm:w-1/3 grow flex flex-col bg-base-100 rounded-lg transition hover:bg-secondary pb-3">
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
			{:else}
				<div class="group | h-64 animate-pulse sm:w-1/3 grow flex flex-col bg-base-100 rounded-lg transition pb-3 mt-9"></div>
				<div class="group | h-64 animate-pulse sm:w-1/3 grow flex flex-col bg-base-100 rounded-lg transition pb-3 mt-9"></div>
			{/each}
			{#if posts?.length || 1 % 2 === 0}
				<div class="sm:w-1/3 grow"></div>
			{/if}
		</div>
	{/if}
</div>
