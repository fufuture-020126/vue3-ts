import { createPinia } from 'pinia';
import piniaPluginpersistedstate from 'pinia-plugin-persist'; // 导入持久化存储插件

const store = createPinia();
store.use(piniaPluginpersistedstate);

export * from './module/user';
export * from './module/global';
export default store;