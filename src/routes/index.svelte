<script>
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
		smileO
	} from 'svelte-awesome/icons';

	import greaterOrEqual from '$lib/greaterOrEqual';

	import JoinWaitlist from '$lib/JoinWaitlist.svelte';

	const MD_BREAKPOINT = 768;
	const SHRINK_ANIMATION_DELAY = 2000;

	export let windowWidth;
	export let fontSize;

	onMount(() => {
		fontSize = windowWidth > MD_BREAKPOINT ? '2.25rem' : '1.75rem';

		const timer = setTimeout(() => {
			fontSize = '0rem';
		}, SHRINK_ANIMATION_DELAY);

		return () => clearTimeout(timer);
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<svelte:head>
	<title>nnmbl</title>
</svelte:head>

<section class="md:snap-y md:snap-mandatory scroll-auto h-screen overflow-auto	">
	<div class="hero bg-neutral-content snap-start lg:snap-center" id="main">
		<div class="hero-content min-h-screen flex flex-row text-center text-neutral">
			<div>
				<div class="max-w-sm md:max-w-lg space-y-6">
					<h1 class="text-4xl md:text-5xl font-bold text-secondary pb-4">intent matters.</h1>
					<h1 class="text-3xl md:text-4xl lowercase">
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
						gives intent back to candidates and companies
					</h1>
					<p class="flex-1 mb-2 md:text-lg">
						Widespread use of sourcing software has let companies reach more candidates than ever
						before, but growing companies still say recruiting is their number one pain point. At
						its core, recruiting is a matching problem, not a numbers game, and the modern
						recruiting stack fails to address a key element:<br /><i>intent</i>.
					</p>
					<p class="flex-1 mb-2 md:text-lg">
						not now, maybe later — <strong class="font-black text-primary">nnmbl</strong> — takes care
						of intent for you.
					</p>
				</div>
				<div class="max-w-sm md:max-w-lg text-center mt-12">
					<p class="text-sm md:text-base">
						Be in touch.
						<span>
							Be <strong class="font-black text-primary">nnmbl</strong>.
						</span>
					</p>
					<JoinWaitlist />
				</div>
			</div>
		</div>
	</div>

	<!--For candidates -->
	<!-- try use snap scroll for each section -->
	<div class="hero bg-base-content snap-start lg:snap-center" id="candidates">
		<div
			class="hero-content min-h-screen flex flex-col-reverse text-left lg:flex-row-reverse lg:space-x-4"
		>
			<div class="">
				<div class="md:max-w-xl mb-5">
					<h3 class="text-4xl md:text-5xl text-left text-accent py-8">Candidates</h3>
					<!-- <ul class="flex flex-col text-base-100 lg:flex-row lg:space-x-4"> -->
					<p class="text-base-100">
						As a candidate, your inbox has become inundated by emails. If you are actively looking
						for a new role, this is fantastic. However, 99% of the time, you are not. <span
							class="font-bold text-primary">nnbml</span
						> manages your inbound opportunities when you aren't looking and provides a central, organized
						location for them when you are.
					</p>
				</div>
				<ul
					class="max-w-xl lg:max-w-full grid grid-rows-4 grid-cols-1 gap-x-0 gap-y-4 lg:grid-rows-1 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-0 text-base-100"
				>
					<li class="rounded p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={replyAll} scale={2} />
							</div>
							<span class="text-lg">Reply</span>
						</h5>
						<p>
							Automatically respond to companies to let them know the timing isn't right, but you'll
							reach out in the future.
						</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={bellSlash} scale={2} />
							</div>
							<span class="text-lg">Eliminate</span>
						</h5>
						<p>
							Keep you inbox distractions free. All inbound recruiting emails are archived and
							organized for future access.
						</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={sitemap} scale={2} />
							</div>
							<span class="text-lg">Organize</span>
						</h5>
						<p>
							All inbound opportunities are organized by company and role for you to explore once
							you are ready for something new.
						</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={volumeUp} scale={2} />
							</div>
							<span class="text-lg">Notify</span>
						</h5>
						<p>Switch your status to active to notify companies your interested in.</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-accent text-center py-2">
							<div class="mr-2">
								<Icon data={greaterOrEqual} scale={2} />
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
	</div>

	<!--For companies -->
	<div class="hero bg-neutral-content snap-start lg:snap-center" id="companies">
		<div
			class="hero-content min-h-screen flex flex-col-reverse text-left text-neutral lg:flex-row lg:space-x-4"
		>
			<div class="">
				<div class="max-w-xl mb-5">
					<h3 class="text-4xl md:text-5xl text-left text-secondary py-8">Companies</h3>
					<p class="text-neutral">
						As a company, you spend countless hours sourcing and reaching out to qualified
						candidates for open roles, but if you reach out at the wrong time when the candidate
						isn't looking, you've just wasted time and energy.<br />
						<span class="font-bold text-primary">nnbml</span> integrates with your existing recruiting
						tools to automatically re-engage qualified candidates once they are ready for a new opportunity.
					</p>
				</div>
				<!-- <ul class="flex flex-col text-base-100 lg:flex-row lg:space-x-4"> -->
				<ul
					class="max-w-xl lg:max-w-full grid grid-rows-4 grid-cols-1 gap-x-0 gap-y-4 lg:grid-rows-1 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-0 text-neutral"
				>
					<li class="rounded p-2">
						<h5 class="flex align-items text-center text-secondary py-2">
							<div class="mr-2">
								<Icon data={smileO} scale={2} />
							</div>
							<span class="text-lg">Engage</span>
						</h5>
						<p>Automatically re-engage candidates the moment they are actively looking.</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-center text-secondary py-2">
							<div class="mr-2">
								<Icon data={searchPlus} scale={2} />
							</div>
							<span class="text-lg">Discover</span>
						</h5>
						<p>
							Discover similar candidates to the ones you've already reached out to that are ready
							for a new opportunity.
						</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={star} scale={2} />
							</div>
							<span class="text-lg">Maximize</span>
						</h5>
						<p>
							Make the most out of the time you spend sourcing and don't lose great candidates if
							the timing isn't right.
						</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={hourglass1} scale={2} />
							</div>
							<span class="text-lg">Focus</span>
						</h5>
						<p>Save time by not worrying about what canddidates to follow up with when.</p>
					</li>
					<li class="rounded p-2">
						<h5 class="flex align-items text-center py-2 text-secondary">
							<div class="mr-2">
								<Icon data={recycle} scale={2} />
							</div>
							<span class="text-lg">Integrate</span>
						</h5>
						<p>Effortlessly integrate timing into your existing recruiting stack.</p>
					</li>
				</ul>
			</div>
		</div>
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
</section>

<style>
	.letters {
		transition: font-size 7.5s;
	}
</style>
