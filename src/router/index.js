import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharView from '../views/CharView.vue'
import FilmDetail from '../views/FilmDetail.vue'
import FilmDetail1 from '../views/FilmDetail4.vue'
import FilmDetail2 from '../views/FilmDetail5.vue'
import FilmDetail3 from '../views/FilmDetail6.vue'
import FilmDetail4 from '../views/FilmDetail1.vue'
import FilmDetail5 from '../views/FilmDetail2.vue'
import FilmDetail6 from '../views/FilmDetail3.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/characters',
    name: 'CharView',
    component: CharView
  },
  // SWAPI ID dan Episode ID tidak sinkron
  {
    path: '/films/:id', 
    name: 'FilmDetail',
    component: FilmDetail
  },
  // alternatif = hit satu-satu (still unwork) why?
  {
    path: '/films/4',
    name: 'FilmDetail1',
    component: FilmDetail1
  },
  {
    path: '/films/2',
    name: 'filmDetail5',
    component: FilmDetail5
  },
  {
    path: '/films/3',
    name: 'filmDetail6',
    component: FilmDetail6
  },
  {
    path: '/films/1',
    name: 'filmDetail4',
    component: FilmDetail4
  },
  {
    path: '/films/5',
    name: 'filmDetail2',
    component: FilmDetail2
  },
  {
    path: '/films/6',
    name: 'filmDetail3',
    component: FilmDetail3
  },
]

const router = new VueRouter({
  routes
})

export default router
