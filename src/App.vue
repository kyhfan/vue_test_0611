<template>
  <div id="app">
	<header-component></header-component>
  	<div class="main-container">
		<router-view></router-view>
  	</div>
  </div>
</template>

<script>
	import HeaderComponent from './components/HeaderComponent.vue'

	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			HeaderComponent
		},
		created: function() {
			//			alert('app loaded');
		}
	}
</script>

<!--<style src="./common.css"></style>-->