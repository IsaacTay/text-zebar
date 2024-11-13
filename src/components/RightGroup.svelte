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
	//<NowPlaying {glazewm} />
</script>

<div class="flex flex-row items-center gap-3">
	<div class="flex flex-row items-center gap-1">
		{#if network?.defaultInterface?.type === 'ethernet'}
			<i class="nf nf-md-ethernet_cable"></i>
		{:else if network?.defaultInterface!.type === 'wifi'}
			{#if network.defaultGateway!.signalStrength! >= 75}
				<i class="nf nf-md-wifi_strength_4"></i>
			{:else if network.defaultGateway!.signalStrength! >= 50}
				<i class="nf nf-md-wifi_strength_2"></i>
			{:else if network.defaultGateway!.signalStrength! >= 25}
				<i class="nf nf-md-wifi_strength_1"></i>
			{:else}
				<i class="nf nf-md-wifi_strength_outline"></i>
			{/if}
			{network.defaultGateway?.ssid}
		{:else}
			<i class="nf nf-md-wifi_strength_off_outline"></i>
		{/if}
	</div>
	{#if weather}
		<div>
			{#if weather.status === 'clear_day'}
				<i class="nf nf-weather-day_sunny"></i>
			{:else if weather.status === 'clear_night'}
				<i class="nf nf-weather-night_clear"></i>
			{:else if weather.status === 'cloudy_day'}
				<i class="nf nf-weather-day_cloudy"></i>
			{:else if weather.status === 'cloudy_night'}
				<i class="nf nf-weather-night_alt_cloudy"></i>
			{:else if weather.status === 'light_rain_day'}
				<i class="nf nf-weather-day_sprinkle"></i>
			{:else if weather.status === 'light_rain_night'}
				<i class="nf nf-weather-night_alt_sprinkle"></i>
			{:else if weather.status === 'heavy_rain_day'}
				<i class="nf nf-weather-day_rain"></i>
			{:else if weather.status === 'heavy_rain_night'}
				<i class="nf nf-weather-night_alt_rain"></i>
			{:else if weather.status === 'snow_day'}
				<i class="nf nf-weather-day_snow"></i>
			{:else if weather.status === 'snow_night'}
				<i class="nf nf-weather-night_alt_snow"></i>
			{:else if weather.status === 'thunder_day'}
				<i class="nf nf-weather-day_lightning"></i>
			{:else if weather.status === 'thunder_night'}
				<i class="nf nf-weather-night_alt_lightning"></i>
			{/if}
			{Math.round(weather.celsiusTemp)}°
		</div>
	{/if}
	{#if battery}
		<div>
			{#if battery.chargePercent > 90}
				<i class="nf nf-fa-battery_4"></i>
			{:else if battery.chargePercent > 70}
				<i class="nf nf-fa-battery_3"></i>
			{:else if battery.chargePercent > 40}
				<i class="nf nf-fa-battery_2"></i>
			{:else if battery.chargePercent > 20}
				<i class="nf nf-fa-battery_1"></i>
			{:else}
				<i class="nf nf-fa-battery_0"></i>
			{/if}
			{Math.round(battery.chargePercent)}%
		</div>
	{/if}
	<div>
		<i class="nf nf-md-clock"></i>
		{date?.formatted}
	</div>
</div>
