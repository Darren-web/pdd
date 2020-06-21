import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home/Home'
import Recommend from './../pages/Recommend/Recommend'
import Chat from './../pages/Chat/Chat'
import Me from './../pages/Me/Me'
import Search from './../pages/Search/Search'
//home二级路由
import Hot from '@/pages/Home/children/Hot/Hot'
import Box from '@/pages/Home/children/Box'
import Dress from '@/pages/Home/children/Dress'
import Ele from '@/pages/Home/children/Ele'
import Food from '@/pages/Home/children/Food'
import General from '@/pages/Home/children/General'
import Man from '@/pages/Home/children/Man'
import Mbaby from '@/pages/Home/children/Mbaby'
import Shirt from '@/pages/Home/children/Shirt'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'hot',
          name: 'Hot',
          component: Hot
        },
        {
          path: 'box',
          name: 'Box',
          component: Box
        },
        {
          path: 'dress',
          name: 'Dress',
          component: Dress
        },
        {
          path: 'ele',
          name: 'Ele',
          component: Ele
        },
        {
          path: 'food',
          name: 'Food',
          component: Food
        },
        {
          path: 'general',
          name: 'General',
          component: General
        },
        {
          path: 'man',
          name: 'Man',
          component: Man
        },
        {
          path: 'mbaby',
          name: 'Mbaby',
          component: Mbaby
        },
        {
          path: 'shirt',
          name: 'Shirt',
          component: Shirt
        },
        {
          path: '/home',
          redirect: '/home/hot'
        }
      ]
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
