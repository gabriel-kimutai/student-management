export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/admin/account": [4,[2]],
		"/admin/dashboard": [~5,[2]],
		"/admin/register": [~6,[2]],
		"/login": [~7],
		"/student": [~8]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';