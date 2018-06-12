<template>
	<div class="content login">
		<div class="inner">
			<div class="title">
				<h3>
					LOGIN
				</h3>
				<p>WELCOME TO VVV</p>
			</div>
			<div class="button-wrap">
				<button type="button" @click="login('fb')" class="btn-login fb" id="fblogin">페이스북 로그인</button>
				<button type="button" @click="login('kt')" class="btn-login kt">카카오톡 로그인</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		methods: {
			login: function(type) {
				alert(type);
			}
		}
	}
	
</script>


<style>
	/* login */
	.content.login {
		height: calc(100vh - 296px);
	}
	.content.login > .inner {
		padding: 155px 0 0;
	}
	.content.login .title {
		text-align: center;
	}
	.content.login .title h3 {
		font-size: 35px;
		font-weight: 600;
		padding-bottom: 47px;
		position: relative;
	}
	.content.login .title h3:after {
		content: "";
		position: absolute;
		bottom: 13px;
		left: 50%;
		width: 18px;
		height: 2px;
		margin-left: -9px;
		background: #000000;
	}
	.content.login .title p {
		font-size: 21px;
	}
	.content.login .button-wrap {
		width: 410px;
		margin: 91px auto 0;
	}
	.content.login .button-wrap button {
		display: block;
		width: 100%;
		height: 77px;
		margin-bottom: 15px;
		color: #ffffff;
		font-size: 24px;
		text-align: right;
		padding-right: 101px;
	}
	.content.login .button-wrap button:last-child {
		margin-bottom: 0;
	}
	.content.login .button-wrap button.fb {
		background: url(../assets/login_fb.png) 107px 50% no-repeat #333333;
		background-size: 18px auto;
	}
	.content.login .button-wrap button.kt {
		background: url(../assets/login_kt.png) 98px 50% no-repeat #333333;
		background-size: 35px auto;
	}
	/* login */</style>