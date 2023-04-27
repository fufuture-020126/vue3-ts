import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store  from './store'
import AntD from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
const options = {
    namespace: 'vuejs_', // key前缀
    name: 'ls', // 使用方法 Vue.ls或this.$ls
    storage: 'session' // 存储位置 session、local、memory
}

app.use(router);
app.use(store);
app.use(AntD);

app.mount('#app')
