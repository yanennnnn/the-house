import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/singleRoom/:id',
    name: 'singleroom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SingleRoom.vue'),
  },
  {
    path: '/reservation/:id',
    name: 'reservation',
    component: () => import('../views/Reservation.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
