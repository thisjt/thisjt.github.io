<script>
	export let heading;
	export let level = 'h1';
	export let description = '';
	export let goback = '';
</script>

<div class="flex">
	<div class="my-4">
		{#if level === 'h1'}
			<h1 class="text-2xl font-bold">{heading}</h1>
		{:else if level === 'h2'}
			<h2 class="text-2xl font-bold">{heading}</h2>
		{:else if level === 'h3'}
			<h3 class="text-2xl font-bold">{heading}</h3>
		{:else if level === 'h4'}
			<h4 class="text-2xl font-bold">{heading}</h4>
		{:else if level === 'h5'}
			<h5 class="text-2xl font-bold">{heading}</h5>
		{:else if level === 'h6'}
			<h6 class="text-2xl font-bold">{heading}</h6>
		{:else}
			{heading}
		{/if}
	</div>
	<div class="{description ? 'sm:block' : ''} hidden grow m-4 ml-12 text-right text-gray-400 text-xs">{description}</div>
	<div class="flex items-center justify-end grow {goback ? '' : 'hidden'}">
		<a href={goback} class="rounded-lg px-3 py-1.5 bg-secondary transition hover:bg-primary cursor-pointer">Go Back</a>
	</div>
</div>
<div class="sm:hidden text-gray-400 text-xs mb-2">{description}</div>

<div class="w-16 h-1 ml-4 mb-4 bg-secondary"></div>
