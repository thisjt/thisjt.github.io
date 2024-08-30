<script>
	import { page } from '$app/stores';
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>
<PageTitle text={`${$page.status || '000'} ${$page.error?.message.toLowerCase() || 'error'}`} />
<div class="px-4 w-full">
	<PageHeader heading={`${$page.status || '000'} ${$page.error?.message || 'Error'}`} />
	<p class="pt-4">An error has occurred.</p>
	<p class="pt-4">
		{#if $page.status >= 500}
			Something bad happened on our end. Please report this to me.
		{:else if $page.status >= 400}
			{#if $page.status === 404}
				This page does not exist. Please go back. If you followed a proper link, please do tell me along with the URL you are trying to go to and I'll try to sort it out.
			{:else}
				Something unusual happened on your end. Interesting.
			{/if}
		{:else}
			An unknown error has occured. Please report this to me.
		{/if}
	</p>
</div>
