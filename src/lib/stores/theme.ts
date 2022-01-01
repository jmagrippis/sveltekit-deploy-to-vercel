import { browser } from '$app/env';
import { writable } from 'svelte/store';

export enum Theme {
	Light = 'light',
	Dark = 'dark',
}

export const theme = writable<Theme>(Theme.Light, (set) => {
	if (browser) {
		const localStorageValue = window.localStorage.getItem(
			'theme'
		) as Theme | null;
		const value = localStorageValue
			? localStorageValue
			: window.matchMedia('(prefers-color-scheme: dark)').matches
			? Theme.Dark
			: Theme.Light;

		set(value);
	}
});

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});
