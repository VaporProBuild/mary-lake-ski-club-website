import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomePage from '../views/HomePage.vue'

// const resources: string[] = [
//   'get_all_database_records',
// ]

//TODO: Load component here.. i think?

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/CheckList',
    component: () => import('../components/CheckList.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
