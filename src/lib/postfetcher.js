const endpoint = 'https://blog.thisjt.me';

/** @param {string} content */
export function contentStrip(content) {
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
		allPostsDecoded.items?.forEach((post) => {
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

		return { error: false, posts, tags: Object.keys(tags), time: new Date().getTime() };
	} catch (e) {
		console.error(e);
		return { error: true, posts: [], tags: [], time: new Date().getTime() };
	}
}

/**
 * @param {string} slug
 * @param {(url: string) => Promise<Response>} [customFetch]
 */
export async function loadArticle(slug, customFetch) {
	try {
		const allPosts = customFetch ? await customFetch(`${endpoint}/post?slug=${slug}`) : await fetch(`${endpoint}/post?slug=${slug}`);

		/**@type {import('$lib/types').bloggerAPIpostresult} */
		const apiPost = await allPosts.json();
		if (apiPost.error) return { error: true, post: null, time: new Date().getTime() };

		const post = {
			slug,
			published: new Date(apiPost.published).getTime(),
			updated: new Date(apiPost.updated).getTime(),
			title: apiPost.title,
			content: apiPost.content,
			tags: apiPost.labels,
		};

		return { error: false, post, time: new Date().getTime() };
	} catch {
		return { error: true, post: null, time: new Date().getTime() };
	}
}
