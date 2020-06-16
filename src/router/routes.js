import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/about-media/:media_type/:media_id',
    name: 'AboutMedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMedia.vue'),
  },
]
