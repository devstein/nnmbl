<script lang="ts">
	import { onMount } from 'svelte';

	import Icon from 'svelte-awesome/components/Icon.svelte';
	import {
		replyAll,
		hourglass1,
		recycle,
		star,
		searchPlus,
		bellSlash,
		sitemap,
		volumeUp,
		smileO,
		longArrowRight
	} from 'svelte-awesome/icons';

	import greaterOrEqual from '$lib/greaterOrEqual';

	import Footer from '$lib/footer/Footer.svelte';
	import JoinWaitlist from '$lib/JoinWaitlist.svelte';

	const ICON_SIZE = 2;
	const MD_BREAKPOINT = 768;
	const DESKTOP_FONT_SIZE = '2.75rem';
	const MOBILE_FONT_SIZE = '2.25rem';
	const SHRINK_ANIMATION_DELAY = 2000;

	let windowWidth: number;
	let fontSize: string;
	let isDesktop: boolean = true;
	let headerVisible: boolean = true;

	onMount(() => {
		isDesktop = windowWidth > MD_BREAKPOINT;
		fontSize = isDesktop ? DESKTOP_FONT_SIZE : MOBILE_FONT_SIZE;

		const timer = setTimeout(() => {
			fontSize = '0rem';
		}, SHRINK_ANIMATION_DELAY);

		const headerEl = document.getElementById('header');

		const observer = new IntersectionObserver(
			([{ intersectionRatio }]) => {
				headerVisible = intersectionRatio === 1;
			},
			{ threshold: [1] }
		);

		observer.observe(headerEl);

		return () => clearTimeout(timer);
	});

	const scrollToPage = (hash: 'candidates' | 'companies' | 'join') => {
		const el = document.getElementById(hash);

		if (!el) return;

		el.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<title>nnmbl</title>
</svelte:head>

<section class="md:snap-y md:snap-mandatory scroll-auto h-screen overflow-auto	">
	<div class="hero bg-neutral-content snap-start lg:snap-center relative" id="main">
		<div class="hero-content min-h-screen flex flex-row text-left text-neutral">
			<div>
				<div class="max-w-md md:max-w-xl space-y-4">
					<h1 class="text-4xl md:text-5xl lowercase">
						<div class="h-12">
							<span class="font-bold text-primary">N</span><span
								class="letters"
								style="font-size: {fontSize};">ot</span
							><span class="letters" style="font-size: {fontSize}; height: {windowWidth};"
								>&nbsp</span
							><span class="font-bold text-primary">N</span><span
								class="letters"
								style="font-size: {fontSize};">ow,</span
							><span class="letters" style="font-size: {fontSize};">&nbsp</span><span
								class="font-bold text-primary ">M</span
							><span class="letters" style="font-size: {fontSize};">ay</span><span
								class="font-bold text-primary">b</span
							><span class="letters" style="font-size: {fontSize};">e</span><span
								class="letters"
								style="font-size: {fontSize};">&nbsp</span
							><span class="font-bold text-primary">L</span><span
								class="letters"
								style="font-size: {fontSize};">ater</span
							>
						</div>
					</h1>
					<h1 class="text-4xl md:text-5xl font-bold text-secondary pb-4">
						recruiting emails only when you want them
					</h1>
					<!--
					<p class="flex-1 md:text-lg">
						Sourcing software lets companies reach more candidates than ever before, but growing
						companies still say recruiting is their number one pain point. At its core, recruiting
						is a matching problem, not a numbers game.
					</p>
					<p class="flex-1 md:text-lg">
						The modern recruiting stack fails to address a key element:<br /><i
							>if the timing is right for the candidate</i
						>.
					</p>
					-->
					<p class="flex-1 mb-2 md:text-lg">
						not now, maybe later — <strong class="font-black text-primary">nnmbl</strong> — is an email
						plug-in and recruiting platform that manages timing for candidates and companies.
					</p>
				</div>
				<div class="max-w-md md:max-w-xl text-left mt-10">
					<p class="text-sm md:text-base">
						Be in touch.
						<span>
							Be <strong class="font-black text-primary">nnmbl</strong>.
						</span>
					</p>
					<JoinWaitlist />
				</div>
				<div class="max-w-md md:max-w-xl text-left mt-4 text-sm md:text-base">
					Want to know how it works? Learn more about
					<a class="link link-primary" href="#candidates">candidates</a> or
					<a class="link link-secondary" href="#companies">companies</a>.
				</div>
			</div>
		</div>
		{#if isDesktop}
			<button
				id="scroll-next-landing"
				on:click={() => scrollToPage('candidates')}
				class="absolute {headerVisible
					? 'bottom-32'
					: 'bottom-0'} animate-bounce bg-slate-800 p-1 md:p-2 w-6 w-6 md:w-10 md:h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full"
			>
				<svg
					class="w-4 h-4 md:w-6 md:h-6 text-accent"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</button>
		{/if}
	</div>

	<!--For candidates -->
	<!-- try use snap scroll for each section -->
	<div class="hero bg-base-content snap-start lg:snap-center relative" id="candidates">
		<div
			class="hero-content min-h-screen flex flex-col-reverse text-left lg:flex-row-reverse lg:space-x-4 mb-4 lg:mb-0"
		>
			<div class="">
				<div class="md:max-w-xl md:mb-8 mb-12">
					<h3 class="text-4xl md:text-5xl text-left text-accent py-8">Candidates</h3>
					<p class="text-base-100">
						As a candidate, your inbox has become inundated by emails. If you are actively looking
						for a new role, this is fantastic. However, 99% of the time, you are not. <span
							class="font-bold text-primary">nnmbl</span
						> manages your inbound opportunities when you aren't looking and provides a central, organized
						location for them when you are.
					</p>
				</div>
				<ul
					class="max-w-xl lg:max-w-full grid grid-rows-4 grid-cols-1 gap-x-0 gap-y-4 lg:grid-rows-1 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-0 text-base-100"
				>
					<li class="rounded px-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={replyAll} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Reply</span>
						</h5>
						<p>
							Automatically respond to companies to let them know the timing isn't right, but you'll
							reach out in the future.
						</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={bellSlash} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Eliminate</span>
						</h5>
						<p>
							Keep you inbox distractions free. All inbound recruiting emails are archived and
							organized for future access.
						</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={sitemap} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Organize</span>
						</h5>
						<p>
							All inbound opportunities are organized by company and role for you to explore once
							you are ready for something new.
						</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={volumeUp} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Notify</span>
						</h5>
						<p>Switch your status to active to notify companies you are interested in.</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={greaterOrEqual} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Compare</span>
						</h5>
						<p>
							Start the interview process with your top choice companies at the same time to compare
							the process, people, and offers apples-to-apples.
						</p>
					</li>
				</ul>
			</div>
		</div>
		{#if isDesktop}
			<button
				id="scroll-next-candidates"
				on:click={() => scrollToPage('companies')}
				class="absolute {headerVisible
					? 'bottom-32'
					: 'bottom-0'} animate-bounce bg-white p-1 md:p-2 w-6 w-6 md:w-10 md:h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full"
			>
				<svg
					class="w-4 h-4 md:w-6 md:h-6 text-secondary"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</button>
		{/if}
	</div>

	<!--For companies -->
	<div class="hero bg-neutral-content snap-start lg:snap-center relative" id="companies">
		<div
			class="hero-content min-h-screen flex flex-col-reverse text-left text-neutral lg:flex-row lg:space-x-4 mb-4 lg:mb-0"
		>
			<div class="">
				<div class="md:max-w-xl md:mb-8 mb-12">
					<h3 class="text-4xl md:text-5xl text-left text-secondary py-8">Companies</h3>
					<p class="text-neutral">
						As a company, you spend countless hours sourcing and reaching out to qualified
						candidates, but if you reach out at the wrong time when the candidate isn't looking,
						you've just wasted time and energy.<br />
						<span class="font-bold text-primary">nnmbl</span> integrates with your existing recruiting
						tools to automatically re-engage qualified candidates once they are ready for a new opportunity.
					</p>
				</div>
				<ul
					class="max-w-xl lg:max-w-full grid grid-rows-4 grid-cols-1 gap-x-0 gap-y-4 lg:grid-rows-1 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-0 text-neutral"
				>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-center text-secondary py-2">
							<div class="mr-2">
								<Icon data={smileO} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Engage</span>
						</h5>
						<p>Automatically re-engage candidates the moment they are actively looking.</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-center text-secondary py-2">
							<div class="mr-2">
								<Icon data={searchPlus} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Discover</span>
						</h5>
						<p>
							Discover similar candidates to the ones you've already reached out to that are ready
							for a new opportunity.
						</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={star} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Maximize</span>
						</h5>
						<p>
							Make the most out of the time you spend sourcing and don't lose great candidates if
							the timing isn't right.
						</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={hourglass1} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Focus</span>
						</h5>
						<p>Save time by not worrying about what canddidates to follow up with when.</p>
					</li>
					<li class="px-2 lg:p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={recycle} scale={ICON_SIZE} />
							</div>
							<span class="text-lg">Integrate</span>
						</h5>
						<p>Effortlessly integrate timing into your existing recruiting stack.</p>
					</li>
				</ul>
			</div>
		</div>
		{#if isDesktop}
			<button
				id="scroll-next-companies"
				on:click={() => scrollToPage('join')}
				class="absolute {headerVisible
					? 'bottom-32'
					: 'bottom-0'} animate-bounce bg-white p-1 md:p-2 w-6 w-6 md:w-10 md:h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full"
			>
				<svg
					class="w-4 h-4 md:w-6 md:h-6 text-primary"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</button>
		{/if}
	</div>

	<!--Be nnmbl -->
	<div class="hero bg-base-content pt-4 lg:pt-0 pb-8 snap-start lg:snap-center" id="join">
		<div class="hero-content min-h-screen flex flex-col text-base-100">
			<div class="w-full space-y-6 text-left">
				<p class="text-3xl md:text-4xl">Be in touch.</p>
				<p class="text-3xl md:text-4xl">
					Be <strong class="font-black text-primary">nnmbl</strong>.
				</p>
				<JoinWaitlist />
			</div>
		</div>
	</div>
	<Footer />
</section>

<style>
	.letters {
		transition: font-size 7.5s;
	}
</style>
