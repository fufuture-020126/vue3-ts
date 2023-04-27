<template>
    <div id="login">
        <div class="head"></div>
        <div class="form">
            <a-form :model="loginForm" @submit="doLogin" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }"
                autocomplete="true">
                <a-form-item label="账号" :rules="[{ required: true, message: '请输入账号' }]">
                    <a-input v-model="loginForm.account" />
                </a-form-item>
                <a-form-item label="密码" :rules="[{ required: true, message: '请输入密码' }]">
                    <a-input-password v-model="loginForm.password" />
                </a-form-item>
                <!-- <a-form-item label="验证码" :rules="[{ required: true, message: '请输入验证码' }]">
                    <a-input v-model="loginForm.captcha" />
                </a-form-item> -->
                <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
                    <a-checkbox v-model="loginForm.remember">记住账号</a-checkbox>
                </a-form-item>
                <a-form-item :wrapper-col="{ offset: 4 }">
                    <a-button type="primary" html-type="submit">登录</a-button>
                    <a-button type="primary" ghost @click="doRegister">注册</a-button>
                </a-form-item>  
            </a-form>
        </div>
        <div class="bottom">
            <span>Copyright© 2023 create by FUTURE</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';
import { getUserStore } from '@/store';
import '@/assets/scss/loginForm.scss'
interface form {
    account: string;
    password: string;
    captcha: string;
    remember: boolean;
};
const loginForm = ref<form>({
    account: "",
    password: "",
    captcha: "",
    remember: false,
});
const userStore = getUserStore();
const doLogin = () => {
    userStore.userLogin();
}
const doRegister = () => {
    router.push('/register');
}


</script>

<style scoped lang="scss">
#login {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .head {
        flex: 3;
        font-size: 24px;
    }

    .form {
        flex: 6;
        width: 50%;
        min-width: 500px;
        margin: auto;
        padding-top: 10vh;
        padding-left: 50vh;

        h1 {
            font-size: 16px;
        }
    }

    .bottom {
        flex: 1;
        width: 100%;
        font-size: 2.5vh;
        
        span {
            display: block;
            position: absolute;
            right: 5vh;
            bottom: 2vh;
            font-size: 2vh;
        }
    }
}
</style>