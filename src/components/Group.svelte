<script lang="ts">
	import type { Snippet } from 'svelte';
	type Props = {
		children: Snippet;
		class: string;
	};
	let { children, group, ...rest }: Props = $props();
</script>

<div class="h-full w-fit bg-zb-base p-2 pt-3 {rest.class}">
	<div
		class="h-full w-fit rounded-base border border-zb-border bg-zb-base text-zb-border hover:border-zb-border_focused hover:text-zb-border_focused transition-all {rest.class}"
	>
		<div class="absolute z-10 mx-2 -mt-3.5 bg-zb-base px-2">{group}</div>
		<div class="flex h-full w-fit items-center rounded-base bg-zb-base p-2.5 text-zb-text">
			{@render children()}
		</div>
	</div>
</div>
