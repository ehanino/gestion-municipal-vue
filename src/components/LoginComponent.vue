<template>
    <div class="login-container container_to_center">        
        <form @submit.prevent="submitForm" name="login-form" class="login-form" action="" method="post">            
            <div class="header">
                <h1>sGe-Municipal</h1>
                <span>Sistema de Gestión Municipal</span>
            </div>
        
            <div class="content">
                <input @blur="handleBlur" v-model="username" name="username" type="text" class="input username" placeholder="Username" />
                <div class="user-icon"></div>
				<select class="input mt-1" name="select-apps" id="select-apps"></select>
                <input v-model="password" name="password" type="password" class="input mt-1" placeholder="Password" />
                <div class="pass-icon"></div>
            </div>
			
            <div class="footer container_to_center">
                <input type="submit" name="submit" value="Login" class="button" />
                <!-- <input type="button" name="submit" value="Reset" class="register" /> -->
            </div>            
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
	import axios from 'axios';
	import { useAuthStore, useRefreshStore  } from '../store/authStore'
	import { useUsuarioStore  } from '@/store/usuarioStore'
// 
	const authStore = useAuthStore();
	const refreshStore = useRefreshStore();
	const usuarioStore = useUsuarioStore();
	const router = useRouter();

    let username = ref("ehasoft")
    let password = ref("Languis1902")

	const handleBlur = () =>{
		alert("gegege")
	}

	const submitForm = async () => {
		// try {
				const response = await axios.post('http://apps.muniventanilla.gob.pe/gm-usuario/user/api/login/', {
					username: username.value,
					password: password.value
				});
				
				if (response.status){
					const accessToken = response.data.access;
					const refreshToken = response.data.refresh;
					const userId = response.data.user_id;
					const userFullName = response.data.full_name;
					const userEmail = response.data.email;
					console.log(accessToken)
					console.log(refreshToken)
					// console.log(userId)
					console.log(userFullName)
					console.log(userEmail)
					// Guardar accessToken y refreshToken en el almacenamiento local o en el estado de la aplicación
					authStore.setAccessToken(accessToken);
					refreshStore.setRefreshToken(refreshToken);
					
					// Guardar los datos del usuario en el store de usuario
					usuarioStore.setUsuario({
						id: userId,
						fullName: userFullName,
						email: userEmail
					});

					router.push({ name: 'Dashboard' });

				}else {
					alert(response.data.detail)
				}
			// } catch (error) {
				// console.error('Error during login:');
			// }
	};

</script>


<style scope>

@import url(https://fonts.googleapis.com/css?family=Bree+Serif);

/*******************
SELECTION STYLING
*******************/

::selection {
	color: #fff;
	background: #f676b2; /* Safari */
}
::-moz-selection {
	color: #fff;
	background: #f676b2; /* Firefox */
}

/*******************
BODY STYLING
*******************/

* {
	margin: 0;
	padding: 0;
	border: none;
	outline: none;
}

body {
    height: 100vh !important;
	
	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-weight:300;
	text-align: left;
	text-decoration: none;
    /* display: flex; */
	/* height: 500px; */
}

/*******************
LOGIN FORM
*******************/

.login-form {
	width: 300px;
	margin: 0 auto;
	position: relative;
	
	background: #f3f3f3;
	border: 1px solid #fff;
	border-radius: 5px;
	
	box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
}

/*******************
HEADER
*******************/

.login-form .header {
	padding: 40px 30px 30px 30px;
}

.login-form .header h1 {
	font-family: 'Bree Serif', serif;
	font-weight: 300;
	font-size: 28px;
	line-height:34px;
	color: #414848;
	text-shadow: 1px 1px 0 rgba(256,256,256,1.0);
	/* margin-bottom: 5px; */
}
.login-form .header span {
    font-size: 12px;
    line-height: 16px;
    color: #678889;
    text-shadow: 1px 1px 0 rgba(256,256,256,1.0);    
}

.font-medium{
    font-size: 12px;
	line-height: 16px;
	color:red;
	text-shadow: 1px 1px 0 rgba(256,256,256,1.0);
}

/*******************
CONTENT
*******************/

.login-form .content {
	padding: 0 30px 25px 30px;
}

/* Input field */
.login-form .content .input {
	width: 188px;
	padding: 10px 25px;
	
	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
	font-weight: 400;
	font-size: 14px;
	color: #9d9e9e;
	text-shadow: 1px 1px 0 rgba(256,256,256,1.0);
	
	background: #fff;
	border: 1px solid #fff;
	border-radius: 5px;
	
	box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
	-moz-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
	-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,0.50);
}

/* Second input field */
.login-form .content .password, .login-form .content .pass-icon {
	margin-top: 25px;
}

.login-form .content .input:hover {
	background: #dfe9ec;
	color: #414848;
}

.login-form .content .input:focus {
	background: #dfe9ec;
	color: #414848;
	
	box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-moz-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
	-webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.25);
}

.user-icon, .pass-icon {
	width: 46px;
	height: 47px;
	display: block;
	position: absolute;
	left: 0px;
	padding-right: 2px;
	z-index: -1;
	
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-bottomleft: 5px;
	-webkit-border-top-left-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
}

.user-icon {
	top:120px; /* Positioning fix for slide-in, got lazy to think up of simpler method. */
	background: rgba(65,72,72,0.75) url(http://www.demo.amitjakhu.com/login-form/images/user-icon.png) no-repeat center;	
}

.pass-icon {
	top:160px;
	background: rgba(65,72,72,0.75) url(http://www.demo.amitjakhu.com/login-form/images/pass-icon.png) no-repeat center;
}

.content input:focus + div{
	left: -46px;
}

/* Animation */
.input, .user-icon, .pass-icon, .button, .register {
	transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-webkit-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	-ms-transition: all 0.5s ease;
}

.mt-1 {
	margin-top: 10px;
}
/*******************
FOOTER
*******************/

.login-form .footer {
	padding: 25px 30px 40px 30px;
	overflow: auto;
	
	/* background: #d4dedf; */
	/* border-top: 1px solid red; */
	
	/* box-shadow: inset 0 1px 0 rgba(0,0,0,0.15);
	-moz-box-shadow: inset 0 1px 0 rgba(0,0,0,0.15);
	-webkit-box-shadow: inset 0 1px 0 rgba(0,0,0,0.15); */
}

/* Login button */
.login-form .footer .button {
	float:right;
	padding: 11px 25px;
	
	font-family: 'Bree Serif', serif;
	font-weight: 300;
	font-size: 18px;
	color: #fff;
	text-shadow: 0px 1px 0 rgba(0,0,0,0.25);
	
	background: #56c2e1;
	border: 1px solid #46b3d3;
	border-radius: 5px;
	cursor: pointer;
	
	box-shadow: inset 0 0 2px rgba(256,256,256,0.75);
	-moz-box-shadow: inset 0 0 2px rgba(256,256,256,0.75);
	-webkit-box-shadow: inset 0 0 2px rgba(256,256,256,0.75);
}

.login-form .footer .button:hover {
	background: #3f9db8;
	border: 1px solid rgba(256,256,256,0.75);
	
	box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
	-moz-box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
}

.login-form .footer .button:focus {
	position: relative;
	bottom: -1px;
	
	background: #56c2e1;
	
	box-shadow: inset 0 1px 6px rgba(256,256,256,0.75);
	-moz-box-shadow: inset 0 1px 6px rgba(256,256,256,0.75);
	-webkit-box-shadow: inset 0 1px 6px rgba(256,256,256,0.75);
}

/* Register button */
.login-form .footer .register {
	display: block;
	float: right;
	padding: 10px;
	margin-right: 20px;
	
	background: none;
	border: none;
	cursor: pointer;
	
	font-family: 'Bree Serif', serif;
	font-weight: 300;
	font-size: 18px;
	color: #414848;
	text-shadow: 0px 1px 0 rgba(256,256,256,0.5);
}

.login-form .footer .register:hover {
	color: #3f9db8;
}

.login-form .footer .register:focus {
	position: relative;
	bottom: -1px;
}
</style>