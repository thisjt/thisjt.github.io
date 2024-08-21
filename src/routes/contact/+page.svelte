<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<PageTitle text="contact" />
<div class="px-4 w-full">
	<PageHeader heading="Contact" />
	<p class="mb-4 mt-6">
		I live somewhere here:
		<iframe
			style="filter:invert(100%) grayscale(1)"
			class="w-full"
			title="thisjtme Location"
			height="400"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			id="gmap_canvas"
			src="https://maps.google.com/maps?width=976&amp;height=400&amp;hl=en&amp;q=Mandaue%20City%20+(thisjtme%20Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
		></iframe>
		<script type="text/javascript" src="https://embedmaps.com/google-maps-authorization/script.js?id=070cb1a1e72904e4cdf2d7d362ac7689dfe1710e"></script>
	</p>
	<PageHeader heading="How to reach out to me" />
	<p class="mb-4 text-sm">
		You can reach out to me using the provided email and social media links. I check my emails at least once a day so that's the best way to reach out to me.
	</p>
</div>
