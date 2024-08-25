<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';

	const clients = [
		{
			slug: 'bmpharmacy',
			locations: ['Maguikay, Mandaue City 6014 Philippines', 'Poblacion, Consolacion 6001 Philippines'],
		},
		{
			slug: 'kblaundry',
			locations: ['Lahug, Cebu City 6000 Philippines', 'Talamban, Cebu City 6000 Philippines'],
		},
	];
</script>

<svelte:head>
	<meta property="og:url" content="https://thisjt.me/" />
	<meta property="og:image" content="https://thisjt.me/social2.png" />
	<meta property="og:title" content="thisjt.me personal website" />
	<meta
		property="og:description"
		content={"Hello there! I am Joshua, a passionate and versatile Frontend developer, and I'm thrilled " +
			"to have you visit my personal website. Here you'll find a digital canvas where I bring ideas to " +
			'life through lines of code, creating unique and impactful web experiences.'} />
</svelte:head>
<PageTitle />
<div class="px-4 w-full">
	<PageHeader heading="About Me" />
	<p class="mb-4">
		Hello there! I'm Joshua, a passionate and versatile Frontend developer, and I'm thrilled to have you visit my personal website. Here you'll find a digital canvas where I bring
		ideas to life through lines of code, creating unique and impactful web experiences.
	</p>
	<p class="mb-4">
		Feel free to browse through my portfolio to see examples of my work. I'm always excited to collaborate on new projects, so if you have an idea in mind or need a tech-savvy
		partner for your venture, don't hesitate to get in touch!
	</p>
	<p class="mb-6">Thank you for stopping by, and I hope my passion for development resonates with you. Let's embark on a journey of innovation together!</p>
	<PageHeader level="h2" heading="What I Do" />

	<div class="flex gap-4 flex-col sm:flex-row">
		<div class="flex w-full sm:w-1/2 px-4 py-10 bg-base-100 rounded-xl">
			<div class="mr-4">
				<img src="/assets/code.png" alt="" />
			</div>
			<div>
				<div class="font-bold text-white mb-1">Frontend Web Development</div>
				<div class="text-sm">Create, manage, develop, and fix Frontend related code.</div>
			</div>
		</div>
		<div class="flex w-full sm:w-1/2 px-4 py-10 bg-base-100 rounded-xl">
			<div class="mr-4">
				<img src="/assets/laptop.png" alt="" />
			</div>
			<div>
				<div class="font-bold text-white mb-1">Desktop Application Software</div>
				<div class="text-sm">Develop desktop application software using web technologies.</div>
			</div>
		</div>
	</div>

	<PageHeader level="h2" heading="Clients" />
	<div class="flex gap-4 flex-col sm:flex-row mb-4">
		{#each clients as client}
			<div class="flex w-full sm:w-1/2 flex-col bg-base-100 p-4 rounded-xl">
				<div class="w-full justify-center items-center flex grow mb-4 sm:mb-0"><img class="w-full" src="/assets/{client.slug}.png" alt="" /></div>
				{#each client.locations as location}
					<div class="text-xs text-center text-gray-500">
						{#if location}{location}{:else}&nbsp;{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
</div>
