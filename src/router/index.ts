import { createRouter, createWebHistory } from 'vue-router'
import MojeObjednavky from '../pages/moje-objednavky.vue'
import Faktury from '../pages/faktury.vue'
import NastaveniUctu from '../pages/nastaveni-uctu.vue'

const routes = [
  {
    path: '/',
    name: 'Moje objednávky',
    component: MojeObjednavky
  },
  {
    path: '/moje-objednavky',
    name: 'Moje objednávky',
    component: MojeObjednavky
  },
  {
    path: '/faktury',
    name: 'Faktury',
    component: Faktury
  },
  {
    path: '/nastaveni-uctu',
    name: 'Nastavení účtu',
    component: NastaveniUctu
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router