import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Search from '../components/Search.vue';
import Record from '../components/Record.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: Home,
    component: Home,
    children:[
      {
        path: '/',
        name: 'Search',
        component: Search,
      },
      {
        path: 'search',
        name: 'Search',
        component: Search,
      },
      {
        path: 'record',
        name: 'Record',
        component: Record
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
