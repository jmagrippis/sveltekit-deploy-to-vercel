<script lang="ts">
	import DarkModeIcon from './DarkModeIcon.svelte'
	import LightModeIcon from './LightModeIcon.svelte'
	import Logo from './Logo.svelte'

	import { theme, Theme } from '$lib/stores/theme'

	const onThemeIconClick = () => {
		$theme = $theme === Theme.Dark ? Theme.Light : Theme.Dark
	}
</script>

<header class="flex items-center justify-between p-2 text-prime">
	<Logo className="w-20" />
	<button on:click={onThemeIconClick}>
		{#if $theme === Theme.Dark}
			<DarkModeIcon className="w-8" />
		{:else}
			<LightModeIcon className="w-8" />
		{/if}
	</button>
</header>
