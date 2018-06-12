<template>
	<header>
		<div class="inner">
			<h1>
				<router-link to="/" class="logo">
					<img src="../assets/vvv_logo.png" :alt="msg" :title="msg">
				</router-link>
			</h1>
			<div class="actions">
				<div class="user-status">
					<router-link v-if="login === false" to="/login">LOGIN</router-link>
					<a v-else href="logout.php">LOGOUT</a>
				</div>
				<div class="search-wrap">
					<button type="button" class="magnet-parent button-search" data-mouse-type="text" data-text="search">
						<span></span>
					</button>
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	export default {
		name: 'header-component',
		data: function() {
			return {
				msg: 'valuable viral video',
				login: false
			}
		}
	}
	//	Vue.component('header-component', {
	//		template : '<div>헤더 입니다.</div>'
	//	})
</script>

<style>
	header {
		height: 150px;
		background: #f2f2f2;
	}
	header .inner {
		max-width: 1202px;
		height: 100%;
		margin: 0 auto;
		position: relative;
		text-align: center;
	}
	header .inner h1 {
		height: 100%;
	}
	header .inner h1 .logo {
		display: inline-block;
		vertical-align: middle;
		width: 151px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	header .actions {
		position: absolute;
		top: 54px;
		right: 17px;
		font-size: 0;
	}
	header .actions > div {
		font-size: 20px;
		vertical-align: middle;
		display: inline-block;
	}
	header .actions .user-status a {
		letter-spacing: 1px;
		font-weight: 700;
	}
	header .actions .search-wrap {
		margin-left: 31px;
	}
	header .actions .search-wrap > button {
		width: 43px;
		height: 43px;
		background: #333333;
		border-radius: 50%;
	}
	header .actions .search-wrap > button > span {
		display: inline-block;
		background: url(../assets/search_obj.png) center no-repeat;
		width: 20px;
		height: 20px;
		background-size: cover;
	}
</style>