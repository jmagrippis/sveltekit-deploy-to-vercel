<script lang="ts">
	import { theme, Theme } from '$lib/stores/theme';

	let colorSchemes: { label: string; value: Theme }[] = [
		{ label: 'Light', value: Theme.Light },
		{ label: 'Dark', value: Theme.Dark },
	];

	const onChange = ({ currentTarget }) => {
		$theme = currentTarget.value;
	};
</script>

<form class="mb-4">
	<p class="text-sm leading-5 text-copy-muted mb-4">
		Which theme would you like to use?
	</p>
	<fieldset>
		<legend class="sr-only">Color scheme selector</legend>
		<div class="flex items-center gap-8">
			{#each colorSchemes as { label, value }}
				<div class="flex items-center">
					<input
						id={value}
						name="color-scheme"
						type="radio"
						class="focus:ring-primary-500 h-4 w-4"
						bind:group={$theme}
						{value}
						on:change={onChange}
					/>
					<label for={value} class="ml-3 block text-sm cursor-pointer"
						>{label}</label
					>
				</div>
			{/each}
		</div>
	</fieldset>
</form>
