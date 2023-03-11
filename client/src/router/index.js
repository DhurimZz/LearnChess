import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ArticlePage from '@/components/ArticlePage'
import Articles from '@/admin/Articles'
import Dashboard from '@/components/Dashboard'
import CreateArticle from '@/admin/CreateArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/articlePage',
      name: 'articlePage',
      component: ArticlePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/admin/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/article/create',
      name: 'article-create',
      component: CreateArticle
    }
  ]
})
