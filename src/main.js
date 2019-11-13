import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import iviewArea from 'iview-area'
import i18n from '@/locale'
import config from '@/config'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false;

if(process.env.NODE_ENV !== 'production') require("@/mock");

Vue.use(iView,{
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

Vue.prototype.$config = config;

Vue.use(iviewArea);

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
