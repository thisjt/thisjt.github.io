export async function load({ params }) {
	const slug = params.slug;
	return { hello: 'world2', slug };
}
