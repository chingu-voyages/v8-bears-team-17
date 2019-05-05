import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('./views/Resume.vue'),
    },
    {
      path: '/designa',
      name: 'Basic',
      component: () => import('./themes/Basic.vue'),
      props: true,
    },
    {
      path: '/designb',
      name: 'DesignB',
      component: () => import('./themes/DesignB.vue'),
      props: true,
    },
    {
      path: '/designc',
      name: 'DesignC',
      component: () => import('./themes/DesignC.vue'),
      props: true,
    },
  ],
});
