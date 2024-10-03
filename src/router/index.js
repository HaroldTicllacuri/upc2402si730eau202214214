import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home.component.vue';
import CheckIn from '../components/registration/check-in.component.vue';
import PageNotFound from '../components/shared/page-not-found.component.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/registration/event-check-ins/new', component: CheckIn },
    { path: '/:pathMatch(.*)*', component: PageNotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
