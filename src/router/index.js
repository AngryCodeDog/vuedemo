import Vue from 'vue'
import Router from 'vue-router'
import usermanage from '@/components/home/usermanage'
import historyrecord from '@/components/home/historyrecord'
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
        {path: '', component: usermanage},
        {path: 'usermanage', name: 'usermanage', component: usermanage},
        {path: 'historyrecord', name: 'historyrecord', component: historyrecord},
        {path: 'seller', name: 'seller', component: seller}
      ]
    }
  ]
})
