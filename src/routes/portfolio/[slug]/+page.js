export async function load({ params }) {
	const post = await import(`../../../portfolio/${params.slug}.md`);
	const { title, description, date, categories, published } = post.metadata;
	const content = post.default;

	return { content, title, description, date, categories, published };
}

// export function entries() {
// 	return [{ slug: 'lookandroar' }, { slug: 'secondpost' }];
// }
