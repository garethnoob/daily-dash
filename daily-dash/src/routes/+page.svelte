<script>
	import Card from '$lib/Card.svelte';
</script>


<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<h1>Welcome to SvelteKit you beautiful boy</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<div class="cards">
	<Card title="quote of the day">
	</Card>
</div>
<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.0rem;
		padding: 1.5rem;
		justify-items: center;
	}
</style>