import store from '@/store';
import { defineStore } from 'pinia';
import router from '@/router';
import { nextTick } from 'process';

const userStore = defineStore ('userStore', {
    state: ()=> ({
        isLogin: false,
    }),
    getters: {
        getLoginState: (state) => state.isLogin,
    },
    actions: {
        async userLogin() {
            this.isLogin = true;
            router.push('/home');
        },
        async userRegister() {
            router.push('/login');
        },
        async userLogout() {
            this.isLogin = false;
            router.push('/login');
            nextTick(()=> {
                sessionStorage.clear();
            })
        }
    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'userStore', // 存储名称
            storage: sessionStorage, // 存储位置 session、local、cookie。
        }]
    }
})

export function getUserStore() {
    return userStore(store);
};