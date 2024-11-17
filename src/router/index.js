import HomeView from '@/views/HomeView.vue';
import PaymentChoisen from '@/views/PaymentChoisen.vue';
import { createRouter, 
// createWebHashHistory,
createWebHistory, } from 'vue-router';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/payment/:plan',
            component: PaymentChoisen
        }
    ],
});
export default router;
//# sourceMappingURL=index.js.map