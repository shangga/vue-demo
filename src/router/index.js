import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require(['../views/tabContent.vue'], resolve)
      },
      children: [
        {
          path: 'pageOne',
          name: 'pageOne',
          component (resolve) {
            require(['../views/pageOne.vue'], resolve)
          }
        }
      ]
    }
  ]
})
