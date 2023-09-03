<script>
	import { partytownSnippet } from '@builder.io/partytown/integration';
</script>

<svelte:head>
	{@html `<script>${partytownSnippet()}</script>`}
</svelte:head>

<slot />
