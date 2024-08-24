<script>
	// @ts-ignore: jsdoc? hello?
	import SocialIcons from '@rodneylab/svelte-social-icons';
	export let miniicons = false;

	const socials = [
		{
			icon: 'email',
			social: 'Email',
			text: 'contact@thisjt.me',
			link: 'mailto:contact@thisjt.me',
		},
		{
			icon: 'github',
			social: 'Github',
			text: 'thisjt',
			link: 'https://github.com/thisjt',
		},
		{
			icon: 'linkedin',
			social: 'LinkedIn',
			text: 'in/thisjt',
			link: 'https://www.linkedin.com/in/thisjt/',
		},
		{
			icon: 'stackoverflow',
			social: 'Stackoverflow',
			text: 'u/thisjt',
			link: 'https://stackoverflow.com/users/2334332/thisjt',
		},
	];
</script>

{#if miniicons}
	{#each socials as social}
		<a href={social.link} target="_blank" class="flex hover:bg-base-100 rounded-lg cursor-pointer items-center">
			<div class="flex items-center justify-center px-2 rounded-lg text-center">
				<SocialIcons network={social.icon} width="32" height="32" fgColor="#ffffff" bgColor="#009dff" />
			</div>
			<div class="text-xs">{social.social}</div>
		</a>
	{/each}
{:else}
	{#each socials as social}
		<a href={social.link} target="_blank" class="flex hover:bg-base-100 rounded-lg cursor-pointer lg:p-2">
			<div class="hidden md:flex lg:hidden items-center grow justify-end pl-2 text-gray-400">
				{social.text}
			</div>
			<div class="flex items-center justify-center mr-4 px-2 rounded-lg text-center">
				<SocialIcons network={social.icon} width="32" height="32" fgColor="#ffffff" bgColor="#009dff" />
			</div>
			<div class="md:hidden lg:block">
				<div class="text-gray-400 text-sm">{social.social}</div>
				<div class="">{social.text}</div>
			</div>
		</a>
	{/each}
{/if}
