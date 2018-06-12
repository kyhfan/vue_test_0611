import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// styles
import './assets/css/common.css'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
	el: '#app',
	render: h => h(App),

	// 라우터 객체를 넘겨준다
	router
})