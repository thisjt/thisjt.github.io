<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import { onMount } from 'svelte';

	/**@type {HTMLIFrameElement}*/
	let gmapcanvas;

	onMount(() => {
		gmapcanvas.addEventListener('load', () => {
			setTimeout(() => gmapcanvas.classList.remove('opacity-0'), 100);
		});
	});
</script>

<PageTitle text="contact" />
<div class="px-4 w-full">
	<PageHeader heading="Contact" />
	<p class="mb-4 mt-6">I live somewhere here:</p>
	<div class="w-full" style="background-color:rgba(0,0,0,0.1)">
		<iframe
			style="filter:invert(100%) grayscale(1)"
			class="w-full transition opacity-0"
			title="thisjtme Location"
			height="400"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			bind:this={gmapcanvas}
			id="gmap_canvas"
			src="https://maps.google.com/maps?width=976&amp;height=400&amp;hl=en&amp;q=Mandaue%20City%20+(thisjtme%20Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
		></iframe>
	</div>
	<PageHeader heading="How to reach out to me" />
	<p class="mb-4 text-sm">
		You can reach out to me using the provided email and social media links. I check my emails at least once a day so that's the best way to reach out to me.
	</p>
</div>
