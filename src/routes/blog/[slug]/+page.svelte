<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import SvelteSEO from 'svelte-seo';
	import { onMount } from 'svelte';
	import { contentStrip, loadArticle } from '$lib/postfetcher.js';

	export let data;
	/**@type {HTMLDivElement}*/
	let blogContent;
	/**@type {HTMLDivElement}*/
	let imageViewer;
	/**@type {HTMLDivElement}*/
	let imageCaption;
	/**@type {HTMLAnchorElement}*/
	let imageHolder;

	let { post, error } = data;

	onMount(async () => {
		if (blogContent) blogContent.addEventListener('click', blogContentImageHandler);

		imageViewer.addEventListener('click', (e) => {
			if (/**@type {HTMLDivElement}*/ (e.target).classList.contains('imageViewer')) {
				imageViewer.style.opacity = '0';
				imageViewer.style.pointerEvents = 'none';
			}
		});

		if (!data.clientFetch) return;
		const clientData = await loadArticle(data.slug);
		post = clientData.post;
		error = clientData.error;
	});

	/**@param {MouseEvent} e*/
	function blogContentImageHandler(e) {
		const target = /**@type {HTMLElement}*/ (e.target);
		const ahref = target.closest('a');
		const ahrefimage = ahref?.querySelector('img');
		if (ahref && ahrefimage) {
			e.preventDefault();
			imageViewer.style.opacity = '1';
			imageViewer.style.pointerEvents = '';

			const img = document.createElement('img');
			img.alt = ahrefimage.alt;
			img.src = ahref.href;
			imageHolder.innerHTML = '';
			imageHolder.appendChild(img);
			imageHolder.href = ahref.href;
			imageCaption.innerHTML = `Caption: ${ahrefimage.alt}`;
		}
	}
</script>

<SvelteSEO
	title={`${post?.title.toLowerCase() || 'error'} | blog - thisjt.me personal website`}
	description={post?.content
		? contentStrip(post.content).split(' ').length > 40
			? `${contentStrip(post.content).split(' ').slice(0, 40).join(' ')} ...`
			: contentStrip(post.content)
		: 'error - This blog page does not exist'}
	canonical={`https://thisjt.me/blog/${post?.slug || 'error'}`}
	keywords="thisjt, thisjtme, personal website, personal, github, software developer"
	openGraph={{
		title: `${post?.title.toLowerCase() || 'error'} | blog - thisjt.me personal website`,
		description: post?.content
			? contentStrip(post.content).split(' ').length > 40
				? `${contentStrip(post.content).split(' ').slice(0, 40).join(' ')} ...`
				: contentStrip(post.content)
			: 'error - This blog page does not exist',
		url: `https://thisjt.me/blog/${post?.slug || 'error'}`,
		type: 'article',
		images: [
			{
				url: 'https://thisjt.me/social2.png',
				width: 762,
				height: 400,
				alt: "thisjt's social banner with address and social media links",
			},
		],
	}} />
<svelte:head>
	{#if !post}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>
<PageTitle text={`${post?.title.toLowerCase() || 'error'} | blog`} />
<div class="px-4 w-full">
	<PageHeader level="h2" heading="Blog" goback="/blog" />
	{#if post}
		<div class="text-center mb-4 mt-6">
			<h1 class="text-4xl font-bold text-white">{post.title}</h1>
		</div>
		<p class="mb-4 blogBody" bind:this={blogContent}>{@html post.content}</p>
	{:else}
		<div class="flex justify-center">
			<div class="grow h-1"></div>
			<div class="w-1/3 mt-3 h-10 animate-pulse grow flex flex-col bg-base-100 rounded-lg transition pb-3"></div>
			<div class="grow h-1"></div>
		</div>
		<div class="w-full mt-12 h-64 animate-pulse grow flex flex-col bg-base-100 rounded-lg transition pb-3"></div>
		<div class="w-full mt-12 h-6 animate-pulse grow flex flex-col bg-base-100 rounded-lg transition pb-3"></div>
		<div class="w-full mt-4 h-6 animate-pulse grow flex flex-col bg-base-100 rounded-lg transition pb-3"></div>
		<div class="w-full my-4 h-6 animate-pulse grow flex flex-col bg-base-100 rounded-lg transition pb-3"></div>
	{/if}
	{#if error}
		<p class="pt-4">An error has occurred.</p>
		<p class="pt-4">
			This blog entry does not exist anymore. If you followed a proper link, please do tell me along with the URL you are trying to go to and I'll try to sort it out.
		</p>
	{/if}
</div>
<div
	class="imageViewer | cursor-pointer fixed inset-0 bg-opacity-80 bg-black flex flex-col items-center justify-center transition"
	bind:this={imageViewer}
	style="opacity:0;pointer-events:none">
	<div>
		<div class="flex justify-end">
			<button
				on:click={() => {
					imageViewer.style.opacity = '0';
					imageViewer.style.pointerEvents = 'none';
				}}
				class="-mr-10 -mt-4 p-2 bg-secondary hover:bg-primary transition">
				<img src="/assets/x.png" alt="" />
			</button>
		</div>
		<a class="block" bind:this={imageHolder} target="_blank" href="/">-</a>
		<div bind:this={imageCaption} class="mt-4 cursor-text"></div>
	</div>
</div>
