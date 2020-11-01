import { createRouter, createWebHistory } from 'vue-router'
import mainpage from '../components/unitComponents/body/controls/MainPageBody'
import direction from '../components/unitComponents/body/controls/Direction'
import research from '../components/unitComponents/body/controls/Research'

// TODO Продумать название

const routes = [
  {
    path: '/',
    name: 'Main',
    component: mainpage
  },
  {
    path: '/direction',
    name: 'Direction',
    component: direction
  },
  {
    path: '/research',
    name: 'Research',
    component: research
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
