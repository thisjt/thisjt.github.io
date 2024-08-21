export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'all',
	endOfLine: 'auto',
	printWidth: 180,
	plugins: ['prettier-plugin-svelte'],
	overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
	bracketSameLine: true,
};
