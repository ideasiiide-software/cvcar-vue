import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from "@/firebase"

/* Landing */
import Landing from '@/views/landing/Landing.vue'
import Terms from '@/views/landing/Terms.vue'
import Privacy from '@/views/landing/Privacy.vue'
import Login from '@/views/landing/Login.vue'
import Register from '@/views/landing/Register.vue'
import PublicPartnerList from '@/views/landing/partner/PartnerList.vue'

/* Admin */
import Home from '@/views/admin/Home.vue'
import AdminList from '@/views/admin/admin/AdminList.vue'
import UserList from '@/views/admin/user/UserList.vue'
import PartnerList from '@/views/admin/partner/PartnerList.vue'
import PartnerRegister from '@/views/admin/partner/PartnerRegister.vue'
import PartnerEdit from '@/views/admin/partner/PartnerEdit.vue'
import AdList from '@/views/admin/ad/AdList.vue'
import AdRegister from '@/views/admin/ad/AdRegister.vue'
import VehicleList from '@/views/admin/vehicle/VehicleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/public/partners',
    name: 'PublicPartnerList',
    component: PublicPartnerList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/politica-de-privacidad',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admins',
    name: 'AdminList',
    component: AdminList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partners',
    name: 'PartnerList',
    component: PartnerList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partners/register',
    name: 'PartnerRegister',
    component: PartnerRegister,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/partners/edit/:id',
    name: 'PartnerEdit',
    component: PartnerEdit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ads',
    name: 'AdList',
    component: AdList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ads/register',
    name: 'AdRegister',
    component: AdRegister,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/vehicles',
    name: 'VehicleList',
    component: VehicleList,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('login')
  } if (!requiresAuth && await firebase.getCurrentUser() && to.path == '/login') {
    next('home')
  } else {
    next()
  }
})

export default router
