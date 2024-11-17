import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				zb: {
					text: 'hsl( var(--text) / <alpha-value> )',
					base: 'hsl( var(--bg) / <alpha-value> )',
					border: 'hsl(var(--border) / <alpha-value> )',
					border_focused: 'hsl(var(--border_focused) / <alpha-value> )',
					icon: 'hsl(var(--icon) / <alpha-value> )',
					memory: 'hsl(var(--memory) / <alpha-value> )',
					cpu: 'hsl(var(--cpu) / <alpha-value> )',
					'cpu-high-usage': 'hsl(var(--cpu-high-usage) / <alpha-value> )',
					battery: {
						good: 'hsl(var(--battery-good) / <alpha-value> )',
						mid: 'hsl(var(--battery-mid) / <alpha-value> )',
						low: 'hsl(var(--battery-low) / <alpha-value> )'
					},
					'focused-process': 'hsl(var(--focused-process) / <alpha-value> )',
					process: 'hsl(var(--process) / <alpha-value> )',
					displayed: 'hsl(var(--displayed) / <alpha-value> )',
					ws: {
						base: 'hsl(var(--ws-base) / <alpha-value>)',
						'base-text': 'hsl(var(--ws-base-text) / <alpha-value>)',
						hover: 'hsl(var(--ws-hover) / <alpha-value>)',
						'hover-text': 'hsl(var(--ws-hover-text) / <alpha-value>)',
						focused: 'hsl(var(--ws-focused) / <alpha-value>)',
						'focused-text': 'hsl(var(--ws-focused-text) / <alpha-value>)',
						displayed: 'hsl(var(--ws-displayed) / <alpha-value>)',
						'displayed-text': 'hsl(var(--ws-displayed-text) / <alpha-value>)'
					},
					'tiling-direction': 'hsl(var(--tiling-direction) / <alpha-value> )',
					spotify: {
						playing: 'hsl(var(--now-playing) / <alpha-value> )',
						paused: 'hsl(var(--not-playing) / <alpha-value> )'
					},
					network: 'hsl(var(--network) / <alpha-value> )',
					weather: 'hsl(var(--weather) / <alpha-value> )'
				},
				blend: generateBlends()
			},
			borderRadius: {
				base: 'var(--radius)'
			},
			borderWidth: {
				DEFAULT: 'var(--border-size)'
			},
			fontFamily: {
				mono: [
					'Inconsolata Nerd Font Mono',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace'
				]
			},
			fontWeight: {
				base: 'var(--font-weight)'
			},
			height: {
				bar: 'var(--height)'
			},
			margin: {
				zbx: 'var(--bar-margin-x)',
				zby: 'var(--bar-margin-y)'
			}
		}
	},
	safelist: [
		'bg-zb-ws-base',
		'text-zb-ws-base-text',
		'bg-zb-ws-focused',
		'text-zb-ws-focused-text',
		'bg-zb-ws-displayed',
		'text-zb-ws-displayed-text',
		'justify-self-start',
		'justify-self-center',
		'justify-self-end'
	],

	plugins: []
} satisfies Config;

function generateBlends() {
	const blends = {};
	for (let i = 5; i <= 100; i += 5) {
		blends[i] = `color-mix(in srgb, currentColor ${i}%, transparent)`;
	}
	return blends;
}
