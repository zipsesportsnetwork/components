<template>
	<div class="app">
		<ul v-if="events.length">
			<li v-for="event in events" :key="event">
				{{event.type}}: {{event.main_target.name}}
			</li>
		</ul>
		<p v-else>
			Nothing has happened yet!
		</p>
	</div>
</template>

<script>
import createSOSEmitter from '@zipsesports/sos-wrapper';

export default {
	data () {
		return {
			events: [],
		};
	},
	async created () {
		const emitter = await createSOSEmitter();
		emitter.on('game:statfeed_event', event => {
			this.events.push(event);
		});
	},
};
</script>

<style lang="scss">
.app {
	box-sizing: border-box;
	padding: 20px;
	font-size: 1.5rem;
	width: 300;
	height: 800;
	background-color: white;
	font-family: sans-serif;
	overflow: hidden;
	border-radius: 20px;

	ul,
	p {
		margin: 0;
	}
}
</style>
