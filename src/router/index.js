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
    component: () => import(/* webpackChunkName: "CadastroTurmas"*/"../views/CadastroTurmas.vue")
  },
  {
    name: "Turmas",
    path: "/turmas",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Turmas"*/"../views/Turmas.vue")
  },
  {
    name: "Pessoas",
    path: "/pessoas",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Pessoas"*/"../views/AlunosEProfessores.vue")
  },
  {
    name: "Sobre",
    path: "/sobre",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "Sobre"*/"../views/SobreNos.vue")
  },
  { path: '*', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
