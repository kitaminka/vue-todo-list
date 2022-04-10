import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});