<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';

	const skills = [];

	const work = [
		{
			company: 'Accenture',
			from: 'January 2021',
			to: 'Present',
			position: 'Front-end Developer',
			description: `
				Work with developers, users, and tenants to develop, manage, and fix front-end issues or requests for the company website.`,
		},
		{
			company: 'Freelance',
			from: 'Q4 2020',
			to: 'Present',
			position: 'Fullstack Developer',
			description: `
				Discuss requirements, develop desktop software using various web technologies, deploy to client site
				locally, and do continuous improvement and development.`,
		},
		{
			company: 'Dynata',
			from: 'March 2020',
			to: 'December 2020',
			position: 'QA Tester',
			description: `
				Test surveys and questionnaires against a document from several clients to ensure quality of the survey
				before sending it off to the call center agents or online distributors.`,
		},
		{
			company: 'University of San Carlos',
			from: 'July 2015',
			to: 'May 2019',
			position: 'Working Student',
			description: `
				Manage several computers for the other students to use for their laboratory activities related
				to IT and Microelectronics.`,
		},
	];
</script>

<PageTitle text="resume" />
<div class="px-4 w-full">
	<PageHeader heading="Resume" />
	<div class="flex gap-2">
		<div class="flex w-1/12 p-2">
			<img class="w-full" src="/assets/work.png" alt="" />
		</div>
		<div class="flex items-center text-xl font-bold text-white">Experience</div>
	</div>
	{#each work as xp, i}
		<div class="group | flex gap-2">
			<div class="flex flex-col items-center w-1/12">
				<div class="group-hover:bg-gray-200 transition w-2 h-2 bg-gray-600 mb-1 mt-2 rounded"></div>
				{#if work.length - 1 !== i}
					<div class="group-hover:bg-gray-200 transition w-1 mt-1 grow bg-gray-600 rounded-sm"></div>
				{/if}
			</div>
			<div class="mb-4 w-11/12">
				<div class="text-xl text-warning">{xp.company}</div>
				<div class="text-white">{xp.position}</div>
				<div class="text-accent">{xp.from} - {xp.to}</div>
				<div class="text-sm">{xp.description}</div>
			</div>
		</div>
	{/each}
</div>
