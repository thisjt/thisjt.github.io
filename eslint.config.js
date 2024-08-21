import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import js from '@eslint/js';

const allrules = [
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		files: ['**/*.svelte', '**/*.js'],
		ignores: ['build/**', '.svelte-kit/**', 'package/**', '.env', '.env.*', '!.env.example', 'pnpm-lock.yaml', 'package-lock.json', 'yarn.lock'],
		languageOptions: {
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...{
				'svelte/valid-compile': ['error', { ignoreWarnings: true }],
				'no-undef': ['error', { typeof: true }],
				indent: ['error', 'tab', { SwitchCase: 1 }],
				eqeqeq: 'error',
				'no-fallthrough': 'off',
				'no-case-declarations': 'off',
				'keyword-spacing': 'error',
				'max-len': [
					'error',
					{
						code: 200,
					},
				],
				'max-lines': [
					'error',
					{
						max: 400,
						skipComments: true,
						skipBlankLines: true,
					},
				],
				'max-lines-per-function': [
					'error',
					{
						max: 150,
						skipComments: true,
						skipBlankLines: true,
					},
				],
				quotes: ['error', 'single'],
				semi: ['error', 'always'],
				'comma-spacing': [
					'error',
					{
						before: false,
						after: true,
					},
				],
				'no-template-curly-in-string': 'error',
				'no-useless-return': 'error',
				'no-console': 'error',
				'key-spacing': [
					'error',
					{
						beforeColon: false,
						afterColon: true,
					},
				],
				'max-depth': ['error', 6],
				'no-multiple-empty-lines': [
					'error',
					{
						max: 3,
					},
				],
				'no-trailing-spaces': 'error',
				'one-var-declaration-per-line': 'error',
				'no-var': 'error',
				'no-inner-declarations': 'off',
			},
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
	},
];

export default allrules;
