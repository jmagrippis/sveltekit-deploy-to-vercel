<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async ({ params, fetch }) => {
		const slug = params.slug ?? 'sveltekit-to-vercel'
		const url = `/guides/${slug}.json`
		const res = await fetch(url)

		if (res.ok) {
			const {
				html,
				attributes: { title, videoUrl },
			} = await res.json()
			return {
				props: {
					html,
					title,
					videoUrl,
				},
			}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`),
		}
	}
</script>

<script lang="ts">
	import Card from '$lib/components/Card.svelte'

	export let html: string
	export let title: string
	export let videoUrl: string
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article
	class="px-4 md:px-0 prose prose-a:decoration-primary-400 prose-code:font-code prose-code:font-light prose-slate sm:prose-lg md:prose-xl lg:prose-2xl dark:prose-invert"
>
	<h1 class="text-4xl underline decoration-primary-400 decoration-wavy">
		{title}
	</h1>

	<Card>
		<div class="not-prose text-center">
			📷 tl;dr? Watch the <a href={videoUrl}>video walkthrough</a>! 📷
		</div>
	</Card>

	<main>
		{@html html}
	</main>
</article>
