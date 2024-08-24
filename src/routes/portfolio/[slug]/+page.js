import { dev } from '$app/environment';
const bloggerPostEndpoint = `https://workers-playground-misty-tree-a72d.thisjt.workers.dev/posts/bypath?${dev ? 'env=5173' : ''}`;

export async function load({ fetch: loadfetch, params }) {
	try {
		const slug = params.slug;
		let explodedSlug = slug.split('-');
		let dateSlug = explodedSlug.shift() || '';
		let convertedDateSlug = parseInt(dateSlug, 16) + 200000;
		const fullEnd = `${bloggerPostEndpoint}&path=/${convertedDateSlug.toString().slice(0, 4)}/${convertedDateSlug.toString().slice(4, 6)}/${explodedSlug.join('-')}.html`;
		const allPosts = await loadfetch(fullEnd);

		/**@type {import('$lib/types').bloggerAPIpostresult} */
		const apiPost = await allPosts.json();
		if (apiPost.error) {
			return { error: true, post: null };
		}

		const post = {
			slug,
			published: new Date(apiPost.published).getTime(),
			updated: new Date(apiPost.updated).getTime(),
			title: apiPost.title,
			content: apiPost.content,
			tags: apiPost.labels,
		};

		return { error: false, post };
	} catch {
		return { error: true, post: null };
	}
}
