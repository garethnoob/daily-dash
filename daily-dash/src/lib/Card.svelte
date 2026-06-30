<script>
	let { title = '', children } = $props();
</script>

<div class="card">
	{#if title}
		<p class="card-title">{title}</p>
	{/if}
	<div class="card-body">
		{@render children()}
	</div>
</div>

<style>
	.card {
		background: var(--card);
		border: 1px solid var(--card-border);
		border-radius: 0.9rem;
		padding: 1.5rem 1.4rem;
		backdrop-filter: blur(10px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
		transition: box-shadow 200ms ease, transform 200ms ease;
	}

	.card:hover {
		transform: translateY(-2px);
		box-shadow: 0 14px 32px rgba(0, 0, 0, 0.32);
	}

	.card-title {
		margin: 0 0 0.75rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
	}

	.card-body {
		color: var(--text-muted);
		font-size: 0.97rem;
	}
</style>
