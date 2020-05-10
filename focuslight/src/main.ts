import Vue from 'vue';
import './assets/style/basic.scss';
import {CowTransferWallpaper} from './utils/cowtransfer-wallpaper-api';
import App from './App';

const DATA = window.location.search.match(/(?:\?|&)origin=([^&]+)/);
let targetOrigin = null;
if (DATA) {
  targetOrigin = DATA[1];
}

Vue.prototype.$CowTransferWallpaper = new CowTransferWallpaper({
  targetOrigin: targetOrigin || 'http://localhost',
  dropTarget: window
});

new Vue({
  render: createElement => createElement(App)
}).$mount('#app');

// 扩展声明

declare module "vue/types/vue" {
  interface Vue {
    $CowTransferWallpaper: CowTransferWallpaper;
  }
}