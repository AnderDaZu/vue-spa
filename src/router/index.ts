import isAuthenticatedGuard from "@/modules/auth/guards/is-authenticated.guard";
import NotFound404 from "@/modules/common/pages/NotFound404.vue";
import HomePage from "@/modules/landing/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
    history: createWebHistory( import.meta.env.BASE_URL ),
    routes: [
        // Landing
        {
            path: "/",
            name: "landing",
            component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
            children: [
                {
                    path: "/",
                    name: "home",
                    component: HomePage,
                },
                {
                    path: '/features',
                    name: 'features',
                    component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
                },
                {
                    path: '/pricing',
                    name: 'pricing',
                    component: () => import('@/modules/landing/pages/PricingPage.vue'),
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/modules/landing/pages/ContactPage.vue'),
                },
                // Pokemon
                {
                    path: '/pokemons/:id',
                    name: 'pokemons',
                    beforeEnter: [
                        isAuthenticatedGuard
                        // (to, from, next) => {
                        //     console.log({ to, from, next });
                        //     return next();
                        // }
                    ],
                    // props: true,
                    props: ( route ) => {
                        const id = +route.params.id; // convertir a numero
                        // const id = Number( route.params.id );
                        return isNaN(id) ? { id: 1 } : { id };
                    },
                    component: () => import('@/modules/pokemons/pages/PokemonPage.vue'),
                },
            ]
        },

        // Auth
        {
            path: '/auth',
            redirect: { name: 'login' },
            component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('@/modules/auth/pages/LoginPage.vue'),
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => import('@/modules/auth/pages/RegisterPage.vue'),
                },
                {
                    path: 'forgot-password',
                    name: 'forgot-password',
                    component: () => import('@/modules/auth/pages/ForgotPage.vue'),
                }
            ]
        },
        
        // 404 - Not found
        {
            path: '/:pathMatch(.*)*',
            // redirect: { name: 'home' },
            name: 'not-found',
            component: NotFound404,
        },
    ],
});

export default router;