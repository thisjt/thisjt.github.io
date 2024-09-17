import { hydrated } from '$lib/firstload.js';
import { loadArticles } from '$lib/postfetcher.js';

export async function load({ fetch: loadfetch }) {
	if (hydrated) return { error: false, posts: [], tags: [], clientFetch: true };

	return await loadArticles('/posts', loadfetch);
}
