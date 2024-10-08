export type portfolioPost = {
	slug: string;
	published: number;
	updated: number;
	title: string;
	content: string;
	cover: string;
	tags: string[];
};

export type bloggerAPIresult = {
	kind: string;
	items: {
		published: string;
		updated: string;
		url: string;
		title: string;
		content: string;
		images: { url: string }[];
		labels: string[];
	}[];
};

export type bloggerAPIpostresult = {
	kind: string;
	published: string;
	updated: string;
	title: string;
	content: string;
	labels: string[];
	error?: {};
};
