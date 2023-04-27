import store from '@/store';
import { defineStore } from 'pinia';

const globalStore = defineStore ('globalStore', {
    state: ()=> ({
        menuOpen: true,
    }),
    getters: {
        getMenuOpen: (state)=> state.menuOpen,
    },
    actions: {
    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'globalStore',
            storage: sessionStorage,
        }]
    }
})

export function getGlobalStore() {
    return globalStore(store);
}