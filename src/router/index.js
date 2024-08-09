import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashBoardView.vue';
import { useAuthStore } from '../store/authStore';

// Definición de rutas
const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView,
        meta: { requiresAuth: true } // Indica que esta ruta requiere autenticación
    }
];

// Creación del enrutador
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Middleware de navegación para verificar la autenticación
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore(); // Obtiene la tienda de autenticación

    // Verifica si la ruta requiere autenticación
    if (to.meta.requiresAuth) {
        // Verifica si el usuario está autenticado
        if (!authStore.accessToken) {
            // Si no está autenticado, redirige al inicio de sesión
            next({ name: 'Login' });
        } else {
            // Si está autenticado, permite el acceso a la ruta
            next();
        }
    } else {
        // Si la ruta no requiere autenticación, permite el acceso
        next();
    }
});

export default router;
