/// <reference types="vite/client" />
/// <reference types="vite-svg-loader/index" />

declare module '*.vue' {
    import { DefineComponent } from "vue";
    const component : DefineComponent<{}, {}, any>;
    export default component;
}

declare module "vue-ls" {
    import Storage from 'vue-ls';
    export default Storage;
}