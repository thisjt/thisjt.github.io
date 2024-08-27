<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import SvelteSEO from 'svelte-seo';

	const skills = [
		'Frontend Web Development\n(HTML, SASS, JS, Tailwind)',
		'Fullstack Web Framework (SvelteKit)',
		'Desktop Web Technologies (nwjs)',
		'Databases\n(MySQL, PostgreSQL, SQLite, Prisma)',
		'Github Actions',
		'Agile Methodology',
		'Adobe Experience Manager Platform',
		'Functional Testing',
		'Browserstack Testing (Manual)',
		'Accessibility Testing (WCAG)',
		'Postman API Testing',
		'Git Version Control System',
	];

	const work = [
		{
			company: 'Accenture',
			from: 'January 2021',
			to: 'Present',
			position: 'Frontend Developer',
			description: `
				Work with developers, users, and tenants to develop, manage, and fix Frontend issues or requests for the company website.`,
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

<SvelteSEO
	title="thisjt.me personal website"
	description={"Hello there! I am Joshua, a passionate and versatile Frontend developer, and I'm thrilled " +
		"to have you visit my personal website. Here you'll find a digital canvas where I bring ideas to " +
		'life through lines of code, creating unique and impactful web experiences.'}
	canonical="https://thisjt.me/"
	keywords="thisjt, thisjtme, personal website, personal, github, software developer"
	openGraph={{
		title: 'resume - thisjt.me personal website',
		description:
			'My skills, experiences, and educational background are listed here. More details could be found in my ' +
			'social media links. If you want to know more about my resume in detail, please do reach out to me.',
		url: 'https://thisjt.me/resume',
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
<PageTitle text="resume" />
<div class="px-4 w-full">
	<PageHeader heading="Resume" />
	<div class="flex gap-2 mt-3">
		<div class="flex w-1/12 sm:p-2">
			<img class="w-full" src="/assets/skills.png" alt="" />
		</div>
		<div class="flex items-center text-xl font-bold text-white">Skills</div>
	</div>
	{#each skills as skill}
		<div class="group | flex gap-2">
			<div class="flex flex-col items-center w-1/12"><div class="group-hover:bg-gray-200 transition w-2 h-2 bg-gray-600 mb-1 mt-2.5 rounded"></div></div>
			<div class="w-11/12">
				{#each skill.split('\n') as ski}
					{ski}<br />
				{/each}
			</div>
		</div>
	{/each}

	<div class="flex gap-2 mt-5">
		<div class="flex w-1/12 sm:p-4 md:p-2">
			<img class="w-full" src="/assets/work.png" alt="" />
		</div>
		<div class="flex items-center text-xl font-bold text-white">Experience</div>
	</div>
	{#each work as xp, i}
		<div class="group | flex gap-2">
			<div class="flex flex-col items-center w-1/12">
				<div class="group-hover:bg-gray-200 transition w-2 h-2 bg-gray-600 mb-1 mt-2.5 rounded"></div>
				{#if work.length - 1 !== i}
					<div class="group-hover:bg-gray-200 transition w-1 mt-1.5 grow bg-gray-600 rounded-sm"></div>
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
	<div class="flex gap-2 mt-3">
		<div class="flex w-1/12 sm:p-2">
			<img class="w-full" src="/assets/school.png" alt="" />
		</div>
		<div class="flex items-center text-xl font-bold text-white">Education</div>
	</div>
	<div class="group | flex gap-2">
		<div class="flex flex-col items-center w-1/12">
			<div class="group-hover:bg-gray-200 transition w-2 h-2 bg-gray-600 mb-1 mt-2.5 rounded"></div>
			<div class="group-hover:bg-gray-200 transition w-1 mt-1.5 grow bg-gray-600 rounded-sm"></div>
		</div>
		<div class="mb-4 w-11/12">
			<div class="text-xl text-warning">University of San Carlos</div>
			<div class="text-white">Bachelor of Science in Electronics Engineering</div>
			<div class="text-accent">June 2013 - May 2019</div>
		</div>
	</div>
	<div class="group | flex gap-2">
		<div class="flex flex-col items-center w-1/12">
			<div class="group-hover:bg-gray-200 transition w-2 h-2 bg-gray-600 mb-1 mt-2.5 rounded"></div>
		</div>
		<div class="mb-4 w-11/12">
			<div class="text-xl text-warning">Blessed Trinity College (High School)</div>
			<div class="text-accent">2009 - 2013</div>
		</div>
	</div>
</div>
