<script lang="ts">
	import { onMount } from 'svelte';
	import * as zebar from 'zebar';
	import type {
		GlazeWmOutput,
		DateOutput,
		NetworkOutput,
		WeatherOutput,
		BatteryOutput
	} from 'zebar';

	import '../app.css';
	import Group from '../components/Group.svelte';
	import RightGroup from '../components/RightGroup.svelte';
	import Workspaces from '../components/Workspaces.svelte';

	let glazewm = $state<GlazeWmOutput | null>();
	let network = $state<NetworkOutput | null>();
	let battery = $state<BatteryOutput | null>();
	let weather = $state<WeatherOutput | null>();
	let date = $state<DateOutput | null>();

	onMount(() => {
		const providers = zebar.createProviderGroup({
			glazewm: { type: 'glazewm' },
			network: { type: 'network' },
			weather: { type: 'weather' },
			battery: { type: 'battery' },
			date: { type: 'date', formatting: 'yyyy.MM.dd EEE HH:mm:ss' }
		});

		providers.onOutput(() => {
			glazewm = providers.outputMap.glazewm;
			network = providers.outputMap.network;
			weather = providers.outputMap.weather;
			battery = providers.outputMap.battery;
			date = providers.outputMap.date;
		});
	});
</script>

<div
	class="zb-height-bar mx-zbx my-zby grid grid-cols-[auto_1fr_auto] items-center bg-transparent font-mono font-base text-zb-text"
>
	<Group group="workspaces" class="col-auto justify-self-start">
		<Workspaces glazewm={glazewm!} />
	</Group>
	{#if glazewm}
		<Group group="focus" class="col-auto w-full justify-self-center">
			<div>
				{glazewm.focusedContainer.processName}
			</div>
		</Group>
	{:else}
		<div></div>
	{/if}
	<Group group="info" class="justify-self-end">
		<RightGroup
			glazewm={glazewm!}
			network={network!}
			weather={weather!}
			battery={battery!}
			date={date!}
		/>
	</Group>
</div>
