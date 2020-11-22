import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/shouye',
        name: 'Shou',
        component: () => import('@/views/shouye.vue'),
    },
    {
        path: '/qiye',
        name: 'Qiye',
        component: () => import('@/views/qiye.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
