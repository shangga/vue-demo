// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import echarts from 'echarts'

import './components'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(echarts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
  template: '<App/>',
  components: { App }
})
