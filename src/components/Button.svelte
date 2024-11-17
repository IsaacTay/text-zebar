<script lang="ts">
	type ButtonProps = {
		label?: string;
		callback?: () => void;
		class: string;
	};
	let { label, callback, ...rest }: ButtonProps = $props();
</script>

<button
	class="flex select-none bg-zb-ws-base text-zb-ws-base-text hover:bg-zb-ws-hover hover:text-zb-ws-hover-text {rest.class}"
	onclick={callback}
	aria-label={label}
>
	{label}
</button>
