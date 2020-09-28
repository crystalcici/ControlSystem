import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/homeRight',
          name: '模块选择',
          component: () => import('@/components/homePages/homeRight')
        },
        {
          path: '/accessControl',
          name: '门禁管理',
          component: () => import('@/components/accessControl/index'),
          children: [
            {
              path: '/accessControl/doorStatus',
              name: '门状态及控制管理',
              component: () => import('@/components/accessControl/doorStatus')
            },
            {
              path: '/accessControl/doorRecord',
              name: '门禁开关记录',
              component: () => import('@/components/accessControl/doorRecord')
            },
            {
              path: '/accessControl/attendRecord',
              name: '考勤记录',
              component: () => import('@/components/accessControl/attendRecord')
            }
          ]
        }
      ]
    }
  ]
})
