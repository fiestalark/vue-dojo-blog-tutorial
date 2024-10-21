import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import Home3 from '../views/Home3.vue'
import Home4 from '../views/Home4.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home3',
    name: 'home3',
    component: Home3
  }, 
  {
    path: '/home4',
    name: 'home4',
    component: Home4
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
