<script lang="ts">
	type ButtonProps = {
		iconClass: string;
		label?: string;
		callback?: () => void;
		class: string;
	};
	let { iconClass, label, callback, ...rest }: ButtonProps = $props();
</script>

<button
	class="flex bg-zb-ws-base text-zb-ws-base-text hover:bg-zb-ws-hover hover:text-zb-ws-hover-text select-none {rest.class}"
	onclick={callback}
	aria-label={label}
>
	{label}
</button>
