
const routes = [
  {
    path: '/',
    component: () => import('layouts/home/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: '/newrelease', component: () => import('pages/home/newrelease.vue') },
      { path: '/top100', component: () => import('pages/home/top100.vue') },
      { path: '/topic', component: () => import('pages/home/topic.vue') },
      { path: '/zingchart', component: () => import('pages/home/zingchart.vue') },
    ]
  },
  {
    path: '/admin',
    component:() => import('layouts/admin/MainLayout.vue'),
    children:[
      {path:'',component:() => import('pages/admin/Index.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/error400',
    component: () => import('pages/config/Error404.vue')
  },
  {
    path: '/error401',
    component: () => import('pages/config/Error401.vue')
  },
  {
    path: '/error403',
    component: () => import('pages/config/Error403.vue')
  },
  {
    path: '/error404',
    component: () => import('pages/config/Error404.vue')
  },
  {
    path: '/error500',
    component: () => import('pages/config/Error500.vue')
  },
  {
    path: '/error501',
    component: () => import('pages/config/Error501.vue')
  },
]

export default routes
