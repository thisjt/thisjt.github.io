<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import SvelteSEO from 'svelte-seo';
	import { onMount } from 'svelte';

	/**@type {HTMLIFrameElement}*/
	let gmapcanvas;

	onMount(() => {
		gmapcanvas.addEventListener('load', () => {
			setTimeout(() => gmapcanvas.classList.remove('opacity-0'), 100);
		});
	});
</script>

<SvelteSEO
	title="thisjt.me personal website"
	description={"Hello there! I am Joshua, a passionate and versatile Frontend developer, and I'm thrilled " +
		"to have you visit my personal website. Here you'll find a digital canvas where I bring ideas to " +
		'life through lines of code, creating unique and impactful web experiences.'}
	canonical="https://thisjt.me/"
	keywords="thisjt, thisjtme, personal website, personal, github, software developer"
	openGraph={{
		title: 'contact - thisjt.me personal website',
		description: "You can reach out to me using the provided email and social media links. I check my emails at least once a day so that's the best way to reach out to me.",
		url: 'https://thisjt.me/contact',
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
