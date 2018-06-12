import Vue from 'vue'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//const Home = { template: '<div>Home</div>'}
//const NotFound = { template: '<div>Not Found</div>'}

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/login', component: Login },
		{ path: '*', component: NotFound }
	]
})

export default router