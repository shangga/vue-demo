import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component (resolve) {
        require(['../views/tabContent.vue'], resolve)
      }
    }
  ]
})
