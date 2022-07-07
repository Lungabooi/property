import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Properties',
    name: 'Properties',
    component: () => import(/* webpackChunkName: "Properties" */ '../views/Properties.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')
  },
  {
    path: '/PropertyDetails/:id',
    name: 'PropertyDetails',
    component: () => import(/* webpackChunkName: "Property Details" */ '../views/PropertyDetails.vue'),
    props: true 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
