<template>
    <div id="register">
        <div class="head"></div>
        <div class="form">
            <a-form :model="registerForm" @submit="doRegister" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }"
                autocomplete="true">
                <a-form-item label="账号" :rules="[{ required: true, message: '请输入账号' }]">
                    <a-input v-model="registerForm.name" />
                </a-form-item>
                <a-form-item label="账号" :rules="[{ required: true, message: '请输入账号' }]">
                    <a-input v-model="registerForm.password" />
                </a-form-item>
                <a-form-item label="密码" :rules="[{ required: true, message: '请确认密码' }]">
                    <a-input-password v-model="registerForm.confirm" />
                </a-form-item>
                <!-- <a-form-item label="验证码" :rules="[{ required: true, message: '请输入验证码' }]">
                    <a-input v-model="registerForm.captcha" />
                </a-form-item> -->
                <a-form-item :wrapper-col="{ offset: 4 }">
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
import { getUserStore } from '@/store';
import '@/assets/scss/loginForm.scss'
interface form {
    name: string;
    password: string;
    confirm: string;
    captcha: string;
};
const registerForm = ref<form>({
    name: "",
    password: "",
    confirm: "",
    captcha: "",
});
const userStore = getUserStore();
const doRegister = () => {
    userStore.userRegister();
}


</script>

<style scoped lang="scss">
#register {
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