<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import { onMount } from 'svelte';

	export let data;
	/**@type {HTMLDivElement}*/
	let portfolioContent;
	/**@type {HTMLDivElement}*/
	let imageViewer;
	/**@type {HTMLDivElement}*/
	let imageCaption;
	/**@type {HTMLAnchorElement}*/
	let imageHolder;

	/** @param {string} content */
	function contentStrip(content) {
		content = content.replace(/(<([^>]+)>)/gi, '').slice(0, 400);
		content = content.replaceAll('&nbsp;', '');
		return content;
	}

	onMount(() => {
		portfolioContent.addEventListener('click', (e) => {
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
		});

		imageViewer.addEventListener('click', (e) => {
			if (/**@type {HTMLDivElement}*/ (e.target).classList.contains('imageViewer')) {
				imageViewer.style.opacity = '0';
				imageViewer.style.pointerEvents = 'none';
			}
		});
	});
</script>

<svelte:head>
	<meta property="og:url" content="https://thisjt.me/" />
	<meta property="og:image" content="https://thisjt.me/social2.png" />
	<meta property="og:title" content={`${data.post?.title || 'error'} | portfolio - thisjt.me personal website`} />
	<meta
		property="og:description"
		content={data.post?.content
			? contentStrip(data.post.content).split(' ').length > 40
				? `${contentStrip(data.post.content).split(' ').slice(0, 40).join(' ')} ...`
				: contentStrip(data.post.content)
			: 'error - This portfolio page does not exist'} />
</svelte:head>
<PageTitle text={`${data.post?.title || 'error'} | portfolio`} />
<div class="px-4 w-full">
	<PageHeader level="h2" heading="Portfolio" />
	{#if data.post}
		<div class="flex gap-3 mb-4 justify-end">
			<a href="/portfolio" class="rounded-lg px-3 py-1.5 bg-secondary transition hover:bg-primary cursor-pointer">Go Back</a>
		</div>
		<div class="text-center mb-4 mt-6">
			<h1 class="text-4xl font-bold text-white">{data.post.title}</h1>
		</div>
		<p class="mb-4 portfolioBody" bind:this={portfolioContent}>{@html data.post.content}</p>
	{:else}
		<p class="pt-4">An error has occurred.</p>
		<p class="pt-4">
			This portfolio entry does not exist anymore. If you followed a proper link, please do tell me along with the URL you are trying to go to and I'll try to sort it out.
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
