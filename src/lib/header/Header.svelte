<script>
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { github } from 'svelte-awesome/icons';

	const ICON_SIZE = 2;
</script>

<header>
	<nav class="navbar bg-base text-base-content">
		<div class="flex-1 flex px-2  md:flex ">
			<a href="#main" class="md:text-lg font-bold text-primary hover:text-primary-focus">nnmbl</a>
		</div>
		<div class="flex text-sm md:text-base md:flex flex-none px-2 space-x-4 font-semibold ">
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
		</div>
	</nav>
</header>
