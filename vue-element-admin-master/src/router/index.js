import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
import tableRouter from './modules/table'

export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: 'documentation',
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'documentation',
        meta: { title: 'documentation', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/menu/index'),
        name: 'menu',
        meta: { title: 'menu', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/function',
    component: Layout,
    redirect: '/function/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/function/index'),
        name: 'function',
        meta: { title: 'function', icon: 'dashboard', noCache: true }
      }
    ]
  },
  {
    path: '/table-data',
    component: Layout,
    redirect: '/table-data/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/table-data/index'),
        name: 'tableData',
        meta: { title: 'tableData', icon: 'documentation', noCache: true }
      }
    ]
  },
  {
    path: '/table-field',
    component: Layout,
    redirect: '/table-field/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/table-field/index'),
        name: 'tableField',
        meta: { title: 'tableField', icon: 'documentation', noCache: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  tableRouter,
  { path: '*', redirect: '/404', hidden: true }
]
