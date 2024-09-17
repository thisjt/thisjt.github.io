const endpoint = 'https://blogger-api.thisjt.me';

/** @param {string} content */
function contentStrip(content) {
	content = content.replace(/(<([^>]+)>)/gi, '').slice(0, 400);
	content = content.replaceAll('&nbsp;', '');
	return content;
}

/**
 * @param {string} url
 * @param {(url: string) => Promise<Response>} [customFetch]
 */
export async function loadArticles(url, customFetch) {
	try {
		const allPosts = customFetch ? await customFetch(`${endpoint}${url}`) : await fetch(`${endpoint}${url}`);

		/**@type {import('$lib/types').portfolioPost[]} */
		const posts = [];
		/**@type {Object.<string, string>} */
		const tags = {};

		/**@type {import('$lib/types').bloggerAPIresult} */
		const allPostsDecoded = await allPosts.json();
		allPostsDecoded.items.forEach((post) => {
			let url = new URL(post.url);
			let slug = url.pathname.replaceAll('.html', '');
			let explodedSlug = slug.split('/');
			let constructedSlug = explodedSlug.pop();

			let uid = (parseInt(explodedSlug.join('')) - 200000).toString(16);
			post.labels?.forEach((label) => {
				tags[label] = '';
			});

			posts.push({
				slug: `${uid}-${constructedSlug}`,
				published: new Date(post.published).getTime(),
				updated: new Date(post.updated).getTime(),
				title: post.title,
				cover: post.images[0].url,
				tags: post.labels,
				content: contentStrip(post.content),
			});
		});

		return { error: false, posts, tags: Object.keys(tags) };
	} catch (e) {
		console.error(e);
		return { error: true, posts: [], tags: [] };
	}
}
