import Home from '../views/Home.vue'
import People from '../views/People.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/people',
    name: 'People',
    component: People,
  },

  {
    path: '/people/:person_id',
    name: 'AboutPerson',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPerson.vue'),
  },

  {
    path: '/about-media/:media_type/:media_id',
    name: 'AboutMedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutMedia.vue'),
  },

  {
    path: '/about-media/people',
    name: 'PeopleFromMedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/PeopleFromMedia.vue'),
  },

  {
    path: '/searchResult/:search_value',
    name: 'SearchResult',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResult.vue'),
  },
]
