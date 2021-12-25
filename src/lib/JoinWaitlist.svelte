<script context="module">
	import { writable } from 'svelte/store';

	const submitted = writable(false);
	const registered = writable(false);
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import supabase from '$lib/supabase';

	let email: string;
	let error: string;
	let submitting = false;

	const parseAuthHash = (hash: string): string => {
		const params = hash.split('&');

		const accessTokenParam = params.filter((s) => s.includes('access_token'))[0];
		if (!accessTokenParam) return '';

		const accessToken = accessTokenParam.split('=')[1] || '';
		return accessToken;
	};

	onMount(async () => {
		// on initial email confirmationn,
		// we need to manualy get the user via the auth redirect params
		// if successful, it will be picked up by the following call to
		// supabase.auth.user()
		const accessToken = parseAuthHash(window.location.hash);
		if (accessToken) {
			try {
				await supabase.auth.api.getUser(accessToken);
			} catch (err) {
				console.error(err);
			}
		}

		const user = supabase.auth.user();

		registered.set(Boolean(user));
	});

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
