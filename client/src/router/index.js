import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import ArticlePage from '@/components/ArticlePage'
import Articles from '@/admin/Articles'
import Dashboard from '@/components/Dashboard'
import CreateArticle from '@/admin/CreateArticle'
import EditArticle from '@/admin/EditArticle'
import ContactUsPage from '@/components/ContactUsPage'
import ContactUs from '@/admin/ContactUs'
import AboutUs from '@/components/AboutUs'
import Lessons from '@/components/Lessons'
import ChessPage from '@/components/ChessPage'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/articles/:articleId/edit',
      name: 'article-edit',
      component: EditArticle
    },
    {
      path: '/contactus',
      name: 'contactuspage',
      component: ContactUsPage
    },
    {
      path: '/admin/contactus',
      name: 'contactus',
      component: ContactUs
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: AboutUs
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: Lessons
    },
    {
      path: '/chesspage',
      name: 'chesspage',
      component: ChessPage
    }
  ]
})
