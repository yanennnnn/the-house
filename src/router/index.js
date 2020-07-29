import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Index.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
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
      component: () => import('@/views/SingleRoom.vue'),
    },
    {
      path: '/reservation/:id',
      name: 'reservation',
      component: () => import('@/views/Reservation.vue'),
    },
  ],
});
