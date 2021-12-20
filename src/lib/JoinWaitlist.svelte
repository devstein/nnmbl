<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	export const success = writable(false);

	export const handleSubmit = () => {
		success.set(true);
		window.localStorage.setItem('hasJoinedWaitlist', 'true');
	};

	// 4. Use API and write to DB
	// 5. Error state
</script>

<script>
	onMount(() => {
		const previousState = Boolean(window.localStorage.getItem('hasJoinedWaitlist') || false);
		success.set(previousState);
	});
</script>

<div class="flex align-items text-base-content">
	{#if !$success}
		<form
			class="form-control w-full text-base-content"
			id="email"
			on:submit|preventDefault={handleSubmit}
		>
			<label class="label" for="email">
				<span class="label-text hidden">email</span>
			</label>
			<div class="flex">
				<input
					type="text"
					placeholder="Email"
					class="input input-primary shadow flex-1 rounded-r-none"
				/>
				<button type="submit" class="btn btn-primary shadow rounded-l-none"
					>Join the Waitlist</button
				>
			</div>
		</form>
	{/if}
	{#if $success}
		<div class="alert alert-success whitespace-pre mt-2 text-lg">
			🚀 You're signed up! We'll let you know once <span
				class="font-bold font-mono text-primary whitespace-pre">nnmbl</span
			> is ready for early access.
		</div>
	{/if}
</div>
