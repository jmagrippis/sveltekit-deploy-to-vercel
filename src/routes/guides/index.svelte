<script lang="ts" context="module">
	import type {Load} from '@sveltejs/kit'

	const url = '/guides.json'

	export const load: Load = async ({fetch}) => {
		const res = await fetch(url)

		if (res.ok) {
			const {guides} = await res.json()
			return {
				props: {
					guides,
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

	type Guide = {
		attributes: {
			title: string
			date: string
			videoUrl: string
		}
		href: '/guides/sveltekit-to-vercel'
	}
	export let guides: Guide[]
</script>

<svelte:head>
	<title>{guides.length} guides just for you!</title>
</svelte:head>

<main>
	<h1 class="text-4xl underline decoration-primary-400 decoration-wavy mb-8">
		Guides
	</h1>

	<ul>
		{#each guides as { attributes, href }}
			<li>
				<Card>
					<a sveltekit:prefetch {href}>{attributes.title}</a>
				</Card>
			</li>
		{/each}
	</ul>
</main>
