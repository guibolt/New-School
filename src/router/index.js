import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '*', redirect: '/'
  },{
    path: "/cadastro",
    name: "cadastro",
    component: () => import(/* webpackChunkName: "cadastro"*/ '../views/Cadastro.vue')
  },
  {
    name: "DashBoard",
    path: "/home",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "DashBoard"*/ "../views/DashBoard.vue")
  },
  {
    name: "CadastroPessoas",
    path: "/cadastropessoas",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "CadastroPessoas"*/"../views/CadastroPessoas.vue")
  },
  {
    name: "CadastroTurmas",
    path: "/cadastroturmas",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "CadastroPessoas"*/"../views/CadastroTurmas.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
