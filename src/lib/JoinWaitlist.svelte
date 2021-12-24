<script context="module">
	import { writable } from 'svelte/store';

	const submitted = writable(false);
	const registered = writable(false);
</script>

<script>
	import { onMount } from 'svelte';

	import supabase from '$lib/supabase';

	let email;
	let error;
	let submitting = false;

	onMount(() => {
		const user = supabase.auth.user();

		registered.set(Boolean(user));
	});

	// DO WE DO THIS: define load function

	export const handleSubmit = async () => {
		// reset error on submit
		error = undefined;

		try {
			submitting = true;
			const response = await fetch('/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			const data = await response.json();

			if (response.status !== 200) {
				// display error message
				error = data.message;
				return;
			}

			// success!
			submitted.set(true);
			if (data.userExists) registered.set(true);
		} catch (err) {
			console.error(err);
		} finally {
			submitting = false;
		}
	};
</script>

<div class="flex align-items text-base-content">
	{#if !$submitted && !$registered}
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
					bind:value={email}
					class="input input-primary shadow flex-1 rounded-r-none"
					class:input-error={error}
				/>
				<button type="submit" class="btn btn-primary shadow rounded-l-none" disabled={submitting}>
					{#if !submitting}
						Join the Waitlist
					{/if}
					{#if submitting}
						Submitting...
					{/if}
				</button>
			</div>
			{#if error}
				<label class="label" for="email">
					<span class="label-text-alt text-error">{error}</span>
				</label>
			{/if}
		</form>
	{/if}
	{#if $submitted && !$registered}
		<div class="alert alert-info mt-2 md:text-lg">
			<p class="block">🚀 You're almost there! Confirm your email to join the waitlist.</p>
		</div>
	{/if}
	{#if $registered}
		<div class="alert alert-success mt-2 md:text-lg">
			<p class="block">
				🚀 You're on the list! We'll reach out once <span class="font-bold text-primary">nnmbl</span
				> is ready for early access.
			</p>
		</div>
	{/if}
</div>
