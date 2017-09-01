import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/home/goods'
import comment from '@/components/home/comment'
import seller from '@/components/home/seller'
import login from '@/components/login'
import home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: '', component: goods},
        {path: 'home', name: 'goods', component: goods},
        {path: 'home', name: 'comment', component: comment},
        {path: 'home', name: 'seller', component: seller}
      ]
    }
  ]
})
