<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { github } from 'svelte-awesome/icons';

	const ICON_SIZE = 2;
</script>

<header id="header">
	<nav class="navbar bg-base text-base-content">
		<div class="flex-1 flex px-2  md:flex ">
			<a href="#main" class="md:text-lg font-bold text-primary hover:text-primary-focus">nnmbl</a>
		</div>
		<div
			class="flex text-sm md:text-base md:flex flex-none px-2 space-x-2 md:space-x-4 font-semibold "
		>
			<a class="hover:text-primary-focus" href="#candidates">Candidates</a>
			<a class="hover:text-primary-focus" href="#companies">Companies</a>
			<a class="hover:text-primary-focus" href="#join">Join</a>
			<a
				class="hover:text-primary-focus"
				rel="external"
				href="https://github.com/devstein/nnmbl"
				target="_blank"
			>
				<Icon data={github} scale={ICON_SIZE} />
			</a>
			<a
				class="hover:text-primary-focus"
				href="https://www.producthunt.com/posts/nnmbl?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-nnmbl"
				rel="external"
				target="_blank"
			>
				<svg width="28" height="28" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"
					><g fill="none" fill-rule="evenodd"
						><path
							d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
							fill="#DA552F"
						/><path
							d="M22.667 20H17v-6h5.667a3 3 0 010 6m0-10H13v20h4v-6h5.667a7 7 0 100-14"
							fill="#FFF"
						/></g
					></svg
				>
			</a>
		</div>
	</nav>
</header>
