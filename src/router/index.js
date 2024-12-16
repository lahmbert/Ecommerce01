import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/pages/master/DashboardPage.vue';
import HomePage from '@/pages/HomePage.vue';
import ProfilePage from '@/pages/ProfilePage.vue';

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
