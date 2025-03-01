<script lang="ts">
	import type {
		GlazeWmOutput,
		NetworkOutput,
		BatteryOutput,
		WeatherOutput,
		DateOutput,
		CpuOutput,
		MemoryOutput
	} from 'zebar';

	type RightGroupProps = {
		glazewm: GlazeWmOutput;
		network: NetworkOutput;
		battery: BatteryOutput;
		weather: WeatherOutput;
		date: DateOutput;
		cpu: CpuOutput;
		memory: MemoryOutput;
	};

	let { glazewm, network, weather, battery, date, cpu, memory }: RightGroupProps = $props();
	let battery_symbols = '󰂎󰁺󰁻󰁼󰁽󰁾󰁿󰂀󰂁󰂂󰁹';

	let weather_symbols: { [id: string]: string } = {
		clear: '',
		cloudy: '',
		light_rain: '󰸊',
		heavy_rain: '󰖌',
		thunder: '󱐋',
		snow: '*'
	};
	function get_weather_split(status: string): [string, string] {
		const arrStatus = status.split('_');
		const day_night = arrStatus.pop()!;
		const weather = arrStatus.join('_');
		return [weather, day_night];
	}
</script>

<div
	class="flex select-none flex-row items-center gap-3 *:flex *:select-none *:flex-row *:whitespace-pre"
>
	{#if cpu && cpu.usage > 90}
		<div class="text-zb-cpu-high">CPU</div>
	{/if}
	{#if memory && memory.usage > 90}
		<div class="text-zb-memory-high">MEM</div>
	{/if}
	{#if network}
		<div>
			{#if network.defaultInterface?.type === 'ethernet'}
				<div class="select-none">󰈁</div>
			{:else if network.defaultInterface?.type === 'wifi'}
				󰘊
				<div class="select-text">{network.defaultGateway?.ssid}</div>
			{:else}
				X
			{/if}
		</div>
	{/if}
	{#if weather}
		{@const weather_split = get_weather_split(weather.status)}
		<div>
			{weather_symbols[weather_split[0]]}
			<div class="select-text">{Math.round(weather.celsiusTemp)}°</div>
		</div>
	{/if}
	{#if battery}
		{@const index = Math.round(battery.chargePercent / 10) * 2}
		<div>
			{#if battery.isCharging}󰚥&nbsp;{/if}{battery_symbols.slice(index, index + 2)}
			<div class="select-text">{Math.round(battery.chargePercent)}%</div>
		</div>
	{/if}
	{#if date}
		<div>
			󱦟 <div class="select-text">{date?.formatted}</div>
		</div>
	{/if}
</div>
