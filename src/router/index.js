import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/'

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

router.beforeEach((to, from, next) => {

  /*Configura as rotas que nao precisam de autorizacao*/
  const publicPages = ['/', '/cadastro'];
  //Verifica se a rota que o usuario quer precisa ou não de autorizacao
  const authRequired = !publicPages.includes(to.path);

  //Verificar se usuario esta logado no sistema
  const isLogado = localStorage.getItem('token')

  store.state.login.loginSuccessful = isLogado == null ? false : true
  if (store.state.login.loginSuccessful)
    store.commit('login/loginSucesso', isLogado)


  //Verifica se o usuario esta logado ou nao
  if (!store.state.login.loginSuccessful)
    if (authRequired && !store.state.login.loginSuccessful)
      return next({ path: '/' });

  next()
  
})


export default router
