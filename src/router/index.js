import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/pages/master/DashboardPage.vue';
import HomePage from '@/pages/master/HomePage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import ContactPage from '@/pages/master/ContactPage.vue';
import RegisterPage from '@/pages/auth/RegisterPage.vue';
import ForgotPass from '@/pages/auth/ForgotPass.vue';

const routes = [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard,
  },
  {
    name: 'home',
    path: '/home',
    component: HomePage,
  },
  {
    name: 'profile',
    path: '/profile',
    component: ProfilePage,
  },
  {
    name: 'contact',
    path: '/contact',
    component: ContactPage,
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterPage,
  },
  {
    name: 'forget',
    path: '/forget',
    component: ForgotPass,
  },
];

const router = Router();
export default router;

function Router() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  return router;
}
