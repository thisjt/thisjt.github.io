<script>
	import '@fontsource/open-sans';
	import '../styles/tailwind.css';
	import '../styles/main.scss';
	import Sidebar from './Sidebar.svelte';
	import Socials from './Socials.svelte';
	import { afterNavigate, onNavigate } from '$app/navigation';
	import { writable } from 'svelte/store';

	let currentPage = writable('');

	afterNavigate(() => {
		$currentPage = window.location.pathname.split('/')[1];
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="flex flex-col lg:flex-row m-4 gap-4 lg:w-[1024px] lg:mx-auto lg:mt-12">
	<div class="flex flex-col lg:w-4/12">
		<Sidebar />
	</div>
	<div class="bg-neutral rounded-2xl lg:w-8/12">
		<div class="sm:float-right flex rounded-tr-2xl sm:rounded-bl-2xl bg-secondary sm:rounded-tl-none rounded-tl-2xl text-sm sm:text-lg text-white">
			<a
				href="/"
				class="{$currentPage === '' ? '!bg-primary' : ''} py-4 text-center w-1/4 sm:w-auto sm:px-5 font-bold hover:bg-primary sm:rounded-bl-2xl sm:rounded-tl-none rounded-tl-2xl"
				>About</a>
			<a href="/resume" class="{$currentPage === 'resume' ? '!bg-primary' : ''} py-4 text-center w-1/4 sm:w-auto sm:px-5 font-bold hover:bg-primary">Resume</a>
			<a
				on:click={(e) => {
					e.currentTarget.classList.add('animate-pulse');
				}}
				href="/portfolio"
				class="{$currentPage === 'portfolio' ? '!bg-primary' : ''} py-4 text-center w-1/4 sm:w-auto sm:px-5 font-bold hover:bg-primary">Portfolio</a>
			<!-- <a href="/blog" class="{$currentPage === 'blog' ? '!bg-primary' : ''} py-4 text-center w-1/4 sm:w-auto sm:px-5 font-bold hover:bg-primary">Blog</a> -->
			<a href="/contact" class="{$currentPage === 'contact' ? '!bg-primary' : ''} py-4 text-center w-1/4 sm:w-auto sm:px-5 font-bold hover:bg-primary rounded-tr-2xl">Contact</a>
		</div>
		<slot />
	</div>
	<div class="miniicons | md:hidden">
		<div class="mb-2 font-bold">Keep in Touch!</div>
		<div class="flex flex-wrap gap-3">
			<Socials miniicons={true} />
		</div>
	</div>
</div>

<style>
	.miniicons {
		view-transition-name: miniicons;
	}
</style>
