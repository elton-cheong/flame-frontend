import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue'),
      children:[
        {path: ''}
      ]
    },
    {
      path: '/user',
      name: 'User',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    },
    {
      path: '/campaign',
      name: 'Campaign',
      // lazy-loaded
      component: () => import('./views/Campaign.vue')
    },
    {
      path: '/createcampaign',
      name: 'CreateCampagin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/CreateCampaign.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
  ]
});