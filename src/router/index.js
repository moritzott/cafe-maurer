import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import ImprintView from '../views/ImprintView'
import CarteView from '../views/CarteView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ueber',
    name: 'about',
    component: AboutView
  },
  {
    path: '/impressum',
    name: 'imprint',
    component: ImprintView
  },
  {
    path: '/karte',
    name: 'carte',
    component: CarteView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
