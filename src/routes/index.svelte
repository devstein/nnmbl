<script context="module" lang="ts">
	import JoinWaitlist from '$lib/JoinWaitlist.svelte';
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="hero min-h-screen bg-base-content" id="main">
		<div
			class="hero-content flex flex-col-reverse text-center text-base-100 lg:flex-row lg:space-x-4 lg:text-left"
		>
			<div class="max-w-lg space-y-4">
				<h1 class="mb-5 text-4xl font-mono text-primary lowercase">nnmbl</h1>
				<h1 class="mb-5 text-5xl font-mono lowercase">
					<strong class="font-black text-primary">N</strong>ot
					<strong class="font-black text-primary">N</strong>ow,<br />
					<strong class="font-black text-primary">M</strong>ay<strong
						class="font-black text-primary">b</strong
					>e
					<strong class="font-black text-primary">L</strong>ater
				</h1>
				<p class="flex-1 mb-2">
					The proliferation of sourcing software has allowed companies to reach a broader set of
					candidates than ever before, yet recruiting is still the number one pain point of growing
					companies. At its core, recruiting is a matching problem, and the modern recruiting stack
					fails to address a key element: <i>timing</i>.
				</p>
				<p class="flex-1 mb-2">
					As a company, you spend countless hours sourcing and reaching out to qualified candidates
					for open roles, but if you reach out at the wrong time when the candidate isn't looking,
					you've just wasted time and energy.
				</p>
				<p class="flex-1 mb-2">
					As a candidate, your inbox has become inundated by emails. If you are actively looking for
					a new role, this is fantastic. However, 99% of the time, you are not.
				</p>
				<p class="flex-1 mb-2">
					<i>Timing matters</i>. Not now, mabye later —
					<span class="font-mono text-primary">nnmbl</span> — takes care of timing for you.
				</p>
				<div class="w-full text-left">
					<p class="text-base">
						Be in touch.
						<span>
							Be <strong class="font-black font-mono text-primary">nnmbl</strong>.
						</span>
					</p>
					<JoinWaitlist />
				</div>
			</div>
			<!--
			<div class="border-2 border-black rounded w-96 h-96" />
			-->
			<img
				class="invisible lg:visible hidden lg:block max-w-lg mask mask-parallelogram-2"
				src="https://image.shutterstock.com/shutterstock/photos/1074841250/display_1500/stock-vector-receiving-an-email-from-a-contact-or-a-newsletter-isometric-illustration-for-web-banner-1074841250.jpg"
				alt="img"
			/>
		</div>
	</div>

	<!--For candidates -->
	<!-- try use snap scroll for each section -->
	<div class="hero min-h-screen bg-base-content" id="candidates">
		<div
			class="hero-content flex flex-col-reverse text-left text-lg lg:flex-row-reverse lg:space-x-4"
		>
			<div class="max-w-lg">
				<h3 class="text-3xl text-left text-secondary">As a candidate,</h3>
				<ul class="list-disc list-inside text-base-100">
					<li>
						Leave opportunities open. Automatically respond to companies to let them know the timing
						isn't right, but you will reach out in the future
					</li>
					<li>
						Keep your inbox clean. When you aren't looking for a new role, recruiting emails are
						archived and organized for future access
					</li>
					<li>
						Review opportunities when you are ready. Access and review previous inbound job
						opportunities once you are actively looking
					</li>
					<li>
						Notify companies. Let companies know whe you are ready to start the interview process.
					</li>
					<li>
						Time your interviews. Start the interview process with your top choice companies at the
						same timeNotify companies. Let companies know whe you are ready to start the interview
						process..
					</li>
				</ul>
			</div>
			<img
				class="invisible lg:visible max-w-lg mask mask-circle"
				src="https://image.shutterstock.com/shutterstock/photos/478072828/display_1500/stock-vector-businessman-hand-holding-smartphone-with-spaming-emails-on-monitor-spam-and-suspicious-email-478072828.jpg"
				alt="img"
			/>
		</div>
	</div>

	<!--For companies -->
	<div class="hero min-h-screen bg-base-content" id="companies">
		<div class="hero-content flex flex-col-reverse text-left text-neutral lg:flex-row lg:space-x-4">
			<div class="max-w-lg">
				<h3 class="text-2xl text-left text-secondary">As a company,</h3>
				<ul class="list-disc list-inside text-base-100">
					<li>
						Standout to candidates. Customize your company pofile to keep candidates interested.
					</li>
					<li>Stop wasting time. Know when to follow up with qualified candidates.</li>
					<li>Your time matters.</li>
					<li>
						Discover new candidates. Find similar candidates to ones you've already reached out to
						that are actively looking.
					</li>
					<li>Integrates into your workflow. Integrates with all the recruiting tools you love.</li>
				</ul>
			</div>
			<img
				class="max-w-lg mask mask-circle"
				src="https://image.shutterstock.com/shutterstock/photos/755853649/display_1500/stock-vector-flat-design-concepts-for-send-or-receive-email-marketing-business-communication-and-marketing-755853649.jpg"
				alt="img"
			/>
		</div>
	</div>

	<!--Be nnmbl -->
	<div class="hero bg-base-content pt-4 lg:pt-0 pb-8" id="join">
		<div class="hero-content flex flex-col text-base-100">
			<div class="w-full space-y-6 text-left">
				<p class="text-4xl">Be <strong class="font-black font-mono text-primary">nnmbl</strong>.</p>
				<p class="text-4xl">Be in touch.</p>
				<JoinWaitlist />
			</div>
		</div>
	</div>
</section>

<style>
</style>
