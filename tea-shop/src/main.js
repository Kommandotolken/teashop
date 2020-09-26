import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router: router,
  data: {
    imageSource: './assets/logo.png'
  },
}).$mount('#app')
