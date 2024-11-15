<script lang="ts">
	import type {
		GlazeWmOutput,
		NetworkOutput,
		BatteryOutput,
		WeatherOutput,
		DateOutput
	} from 'zebar';
	//import NowPlaying from "./NowPlaying.svelte";

	type RightGroupProps = {
		glazewm: GlazeWmOutput;
		network: NetworkOutput;
		battery: BatteryOutput;
		weather: WeatherOutput;
		date: DateOutput;
	};

	let { date, glazewm, network, weather, battery }: RightGroupProps = $props();
	let battery_symbols = '󰂎󰁺󰁻󰁼󰁽󰁾󰁿󰂀󰂁󰂂󰁹';
	let wifi_symbols = '󰤯󰤟󰤢󰤥󰤨';
	let weather_symbols = {
		clear_day: '',
		clear_night: '',
		cloudy_day: '',
		cloudy_night: '',
		light_rain_day: '',
		light_rain_night: '',
		heavy_rain_day: '',
		heavy_rain_night: '',
		snow_day: '',
		snow_night: '',
		thunder_day: '',
		thunder_night: ''
	};
  let clock_symbols = "󱑖󱑋󱑌󱑍󱑎󱑏󱑐󱑑󱑒󱑓󱑔󱑕"
	//<NowPlaying {glazewm} />
</script>

<div class="flex flex-row items-center gap-3">
	<div class="flex flex-row items-center gap-1">
		{#if network?.defaultInterface?.type === 'ethernet'}
			󰈀
		{:else if network?.defaultInterface!.type === 'wifi'}
			{@const index = Math.round(network.defaultGateway!.signalStrength! / 25) * 2}
			{wifi_symbols.slice(index, index + 2)}
			{network.defaultGateway?.ssid}
		{:else}
			󰤮
		{/if}
	</div>
	{#if weather}
		<div>
			{weather_symbols[weather.status]}
			{Math.round(weather.celsiusTemp)}°
		</div>
	{/if}
	{#if battery}
		{@const index = Math.round(battery.chargePercent / 10) * 2}
		<div>
			{#if battery.isCharging}
				󰚥
			{/if}
			{battery_symbols.slice(index, index + 2)}
			{Math.round(battery.chargePercent)}%
		</div>
	{/if}
	{#if date}
    {@const index = +(date.iso.match(/T\d\d:/)[0].slice(1, 3)) % 12 * 2}
    {clock_symbols.slice(index, index+2)}
		{date?.formatted}
	{/if}
</div>
