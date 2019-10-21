import Vue from 'vue'
import Router from 'vue-router'
// 首页
import index from '@/components/index/index'
import snapppa from '@/components/index/snapppa'
import momd from '@/components/index/momd'
import house from '@/components/index/house'
import global from '@/components/index/global'
import food from '@/components/index/food'
import beauty from '@/components/index/beauty'

//分类
import home from '@/components/classify/home'
import momdf from '@/components/classify/momd'
import foodd from '@/components/classify/foodd'
import jiaju from '@/components/classify/jiaju'
import quanqiu from '@/components/classify/quanqiu'
import mei from '@/components/classify/mei'

//购物车
import shopping from '@/components/shopping/shopping'

//我
import me from '@/components/me/me'

//详情
import details from '@/components/details/details'
import details_top from '@/components/details/details_top'
import details_inf from '@/components/details/details_inf'
import details_xin from '@/components/details/details_xin'


// 注册
import login from '@/components/login';

// 登录
import register from '@/components/register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/snapppa',
          component: snapppa
        },
        {
          path: '/momd',
          component: momd
        },
        {
          path: '/',
          redirect: '/snapppa'
        },
        {
          path: '/house',
          component: house
        },
        {
          path: '/global',
          component: global
        },
        {
          path: '/food',
          component: food
        },
        {
          path: '/beauty',
          redirect: beauty
        },
      ]
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path: 'momdf',
          component:momdf
        },
        {
          path: 'mei',
          component:mei
        },
        {
          path: 'jiaju',
          component:jiaju
        },
        {
          path: 'foodd',
          component:foodd
        },
        {
          path: 'quanqiu',
          component:quanqiu
        },
        {
          path: '/home',
          redirect: '/home/momdf'
        },
      ]
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/me',
      component: me
    },
    {
      path:'/details',
      component:details,
      children:[
        {
          path: '/details_top',
          component: details_top
        },
        {
          path:'/details_inf',
          component:details_inf
        },
        {
          path:'/details_xin',
          component:details_xin
        }
      ]
    },
    {
      path:'/login',
      component:login
    },
    {
      path:'/register',
      component:register
    }
  ]
});
