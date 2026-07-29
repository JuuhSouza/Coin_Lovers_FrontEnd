import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import CarteiraView from '../views/CarteiraView.vue'
import ComprarView from '../views/ComprarView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/dashboard',
        component: DashboardView
    },
    {
        path: '/carteira',
        component: CarteiraView
    },
    {
        path: '/comprar',
        component: ComprarView
    }
]

const router = createRouter({
    history: createWebHistory('/Coin_Lovers_FrontEnd/'),
    routes
})

export default router