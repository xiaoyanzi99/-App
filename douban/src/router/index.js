import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/home-page/home-page'
import Movie from '@/components/movie/movie'
import Book from '@/components/book/book'
import Broadcast from '@/components/broadcast/broadcast'
import Group from '@/components/group/group'
import userMovie from '@/components/user-movie/user-movie'
import search from '@/components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: HomePage
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/userMovie/:id',
      component: userMovie
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
