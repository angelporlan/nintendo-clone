import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('./views/PrincipalPage.vue'),
        children: [
          { path: '', name: 'landing-page', component: () => import('./components/LandingPage.vue'), meta: { title: 'Home' } },
        ]
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
