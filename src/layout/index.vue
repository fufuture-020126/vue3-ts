<template>
    <div>
        <a-config-provider>
            <a-layout style="height: 100%;">
                <a-layout-sider class="layout-sider">
                    <Aside></Aside>
                </a-layout-sider>
                <a-layout>
                    <a-layout-header>
                        <HeaderLayout></HeaderLayout>
                    </a-layout-header>
                    <a-layout-content>
                        <router-view></router-view>
                    </a-layout-content>
                    <a-layout-footer>
                        <FooterLayout></FooterLayout>
                    </a-layout-footer>
                </a-layout>

            </a-layout>
        </a-config-provider>
    </div>
</template>

<script setup lang="ts">
import { getUserStore, getGlobalStore } from '@/store';
import Aside from './components/aside.vue';
import FooterLayout from './components/footer.vue';
import HeaderLayout from './components/header.vue';


const userStore = getUserStore();
const logout = () => {
    userStore.userLogout();
}
const useGlobalStore = getGlobalStore();
const menuState = useGlobalStore.getMenuOpen;
</script>

<style scoped lang="scss">
.layout-sider {
    background: pink;
    height: 100vh;
}
</style>