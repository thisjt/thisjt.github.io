import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			width: {
				'11/24': '45.83333%',
				'13/24': '54.16666%',
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
			},
			height: {
				'1/10': '10%',
				'2/10': '20%',
				'3/10': '30%',
				'4/10': '40%',
				'5/10': '50%',
				'6/10': '60%',
				'7/10': '70%',
				'8/10': '80%',
				'9/10': '90%',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				thisjtme: {
					primary: '#009dff',
					'primary-focus': '#223127',
					'primary-content': '#ccc',

					secondary: '#005c95',
					'secondary-focus': '#3c4f58',
					'secondary-content': '#ccc',

					accent: '#009dff',
					'accent-focus': '#81cfff',
					'accent-content': '#cccccc',

					neutral: '#1F292E',
					'neutral-focus': '#31373a',
					'neutral-content': '#cccccc',

					'base-100': '#222222',
					'base-200': '#005c95',
					'base-300': '#81cfff',
					'base-content': '#ccc',

					info: '#66c7ff',
					success: '#87cf3a',
					warning: '#fc0',
					error: '#f55',

					'--rounded-box': '0',
					'--rounded-btn': '0',
					'--rounded-badge': '0',

					'--animation-btn': '.25s',
					'--animation-input': '.2s',

					'--btn-text-case': 'uppercase',
					'--navbar-padding': '.5rem',
					'--border-btn': '1px',
				},
			},
		],
	},
};
