import { hydrated } from '$lib/firstload.js';
import { loadArticle } from '$lib/postfetcher.js';

export async function load({ fetch: loadfetch, params }) {
	if (hydrated) return { error: false, post: null, slug: params.slug, clientFetch: true };

	return loadArticle(params.slug, loadfetch);
}
