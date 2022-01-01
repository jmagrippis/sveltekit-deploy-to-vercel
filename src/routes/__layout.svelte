<script lang="ts">
	import '../app.css'

	import { onMount } from 'svelte'
	import { theme } from '$lib/stores/theme'
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'

	onMount(() =>
		theme.subscribe((value) => {
			const htmlElement = document.firstElementChild as HTMLElement
			htmlElement.className = value
		})
	)
</script>

<Header />

<main class="flex-grow flex flex-col items-center justify-center">
	<slot />
</main>

<Footer />
