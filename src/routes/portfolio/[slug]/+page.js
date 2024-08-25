const bloggerPostEndpoint = `https://blogger-api.thisjt.me/post?slug=`;

export async function load({ fetch: loadfetch, params }) {
	try {
		const allPosts = await loadfetch(`${bloggerPostEndpoint}${params.slug}`);

		/**@type {import('$lib/types').bloggerAPIpostresult} */
		const apiPost = await allPosts.json();
		if (apiPost.error) {
			return { error: true, post: null };
		}

		const post = {
			slug: params.slug,
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
