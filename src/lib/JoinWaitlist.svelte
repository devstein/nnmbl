<script context="module">
	import { writable } from 'svelte/store';

	const submitted = writable(false);
	const registered = writable(false);
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import { browserClient as supabase } from '$lib/supabase';

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
		// on initial email confirmation,
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

		if (user) window.heap.identify(user.email);
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
			if (data.userExists) {
				registered.set(true);
				window.heap.identify(email);
			}
			// @ts-ignore
			if (window.gtag)
				// @ts-ignore
				window.gtag('event', 'conversion', { send_to: 'AW-973253532/JgjaCN2tsZADEJzXitAD' });
			// @ts-ignore
			if (window.fbq) window.fbq('track', 'CompleteRegistration');
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
				<a
					href="https://sharedrecruiting.co"
					class="btn btn-primary shadow rounded-l-none px-2 md:px-4"
				>
					Join the Waitlist
				</a>
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
			<p class="block">
				🚀 You're almost there! A confirmation email has been sent to {email}. Follow the
				instructions in the confirmation email to join the waitlist. If you don't see a confirmation
				email, please check your spam folder or reach out at contact@nnmbl.xyz
			</p>
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
