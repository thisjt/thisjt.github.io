import { browser } from '$app/environment';
import posthog from 'posthog-js';

export const prerender = true;

export const load = async () => {
	if (browser)
		posthog.init('phc_wWIh6uSCIlJrI3SZINvfgEBzy2xeCDQSmgw54mwnMLE', {
			api_host: 'https://us.i.posthog.com',
			person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
		});
};
