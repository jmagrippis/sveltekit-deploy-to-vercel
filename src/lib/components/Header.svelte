<script lang="ts">
	import {session} from '$app/stores'
	import DarkModeIcon from './DarkModeIcon.svelte'
	import LightModeIcon from './LightModeIcon.svelte'
	import Logo from './Logo.svelte'

	import {setTheme, theme, Theme} from '$lib/stores/theme'
	import YouTubeIcon from './YouTubeIcon.svelte'

	const onThemeIconClick = () => {
		const nextTheme = $theme === Theme.Dark ? Theme.Light : Theme.Dark
		setTheme(nextTheme)
	}
</script>

<header class="flex items-center justify-between p-2 text-prime">
	<a href="/"><Logo className="w-20" /></a>
	<div class="flex gap-4">
		<a
			href="https://www.youtube.com/channel/UCm1ALyg61uhPoTnZBm7mY2g"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="YouTube"
		>
			<YouTubeIcon title="Johnny's YouTube channel" className="w-8" />
		</a>
		<button on:click={onThemeIconClick}>
			{#if $theme === Theme.Dark}
				<DarkModeIcon className="w-8" />
			{:else}
				<LightModeIcon className="w-8" />
			{/if}
		</button>
	</div>
</header>
